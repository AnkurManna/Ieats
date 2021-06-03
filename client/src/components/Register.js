import {useState} from 'react';

const axios = require('axios');
const Register = ({flag,func}) => {

    const [user,setuser] = useState({name:'',mail:'',password:'',gender:''});
    const [name, setname] = useState('');
    const [mail, setmail] = useState('');
    const [password, setpassword] = useState('');
    const [gender, setgender] = useState('');
    
    const apiUrl = 'http://localhost:8081/adduser';
    const onAdd = (val) =>{
    
    axios.post(apiUrl,val)
    .then((response)=>console.log(response))
    .catch(e=>{console.log(e)})
    
    }
    
    const submit = (e) =>{
        e.preventDefault();
        //let val = {name:name,mail:mail,password:password,gender:gender};
        console.log(user);
        onAdd(user);
        /*setname('');
        setmail('');
        setpassword('');
        setgender('');*/
        setuser({...user,name:'',mail:'',password:'',gender:''});
        
    }
    const toggle =()=>{
        func(!flag);
    }
    return (
        <>
    <form className='add-form'>
        <div className='form-control'>
            <label>name</label>
            <input type='text' placeholder='name'  value={user.name} onChange={(e)=>setuser({...user,name:e.target.value})}/>
        </div>

        <div className='form-control'>
            <label>mail</label>
            <input type='text' placeholder='mail' value={user.mail}  onChange={(e)=>setuser({...user,mail:e.target.value})} />
        </div>

        <div className='form-control'>
            <label>password</label>
            <input type='text' placeholder='password' value={user.password} onChange={(e)=>setuser({...user,password:e.target.value})}/>
        </div>

        <div className='form-control'>
            <label>gender</label>
            <input type='text' placeholder='gender' value={user.gender} onChange={(e)=>setuser({...user,gender:e.target.value})}/>
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