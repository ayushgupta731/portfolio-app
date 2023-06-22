 import { useEffect, useState } from 'react'
 import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/ayush.png'
 import Logo from './Logo'
 import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
 const[letterClass,setLetterClass] = useState('text-animate')

   const nameArray = ['y', 'u', 's', 'h']
   const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]


    return ( 
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                    <span className= {letterClass}>H</span>
                    <span className= {`${letterClass} _12`}>i,</span>

                    <br /> 
                    <span className= {`${letterClass} _13`}>I</span>
                    <span className= {`${letterClass} _14`}>'m</span>

                <img className = "ayush" src = {LogoTitle} alt = "developer" />
               <AnimatedLetters letterClass={letterClass}
               strArray={nameArray}  
               idx = {15} />
                <br/>

                <AnimatedLetters letterClass={letterClass}
               strArray={jobArray}  
               idx = {22} />

                </h1>
                
                <h2> Frontend - Backend Developer / Coder  </h2>
                <Link to = "/contact" className='flat-button'> CONTACT ME </Link>
            </div>
            <Logo />
        </div>
         <Loader type="pacman" />
         </>
    )
}
 export default Home