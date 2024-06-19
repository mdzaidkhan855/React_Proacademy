
import React, {useState,useEffect} from "react";

let AuthContext = React.createContext({isLoggedIn:false,onLogout:undefined,onLogin:undefined})

// Below is custom react context provider
export function CustomAuthContextProvider(props){

    let[isLoggedIn, updateIsLoggedIn] = useState(false)

    useEffect(()=>{
        console.log("Inside useEffect");
        let isLoggedInValue = localStorage.getItem('isLoggedIn');
        if(isLoggedInValue === '1'){
            updateIsLoggedIn(true)
        }
      },[])

    function loginHandler(){
        localStorage.setItem('isLoggedIn', '1')
        updateIsLoggedIn(true)
    }
    function logoutHandler(){
        localStorage.removeItem('isLoggedIn')
        updateIsLoggedIn(false)
    }
    return <AuthContext.Provider value={{isLoggedIn:isLoggedIn, onLogout:logoutHandler, onLogin:loginHandler}}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext