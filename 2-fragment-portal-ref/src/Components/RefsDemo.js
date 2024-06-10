import { useRef } from "react"

function RefsDemo(){
    let nameInputRef = useRef()
    function showNameEventHandler(){
        console.log(nameInputRef.current.value);
    }
    return <>
        <span>Name:</span>
        <input type="text" ref={nameInputRef}/>
        <button onClick={showNameEventHandler}>Show name</button>
    </>
}
export default RefsDemo