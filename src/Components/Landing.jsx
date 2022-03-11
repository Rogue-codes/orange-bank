import React, { useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBuilding, faCreditCard, faShop, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faInternetExplorer, faLinkedinIn, faTwitter }  from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Popup from './Popup'
import Aos from 'aos'
import "aos/dist/aos.css"

function Landing() {
    useEffect(()=>{
        Aos.init({duration : 3000})
      },[])
  return (
      <>
        <Popup/>
        <main>
            <div className='top'>
                <Link to='/' className="logo"><img src="/logo.png" alt="" /></Link>
                <div className="right" data-aos="fade-right"><span><FontAwesomeIcon className='icon' icon={faInternetExplorer}></FontAwesomeIcon></span><p>Internet Banking</p></div>
            </div>

            <div className="center" data-aos="zoom-in">
                <h1>
                Trust The Future, <br /> Trust ORANGE ®
                </h1>

                <button>
                    <Link to='/home'>Step into the future</Link>
                </button>
            </div>

            <div className="bottom">
                <Link to='/personal' className="cards"><FontAwesomeIcon className='icon' icon={faUser}></FontAwesomeIcon><p>PERSONAL <br /> BANKING</p></Link>
                <Link to='/corporate' className="cards"><FontAwesomeIcon className='icon' icon={faBuilding}></FontAwesomeIcon><p>CORPORATE <br /> BANKING</p></Link>
                <Link to='/sme' className="cards"><FontAwesomeIcon className='icon' icon={faShop}></FontAwesomeIcon><p>SME <br /> BANKING</p></Link>
                <Link to='/ourcards' className="cards"><FontAwesomeIcon className='icon' icon={faCreditCard}></FontAwesomeIcon><p>OUR <br /> CARD</p></Link>
            </div>

        <div className="social">
                <span><FontAwesomeIcon className='icon' icon={faLinkedinIn}></FontAwesomeIcon></span>
                <span><FontAwesomeIcon className='icon' icon={faInstagram}></FontAwesomeIcon></span>
                <span><FontAwesomeIcon className='icon' icon={faTwitter}></FontAwesomeIcon></span>
                <span><FontAwesomeIcon className='icon' icon={faFacebook}></FontAwesomeIcon></span>
            </div>


        </main>
    </>
  )
}

export default Landing