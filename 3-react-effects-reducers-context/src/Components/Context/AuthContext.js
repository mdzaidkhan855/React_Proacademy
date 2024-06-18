
import React, {useState} from "react";

let AuthContext = React.createContext({isLoggedIn:false,onLogout:undefined})

// Below is custom react context provider
export function AuthContextProvider(props){

    let[isLoggedIn, setIsLoggedIn] = useState(false)
    function loginHandler(){
        setIsLoggedIn(true)
    }
    function logoutHandler(){
        setIsLoggedIn(false)
    }
    return <AuthContext.Provider>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext