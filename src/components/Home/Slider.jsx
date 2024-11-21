import React, { useState, useEffect, useRef } from "react";
import "../../styles/Home/Slider.scss";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";


const Slider = () => {
  // const duration = [9, 4];
  // const slides = ["/slide2.webm", "/slide1.webm"];

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [videoSrc, setVideoSrc] = useState("/slide2.webm");
  // const videoRef = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrentIndex((currentIndex + 1) % 2);
  //   }, 1000 * duration[currentIndex]);
  //   // return () => clearInterval(interval);
  //   setVideoSrc(slides[currentIndex]);
  // }, [currentIndex]);

  // useEffect(() => {
  //   videoRef.current?.load();
  // }, [videoSrc]);
  const images = [slider1, slider2, slider3];

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
        <h1 className="tagline">We Deliver Premium Indian Products Globally</h1>
        <p className="sub-tagline">Your requirements are our priority</p>
        {/* {currentIndex === 0 && ( */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline={true}
          webkit-playsinline="true"
          className="slider-bg"
          // ref={videoRef}
        >
          <source src="/slide1.webm" type="video/webm" />
        </video> */}
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
        {/* <div className="slide-mask"></div> */}
      </div>
    </div>
  );
};

export default Slider;
