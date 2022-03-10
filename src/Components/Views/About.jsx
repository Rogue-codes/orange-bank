import React, { useEffect } from 'react'
import Nav from './Nav'
import '../Views/about.scss'
import Ityped from './Ityped'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDatabase, faFile } from '@fortawesome/free-solid-svg-icons'
import Directors from '../Directors'
import Footer from '../../Footer'
import Aos from 'aos'
import "aos/dist/aos.css"

function About() {
  useEffect(()=>{
    Aos.init({duration : 3000})
  },[])
  return (
    <div className='about'>
      <Nav/>
      <div className="firstSection">
        <div className="left" data-aos="fade-right">
          <h1>About ORANGE</h1>
          <p>Orange Bank was established on the 12th of December, 2018 and started operating fully as a commercial National Bank after obtaining its National Banking license on the 26th of April, 2019.​</p>
        </div>

        <div className="right" data-aos="fade-left">
          
        </div>
      </div>
      <div className="secondSection">
        <p>Orange Bank Limited was established on the 12th of December, 2018 and obtained its National Banking license on the 26th of April 2019, to operate as a commercial bank with national authorization.​</p>
        <p>Orange Bank’s license is the first National Banking license that the Central Bank of Nigeria has granted in the last ten years.​</p>
        <p>The Bank was formed to take advantage of the identified gaps in the banking sector and address the unmet needs of the retail mass market, SMEs and corporate institutions.</p>
        <p>Our team are best-in-class Bankers, supporting the execution of the Bank’s strategy while delivering on our service promise. Our branch network is structured to uniquely enhance quality service delivery with great customer experience.</p>
      </div>
      <div className="thirdSection">
        <div className="left" data-aos="fade-right">
          <h1>Our Vision</h1>
          <p>To be Africa’s most trusted financial institution</p>
        </div>

        <div className="right" data-aos="fade-left">
          <h1>Our Mission</h1>
          <p>To create and manage value through a combination of empathy, talent and superior technology by providing transparent and convenient solutions for stakeholders across all markets</p>
        </div>
      </div>
      <div className="fourthSection" data-aos="fade-up">
      <h1>We are Proudly african</h1>
          <button>Learn more</button>
      </div>
      <div className="fifthSection">
      <h1>Our Philosophy</h1>
        <div className="inner" data-aos="fade-left">
        <h2>We make them switch, we make them stay</h2>
        <p>How do we do this?</p>
        <ul>
          <li>We make them switch <strong>by providing simple, reliable and quick banking.</strong></li>
          <li>We make them stay by <strong>fulfilling our mission, delivering on our vision and keeping our word.</strong></li>
        </ul>
        </div>
      </div>
      <div className="ityped">
      <Ityped/>
      <div className="right" data-aos="fade-left">
        
      </div>
      </div>
      <div className="sixthSection">
        <div className="card" data-aos="fade-up">
          <div className="circle">
            <FontAwesomeIcon className='ico' icon={faFile}></FontAwesomeIcon>
          </div>
          <h1>Year Established</h1>
          <p>12th of December, 2018</p>
        </div>
        <div className="card" data-aos="fade-up">
            <div className="circle">
              <FontAwesomeIcon className='ico' icon={faDatabase}></FontAwesomeIcon>
            </div>
            <h1>National Banking License</h1>
            <p>26th of April 2019</p>
        </div>  
      </div>
      <Directors/>
      <Footer/>
    </div>
  )
}

export default About