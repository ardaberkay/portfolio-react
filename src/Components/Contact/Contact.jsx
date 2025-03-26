import React from 'react';
import dalga from '../../assets/ati_dalga.svg'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import './Contact.css'

const Contact = () => {
    const socialMediaLinks = [
        { icon: <FaLinkedin size={30}/>, url: "https://www.linkedin.com/in/arda-berkay-bagim"},
        { icon: <FaGithub size={30}/>, url: "https://github.com/ardaberkay"},
    ];

    const handleButtonClick = (url) =>{
        window.open(url, "_blank");
    }
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={dalga} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left-section">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-main-details">
                    <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>ardabeb@hotmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Istanbul/Turkey</p>
                    </div>
                </div>
                <hr />
                <div className="contact-social-details">
                 
                {socialMediaLinks.map((link, index) => (
                        <button
                        key={index}
                        className="socialButton"
                        onClick={() => handleButtonClick(link.url)}>
                            {link.icon}
                        </button>
                    ))}
                  </div>
                </div>
            </div>
            <form action="" className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your mail' name='email' />
                <label htmlFor="">Write Your Message</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit</button>
            </form>
        </div>
    </div>
  );
};

export default Contact;