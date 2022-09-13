import {Navbar, Container, Nav} from 'react-bootstrap'
import React from 'react'

const Navigationbar = () => {
    return(
        <>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Nav>
                        <Nav.Link><b>QTemu</b></Nav.Link>
                        <Nav.Link>Create Meetup</Nav.Link>
                        <Nav.Link>Explore</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigationbar