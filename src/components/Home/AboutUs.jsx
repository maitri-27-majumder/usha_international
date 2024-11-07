import React, { useEffect, useRef, useState } from "react";
import "../../styles/Home/AboutUs.scss";
import aboutImage from "../../assets/aboutus1.png"; // Update with correct path

const AboutUs = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Set animation when section enters view
        }
      },
      { threshold: 0.2 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
    <div className="about_heading">About Us</div>
    <div ref={sectionRef} className="about-us-container">
      
      <div className={`image-container ${inView ? "animate" : ""}`}>
        <img src="/about_home_3.png" alt="About Us" />
      </div>
      <div className={`text-container ${inView ? "animate" : ""}`}>
        <p className="bold-text">
          Welcome to Usha International! We appreciate your interest in our
          company.
          <br />
        </p>
        <p>
        At Usha International, we take pride in curating an exquisite
          range of products that reflect the rich cultural heritage and
          craftsmanship of our artisans. Our offerings include aromatic spices,
          premium teas and coffees, elegant handicrafts, beautifully crafted
          furniture, and stylish clothing—each item designed to bring quality
          and charm into your life.<br/><br/>
          With a strong commitment to excellence and timely delivery, we have
          built a diverse global clientele that values our dedication to
          superior quality. Join us in celebrating tradition and craftsmanship
          with every purchase!
        </p>
        <a href="/aboutus" className="learn-more">
          Learn More
        </a>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
