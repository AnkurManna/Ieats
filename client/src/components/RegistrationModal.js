
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form,Col,FormGroup,Input,Label,Row } from 'reactstrap';
import axios from 'axios';

import styles from '../myStyles2.module.css';
import AlertBox from './AlertBox';
require('dotenv').config();
const RegistrationModal = ({registrationModal,setRegistrationModal}) => {
    
    const [user,setuser] = useState({name:'',mail:'',password:'',gender:''});
    const [error,setError] = useState({message:''});
    const [alertVisible, setAlertVisible] = useState(false);
    const apiUrl = 'http://localhost:5000/adduser' ;
    const onAdd = (val) =>{
    
    axios.post(apiUrl,val)
    .then((response)=>console.log(response))
    .catch(err=>
        {
            if(error.message==='')
            setError({...error,message:err.response.data.message});
            setAlertVisible(true);
            return ;
        })
    }

    const checkPattern = (user) => {
        console.log("in checkPattern")
        for(let key in user)
        {
            console.log(user[key],key);
            if(user[key]==='')
            {
                let errString = 'Please Provide ' + key ;
                setError({...error,message:errString});
                setAlertVisible(true);
                return ;
            }
        }
        const mailRegex = '^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$';
        let flag = true;
        var mailPatt = new RegExp(mailRegex);
        flag = flag & mailPatt.test(user.mail);
        if(!flag)
        {
            setError({...error,message:'Provide correct mail'});
            setAlertVisible(true);
            return ;
        }
        const nameReg ='^[^\s]+( [^\s]+)+$';
        const namePatt = new RegExp(nameReg);
        flag = flag & namePatt.test(user.name)
        if(!flag)
        {
            
            setError({...error,message:'Provide First Name and Last Name '});
            setAlertVisible(true);
            return ;
        }
        return flag;
    }
    
    const submit = (event) =>{
        event.preventDefault();
        console.log(user);
        console.log(apiUrl);
        setAlertVisible(false);
        setError({...error,message:''});
        checkPattern(user);
        
        console.log('Adding User')
        onAdd(user);
        if(error.message!=='')
        {
            return ;
        }
        setError({...error,message:''})
        setuser({...user,name:'',mail:'',password:'',gender:''});
    }
    
    

    const toggle = () => setRegistrationModal(!registrationModal);

    return (
    <div>
        
        <Modal isOpen={registrationModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sign up</ModalHeader>
        <ModalBody>
        <AlertBox message={error.message}  alertVisible={alertVisible} setAlertVisible={setAlertVisible}/>

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
            <Input type='text' placeholder='email' value={user.mail}  onChange={(e)=>setuser({...user,mail:e.target.value})}/>
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
            <Input type='text' placeholder='gender' value={user.gender}  onChange={(e)=>setuser({...user,gender:e.target.value})}/>
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

export default RegistrationModal;