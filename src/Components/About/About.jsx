import React from 'react';
import './About.css'
import dalga from '../../assets/ati_dalga.svg'
import pp from '../../assets/pp.jpg'

const About = () => {
  return (
    <div id='about'className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={dalga} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img height={400} src={pp} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m a graduate of Computer Engineering from Trakya University. My passion for technology and software development led me to focus on frontend development, where I constantly learn and build projects to create user-friendly, modern, and impressive interfaces.</p>
                    <p>I am a hardworking, disciplined, and eager-to-learn individual. With strong problem-solving skills and attention to detail, I thrive in collaborative environments. I’m always excited to embrace new challenges and expand my skill set. If you’d like to work together or explore my projects, feel free to reach out—I’d love to connect!</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>React JS</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"><p>React Native</p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>Flutter</p><hr style={{width: "55%"}} /></div>
                    <div className="about-skill"><p>Kotlin(JC-XML)</p><hr style={{width: "63%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achs">
            <div className="about-ach">
                <h1>99+</h1>
                <p>YEARS OF EXPERINCE</p>
            </div>
            <hr />
            <div className="about-ach">
                <h1>99+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-ach">
                <h1>99+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  );
};

export default About;