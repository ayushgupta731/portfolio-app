import './index.scss'
import { useState } from 'react'
 import{ Link,  NavLink } from 'react-router-dom'
import AyushS from '../../assets/images/ayush.png'
import AyushSub from '../../assets/images/ayush_sub.png'

 import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 
import {
    faLinkedin,
    faGithub,
    faInstagram,
  } from '@fortawesome/free-brands-svg-icons'
  
import { faEnvelope,  faHome , faUser,   faSuitcase,
    faBars, faClose, faGear, faEye,} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className="nav-bar">
        
        <Link className = "logo" to = "/">

         <img src = {AyushS} alt = "logo" />

         <img className = "ayush-logo" src = {AyushSub} alt = "ayush" />

        </Link>

        <nav>
            <NavLink exact = "true" activeclassName = "active" to = "/">
             <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" />
            </NavLink>

            <NavLink exact = "true" activeclassName = "active" className = "about-link" to = "/about">

             <FontAwesomeIcon icon = {faUser} color = "#4d4d4e" />
            </NavLink>

            {/* <NavLink exact = "true" activeclassName = "active" className = "skills-link" to = "/portfolio">

          <FontAwesomeIcon icon = {faGear} color = "#4d4d4e" />
      </NavLink> */}

      <NavLink exact = "true" activeclassName = "active" className = "portfolio-link" to = "/portfolio">

       <FontAwesomeIcon icon = {faEye} color = "#4d4d4e" />
          </NavLink>
            

            <NavLink exact = "true" activeclassName = "active" className=  "contact-link" to = "/contact">
             <FontAwesomeIcon icon = {faEnvelope} color = "#4d4d4e" />
            </NavLink>
        </nav>


        <ul> 
            <li>
                <a target = "_blank" rel = "noreferrer" href = "https://www.linkedin.com/in/ayush-gupta-19a543202">
                    <FontAwesomeIcon icon = {faLinkedin} color = "#4d4d4e"/>
                </a>
            </li>

            <li>
                <a target = "_blank" rel = "noreferrer" href = "https://github.com/ayushgupta731">
                    <FontAwesomeIcon icon = {faGithub} color = "#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target = "_blank" rel = "noreferrer" href = "https://www.instagram.com/a.y_u.s_h/">
                    <FontAwesomeIcon icon = {faInstagram} color = "#4d4d4e"/>
                </a>
            </li>
        </ul> 

    </div>
)

export default Sidebar