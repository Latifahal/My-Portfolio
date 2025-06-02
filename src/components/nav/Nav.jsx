import React from 'react'
import './nav.css'
import {CgHomeAlt} from 'react-icons/cg'
import {RiFileUserLine} from 'react-icons/ri'
import {VscProject} from 'react-icons/vsc'
import {MdOutlineMessage} from 'react-icons/md'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      {/*eslint-disable-next-line*/}
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><CgHomeAlt/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><RiFileUserLine/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} ><VscProject/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><MdOutlineMessage/></a>

    </nav>
  )
}

export default Nav