import React from "react";
import "../styles/Footer.scss";
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
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/sourcing-agent">Sourcing Agent</a>
              </li>
              <li>
                <a href="/meet-our-team">Meet Our Team</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Products */}
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li>
                <a href="/products/spices">Spices</a>
              </li>
              <li>
                <a href="/products/handicrafts">Handicrafts</a>
              </li>
              <li>
                <a href="/products/furniture">Furniture</a>
              </li>
              <li>
                <a href="/products/tea">Tea</a>
              </li>
              <li>
                <a href="/products/coffee">Coffee</a>
              </li>
              <li>
                <a href="/products/mushrooms">Mushrooms</a>
              </li>
              <li>
                <a href="/products/honey">Honey</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          {/* <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
            </ul>
          </div> */}

          {/* Column 4: Office Address */}
          <div className="footer-column">
            <h4>Contact Us</h4>
            <div className="footer-contact">
            <div><a
                href="https://www.facebook.com/profile.php?id=61566565374203&mibextid=ZbWKwL"
              >
                info@ushainternational.co
              </a>
              </div>
              <div>
              <a
                href="https://www.facebook.com/profile.php?id=61566565374203&mibextid=ZbWKwL"
              >
                +919599513207
              </a>
              </div>
            </div>

            <div className="footer-social">
              <a
                href="https://www.facebook.com/profile.php?id=61566565374203&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/ushainternational.co/profilecard/?igsh=bHFsamhjYjZic3py"
                target="_blank"
                rel="noreferrer"
              >
                <img src={insta} alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/suman-saha-14794a328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className="footer-bottom">
        <p>© Copyrights 2020 All Rights Reserved Usha International Pvt Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
