import React, {useRef,useState} from 'react';
import './UserForm.css';

function UserFormUisngRef(props){
    
    let fnameRef = useRef();
    let lnameRef = useRef();
    let emailRef = useRef();
    let pswdRef = useRef();
    let countryRef = useRef();
    let cityRef = useRef();
    let dateRef = useRef();
    let genderRef = useRef();

    function onCreateUser(event){
        event.preventDefault();
        alert(fnameRef.current.value)

        // This is NOT GOOD Approach as we are updating the DOM directly.
        // In fact we should leave it to React to update the DOM
        // AND HENCE USING REF IS NOT GOOD APPROACH. INSTEAD USE STAE APPROACH
        fnameRef.current.value = ''
        let user = {
            // firstName: fnameRef.current.value,
            // lastName: lnameRef.current.value,
            // email: emailRef.current.value,
            // password: pswdRef.current.value,
            // country: countryRef.current.value,
            // city: cityRef.current.value,
            // dob: dateRef.current.value,
            // gender: genderRef.current.value
        }
        //console.log(user);
        //props.onCreateUser(user)
    }

    return <>
    <div id="myModal" class="modal">
            <div class="modal-content">
                {/* <div class="close" onClick={props.closeForm}>&times;</div> */}
                <h3>Create new user</h3>
                <div class="user-form">
                    <form onSubmit={onCreateUser}>
                        <div>
                            <input type="text" placeholder="First name" ref={fnameRef} />
                            <input type="text" placeholder="Last name" ref={lnameRef} />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" ref={emailRef} />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" ref={pswdRef} />
                            <input type="password" placeholder="Confirm Password" />
                        </div>
                        <div>
                            <select name="country" ref={countryRef} >
                                <option value="India">India</option>
                                <option value="Germany">Germany</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                            </select>
                            <select name="city" ref={cityRef} >
                                <option value="Delhi">Delhi</option>
                                <option value="Berlin">Berlin</option>
                                <option value="New York">New York</option>
                                <option value="London">London</option>
                            </select>
                        </div>
                        <div>
                            <input type="date" placeholder="Date of Birth" ref={dateRef} />
                            <select name="gender" ref={genderRef} >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Unknown">Unknown</option>
                            </select>
                        </div>
                        <button className='add-user-button'>Create User</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default UserFormUisngRef;