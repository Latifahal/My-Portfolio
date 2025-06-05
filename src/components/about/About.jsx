import './about.css'
import ME from '../../assets/portfolioImg.jpg'


const About = () => {
  return (
    <section id='about'>

      <h2 id='about_Me_Title'>About Me</h2>

      <div className="container about__container">
        <div className="polaroid about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <p>
            <p>Hey, I’m Livia!</p>  
            when I’m not diving into code, you’ll probably find me cooking up something fresh in the kitchen, nothing beats a good meal made from scratch. I'm from the Middle East. I play the ukulele, a bit of guitar, and for fun I tap out beats on the drums sometimes.
            I’m also big on adventure, whether it’s hiking in nature, exploring new cities, or just getting lost on purpose to see what I find.
          </p>

          <div>
            <p id='connectP'>Wanna know more about me? Click the button below and let’s connect</p>
            <a href="#contact" className='btn btn-primary'> Let's connect!</a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About