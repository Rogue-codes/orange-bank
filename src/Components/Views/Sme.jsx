import React from 'react'
import Nav from './Nav'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDatabase, faFile } from '@fortawesome/free-solid-svg-icons'
import '../Views/personal.scss'
import Footer from '../../Footer'
function Sme() {
  return (
    <div className='personal'>
      <Nav/>
      <div className="firstSect">
        <div className="left">
          <h1>SME Banking</h1>
          <p>We support businesses with the necessary resources to build the future.</p>
        </div>
      </div>

      <div className="secondSection">
        <div className="top">
        <h1>ORANGE Cards</h1>
        <p>With your cards you are a ORANGE, anywhere and everywhere you go.</p>
        </div>

        <div className="bottom">
          <div className="cards">
          <div className="circle">
            <FontAwesomeIcon className='ico' icon={faDatabase}></FontAwesomeIcon>
          </div>
          <h1>Current Account</h1>
          <p>Banking the way you want it - flexible and convenient with lots of benefits.</p>
            
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Sme