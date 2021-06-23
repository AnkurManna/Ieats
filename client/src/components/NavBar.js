import React, { useState } from 'react';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,
NavbarText,
Input,
Button
} from 'reactstrap';
import styles from '../myStyles2.module.css';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar color="light" light expand="md">
            <div className={styles.brandName}>
        <NavbarBrand href="/">Ieats</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <div className={styles.searchBox}>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" /> <Button>Search</Button>
            </div>
            <Nav className="mr-auto d-flex flex-row-reverse" navbar>
                <NavItem  className="mx-2">
                    <NavLink  href="/components/">Log in</NavLink>
                </NavItem>
                <NavItem className="mx-2">
                    <NavLink href="https://github.com/reactstrap/reactstrap">Sign up</NavLink>
                </NavItem>
            
            </Nav>
        </Collapse>
        </Navbar>
    </div>
    );
}

export default NavBar;
