import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
    return (
        <Navbar color="dark" dark expand="lg">
            <NavbarBrand href="/">Star DB</NavbarBrand>
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
        </Navbar>
    );
}

export default Header;
