import React, { useEffect } from 'react'
import Nav from './Nav'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import '../Views/personal.scss'
import Footer from '../../Footer'
import Aos from 'aos'
import "aos/dist/aos.css"


function OurCards() {
  useEffect(()=>{
    Aos.init({duration : 3000})
  },[])
  return (
    <div className='personal'>
      <Nav/>
      <div className="firstSec">
        <div className="left" data-aos="fade-right">
          <h1>ORANGE Personal Banking Cards</h1>
          <p>With your cards you are a TITAN, anywhere and everywhere you go.</p>
        </div>
      </div>

      <div className="secondSection">
        <div className="top">
        <h1>ORANGE Cards</h1>
        <p>With your cards you are a GIANT, anywhere and everywhere you go.</p>
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

export default OurCards