import React from 'react';
import './Hero.css'
import pp from '../../assets/pp.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={pp} alt="" className='profile-img' />
        <h1><span>Arda Berkay Bağım,</span> Computer Engineer</h1>
        <p>I'm a frontend developer from Istanbul/Turkey.</p>
        <div className="hero-action">
            <div className="hero-resume">My Resume</div>
            <div className="hero-content">Connect With Me</div>
        </div>
    </div>
  );
};

export default Hero;