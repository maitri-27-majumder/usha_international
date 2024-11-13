import React, { useEffect, useRef, useState } from "react";
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
          className={
            location?.pathname.includes("tea") ? "route-active" : "menu-item"
          }
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
            location?.pathname.includes("spices") ? "route-active" : "menu-item"
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
            location?.pathname.includes("handicrafts")
              ? "route-active"
              : "menu-item"
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
            location?.pathname.includes("furniture")
              ? "route-active"
              : "menu-item"
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
          className={
            location?.pathname.includes("honey") ? "route-active" : "menu-item"
          }
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
            location?.pathname.includes("mushroom")
              ? "route-active"
              : "menu-item"
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
            location?.pathname.includes("textile")
              ? "route-active"
              : "menu-item"
          }
        >
          Textile
        </Link>
      ),
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  const openDrawer = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        !event.target.classList.contains("menu-item")
      ) {
        setIsOpen(false);
      }
    }

    // Add event listener when the drawer is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener on component unmount or when isOpen changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <div className="logo">
            <img src="/logo-img.PNG" alt="Logo" width={50} />
            <img src="/logo-text.png" alt="Logo" width={150} />
          </div>
          {!isOpen && (
            <CiMenuBurger className="hamburger" onClick={openDrawer} />
          )}
        </div>

        {isOpen && (
          <div ref={drawerRef}>
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
          </div>
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
