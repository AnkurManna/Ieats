import axios from 'axios';
import Cookies from 'universal-cookie';
import {useState,useEffect} from 'react';
import Card from './Card.js';
import Searcheditem from './Searcheditem';
function LandingPage ({ck,setck,admin,setAdmin})
{
    const instance = axios.create({
        withCredentials: true
    })
    const apiUrl = process.env.React_App_apiUrl;
    const logoutUrl = apiUrl + 'lgout';
    
    const logout =  (e=>{
        e.preventDefault();
    axios.get(logoutUrl, {
        
        withCredentials: true 
    })
    .then(function (response) {
        console.log(response);
        const cookies = new Cookies();
        //setck(cookies.get("loggedIn"));
        cookies.remove('token',{path:'/'});
        setAdmin(false);
        window.location.reload();
        
    })
    .catch(function (error) {
        console.log(error);
    });
        })
    
    const [credential,setCredential] = useState('');
    const [data,setdata] = useState('');
    
    const DISCOUNTED = 'discounts';
    const getToken = () => {
        const cookies = new Cookies();
        return cookies.get("token");
    }
    useEffect(() => {

        
        var config = {
            headers: {"Authorization": getToken()}
        };
        const allDishUrl = apiUrl + 'dish/findallDishes';
        axios.get(allDishUrl, config,[data])
    .then(function (response) {
        console.log(response.data);
        setdata(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
        
    }, []);
    const [searched,setsearched] = useState([]);
    const [curtype,setcurtype] = useState([]);
    const [showsearched,setshowsearched] = useState(false) ;
    
    const GetSearched = (pref) =>{
        setcurtype(pref);
        let apiUri = apiUrl + 'item/';
        if(pref!==DISCOUNTED)
        apiUri = apiUri + 'searchitem/';

        apiUri = apiUri + pref;
        axios.get(apiUri, {
        withCredentials: true 
    },[data])
    .then(function (response) {
        console.log(response.data.data);
        setsearched(response.data);
        setshowsearched(true);

    })
    .catch(function (error) {
        console.log(error);
    })
    }

    const search = () =>{

        var x = document.getElementById('searchtype').value;
        GetSearched(x);
    }

    return (
        <>
        <h1>Here is landing page for user</h1>
        
        <span><button onClick={logout}> Logout</button></span>
        <label>
            Choose a browser from this list:
            <input type='text' list='data' placeholder='search' id='searchtype'/>

            <datalist id="item">
            <option value="Shirt" />
            <option value="T-Shirt" />
            <option value="Jeans" />
            <option value="Blazer" />
            <option value="aa" />
            </datalist>

            <button onClick={search}>search</button>
        </label>   
        <button onClick={()=>GetSearched(DISCOUNTED)}>Discounts</button>
        {showsearched&& 
            
            <Searcheditem ck={ck} data={searched} type={curtype}/>
        }
        {data.length>0&&data.map((item)=><Card ck={ck} val={item} people='User'/>)}
        </>

    );
}

export default LandingPage;