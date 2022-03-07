import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter }  from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer>
        <div className="top">
        <div className="left">
            <p>*933#</p>
            <span>
                The Orange Code <br />
                a simple to get you orange <br /> account number and bkeep <br /> banking with us
            </span>
        </div>

        <div className="right">
            <h1>Mobile Banking</h1>
            <p>Are you an Android or iPhone user? <br /> We got you covered</p>
            <div className="store">
                <img src="play.svg" width={100} alt="" />
                <img src="app.svg" width={100} alt="" />
            </div>
        </div>
        </div>

        <div className="bottom">
            <div className="left">
                <Link className="logo" to='/'>
                    <img src="/logo.png" alt="" />
                </Link>

                <p>
                ORANGE is passionate about the future, committed to <br /> tomorrow, and laser-focused on building a world- <br /> class Bank
                </p>

                <div className="icon">
                    <span><FontAwesomeIcon className='ico'  icon={faFacebook}></FontAwesomeIcon></span>
                    
                    <span><FontAwesomeIcon className='ico' icon={faTwitter}></FontAwesomeIcon></span>
                    
                    <span><FontAwesomeIcon className='ico' icon={faInstagram}></FontAwesomeIcon></span>
                    
                    <span><FontAwesomeIcon className='ico' icon={faLinkedinIn}></FontAwesomeIcon></span>
                </div>
            
            </div>

            <div className="right">
                <ul>
                    <li>Personal Banking</li>
                    <li>ORANGE Savings Account</li>
                    <li>ORANGE Current Account</li>
                </ul>

                <ul>
                    <li>Orange Loan</li>
                    <li>ORANGE Salary Advance</li>
                    <li>ORANGE Personal Loan</li>
                    <li>ORANGE Fee Advance</li>
                </ul>

                <ul>
                    <li>Orange Cards</li>
                    <li>Naira Master Card</li>
                    <li>Naira Verve Card</li>
                    <li>Orange World Elite</li>
                    <li>MasterCard</li>
                    <li>Orange Platinum</li>
                    <li>MasterCard</li>
                </ul>

                <ul>
                    <li>Others</li>
                    <li>Careers</li>
                    <li>Whistle Blower</li>
                    <li>Contact Us</li>
                    <li>Survey Form</li>
                    <li>CBN Intervention</li>
                    <li>Scheme</li>
                    <li>Privacy and Cookies</li>
                    <li>Policy</li>
                </ul>
                
            </div>
        
        </div>
        
    </footer>
  )
}

export default Footer