import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials.jsx";
import { FaArrowCircleDown } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Img1 from "../../assets/GreenThumb.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Hi! I'm Livia</h1>
        <h5 className="text-light">IT Specialist in Application Development</h5>
        <CTA />
        <HeaderSocials />

        <div className="carousel__wrapper">
         <Carousel 
  showThumbs={false} 
  showStatus={false} 
  autoPlay 
  infiniteLoop 
  interval={4000}
  swipeable 
  emulateTouch
>
  {/* Image Slide */}
  <div className="carousel-slide">
  <a
    href="https://latifahal.github.io/greenthumb.github.io/" 
    target="_blank"
    rel="noopener noreferrer"
    className="carousel-link"
  >
    <img src={Img1} alt="Green Thumb Shop" />
  </a>
</div>


  {/* YouTube Video Slide */}
  <div className="carousel-slide">
  <div className="video-container">
    <iframe
      src="https://www.youtube.com/embed/-5OaHI0zonk"
      title="Green Thumb Promo"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>


  {/* Java Project Coming Soon Slide */}
  <div className="carousel-slide java-slide">
    <p className="coming-soon-title">☕ Java Project</p>
    <p className="coming-soon-text">Coming Soon...</p>
  </div>
</Carousel>

        </div>

        <div>
          <a href="#contact" className="scroll__down">
            <FaArrowCircleDown />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
