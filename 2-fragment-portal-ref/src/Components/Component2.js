import React from 'react'
import PortalComponent from './PortalComponent'
import Modal from './Modal'
import { useState } from 'react'


function Component2(){

    let [showModal,updateShowModal]  = useState(false)

    function displayModal(){
        updateShowModal(true)
    }
    function hideModal(){
        updateShowModal(false)
    }
    return(
        <React.Fragment>
            <h3>This is Component 2 </h3>
            <p>This is paragraph </p>
            <PortalComponent></PortalComponent>
            <button onClick={displayModal}>Show Modal</button>
            <Modal showModal={showModal} hideModal={hideModal}></Modal>
        </React.Fragment>
    )
}

export default Component2