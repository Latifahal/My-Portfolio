import React, { useState } from 'react'
import './contact.css'
import { FaLinkedin, FaGithub, FaEnvelope, FaHardHat, FaTools } from 'react-icons/fa'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target

    setTimeout(() => {
      setSubmitted(true)
      form.reset()
      setTimeout(() => setSubmitted(false), 4000)
    }, 500)
  }

  return (
    <section id='contact'>

      {/* 🚧 Under Construction Banner */}
      <div className="under-construction-banner">
        <div className="tape-text">
          <FaHardHat style={{ marginRight: '8px' }} />
          UNDER CONSTRUCTION
          <FaTools style={{ marginLeft: '8px' }} />
        </div>
        <div className="emoji-workers">
          🧱 👷 🔧 🪜 🚧
        </div>
      </div>

      <h2>Contact Me</h2>

      {submitted && (
        <div className="success-message">
          <p>Your message has been successfully sent!</p>
          <div className="flying-envelope">✉️</div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="disabled-form">
        <input type="text" name="name" placeholder="Your Full Name" disabled />
        <input type="email" name="email" placeholder="Your Email" disabled />
        <textarea name="message" rows="6" placeholder="Your Message" disabled />
        <button type="submit" disabled>Send Message</button>
      </form>

      <div className="socials">
         {/* <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"> 
          <FaLinkedin />
        </a> */}
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:liviaalbrecht@outlook.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  )
}

export default Contact
