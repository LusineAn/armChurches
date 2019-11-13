import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

class AppNavbar extends React.Component {

    render() {
        return (
            <Navbar sticky="top">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Container>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/gallery/monasteries">Monasteries and Churches</Nav.Link>
                            <Nav.Link as={Link} to="/gallery/history">Historical Structures</Nav.Link>
                            <Nav.Link  as={Link} to="/gallery/nature">In Nature</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default AppNavbar;