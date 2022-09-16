import React from 'react'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {FaGithubAlt} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>

        <a href="https://www.linkedin.com/in/latifahwebdev" target="_blank" rel="noopener noreferrer"><TiSocialLinkedinCircular/></a>
        <a href="https://github.com/Latifahal" target="_blank" rel="noopener noreferrer"><FaGithubAlt/></a>

    </div>
  )
}

export default HeaderSocials