import React, { useState, useEffect, useReducer, useContext, useRef} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../Context/AuthContext';
import Input from '../Input/input';



const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

    

  //let authctx = useContext(AuthContext)

  let emailRef = useRef();
  let pswdRef = useRef();


  useEffect(() => {
    let value = setTimeout(() => {
      console.log('validating form input...')
      setFormIsValid(
       enteredEmail.includes('@') && enteredPassword.trim().length > 6
        
      );
    }, 500);

    return () => {
      console.log('Cleanup function executed');
      clearTimeout(value);
    }
    
  }, [enteredEmail,enteredPassword]
);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
    
  };

  const submitHandler = (event) => {
    alert("Submitting form")
    event.preventDefault();
    props.onLogin(enteredEmail,enteredPassword)
    
    // if(formIsValid){
    //   authctx.onLogin(emailState.value, passwordState.value);
    // } else if(!emailState.isValid){
    //     emailRef.current.onfocus();
    // } else {
    //     pswdRef.current.onfocus();
    // }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${
            emailIsValid === false ? classes.invalid :''
            }`}
        >
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid :''
            }`}
        >
        <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div>
          <button type="submit" disabled={!formIsValid}>login</button>
        </div>
        {/* <Input 
          ref={emailRef}
          type="email" 
          id="email" 
          value={emailState.value} 
          isValid={emailState.isValid}
          onChangeHandler={emailChangeHandler} 
          onBlurHandler={validateEmailHandler}> E-mail
        </Input>
        <Input 
          ref={pswdRef}
          type="password" 
          id="pswd" 
          value={passwordState.value} 
          isValid={passwordState.isValid}
          onChangeHandler={passwordChangeHandler} 
          onBlurHandler={validatePasswordHandler}> Password
        </Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div> */}
      </form>
    </Card>
  );
};

export default Login;
