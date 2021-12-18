import React from 'react'
import { Container, Nav, A, User } from './Header.style'


const Header = () => (
  <Nav>
    <Container>
      <A className="navbar-brand" src="#">Retro-spec-tive</A>

      <User>
        Login
      </User>
    </Container>
  </Nav>
)

export default Header
