import React from 'react'
import Nav from './Nav'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDatabase, faFile } from '@fortawesome/free-solid-svg-icons'
import '../Views/personal.scss'
import Footer from '../../Footer'
function Corporate() {
  return (
    <div className='personal'>
      <Nav/>
      <div className="firstSection">
        <div className="left">
          <h1>Corporate Banking</h1>
          <p>We understand and cater for the banking needs of multinationals & large local corporates within Nigeria with a keen eye to understand our clients’ businesses.</p>
        </div>
      </div>

      <div className="secondSection">

        <div className="bottom">
          <div className="cards">
          <div className="circle">
            <FontAwesomeIcon className='ico' icon={faDatabase}></FontAwesomeIcon>
          </div>
          <h1>Loans And Advances</h1>
          <p>Start your journey towards financial confidence. Take your business to the next level with our short – term and long – term financing opportunities.</p>
            
          </div>

          <div className="cards">
          <div className="circle">
            <FontAwesomeIcon className='ico' icon={faFile}></FontAwesomeIcon>
          </div>
            
          <h1>Trade And Treasury Solutions</h1>
          <p>With the most diverse array of products, we provide trade options tailored to help you take control of your financial life.</p>
          </div>

          <div className="cards" style={{background:'grey'}}>
            
          <h1>Manual Registration</h1>
          <p>Click here to download the Titan Current Account opening form. The form can be submitted at any Titan Trust Bank branch or emailed to us at: contactcentre@orangebank.com</p>
          </div>
        </div>
      </div>

      <div className="secondSection">

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

export default Corporate