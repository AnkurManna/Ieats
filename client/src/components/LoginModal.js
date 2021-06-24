
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,Col,FormGroup,Input,Label,Row } from 'reactstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
import styles from '../myStyles2.module.css';
require('dotenv').config();
const LoginModal = ({loginModal,setLoginModal}) => {
    
    const [credentials,setcredentials] = useState({username:'',password:''});
    const apiUrl = process.env.React_App_apiUrl;
    const authUrl = apiUrl + 'authenticate';
    const login =  (event =>{
        event.preventDefault();
        console.log(credentials);
    axios.post(authUrl, credentials)
    .then(function (response) {
        console.log(response.data.jwt);
        const cookies = new Cookies();
        cookies.set("token","Bearer "+response.data.jwt);
       // setck(cookies.get("loggedIn"));
       toggle();
        window.location.reload();
        
    })
    .catch(function (error) {
        console.log(error);
    });
    
    })
    

    const toggle = () => setLoginModal(!loginModal);

    return (
    <div>
        
        <Modal isOpen={loginModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Log in</ModalHeader>
        <ModalBody>
            <Form>
            <Row form>
            <Col >
            <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type='text' placeholder='mail' value={credentials.username}  onChange={(e)=>setcredentials({...credentials,username:e.target.value})}/>        </FormGroup>
            </Col>
        <Col >
            <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type='password' placeholder='password' value={credentials.password} onChange={(e)=>setcredentials({...credentials,password:e.target.value})}/>
            </FormGroup>
        </Col>
        </Row>
        </Form>
        </ModalBody>
        
            <Button color="primary"   className={styles.loginButton} onClick={login}>Log in</Button>
            
        
        </Modal>
    </div>
    );
}

export default LoginModal;