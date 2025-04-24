import React from "react";
import "./Hero.css";
import pp from "../../assets/pp.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={pp} alt="" className="profile-img" />
      <h1>
        <span>Arda Berkay Bağım</span>
      </h1>
      <h2>Computer Engineer</h2>
      <p>
      Frontend Developer specializing in Mobile&Web, with exploratory knowledge in Backend. Based in Istanbul/Turkey.
      </p>
      <div className="hero-action">
        <div className="hero-resume">
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-95}
          duration={500}
          className="hero-content"
        >
          Connect With Me
        </Link>
      </div>
    </div>
  );
};

export default Hero;
