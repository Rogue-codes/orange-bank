import { faHome } from '@fortawesome/free-solid-svg-icons'
import {  faInternetExplorer }  from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'

function Nav() {
  const [dropdown, setDropDown] = useState(false)
  const [showMenu, setShowMenu]= useState(false)

  const maskTransitions = useTransition(dropdown, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: dropdown,
    delay: 200,
    // config: config.molasses,
    // onRest: () => set(!show),
  })

  const maskedTransitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: showMenu,
    delay: 200,
    // config: config.molasses,
    // onRest: () => set(!show),
  })

  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: "translatey(-100%)"},
    enter: { opacity: 1, transform: "translatey(60%)" },
    leave: { opacity: 0, transform: "translatey(-100%)" },
    reverse: showMenu,
    delay: 200,
    // config: config.molasses,
    // onRest: () => set(!show),
  })

  return (
    <nav>
      <Link to='/' className="logo"><img src="/logo.png" alt="" /></Link>
      <div className="right">
      <Link to='/'><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Link>
      <Link to='/about'>ABOUT</Link>
      <Link to='/banking' onMouseOut={()=>{setDropDown(false)}} onMouseOver={()=>{setDropDown(true)}}>BANKING</Link>
      <Link to='/media'>MEDIA</Link>
      <Link to='/careers'>CAREERS</Link>
      <Link to='/whistle'>WHISTLE_BLOWER</Link>
      <Link to='/contact'>CONTACT</Link>
      <div className="rightLogo"><span><FontAwesomeIcon className='icon' icon={faInternetExplorer}></FontAwesomeIcon></span><p>Internet Banking</p></div>
      </div>

      <span className="iconAni">
              <FontAwesomeIcon icon={faBars}
              onClick= {() => setShowMenu(!showMenu)}/>
        </span>

      {
          maskTransitions((styles, item) => item && <animated.div style={styles} className='animate' onMouseOut={()=>{setDropDown(false)}} onMouseOver={()=>{setDropDown(true)}}>
            <ul>
              <a href="/personal"><li>Personal banking</li></a>
              <a href="/corporate"><li>Corporate banking</li></a>
              <a href="/sme"><li>SME banking</li></a>
            </ul> 
          </animated.div>)
      }

        {
          maskedTransitions((styles, item) => item && <animated.div style={styles} className='firstAimate' onClick = {()=> setShowMenu(false)}>

          </animated.div>)
        }

      {
        menuTransitions((styles, item) => item && <animated.div style={styles} className='Animated'>
                <Link to='/'><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/banking' onMouseOut={()=>{setDropDown(false)}} onMouseOver={()=>{setDropDown(true)}}>BANKING</Link>
                <Link to='/media'>MEDIA</Link>
                <Link to='/careers'>CAREERS</Link>
                <Link to='/whistle'>WHISTLE_BLOWER</Link>
                <Link to='/contact'>CONTACT</Link>
        </animated.div>)
      }
    </nav>
  )
}

export default Nav