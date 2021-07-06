import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router ,Switch,Link,Route} from 'react-router-dom';
import Cart from './components/Cart';
import Orders from './components/Orders';
import NavBar from './components/NavBar';
import Entry from './components/Entry';
import Cookies from 'universal-cookie';
import styles from './myStyles.module.css';
import DishData from './components/DishData';
import ToasterComp from './components/utils/toasterComp';
const axios = require('axios');
require('dotenv').config();

function App2() {
  
  const [token,setToken]=useState('');
  const [isAdmin,setIsAdmin] = useState(false);
  const [user,setUser] = useState('');
  useEffect(()=>{
    const cookies = new Cookies();
    console.log("again");
    setToken(cookies.get("token"));
    setIsAdmin(cookies.get("isAdmin"));
  },[token]);

  const toggleMenu=()=>{
    const cookies = new Cookies();
    
    if(!isAdmin)
    cookies.set('isAdmin', true, { path: '/' });
    else
    cookies.remove('isAdmin',{path:'/'});
    window.location.reload();
  }


  
  return (
    <>
    <Router>
    <NavBar user={user} setUser={setUser}/>
    
    <Switch>
            <div >
                    
            <Route exact path="/cart" >{user&&<Cart/>} </Route>
                
            <Route exact path="/orders" >{user&& <Orders/>}</Route>

            <Route exact path="/" ><DishData/></Route>
            </div>
          
          </Switch>
    </Router>
    
  

    
    </>
    
  );
}

export default App2;
