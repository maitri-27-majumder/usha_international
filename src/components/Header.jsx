import React from "react";
import "../styles/Header.scss";
import Logo from "../assets/ushaLogo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <nav className="nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#sourcing-agent">Sourcing Agent</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#meet-our-team">Meet Our Team</a>
          </li>
        </ul>
      </nav>

      <div className="contact-us">
        <button>Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
