import axios from 'axios';
import Cookies from 'universal-cookie';
import {useState,useEffect} from 'react';
import Card from './Card';
function LandingPage ({ck,setck})
{
    const logout =  (e=>{
        e.preventDefault();
    axios.get('https://localhost:8443/lgout', {
        
        withCredentials: true 
    })
    .then(function (response) {
        console.log(response);
        const cookies = new Cookies();
        //setck(cookies.get("loggedIn"));
        setAdmin(false);
        
    })
    .catch(function (error) {
        console.log(error);
    });
})
    const [admin,setAdmin]=useState(false);
    const [credential,setCredential] = useState('');
    const [data,setdata] = useState('');

    useEffect(() => {
        axios.get('https://localhost:8443/item/findallItems', {
        
        withCredentials: true 
    },[data])
    .then(function (response) {
        console.log(response.data);
        setdata(response.data);
        
        
    })
    .catch(function (error) {
        console.log(error);
    })
        
    }, []);
    const search =(e=>{

        e.preventDefault();
        let searchtype = document.getElementById("browsers").value;
        console.log(searchtype);
    }) ;
    return (
        <>
        <h1>Here is landing page for Ankur</h1>
        
        <span><button onClick={logout}> Logout</button></span>

        <label>
    search anything from this list:
    <input list="browsers" name="myBrowser" />  
</label>   
    <datalist id="browsers">
        <option value="Chrome" />
        <option value="Firefox" />
        <option value="Internet Explorer" />
        <option value="Opera" />
        <option value="Safari" />
        <option value="Microsoft Edge" />   
    </datalist>
<button onClick={search}>search</button>

        

        {data.length>0&&data.map((item)=><Card val={item} people='Admin'/>)}

        </>
    );
}

export default LandingPage;