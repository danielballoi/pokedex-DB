import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect/>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Pokèdex By DB</Navbar.Brand>
                </LinkContainer>
            </Container>
    </header>
  )
}

export default Header