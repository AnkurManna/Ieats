import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router ,Switch,Link,Route} from 'react-router-dom';
import LandingPage from './component/LandingPage';
import LandingPageAdmin from './component/LandingPageAdmin';
import Entry from './component/Entry';
import Cookies from 'universal-cookie';
import styles from './myStyles.module.css';
const axios = require('axios');
require('dotenv').config()


function App() {
  
  /*useEffect(()=>{
    axios.post('http://localhost:8080/addbook', {
      id:235,
      bookName:"harry potter",
      authorName:"JK Rowling"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  })*/
  //const history = createBrowserHistory();
  const [cook,setcook]=useState('');
  const [admin,setAdmin] = useState(false)
  
   useEffect(()=>{
    const cookies = new Cookies();
    console.log("again");
    setcook(cookies.get("loggedIn"));
    setAdmin(cookies.get("Admin"));

  },[cook]);
  const call=()=>{
    const cookies = new Cookies();
    
    if(!admin)
    cookies.set('Admin', true, { path: '/' });
    else
    cookies.remove('Admin',{path:'/'});
    window.location.reload();
    
  }

  const chk = (e =>{
    axios.get('http://localhost:8080/check',{ withCredentials: true }).then(res=>{console.log(res)}).catch(e=>{console.log(e)})
  })
  const chk2 = (e =>{
    axios.get('http://localhost:8080/session',{ withCredentials: true }).then(res=>{console.log(res)}).catch(e=>{console.log(e)})
  })
  
  return (
    <div className="App">
    <div>
    <button onClick={call}>Admin</button>
    </div>

    
      <Router >
          <div >

            <span>
        
                {!admin&&<Link to='/userLogin' exact >Users</Link>}
                </span>
              
                <span > 
                {admin&&<Link to='/adminlogin'  exact >Admin</Link>}
                </span>

          
          
          </div>

      
        <Switch>
        <div >
        
        {!admin&&<Route exact path="/userlogin" >
        {cook?<LandingPage ck={cook} setck={setcook} admin={admin} setAdmin={setAdmin} />:<Entry ck={cook} setck={setcook} admin={admin} setAdmin={setAdmin} peo="user"/>}
        </Route>}
        {admin&&
        <Route exact path="/adminlogin">
        {cook?<LandingPageAdmin ck={cook} setck={setcook} admin={admin} setAdmin={setAdmin}/>:<Entry ck={cook} setck={setcook} admin={admin} setAdmin={setAdmin} peo="admin"/>}
        </Route>}

        
        </div>
        
        </Switch>
        </Router>
      
    </div>
  );
}

export default App;

/**
 *  <Router>
          <div className={styles.mynav}>

            <span className={styles.navElement}>
           
                <NavLink to='/userLogin' exact >Users</NavLink>
                </span>
              
                <span className={styles.navElement}> 
                <NavLink to='/adminlogin'  exact >Admin</NavLink>
            </span>
          </div>

      
        <Switch>
        <div >
        
        <Route exact path="/userlogin" >
        <User/>
        </Route>
        <Route exact path="/adminlogin" component = {Admin}></Route>

        
        </div>
        
        </Switch>
        </Router>
 */