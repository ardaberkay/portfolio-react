import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logoben.png";
import dalga from "../../assets/ati_dalga.svg";
import menu_close from '../../assets/menu_close.svg';
import menu_open from '../../assets/menu_open.svg';
import { Link as Navi } from "react-router-dom";


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {

    if (menuRef.current) {
      menuRef.current.style.right = "-500px";
    }
  }, []);

  const openMenu = () => {
    menuRef.current.style.right="0";
    setIsActive(true);
  }
  const closeMenu = () => {
    menuRef.current.style.right="-500px";
    setIsActive(false);
  }

  return (
    <div className={`navbar ${isActive ? "active" : ""}`}>
      <Navi to="/"><img height={50} src={logo} alt="Logo" /></Navi>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
      <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
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
      <div className="nav-content"><Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-95}
            duration={500}
            className="anchor-link"
            onClick={() => setMenu("contact")}
          >Connect With Me</Link></div>
    </div>
  );
};

export default Navbar;
