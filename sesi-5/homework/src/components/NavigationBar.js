import {Navbar, Container, Nav} from 'react-bootstrap'
import React from 'react'

export default class Navb extends React.Component {
    
    constructor() {
            super()
            this.state = {
                active: 'active',
                
        }
    }
    
    Navigationbar = () => {
        return(
            <>
                <Navbar bg='dark' variant='dark'>
                    <Container>
                        <Nav>
                            <Navbar.Brand>QTemu</Navbar.Brand>
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

}
// export default Navigationbar