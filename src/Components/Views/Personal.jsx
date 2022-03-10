import React, { useEffect } from 'react'
import Nav from './Nav'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDatabase, faFile } from '@fortawesome/free-solid-svg-icons'
import '../Views/personal.scss'
import Footer from '../../Footer'
import Aos from 'aos'
import "aos/dist/aos.css"
function Personal() {
  useEffect(()=>{
    Aos.init({duration : 3000})
  },[])
  return (
    <div className='personal'>
      <Nav/>
      <div className="firstSection">
        <div className="left" data-aos="fade-right">
          <h1>Personal Banking</h1>
          <p>We are your reliable partners. We create tailored products and services that fit your evolving lifestyle.</p>
        </div>
      </div>

      <div className="secondSection">
        <div className="top">
        <h1>ORANGE Accounts</h1>
        <p>We have different options to help you take control of <br /> your financial life.</p>
        </div>

        <div className="bottom">
          <div className="cards">
          <div className="circle">
            <FontAwesomeIcon className='ico' icon={faDatabase}></FontAwesomeIcon>
          </div>
          <h1>Current Account</h1>
          <p>Banking the way you want it - flexible and convenient with lots of benefits.</p>
            
          </div>

          <div className="cards">
          <div className="circle">
            <FontAwesomeIcon className='ico' icon={faFile}></FontAwesomeIcon>
          </div>
            
          <h1>Savings Account</h1>
          <p>Your dreams are valid! Let’s help <br /> you save towards them.</p>
          </div>
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

      <div className="secondSection">
        <div className="top">
        <h1>ORANGE Loans</h1>
        <p>When you need that extra cash, ORANGE is a partner you can trust.</p>
        </div>

        <div className="bottom">
          <div className="cards">
          <div className="circle">
            <FontAwesomeIcon className='ico' icon={faDatabase}></FontAwesomeIcon>
          </div>
          <h1>ORANGE Salary Advance</h1>
          <p>Access up to 75% of your net monthly salary before payday to sort short-term needs.</p>
            
          </div>

          <div className="cards">
          <div className="circle">
            <FontAwesomeIcon className='ico' icon={faFile}></FontAwesomeIcon>
          </div>
            
          <h1>ORANGE Personal Loan</h1>
          <p>We care about you enough to have you in mind before or after payday.</p>
          </div>

          <div className="cards">
          <div className="circle">
            <FontAwesomeIcon className='ico' icon={faFile}></FontAwesomeIcon>
          </div>
            
          <h1>ORANGE Fee Advance</h1>
          <p>A loan facility to provide parent/guardians with short term financing to cover tuition.</p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Personal