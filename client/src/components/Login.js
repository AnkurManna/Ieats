import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
require('dotenv').config()
function Login({flag,func,ck,setck,setAdmin})
{
    /*const [mail,setmail] = useState('');
    const [password,setpassword] = useState('');*/
    const [credentials,setcredentials] = useState({username:'',password:''});
    /*
    axios.post(apiUrl,val)
    .then((response)=>console.log(response))
    .catch(error=>{console.log(error)})
    }
    */
    const apiUrl = process.env.React_App_apiUrl;
    const authUrl = apiUrl + 'authenticate';
    const login =  (event =>{
        event.preventDefault();
    axios.post(authUrl, credentials)
    .then(function (response) {
        console.log(response.data.jwt);
        const cookies = new Cookies();
        cookies.set("token","Bearer "+response.data.jwt);
       // setck(cookies.get("loggedIn"));
        window.location.reload();
        
    })
    .catch(function (error) {
        console.log(error);
    });
    
    })

    const toggle = (()=>{
        func(!flag);
    })

    return (
        <>
        <Form>
        <Row form>
        <Col md={6}>
        <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type='text' placeholder='mail' value={credentials.username}  onChange={(e)=>setcredentials({...credentials,username:e.target.value})}/>        </FormGroup>
        </Col>
    <Col md={6}>
        <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type='password' placeholder='password' value={credentials.password} onChange={(e)=>setcredentials({...credentials,password:e.target.value})}/>
        </FormGroup>
    </Col>
    </Row>

        
        <Button text='submit' onClick={login} >Add</Button>
        <div>
            <h3>Dont have any account?</h3>
            <span>Register here</span><span><button onClick={toggle}>Register</button></span>
        </div>
        </Form>
        </>
    )
}
export default Login;