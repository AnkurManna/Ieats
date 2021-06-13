import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
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
    const login =  (event =>{
        event.preventDefault();
    axios.post('http://localhost:8081/authenticate', credentials)
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
        <div className='form-control'>
            <label>email</label>
            <input type='text' placeholder='mail' value={credentials.username}  onChange={(e)=>setcredentials({...credentials,username:e.target.value})}/>
        </div>
        <div className='form-control'>
            <label>password</label>
            <input type='text' placeholder='password' value={credentials.password} onChange={(e)=>setcredentials({...credentials,password:e.target.value})}/>
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