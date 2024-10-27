import React from 'react';
import '../styles/Footer.scss';
import facebook from "../assets/Facebook.png";
import insta from "../assets/Instagram.png";
import linkedin from "../assets/LinkedIN.png";
import Logow from "../assets/logowhite.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Usha Logo */}
        <div className="footer-logo">
          <img src={Logow} alt="Usha Logo" />
        </div>

        {/* Footer Links */}
        <div className="footer-columns">
          {/* Column 1: Company */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/sourcing-agent">Sourcing Agent</a></li>
              <li><a href="/meet-our-team">Meet Our Team</a></li>
              <li><a href="/products">Products</a></li>
            </ul>
          </div>

          {/* Column 2: Products */}
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li><a href="/products/spices">Spices</a></li>
              <li><a href="/products/handicrafts">Handicrafts</a></li>
              <li><a href="/products/furniture">Furniture</a></li>
              <li><a href="/products/tea">Tea</a></li>
              <li><a href="/products/coffee">Coffee</a></li>
              <li><a href="/products/mushrooms">Mushrooms</a></li>
              <li><a href="/products/honey">Honey</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4: Office Address */}
          <div className="footer-column">
            <h4>Office Address</h4>
            <p>
              Usha International<br />
              1234 Export Street<br />
              Small Town, India<br />
              +91 12345 67890
            </p>
          </div>
        </div>
      </div>
       {/* Social Media Icons */}
       <div className="footer-bottom">
        <div className="footer-divider"></div>
        <div className="footer-social">
        
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
