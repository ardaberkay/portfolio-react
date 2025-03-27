import React, { useState } from "react";
import { Link } from "react-scroll"; // react-scroll eklendi
import "./Navbar.css";
import logo from "../../assets/ati_logo_beyaz.svg";
import dalga from "../../assets/ati_dalga.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img height={50} src={logo} alt="" />
      <ul className="nav-menu">
        {}
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-95}
            duration={500}
            className="anchor-link"
            onClick={() => setMenu("home")}
          >
            <p>Home</p>
            {menu === "home" ? <img src={dalga} alt="" /> : null}
          </Link>
        </li>
        {}
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            className="anchor-link"
            onClick={() => setMenu("about")}
          >
            <p>About Me</p>
            {menu === "about" ? <img src={dalga} alt="" /> : null}
          </Link>
        </li>
        {}
        <li>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-95}
            duration={500}
            className="anchor-link"
            onClick={() => setMenu("services")}
          >
            <p>Services</p>
            {menu === "services" ? <img src={dalga} alt="" /> : null}
          </Link>
        </li>
        {}
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-95}
            duration={500}
            className="anchor-link"
            onClick={() => setMenu("contact")}
          >
            <p>Contact</p>
            {menu === "contact" ? <img src={dalga} alt="" /> : null}
          </Link>
        </li>
      </ul>
      <div className="nav-content">Connect With Me</div>
    </div>
  );
};

export default Navbar;
