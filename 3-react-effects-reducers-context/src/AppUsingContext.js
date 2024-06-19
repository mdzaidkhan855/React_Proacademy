import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect,useContext} from 'react'

import LoginUsingState from './Components/Login/LoginUsingState';
import LoginUsingReducer from './Components/Login/LoginUsingReducer';
import LoginUsingContext from './Components/Login/LoginUsingContext';
import Home from './Components/Home/Home';
import MainHeaderUsingContext from './Components/MainHeader/MainHeaderUsingContext';
import Demo from './Components/ReducerDemo/Demo';
import AuthContext from './Components/Context/AuthContext';

function AppUsingContext() {

  /*
   All the below code of login is moved to AuthContext Provider which uses Custom Provider
  */  
//   let [isLoggedIn,updateIsLoggedIn] = useState(false);  

//   // Empty dependency : useEffect called Only when page refreshed
//   useEffect(()=>{
//     console.log("Inside useEffect");
//     let isLoggedInValue = localStorage.getItem('isLoggedIn');
//     if(isLoggedInValue === '1'){
//       updateIsLoggedIn(true)
//     }
//   },[])
  

//   const loginHandler = (email,password)=>{
//     localStorage.setItem('isLoggedIn', '1')
//     updateIsLoggedIn(true)
//   }
//   const logoutHandler = ()=>{
//     localStorage.removeItem('isLoggedIn')
//     updateIsLoggedIn(false)
//   }

let ctx = useContext(AuthContext);
  return (
    <React.Fragment>
        
        {/* <AuthContext.Provider value={{isLoggedIn:isLoggedIn, onLogout:logoutHandler}}>
            <MainHeaderUsingContext   />
            <main>
                {!isLoggedIn && <LoginUsingContext onLogin={loginHandler}/>}
                {isLoggedIn && <Home onLogout={logoutHandler}/>}
                
            </main>
        </AuthContext.Provider> */}
        
            
        <MainHeaderUsingContext   />
        <main>
            {!ctx.isLoggedIn && <LoginUsingContext />}
            {ctx.isLoggedIn && <Home />}
        </main>
        
      

      {/* <span> The below is an example for reducer</span>
      <Demo></Demo> */}
    </React.Fragment>
  );
}

export default AppUsingContext;
