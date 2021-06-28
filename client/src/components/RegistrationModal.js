
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,Col,FormGroup,Input,Label,Row } from 'reactstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
import styles from '../myStyles2.module.css';
require('dotenv').config();
const LoginModal = ({registrationModal,setRegistrationModal}) => {
    
    const [user,setuser] = useState({name:'',mail:'',password:'',gender:''});
    const apiUrl = process.env.React_App_apiUrl + 'adduser';
    const onAdd = (val) =>{
    
    axios.post(apiUrl,val)
    .then((response)=>console.log(response))
    .catch(error=>{console.log(error)})
    }
    
    const submit = (event) =>{
        event.preventDefault();
        console.log(user);
        console.log(apiUrl);
        onAdd(user);
        setuser({...user,name:'',mail:'',password:'',gender:''});
    }
    
    

    const toggle = () => setRegistrationModal(!registrationModal);

    return (
    <div>
        
        <Modal isOpen={registrationModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sign up</ModalHeader>
        <ModalBody>
            <Form>
            <Row form>
            <Col >
            <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input type='text' placeholder='mail'  value={user.name} onChange={(e)=>setuser({...user,name:e.target.value})} />        </FormGroup>
            </Col>
     
        <Col >
            <FormGroup>
            <Label for="examplePassword">Email</Label>
            <Input type='password' placeholder='email' value={user.mail}  onChange={(e)=>setuser({...user,mail:e.target.value})}/>
            </FormGroup>
        </Col>

        <Col >
            <FormGroup>
            <Label for="examplePassword">password</Label>
            <Input type='password' placeholder='password' value={user.password}  onChange={(e)=>setuser({...user,password:e.target.value})}/>
            </FormGroup>
        </Col>

        <Col >
            <FormGroup>
            <Label for="examplePassword">Gender</Label>
            <Input type='password' placeholder='gender' value={user.gender}  onChange={(e)=>setuser({...user,gender:e.target.value})}/>
            </FormGroup>
        </Col>

        </Row>
        </Form>
        </ModalBody>

        
        
            <Button color="primary"   className={styles.loginButton} onClick={submit}>Sign up</Button>
            
        
        </Modal>
    </div>
    );
}

export default LoginModal;