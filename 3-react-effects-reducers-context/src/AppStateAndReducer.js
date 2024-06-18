import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'

import LoginUsingState from './Components/Login/LoginUsingState';
import LoginUsingReducer from './Components/Login/LoginUsingReducer';
import Home from './Components/Home/Home';
import MainHeader from './Components/MainHeader/MainHeader';
import Demo from './Components/ReducerDemo/Demo';

function AppStateAndReducer() {
  let [isLoggedIn,updateIsLoggedIn] = useState(false);  

  // Empty dependency : useEffect called Only when page refreshed
  useEffect(()=>{
    console.log("Inside useEffect");
    let isLoggedInValue = localStorage.getItem('isLoggedIn');
    if(isLoggedInValue === '1'){
      updateIsLoggedIn(true)
    }
  },[])
  

  const loginHandler = (email,password)=>{
    localStorage.setItem('isLoggedIn', '1')
    updateIsLoggedIn(true)
  }
  const logoutHandler = ()=>{
    localStorage.removeItem('isLoggedIn')
    updateIsLoggedIn(false)
  }
  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {/* {!isLoggedIn && <LoginUsingState onLogin={loginHandler}/>} */}
        {!isLoggedIn && <LoginUsingReducer onLogin={loginHandler}/>}
        {isLoggedIn && <Home onLogout={logoutHandler}/>}
      </main>

      {/* <span> The below is an example for reducer</span>
      <Demo></Demo> */}
    </React.Fragment>
  );
}

export default AppStateAndReducer;
