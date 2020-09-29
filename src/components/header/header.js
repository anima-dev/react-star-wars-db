import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

const Header = () => {
    return (
        <Navbar color="dark" className="navbar" dark expand="md">
            <Container>
                <NavbarBrand href="/" className="text-warning">Star DB</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href='/'>People</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/'>Planets</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/'>Starships</NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
