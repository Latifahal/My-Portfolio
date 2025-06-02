import React from 'react'
import './portfolio.css'
import {GoPrimitiveDot} from 'react-icons/go'

const Portfolio = () => {
  return (
    <section Id='portfolio'>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__fe">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>Sass</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>React Native</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>Typescript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>

        <div className="skills__be">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>Node.js</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>Express.js</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
            </article>

          </div>
        </div>

        <div className="skills__other">
          <h3>Other Skills</h3>
          <div className="skills__content">
            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>Jira</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>Agile Method</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>Expo</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="skills__details">
              <GoPrimitiveDot/>
              <h4>Android Studio</h4>
              <small className='text-light'>Experienced</small>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio