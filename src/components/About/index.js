import './index.scss'

import { useEffect, useState,useRef} from 'react'
import gsap from 'gsap-trial'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

import{ Link,  NavLink } from 'react-router-dom'

import LogoSub1 from '../../assets/images/logo1.png'
import LogoSub2 from '../../assets/images/logo2.png'
import LogoSub3 from '../../assets/images/logo3.png'
import LogoSub4 from '../../assets/images/logo4.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);
    return () => {
      clearTimeout(timer);
  }
});


  return (
      <div className="container about-page">

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>

          <p> 
            I'm not a designer but I have a good sense of aesthetics and experience in responsive web design . I put special effort into optimizing my code and providing the best user experience.
          </p>

          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1> 
          <p> 
            Currently I have command on HTML5, CSS3,JavaScript,React,Django
          </p>
          <p> 
           Apart from web development , I have keen interest in coding having knowledge of C++, Python and Data Structures and Algorithms .
          </p>

        </div>

{/* <div className='logo'> 
        
        <img className = "h-logo" src = {LogoSub1} alt = "ayush" />
        <img className = "c-logo" src = {LogoSub2} alt = "ayush" />
        <img className = "j-logo" src = {LogoSub3} alt = "ayush" />
        <img className = "h-logo" src = {LogoSub4} alt = "ayush" />  

        </div>*/}
 
      <Loader type="pacman" />

      </div>
       
  );
}

 export default About


