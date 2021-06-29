import React, { useState,useEffect } from 'react';
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
import Cookies from 'universal-cookie';
import {BrowserRouter as Router ,Switch,Link,Route} from 'react-router-dom';
const NavBar = ({user,setUser}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loginModal,setLoginModal] = useState(false);
    const [logoutModal,setLogoutModal] = useState(false);
    const [registrationModal,setRegistrationModal] = useState(false);
    const [accVisibility,setAccVisibilty] = useState('hidden');
    const [genVisibility,setGenVisibility] = useState('');
    
    useEffect(()=>{
        const ck = new Cookies();
        if(ck.get('userid')&&ck.get('token'))
        {
            setAccVisibilty('');
            setGenVisibility('collapse')
            setUser({userid:ck.get('userid'),userName:ck.get('userName')});
        }
        else
        {
            setAccVisibilty('collapse');
            setGenVisibility('')
        }
    },[]);

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
                    <Input className={styles.inpbox} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" /> 
                    <Button className={styles.inpbtn}>Search</Button>
                </div>
                <Nav className="mr-auto d-flex flex-row-reverse" navbar>
                <NavItem  className="mx-2" style={{ visibility: accVisibility }}>
                        <NavLink   onClick={()=>setLogoutModal(!logoutModal)}>Log out</NavLink>
                </NavItem>
                <LogoutModal logoutModal={logoutModal} setLogoutModal={setLogoutModal} setUser={setUser}/>
                    <NavItem  className="mx-2" style={{ visibility: genVisibility }}>
                        <NavLink   onClick={()=>setLoginModal(!loginModal)}>Log in</NavLink>
                    </NavItem>
                    <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} setUser={setUser}/>
                    <NavItem className="mx-2" style={{ visibility: genVisibility }}>
                        <NavLink onClick={()=>setRegistrationModal(!registrationModal)}>Sign up</NavLink>
                    </NavItem>
                    <RegistrationModal registrationModal={registrationModal} setRegistrationModal={setRegistrationModal}/>

                    <NavItem className="mx-2" style={{ visibility: accVisibility }}>
                        <NavLink onClick={()=>setRegistrationModal(!registrationModal)}>{user.userName}</NavLink>
                    </NavItem>

                    
                    <NavItem style={{ visibility: accVisibility }}>
                        <NavLink><Link to='/cart'  exact className={styles.orderCart}>Cart</Link></NavLink>
                    </NavItem>
                    <NavItem style={{ visibility: accVisibility }}>
                        <NavLink><Link to='/orders'  exact className={styles.orderCart}>Order</Link></NavLink>
                    </NavItem>
                    

                </Nav>
            </Collapse>
        </Navbar>

        

    </div>
    );
}

export default NavBar;

/**apiUrl1=http://ieats-env.eba-hgqdmeid.us-east-2.elasticbeanstalk.com/ */