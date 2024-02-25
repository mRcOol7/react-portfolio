import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Container>
                <Navbar.Brand href="#home" className="Navbar.Brand">
                    <img
                        src="https://i.ibb.co/RjgY0Pn/IMG-7601.jpg"
                        width="60"
                        height="60"
                        className="d-inline-block align-top mr-3 rounded-circle"
                        alt="Profile"
                    />
                    <span style={{
  fontSize: '1.4rem',
  fontWeight: 'bold',
  color: 'white',
  marginLeft: '10px',
  display: 'block',
  textAlign: 'center',
  margin: '10px auto',

  /* Media Query for smaller screens */
  '@media (max-width: 768px)': {
    fontSize: '1.2rem', /* Decrease font size for smaller screens */
    marginLeft: '0', /* Remove left margin for smaller screens */
  }
}}>
  Nehal Chauhan
</span>


                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
