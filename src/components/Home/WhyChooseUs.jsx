import React, { useEffect, useRef, useState } from "react";
import "../../styles/Home/WhyChooseUs.scss"; // Assuming the SCSS file is named like this

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set animation when section enters view
        }
      },
      { threshold: 0.1 } // Trigger when 50% of the section is visible
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
    <div className="why-choose-us-container" ref={sectionRef}>
      {/* <div className="divider"></div> */}
      <div className="heading-container">
        <h2>Why To Choose Us</h2>
        <div className="green-line"></div>
      </div>
      <div className={`boxes-container ${isVisible ? "animate" : ""}`}>
        <div className={`box ${isVisible ? "animate" : ""}`}>
          <h3>Expertise and Experience</h3>
          <p>
            With years of industry knowledge, Usha International has a deep
            understanding of global market demands, ensuring smooth, efficient,
            and reliable export services
          </p>
        </div>
        <div className={`box ${isVisible ? "animate" : ""}`}>
          <h3>Network and Relationships</h3>
          <p>
            Our extensive network of trusted suppliers and global partners
            allows us to deliver high-quality products to key international
            markets with consistency and trust
          </p>
        </div>
        <div className={`box ${isVisible ? "animate" : ""}`}>
          <h3>Competitive Pricing</h3>
          <p>
            We offer cost-effective solutions without compromising on quality,
            helping our clients maximize their margins while receiving premium
            products
          </p>
        </div>
        <div className={`box ${isVisible ? "animate" : ""}`}>
          <h3>High-Quality Products</h3>
          <p>
            From spices to handicrafts, every product we export is sourced and
            handled with utmost care, meeting strict quality standards to ensure
            top-tier offerings
          </p>
        </div>
        <div className={`box ${isVisible ? "animate" : ""}`}>
          <h3>Client Satisfaction</h3>
          <p>
            Your satisfaction is our priority. We provide tailored solutions and
            timely deliveries to meet your unique business needs, ensuring
            long-term partnerships
          </p>
        </div>
        <div className={`box ${isVisible ? "animate" : ""}`}>
          <h3>Sustainability Commitment</h3>
          <p>
            We are dedicated to eco-friendly sourcing and packaging practices,
            promoting sustainability in every step of our supply chain, for a
            greener tomorrow
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
