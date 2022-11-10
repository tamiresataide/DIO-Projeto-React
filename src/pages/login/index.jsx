import { MdEmail, MdLock } from "react-icons/md";


import { Header } from '../../components/Header'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input'
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

const Login = () => {
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

               <form>
                  <Input placeholder='Email' leftIcon={<MdEmail />}/>
                  <Input placeholder='Senha' type='password' leftIcon={<MdLock />}/>
                  <Button title='Entrar' variant='secondary' onClick={() => window.location = '../feed/index.jsx'} />
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