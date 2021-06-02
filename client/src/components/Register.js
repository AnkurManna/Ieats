import {useState} from 'react';

const axios = require('axios');
const Register = ({flag,func}) => {

    const [name, setname] = useState('');
    const [mail, setmail] = useState('');
    const [password, setpassword] = useState('');
    const [gender, setgender] = useState('');
    
    const apiUrl = 'https://localhost:8443/adduser';
    const onAdd = (val) =>{
    
    axios.post(apiUrl,val)
    .then((response)=>console.log(response))
    .catch(e=>{console.log(e)})
    
    }
    
    const submit = (e) =>{
        e.preventDefault();
        let val = {name:name,mail:mail,password:password,gender:gender};
        onAdd(val);
        setname('');
        setmail('');
        setpassword('');
        setgender('');
        
    }
    const toggle =()=>{
        func(!flag);
    }
    return (
        <>
    <form className='add-form'>
        <div className='form-control'>
            <label>name</label>
            <input type='text' placeholder='name'  value={name} onChange={(e)=>setname(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>mail</label>
            <input type='text' placeholder='mail' value={mail}  onChange={(e)=>setmail(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>password</label>
            <input type='text' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>gender</label>
            <input type='text' placeholder='gender' value={gender} onChange={(e)=>setgender(e.target.value)}/>
        </div>

        

        <button text='submit' onClick={submit}>Add</button>
    </form>

        <div>
            
            <span>Login Now</span><span><button onClick={toggle}>Login</button></span>
        </div>
        </>
    )
}

export default Register;