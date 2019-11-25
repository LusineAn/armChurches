import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import M from '../../messages/messages';

class AppNavbar extends React.Component {

    render() {
        return (
            <Navbar sticky='top'>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Container>
                        <Nav className='mr-auto'>
                            <Nav.Link as={Link} to='/' >{M.nav.home}</Nav.Link>
                            <Nav.Link as={Link} to='/gallery/monasteries'>{M.nav.monasteries}</Nav.Link>
                            <Nav.Link as={Link} to='/gallery/history'>{M.nav.history}</Nav.Link>
                            <Nav.Link as={Link} to='/gallery/nature'>{M.nav.nature}</Nav.Link>
                            <Nav.Link as={Link} to='/gallery/favorites'>{M.nav.favorite}</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default AppNavbar;