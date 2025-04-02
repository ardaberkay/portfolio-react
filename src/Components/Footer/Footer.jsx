import React from 'react';
import './Footer.css'
import logo from '../../assets/logoben.png'
import user from '../../assets/user_icon.svg'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I'm a frontend developer from Istanbul/Turkey.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Arda Berkay Bağım</p>
            <div className="footer-bottom-right">
            <Link to="/user-agreement" className='agreement'>Terms of Services</Link>
            <Link to="/site-policy" className='policy'>Privacy Policy</Link>
            </div>
        </div>
    </div>
  );
};

export default Footer;