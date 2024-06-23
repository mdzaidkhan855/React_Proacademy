import logo from './logo.svg';
import './App.css';
import Increment from './Components/Increment';
import Decrement from './Components/Decrement';
import {useRef,useEffect,useState} from 'react'
import Task from './Components/Task';
import useHttp from './Utilities/use-http';

function App() {

  let taskRef = useRef()
  let[errorMessage, setErrorMessage] = useState(null);
  let[alltasks, setAllTasks] = useState([])

  // Code for custom hook: starts  
  // The below useHttp to fetch all data:get request
  let [errorGet, sendGetRequest] = useHttp();
  // the below useHttp for Post request
  let [errorPost, sendPostRequest] = useHttp();
  // the below useHttp for Delete request
  let [errorDelete, sendDeleteRequest] = useHttp();
  

  function getAllTasks(data){
    data.then((tasks)=>{
      let taskList = [];
      for(let key in tasks){
        taskList.push({id:key, value:tasks[key]})
      }
      setAllTasks(taskList)
    })
    setErrorMessage(errorGet)
  }

  function createTask(data){
    data.then((res)=>{
      sendGetRequest(
        "https://react-procademy-253b2-default-rtdb.firebaseio.com/tasks.json",
        "GET",
        null,
        getAllTasks
      );
    })    
    
  }
  useEffect(()=>{
    //fetchTasks();
    sendGetRequest(
      "https://react-procademy-253b2-default-rtdb.firebaseio.com/tasks.json",
      "GET",
      null,
      getAllTasks
    );
  },[])
  // Code for custom hook: ends

  /*
  // Deleted fetchTasks as it is hanlded using custom hook
  function fetchTasks(){
    fetch('https://react-procademy-253b2-default-rtdb.firebaseio.com/tasks.json')
    .then((resp)=>{
      //console.log(resp);
      return resp.json()
    })
    .then((data)=>{
      let tasks = [];
      for(let key in data){
        tasks.push({id:key, value:data[key]})
      }
      console.log(tasks);
      setAllTasks(tasks)
    })
  }*/

  //function createTask(){
    // fetch('https://react-procademy-253b2-default-rtdb.firebaseio.com/tasks.json',{
    //   method:'POST',
    //   body:JSON.stringify(taskRef.current.value)      
    // }).then((response)=>{
    //   if(!response.ok){
    //     throw new Error("Something went wrong")
    //   }
    //   fetchTasks()
    // })
    // .catch((error)=>{
    //   setErrorMessage(error.message)
    // })
  //}

  function submitTask(event){
    event.preventDefault();
    alert(taskRef.current.value)
    //createTask()
    sendPostRequest(
      "https://react-procademy-253b2-default-rtdb.firebaseio.com/tasks.json",
      "POST",
      JSON.stringify(taskRef.current.value),
      createTask
    );
  }
  function deleteTask(data){
    data.then((res)=>{
      sendGetRequest(
        "https://react-procademy-253b2-default-rtdb.firebaseio.com/tasks.json",
        "GET",
        null,
        getAllTasks
      );
    })
    
  }
  function onDeleteTask(task){
    // fetch(
    //   "https://react-procademy-253b2-default-rtdb.firebaseio.com/tasks/" +
    //     task.id +
    //     ".json",
    //   {
    //     method: "DELETE",
    //   }
    // ).then((resp) => {
    //   //console.log(resp);
    //   //fetchTasks()
    // });

    sendDeleteRequest("https://react-procademy-253b2-default-rtdb.firebaseio.com/tasks/" +
    task.id +
    ".json", "DELETE", null, deleteTask)
  }
  return (
    <div className="App">
      {/* <Increment/>
      <Decrement/> */}
      <form onSubmit={submitTask}>
        <input  ref={taskRef}/>
        <button type="submit">Create</button>
      </form>
      <Task tasks={alltasks} onDeleteTask={onDeleteTask}></Task>
    </div>
  );
}

export default App;
