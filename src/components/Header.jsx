import React, { useState } from "react";
import "../styles/Header.scss";
// import Logo from "../assets/ushaLogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const navigate = useNavigate();
  // const [selected, setSelected] = useState(1);

  const location = useLocation();

  const items = [
    {
      key: "1",
      label: (
        <Link
          to="/products/tea"
          className={location?.pathname.includes("tea") ? "route-active" : ""}
        >
          Tea
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          to="/products/spices"
          className={
            location?.pathname.includes("spices") ? "route-active" : ""
          }
        >
          Spices
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          to="/products/handicrafts"
          className={
            location?.pathname.includes("handicrafts") ? "route-active" : ""
          }
        >
          Handicrafts
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link
          to="/products/furniture"
          className={
            location?.pathname.includes("furniture") ? "route-active" : ""
          }
        >
          Furniture
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link
          to="/products/honey"
          className={location?.pathname.includes("honey") ? "route-active" : ""}
        >
          Honey
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link
          to="/products/mushroom"
          className={
            location?.pathname.includes("mushroom") ? "route-active" : ""
          }
        >
          Mushroom
        </Link>
      ),
    },
    {
      key: "7",
      label: (
        <Link
          to="/products/textile"
          className={
            location?.pathname.includes("textile") ? "route-active" : ""
          }
        >
          Textile
        </Link>
      ),
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <div className="logo">
            <img src="/logo-img.PNG" alt="Logo" width={50} />
            <img src="/logo-text.png" alt="Logo" width={150} />
          </div>
          <CiMenuBurger className="hamburger" onClick={toggleDrawer} />
        </div>

        {isOpen && (
          <>
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
                      // onClick: ({ key }) => {
                      //   setSelected(key);
                      // },
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
          </>
        )}
        <nav className="desktop-nav">
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
                  // onClick: ({ key }) => {
                  //   setSelected(key);
                  // },
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
        <div className="desktop-contact-us">
          <button
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Us
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
