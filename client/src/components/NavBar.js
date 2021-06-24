import React, { useState } from 'react';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
Input,
Button
} from 'reactstrap';
import styles from '../myStyles2.module.css';
import LoginModal from './LoginModal';
import RegistrationModal from './RegistrationModal';
const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loginModal,setLoginModal] = useState(false);
    const [registrationModal,setRegistrationModal] = useState(false);

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
                    <NavLink   onClick={()=>setLoginModal(!loginModal)}>Log in</NavLink>
                </NavItem>
                <LoginModal loginModal={loginModal} setLoginModal={setLoginModal}/>
                <NavItem className="mx-2">
                    <NavLink onClick={()=>setRegistrationModal(!registrationModal)}>Sign up</NavLink>
                </NavItem>
                <RegistrationModal registrationModal={registrationModal} setRegistrationModal={setRegistrationModal}/>
            </Nav>
        </Collapse>
        </Navbar>
    </div>
    );
}

export default NavBar;
