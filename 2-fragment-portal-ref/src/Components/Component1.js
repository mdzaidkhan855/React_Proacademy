import Component2 from "./Component2"
import React from 'react'
function Component1(){

    return(
        <React.Fragment>
            <h2>This is Component 1 </h2>
            <Component2></Component2>
        </React.Fragment>
    )
}

export default Component1