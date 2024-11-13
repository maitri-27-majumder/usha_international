import React, { useState, useEffect } from "react";
import "../../styles/Home/Slider.scss";
import slider1 from "../../assets/slide1.mp4";
import slider2 from "../../assets/slide2.mp4";

const Slider = () => {
  const duration = [4, 9];
  const slides = [slider1, slider2];

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
        <h1 className="tagline">We Deliver Premium Indian Products Globally</h1>
        <p className="sub-tagline">Your requirements are our priority</p>
        {currentIndex === 0 && (
          <video
            autoPlay
            loop
            muted
            playsInline={true}
            webkit-playsinline="true"
            className="slider-bg"
          >
            <source src={slider1} type="video/mp4" />
          </video>
        )}
        {currentIndex === 1 && (
          <video
            autoPlay
            loop
            muted
            playsinline={true}
            webkit-playsinline="true"
            className="slider-bg"
          >
            <source src={slider2} type="video/mp4" />
          </video>
        )}
        <div className="slide-mask"></div>
      </div>
    </div>
  );
};

export default Slider;
