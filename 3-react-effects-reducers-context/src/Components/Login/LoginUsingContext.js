import React, { useState, useEffect, useReducer, useContext, useRef} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../Context/AuthContext';
import Input from '../Input/input';


function emailReducer(state, action){
  switch(action.type){
    case 'EMAIL_INPUT':
      return{value:action.val, isValid:undefined}
    case 'EMAIL_VALID':
      return {value: state.value, isValid: state.value.includes('@')}  
  }
}

function passwordReducer(state, action){
  switch(action.type){
    case 'PSWD_INPUT':
      return {value: action.val, isValid: undefined};
    case 'PSWD_VALID':
      return {value: state.value, isValid: state.value.trim().length > 6}
  }
}

const LoginUsingContext = (props) => {
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  let [emailState, emailDispatcher] = useReducer(emailReducer, {value:'', isValid:undefined})
  let[passwordState, pswdDispatcher] = useReducer(passwordReducer, {value: '', isValid: null})
  

  let authctx = useContext(AuthContext)

  let emailRef = useRef();
  let pswdRef = useRef();


  useEffect(() => {
    let value = setTimeout(() => {
      console.log('validating form input...')
      setFormIsValid(
        emailState.value.includes('@') && passwordState.value.trim().length > 6
        //enteredEmail.includes('@') && enteredPassword.trim().length > 6
        
      );
    }, 500);

    return () => {
      console.log('Cleanup function executed');
      clearTimeout(value);
    }
    
  }, [emailState.isValid,passwordState.isValid] 
);

  const emailChangeHandler = (event) => {
    emailDispatcher({val:event.target.value, type:'EMAIL_INPUT'})
  };

  const passwordChangeHandler = (event) => {
    pswdDispatcher({val: event.target.value, type: 'PSWD_INPUT'})
  };

  const validateEmailHandler = () => {
    emailDispatcher({val: emailState.value, type: 'EMAIL_VALID'})
  };

  const validatePasswordHandler = () => {
    pswdDispatcher({val: passwordState.value, type: 'PSWD_VALID'});
  };

  const submitHandler = (event) => {
    alert("Submitting form")
    event.preventDefault();
    props.onLogin(emailState.value,passwordState.value)
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
            emailState.isValid === false ? classes.invalid :''
            }`}
        >
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid :''
            }`}
        >
        <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            value={passwordState.value}
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

export default LoginUsingContext;
