import React from "react";

function Span(props){
    console.log("SPAN EXECUTED")
    return <span>{props.children[0]}</span>
}

// We donot want Span to be reevaluated and compared with Real DOM, if the props being passed from
// Demo is not changing. So wrap inside memo before exporting
export default React.memo(Span);