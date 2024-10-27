import React, { useState, useEffect } from "react";
import "../styles/Slider.scss";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";

const Slider = () => {
  const images = [slider1, slider2, slider3, slider4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="slider"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="slider-content">
        <h1 className="tagline">
          Empowering Global Trade with the Finest Natural and Handcrafted
          Treasures
        </h1>
        <p className="sub-tagline">
          Delivering the finest exports with precision, sustainability, and
          passion—trusted worldwide, crafted with care
        </p>
      </div>
    </div>
  );
};

export default Slider;
