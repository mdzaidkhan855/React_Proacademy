import React, { useState, useCallback, useEffect, useMemo } from "react";
import Button from "../UI/Button/Button";
import Span from "../UI/Span/Span";
import './Demo.css';

function Demo(){
    let[count, setCount] = useState(0);
    let [activate, setActivate] = useState(false);

    //0x12345 - 0x34567
    // function incrementHandler(){
    //     setCount(count + 1);
    // }

    
    // function decrementHandler(){        
    //         setCount(count - 1);
    // }

    let incrementHandler = useCallback(function(){
        console.log("activate value stored with callback:" + activate)
        if(activate){
            //setCount(count + 1);
            // this is better as it takes latest snapshot of count
            setCount(count => count + 1)
        }
            
    },[activate])

    let decrementHandler = useCallback(function (){
        if(activate){
            setCount(count - 1);
        }
            
    },[activate])

    /*
        Concept: There will be state schedule for both state update
        And since both are inside a single synchronous method, Only ONCE component
        will be reevaluated, NOT twice
    */
    function activateHandler(){
        setActivate(true);
        setCount(0)
    }

    let list = useMemo(() => {
        return [100, 200];
    }, []);

    console.log("DEMO EXECUTED");

    return <div>
        {/* 1. Using without callback :
                Button gets 2 props. One for children(-) which does not change,
                whereas another is function decrementHandler, which is Object in javascript
                the reference of which changes, so even if we apply React.memo on Button
                component, it rerenders and does comparison with Real DOM
            2. Using with callback:
                Both the props of Button remains connstant, since now using method as callback
                So React.demo on Button enables not to render, if props remains constant
                Because React stores the functions like decrementHandler in internal memory when
                used with callback
        */}
        <Button clickHandler={decrementHandler}>-</Button>  

        {/* As opposed to above, the props for Span remains constant, hence
            React.memo enables Span component NOT to re-evaluate.
        */}
        {/* <Span>{count}</Span> */}

        <Span>{list}</Span>

        <Button clickHandler={incrementHandler}>+</Button>
        <Button clickHandler={activateHandler}>Activate</Button>
        
    </div>
}

export default Demo;