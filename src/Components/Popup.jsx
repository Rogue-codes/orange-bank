import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Popup() {
    const [popUP, showPopUP] = useState(false)
    useEffect(()=>{
        setTimeout(()=>(
            showPopUP(true)
        ),3000)
    },[])
  return (
    <div className={popUP ? 'pop' : 'pop removePop'}  onClick={()=>{showPopUP(false)}}>
        <div className="popChild">
            <FontAwesomeIcon className='cancel' icon={faTimes} onClick={()=>{showPopUP(false)}}></FontAwesomeIcon>
            <p>Please Note that this site was built as a project to clone The website of Titan trust bank and most images and text are gotten from Titan Trust back.. <br />This project isn't in a way built to scam or defraud individuals Thanks..</p>
        
        </div>
    </div>
  )
}

export default Popup