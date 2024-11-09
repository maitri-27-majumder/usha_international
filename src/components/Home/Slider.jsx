import React, { useState, useEffect } from "react";
import "../../styles/Home/Slider.scss";
import slider1 from "../../assets/slide1.mp4";
// import slider2 from "../../assets/slide2.mov";

const Slider = () => {
  const duration = [4, 9];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % 2);
    }, 1000 * duration[currentIndex]);
    // return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="slider"
      // style={{ backgroundImage: `url(${images[currentIndex]})` }}
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
        {currentIndex === 0 && (
          <video autoPlay loop muted className="slider-bg">
            <source src={slider1} type="video/mp4" />
          </video>
        )}
        {currentIndex === 1 && (
          <video autoPlay loop muted className="slider-bg">
            <source src={slider1} type="video/mp4" />
          </video>
        )}
        <div className="slide-mask"></div>
      </div>
    </div>
  );
};

export default Slider;
