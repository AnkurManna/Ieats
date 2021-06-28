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
import LogoutModal from './LogoutModal';
import RegistrationModal from './RegistrationModal';
import {BrowserRouter as Router ,Switch,Link,Route} from 'react-router-dom';
const NavBar = ({user,setUser}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loginModal,setLoginModal] = useState(false);
    const [logoutModal,setLogoutModal] = useState(false);
    const [registrationModal,setRegistrationModal] = useState(false);
    const [accVisibility,setAccVisibilty] = useState('');
    
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
                        <NavLink   onClick={()=>setLogoutModal(!logoutModal)}>Log out</NavLink>
                </NavItem>
                <LogoutModal logoutModal={logoutModal} setLogoutModal={setLogoutModal} setUser={setUser}/>
                    <NavItem  className="mx-2">
                        <NavLink   onClick={()=>setLoginModal(!loginModal)}>Log in</NavLink>
                    </NavItem>
                    <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} setUser={setUser}/>
                    <NavItem className="mx-2">
                        <NavLink onClick={()=>setRegistrationModal(!registrationModal)}>Sign up</NavLink>
                    </NavItem>
                    <RegistrationModal registrationModal={registrationModal} setRegistrationModal={setRegistrationModal}/>

                    <NavItem className="mx-2" style={{ visibility: accVisibility }}>
                        <NavLink onClick={()=>setRegistrationModal(!registrationModal)}>{user.name}</NavLink>
                    </NavItem>

                    

                    <Link to='/cart'  exact >Cart</Link>
                    <Link to='/orders'  exact >Order</Link>

                </Nav>
            </Collapse>
        </Navbar>

        

    </div>
    );
}

export default NavBar;

/**apiUrl1=http://ieats-env.eba-hgqdmeid.us-east-2.elasticbeanstalk.com/ */