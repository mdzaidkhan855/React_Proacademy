import './Demo.css';
import { useReducer } from 'react';

// function reducer(currState, action){
//     switch(action){
//         case 'increment':
//             return {count: currState.count + 1};
//         case 'decrement':
//             return {count: currState.count - 1};
//         default:
//             return currState;
//     }
// }

/*
  1. currState is assigned the state value
   2. action is assigned with the value we pass into dispatcher function 
*/
function reducer(currState, action){
    switch(action){
        case 'increment':
            return {count: currState.count + 1}
        case 'decrement':
            return {count: currState.count - 1}
        default:
            return currState
    }
}

function Demo(){
    //let[state, dispatcher] = useReducer(reducer, {count: 0});

    /* 1. dispatcher is state updating function
       2. {count:0} is assigned to state
    */
    let[state, dispatcher] =  useReducer(reducer, {count:0})

    /*
      whenever dispatcher function is called, it internally calls reducer function
      and passes argument as an action argument of reducer
    */
    function decrementHandler(){
        dispatcher('decrement')
    }

    function incrementHandler(){
       dispatcher('increment')
    }

    return <div className="container">
        <button onClick={decrementHandler}> - </button>
        <span>{state.count}</span>
        <button onClick={incrementHandler}> + </button>
  </div>
}

export default Demo;