import React from 'react'
import CarouselBootstrap from './CarouselBootstrap'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'

function Home() {
  return (
    <div className='home'>
        <Nav/>
        <CarouselBootstrap/>
        <div className="mid">
        <div className="gridContainer">
          <div className="gridItem">
          <h3>Corporate Banking</h3>
          <p>Unlocking business opportunities and delivering superior returns.Learn more</p>
          <Link to='/corporate'>View</Link>
          </div>

          <div className="gridItem">
            <h3>Personal Banking</h3>
            <p>Nigerians should trust their bank</p>
            <Link to='/personal'>View</Link>
          </div>
          
          <div className="gridItem">
            <h3>SME Bnaking</h3>
            <p>Providing capacity and resources for Africa’s most ambitious brands.</p>
            <Link to='/sme'>View</Link>
          </div>
          <div className="gridItem">
            <h3>Digital Banking</h3>
            <p>We believe in the transformative power of technology</p>
          </div>
          <div className="gridItem">
            <h3>Quick Loans</h3>
            <p>Access up to 75% of your net monthly salary before payday to sort short-term needs</p>
          </div>
        </div>

        <div className="banner">
          <h1>Purchase your PTA and BTA in Dollars, Pounds or Euros at any Titan Trust Bank Branch Nationwide</h1>
          <button>Learn more</button>
        </div> 
        </div>
        <div className="secondFlex">
          <div className="left">
            <h1>
            Transact business your <br /> own way, with our ORANGE <br /> Cards.
            </h1>
            <span>
            Convenient. Secure. Flexible.
            </span>
            <p>
            ORANGE cards are specially designed to give you a premium multi-channel banking experience everywhere you go.
            </p>
            <Link to='/personal'><button>View more</button></Link>
          </div>

          <div className="right">
            <img src="/o1.png" alt="" />
          </div>
        </div>

        <div className="thirdFlex">
          <div className="left">
            <h1>
            A conversation with <span>Sheriff Olukoya Ibun</span>, CEO/Managing Director of Orange Bank.
            </h1>
            <span>
            Convenient. Secure. Flexible.
            </span>
            <p>
            VISIT OUR VIDEO LIBRARY FOR MORE VIDEO CONTENTS
            </p>
            <Link to='/personal'><button>View</button></Link>
          </div>

          <div className="right">
            <img src="/m1.jpg" alt="" />
          </div>
        </div> 

        <div className="fouthFlex">
          <div className="left">
            
          </div>

          <div className="right">
            
          </div>
          
        </div>

        <div className="banner2">
        <p>ORANGE STORIES</p>
        </div> 
        <Footer/> 
    </div>
  )
}

export default Home