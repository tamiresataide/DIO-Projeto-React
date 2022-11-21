import { MdEmail, MdLock } from "react-icons/md";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Header } from '../../components/Header'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input'
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { useNavigate } from "react-router-dom";
import { api } from '../../services/api'  
import { IFormData } from "./types";

const schema = yup.object({
   email: yup.string().email('Email não é válido').required('* Campo obrigatório'),
   password: yup.string().min(3, 'Mínimo de três caracteres').required('* Campo obrigatório'),
 }).required();


const Login = () => {

   const navigate = useNavigate();

   const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
      resolver: yupResolver(schema),
      mode: 'onChange'
   });

   console.log(errors);

   const onSubmit = async (formData: IFormData) => {
      try{
         const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
         if(data.length === 1){
            navigate('/feed')
         }else{
            alert('Email ou senha inválido')
         }
      }catch{
         alert('Houve um erro, tente novamente.')
      }
   };


   return (
      <>
      <Header />
      <Container>
         <Column>
            <Title>
               A plataforma pra você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
         </Column>
         <Column>
            <Wrapper>
               <TitleLogin>Faça seu cadastro</TitleLogin>
               <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>

               <form onSubmit={handleSubmit(onSubmit)}>
                  <Input name='email' errorMessage={errors?.email?.message} control={control} placeholder='Email' leftIcon={<MdEmail />} />
                  <Input name='password' errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password' leftIcon={<MdLock />}/>
                  <Button title='Entrar' variant='secondary' type='submit' />

               </form>
               <Row>
                  <EsqueciText>Esqueci minha senha</EsqueciText>
                  <CriarText>Criar Conta</CriarText>
               </Row>
            </Wrapper>
         </Column>
      </Container>
      </>
   )
}

export { Login }