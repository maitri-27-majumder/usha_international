import React, { useState } from "react";
import "../styles/Header.scss";
// import Logo from "../assets/ushaLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "antd";

const Header = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);

  const items = [
    {
      key: "1",
      label: (
        <Link to="/products/tea">
          <span className={selected === 1 ? "route-active" : ""}>Tea</span>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/products/spices">
          <span className={selected === 2 ? "route-active" : ""}>Spices</span>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to="/products/handicrafts">
          <span className={selected === 3 ? "route-active" : ""}>
            Handicrafts
          </span>
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link to="/products/furniture">
          <span className={selected === 4 ? "route-active" : ""}>
            Furniture
          </span>
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link to="/products/honey">
          <span className={selected === 5 ? "route-active" : ""}>Honey</span>
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link to="/products/mushroom">
          <span className={selected === 6 ? "route-active" : ""}>Mushroom</span>
        </Link>
      ),
    },
    {
      key: "7",
      label: (
        <Link to="/products/textile">
          <span className={selected === 7 ? "route-active" : ""}>Textile</span>
        </Link>
      ),
    },
  ];

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo-img.PNG" alt="Logo" width={50} />
        <img src="/logo-text.png" alt="Logo" width={120} />
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
            <Dropdown
              className="dropdown"
              menu={{
                items,
                // selectable: true,
                onClick: ({ key }) => {
                  setSelected(key);
                },
              }}
            >
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
