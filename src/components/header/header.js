import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Container } from 'reactstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <Navbar color="dark" className="navbar" dark expand="md">
            <Container>
                <NavbarBrand href="/" className="text-warning">Star DB</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to='/people/' className="nav-link">
                            People
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/planets/' className="nav-link">Planets</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/starships/' className="nav-link">Starships</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/login/' className="nav-link">Log In</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/secret/' className="nav-link">Secret Page</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
