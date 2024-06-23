
import {useRef,useEffect,useState} from 'react'

function Task(props){
    

    function onDeleteTask(event, task){
        props.onDeleteTask(task)
    }

    return <table>
        {props.tasks.map((task)=>{
            return <tr id={task.id}>
                <td>{task.value}</td>
                <td><button onClick={(event)=>onDeleteTask(event,task)}>Delete</button></td>
                
            </tr>
        })}
        
    </table>
}

export default Task