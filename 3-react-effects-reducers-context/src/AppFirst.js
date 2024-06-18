import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'

function AppFirst() {
  console.log("Component renderes");
  let [resourceType, setResourceType] = useState('Home')

  // Case:1 Inside useEffect executed first time as well as when resource type changes
  // useEffect(()=>{
  //   console.log("Inside Use Effect executed");
  // }, [resourceType])

  //Case:2 Inside useEffect executed ONLY first time 
  // useEffect(()=>{
  //   console.log("Inside Use Effect executed");
  // }, [])

  return (
    <div className="App">
      <button onClick={()=>setResourceType('Home')}>Home</button>
      <button onClick={()=>setResourceType('About')}>About</button>
      <button onClick={()=>setResourceType('Contact')}>Contact</button>
      <h3>{resourceType}</h3>
    </div>
  );
}

export default AppFirst;
