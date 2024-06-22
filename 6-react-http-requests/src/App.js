import React, {useState, useEffect} from 'react';
import UserForm from './Components/UserForm';
import './App.css';
import UserDetails from './Components/UserDetails';
import Loader from './Components/Loader';
import axios from 'axios'

function App() {
  let[showForm, setShowForm] = useState(false);
  let [users, setUsers] = useState([])
  let [loading, setLoading] = useState(false)
  let [errorMessage, setErrorMessage] = useState(null);
  let[editMode, setEditMode] = useState(false)
  let[userToEdit, setUserToEdit] = useState(null)

  function addUserHandler(){
    setEditMode(false);
    setShowForm(true);
  }

  function closeForm(){
    setShowForm(false)
  }

  useEffect(()=>{
    fetchUsers();
  },[])

  function onCreateUser(user){
    /*
    fetch('https://react-procademy-253b2-default-rtdb.firebaseio.com/users.json',{
      method:'POST',
      body:JSON.stringify(user),
      // headers:{
      //   'Content-Type':'application/json'
      // }
    }).then((resp)=>{
      console.log(resp);
    })
    */
   if(!editMode){
    axios.post('https://react-procademy-253b2-default-rtdb.firebaseio.com/users.json',user)
    .then((resp)=>{
      console.log(resp);
      fetchUsers();
      closeForm();
    })
   }else{
    axios.put('https://react-procademy-253b2-default-rtdb.firebaseio.com/users/' +userToEdit.id+ '.json',user)
    .then((resp)=>{
      console.log(resp);
      fetchUsers();
      closeForm();
    })
    .catch((error)=>{
      setErrorMessage(error.message)
    })
   }
    
  }

  function fetchUsers(){
    // Below code when use fetch
    
    setLoading(true);
    setErrorMessage(null)
    // By default fetch sends GET request, so no need to mention method.
    fetch('https://react-procademy-253b2-default-rtdb.firebaseio.com/users.json')
    .then((respose)=>{
      if(!respose.ok){
        throw new Error("Something went wrong");
      }
      // response.json() also return promise, so chain another then method
      return respose.json()
    })
    .then((data)=>{
      let userData = []
      for(let key in data){
        // spread operator gives all the properties
        userData.push({...data[key],id:key})
      }
      console.log(data)
      setUsers(userData);
      setLoading(false)
    })
    .catch((error)=>{
      setErrorMessage(error.message)
      setLoading(false);
      
    })

    // Below code when use axis
    /*
    setLoading(true);
    setErrorMessage(null)
    axios.get('https://react-procademy-253b2-default-rtdb.firebaseio.com/users.json')
    .then((respose)=>{
      // response.json() also return promise, so chain another then method
      return respose.data
    })
    .then((data)=>{
      let userData = []
      for(let key in data){
        // spread operator gives all the properties
        userData.push({...data[key],id:key})
      }
      console.log(data)
      setUsers(userData);
      setLoading(false)
    })
    .catch((error)=>{
      setErrorMessage(error.message)
      setLoading(false);
      
    })
    */
    
  }
  function onEditUser(user){
    setEditMode(true);
    setUserToEdit(user);
    setShowForm(true)
    //console.log(user);
  }
  function deleteUser(user){
    let del = window.confirm("You want to delete it ?")
    if(del){
      axios.delete('https://react-procademy-253b2-default-rtdb.firebaseio.com/users/' +user.id+ '.json')
      .then((resp)=>{
        console.log(resp);
        fetchUsers();
        closeForm();
      })
      .catch((error)=>{
        setErrorMessage(error.message)
      })
    }
    
  }
  return (
    <div>
        <div className='page-header'>
          <button className='btn btn-success' onClick={addUserHandler}>Add User</button>
          <button className='btn btn-normal' onClick={fetchUsers}>Get Users</button>
        </div>
        {!loading && !errorMessage && 
              <UserDetails 
                  users={users} 
                  onEditUser={onEditUser}
                  onDeleteUser={deleteUser}
                ></UserDetails>
        }
        {errorMessage && <h3 style={{textAlign:'center'}}>The error is : {errorMessage}</h3>}
        {loading && <Loader>Loading .....</Loader>}
        {showForm && <UserForm closeForm={closeForm} onCreateUser={onCreateUser} editMode={editMode} user={userToEdit}></UserForm>}
    </div>
  );
}

export default App;
