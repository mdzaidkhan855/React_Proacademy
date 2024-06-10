import logo from './logo.svg';
import './App.css';
import Component1 from './Components/Component1';
import React from 'react'
import RefsDemo from './Components/RefsDemo';
function App() {

  // Fragment is used to avoid unnecessery rendering of wrapper html element
  // The syntax is either <React.Fragment> OR empty <>
  return (
    // <React.Fragment>
    //   <h1> This is App component</h1>
    //   <Component1></Component1>
    // </React.Fragment>
    <>
       {/* Below Code for portal */}
      {/* <h1> This is App component</h1>
      <Component1></Component1> */}

      {/* Code for Refs demo */}
      <RefsDemo></RefsDemo>
    </>
  );
}

export default App;
