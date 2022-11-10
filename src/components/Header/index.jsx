import React from 'react'
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button'

import {
   BuscarInputContainer,
   Container,
   Input,
   Menu,
   MenuRight,
   Row,
   Wrapper
} from './styles'


const Header = () => {
  return (
   <Wrapper>
      <Container>
         <Row>
            <a href='/'>
               <img src={logo} alt='Logo da DIO' />
            </a>
            <BuscarInputContainer>
               <Input placeholder='Buscar...' />
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
         </Row>
         <Row>
            <MenuRight href='#'>Home</MenuRight>
            <Button title="Entrar" onClick={() => window.location = '/login'} />
            <Button title="Cadastrar" />
         </Row>
      </Container>
   </Wrapper>
  )
}

export { Header }