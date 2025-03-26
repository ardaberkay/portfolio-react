import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/ati_logo_beyaz.svg'
import dalga from '../../assets/ati_dalga.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img height={50} src={logo} alt="" />
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}><p>Home</p>{menu === "home" ? <img src={dalga} alt='' /> : <></>}</li>
        <li onClick={() => setMenu("about")}><p>About Me</p>{menu === "about" ? <img src={dalga} alt='' /> : <></>}</li>
        <li onClick={() => setMenu("services")}><p>Services</p>{menu === "services" ? <img src={dalga} alt='' /> : <></>}</li>
        <li onClick={() => setMenu("contact")}><p>Contact</p>{menu === "contact" ? <img src={dalga} alt='' /> : <></>}</li>
      </ul>
      <div className='nav-content'>Connect With Me</div>
    </div>
  );
};

export default Navbar;