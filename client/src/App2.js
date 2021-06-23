import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router ,Switch,Link,Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LandingPageAdmin from './components/LandingPageAdmin';
import NavBar from './components/NavBar';
import Entry from './components/Entry';
import Cookies from 'universal-cookie';
import styles from './myStyles.module.css';
const axios = require('axios');
require('dotenv').config();

function App2() {
  
  const [token,setToken]=useState('');
  const [isAdmin,setIsAdmin] = useState(false);
  
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
    
    <NavBar/>
    
  );
}

export default App2;
