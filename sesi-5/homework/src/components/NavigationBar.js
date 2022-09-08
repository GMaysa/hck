import {Navbar, Container, Nav} from 'react-bootstrap'

const Navigationbar = () => {
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

export default Navigationbar