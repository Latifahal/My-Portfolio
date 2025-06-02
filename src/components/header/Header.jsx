import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/menobg.png'
import HeaderSocials from './HeaderSocials.jsx'
import {FaArrowCircleDown} from 'react-icons/fa'

const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h1>Hi! I'm Latifah</h1>
      <h5 className="text-light">Fullstack Web Developer </h5>
      <CTA />
      <HeaderSocials />

      <div className="meParent">
      <img className="me" src={Me} alt="me" />
      </div>

      <div>
      <a href="#contact" className='scroll__down'><FaArrowCircleDown/></a>
      </div>
    </div>

   </header>
  )
}

export default Header