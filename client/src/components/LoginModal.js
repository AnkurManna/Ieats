
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,Col,FormGroup,Input,Label,Row } from 'reactstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
import styles from '../myStyles2.module.css';
import AlertBox from './AlertBox';
require('dotenv').config();
const LoginModal = ({loginModal,setLoginModal,setUser}) => {
    
    const [credentials,setcredentials] = useState({username:'',password:''});
    const [error,setError] = useState({message:''});
    const [alertVisible, setAlertVisible] = useState(false);
    const apiUrl = process.env.React_App_apiUrl;
    const authUrl = 'http://localhost:5000/authenticate';
    const login =  (event =>{
        event.preventDefault();
        console.log(authUrl);
        console.log(credentials);
    axios.post(authUrl, credentials)
    .then(function (response) {
        console.log(response.data.jwt);
        console.log("inside then");
        const cookies = new Cookies();
        cookies.set("token","Bearer "+response.data.jwt);
        cookies.set("userid",response.data.user.userid)
        cookies.set("userName",response.data.user.name)
        setError({...error,message:''});
        setAlertVisible(false);
       // setck(cookies.get("loggedIn"));
       toggle();
    window.location.reload();
        
    })
    .catch(function (err) {
        console.log("in err");
        console.log(err.response.data.message);
        //console.log(response)
        setError({...error,message:err.response.data.message});
        setAlertVisible(true);
        
    });
    
    })
    

    const toggle = () => setLoginModal(!loginModal);

    return (

    <div>
        
        
        
        <Modal isOpen={loginModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Log in</ModalHeader>
        <ModalBody>
        <AlertBox message={error.message}  alertVisible={alertVisible} setAlertVisible={setAlertVisible}/>
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