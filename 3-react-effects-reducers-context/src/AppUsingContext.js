import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'

import LoginUsingState from './Components/Login/LoginUsingState';
import LoginUsingReducer from './Components/Login/LoginUsingReducer';
import LoginUsingContext from './Components/Login/LoginUsingContext';
import Home from './Components/Home/Home';
import MainHeaderUsingContext from './Components/MainHeader/MainHeaderUsingContext';
import Demo from './Components/ReducerDemo/Demo';
import AuthContext from './Components/Context/AuthContext';

function AppUsingContext() {
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
        <AuthContext.Provider value={{isLoggedIn:isLoggedIn, onLogout:logoutHandler}}>
            {/* <MainHeaderUsingContext isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
            <MainHeaderUsingContext   />
            <main>
                {/* {!isLoggedIn && <LoginUsingState onLogin={loginHandler}/>} */}
                {/* {!isLoggedIn && <LoginUsingReducer onLogin={loginHandler}/>} */}
                {!isLoggedIn && <LoginUsingContext onLogin={loginHandler}/>}
                {isLoggedIn && <Home onLogout={logoutHandler}/>}
            </main>
        </AuthContext.Provider>
      

      {/* <span> The below is an example for reducer</span>
      <Demo></Demo> */}
    </React.Fragment>
  );
}

export default AppUsingContext;
