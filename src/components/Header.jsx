import React from "react";
import "../styles/Header.scss";
import Logo from "../assets/ushaLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "antd";

const Header = () => {
  const navigate = useNavigate();

  const items = [
    {
      key: '1',
      label: (
        <Link to="/products/tea">
          Tea
        </Link>
      ),
    },
    {
      key: '1',
      label: (
        <Link to="/products/spices">
          Spices
        </Link>
      ),
    },
    {
      key: '1',
      label: (
        <Link to="/products/handicrafts">
          Handicrafts
        </Link>
      ),
    },
    {
      key: '1',
      label: (
        <Link to="/products/furniture">
          Furniture
        </Link>
      ),
    },
    {
      key: '1',
      label: (
        <Link to="/products/honey">
          Honey
        </Link>
      ),
    },
    {
      key: '1',
      label: (
        <Link to="/products/mushroom">
          Mushroom
        </Link>
      ),
    },
    {
      key: '1',
      label: (
        <Link to="/products/textile">
          Textile
        </Link>
      ),
    },
  ];

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <nav className="nav">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/sourcing-agent">Sourcing Agent</Link>
          </li>
          <li>
            <Dropdown menu={{ items }}>
              <a>Products</a>
            </Dropdown>
          </li>
          <li>
            <Link to="/meet-our-team">Meet Our Team</Link>
          </li>
        </ul>
      </nav>
      <div className="contact-us">
        <button
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
