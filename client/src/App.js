import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router ,Switch,Link,Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LandingPageAdmin from './components/LandingPageAdmin';
import Entry from './components/Entry';
import Cookies from 'universal-cookie';
import styles from './myStyles.module.css';
const axios = require('axios');


function App() {
  
  
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
    <div className="App">
    <div>
    <button onClick={toggleMenu}>Admin</button>
    </div>
      <Router >
          <div >
                <span>
                  {!isAdmin&&<Link to='/userLogin' exact >Users</Link>}
                </span>
                <span > 
                  {isAdmin&&<Link to='/adminlogin'  exact >Admin</Link>}
                </span>
          </div>

          <Switch>
            <div >
            
            {!isAdmin&&
            <Route exact path="/userlogin" >
                {token?<LandingPage ck={token} setck={setToken} admin={isAdmin} setAdmin={setIsAdmin} />:<Entry ck={token} setck={setToken} admin={isAdmin} setAdmin={setIsAdmin} peo="user"/>}
            </Route>}

            {isAdmin&&
            <Route exact path="/adminlogin">
        {token?<LandingPageAdmin ck={token} setck={setToken} admin={isAdmin} setAdmin={setIsAdmin}/>:<Entry ck={token} setck={setToken} admin={isAdmin} setAdmin={setIsAdmin} peo="admin"/>}
            </Route>}
            
            </div>
          
          </Switch>
          
        </Router>
      
    </div>
  );
}

export default App;
