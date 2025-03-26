import React from 'react';
import './Navbar.css'
import logo from '../../assets/ati_logo_beyaz.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img height={50} src={logo} alt="" />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        <div className='nav-content'>Connect With Me</div>
    </div>
  );
};

export default Navbar;