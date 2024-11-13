import React, { useState, useEffect, useRef } from "react";
import "../../styles/Home/Slider.scss";

const Slider = () => {
  const duration = [9, 4];
  const slides = ["/slide2.mp4", "/slide1.mp4"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoSrc, setVideoSrc] = useState("/slide2.mp4");
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % 2);
    }, 1000 * duration[currentIndex]);
    // return () => clearInterval(interval);
    setVideoSrc(slides[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    videoRef.current?.load();
  }, [videoSrc]);

  return (
    <div
      className="slider"
      // style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="slider-content">
        <h1 className="tagline">We Deliver Premium Indian Products Globally</h1>
        <p className="sub-tagline">Your requirements are our priority</p>
        {/* {currentIndex === 0 && ( */}
        <video
          autoPlay
          loop
          muted
          playsInline={true}
          webkit-playsinline="true"
          className="slider-bg"
          ref={videoRef}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* )} */}
        {/* {currentIndex === 1 && (
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
        )} */}
        <div className="slide-mask"></div>
      </div>
    </div>
  );
};

export default Slider;
