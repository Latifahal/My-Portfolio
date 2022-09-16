import React from 'react'
import './about.css'
import ME from '../../assets/meCar.jpg'
import {RiEmotionHappyFill} from 'react-icons/ri'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="polaroid about__me">
        <div className="about__me-img">
          {/*eslint-disable-next-line */}
        <img src={ME} alt="About Image" />
        </div>
      </div>
      <div className="about__content">
        {/* <div className="about__cards">

          <article className="about__card">
            <RiEmotionHappyFill className='about1__icon'/>
            <h5>Hobbies</h5>
            <small>Check my Hobbies</small>
          </article>

          <article className="about__card">
            <FaAward className='about1__icon'/>
            <h5>Experience</h5>
            <small>Over 1 year</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className='about1__icon'/>
            <h5>Projects</h5>
            <small>Two final Projects</small>
          </article>
        </div> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, a veniam architecto fuga quas amet sint sequi quae commodi eveniet! Consectetur voluptatum eos magnam provident sed facilis fugit amet quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perferendis labore totam expedita voluptatum obcaecati autem distinctio odit, aliquam magnam doloremque earum voluptatibus sunt vero, quod alias atque natus quibusdam!</p>

        <a href="#contact" className='btn btn-primary'> Let's connect!</a>
      </div>
    </div>
    </section>
  )
}

export default About