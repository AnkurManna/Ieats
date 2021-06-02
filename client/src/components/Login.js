import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
function Login({flag,func,ck,setck,setAdmin})
{
    const [mail,setmail] = useState('');
    const [password,setpassword] = useState('');
    const login =  (e=>{
        e.preventDefault();
    axios.get('https://localhost:8443/login', {
        params:{
        mail:mail,
        password:password},
        withCredentials: true 
    })
    .then(function (response) {
        console.log(response);
        const cookies = new Cookies();
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
        <div className='form-control'>
            <label>mail</label>
            <input type='text' placeholder='mail' value={mail}  onChange={(e)=>setmail(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>password</label>
            <input type='text' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        </div>

        <button text='submit' onClick={login}>Add</button>

        <div>
            <h3>Dont have any account?</h3>
            <span>Register here</span><span><button onClick={toggle}>Register</button></span>
        </div>
        </>
    )
}
export default Login;