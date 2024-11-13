import React, { useEffect, useRef, useState } from "react";
import "../styles/About.scss"; // Import the SCSS file
import Header from "../components/Header";
import Footer from "../components/Footer";

const Aboutus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set animation when section enters view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
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
      <div className="aboutcontainer">
        <div className="heading">
          Quality Products, Global Reach, Trusted Partnerships
        </div>
        <div className="aboutfirstsection">
          <div>
            <div className="paragraph">
              Welcome to Usha International. Thank you for your interest in our
              company. Founded by visionary entrepreneur Suman Saha, Usha
              International has emerged as a leading name in the export
              industry. Driven by a passion for excellence and a commitment to
              sustainability,
            </div>

            <div className="paragraph">
              we specialize in exporting a wide range of premium products
              including Spices, Ginger, Tea/Coffee, Garlic, Bay leaves,
              Turmeric, Garam masala, Natural Honey, Flavored Honey, King Red
              Chilli, Black Cardamom, Mushrooms, Dry Fruits , Handicrafts etc.
              Our meticulous approach to packing and handling ensures that every
              shipment arrives in perfect condition. Exporting to key markets
              like the USA, UK, UAE, and South Africa, we are committed to
              reliability, professionalism, and tailored solutions.
            </div>
            <div className="paragraph">
              CHOOSE USHA INTERNATIONAL because - At Usha International, your
              satisfaction is our top priority, and we go above and beyond to
              deliver excellence every time. CHOOSE USHA INTERNATIONAL.
            </div>
          </div>
          <div>
            <img src="/members/aboutus_2.png" />
          </div>
        </div>
      </div>
      <div className="about-container">
        {/* Left side with 4 boxes */}
        <div className="about-left">
          <div className="about-left-upper">
            <div className="about-box">
              <div className="logo">👥</div> {/* Replace with actual logo */}
              <h3>Relationship</h3>
              <p>We put people before profit.</p>
            </div>
            <div className="about-box">
              <div className="logo">🏢</div> {/* Replace with actual logo */}
              <h3>Community</h3>
              <p>Our loyalty and trust build long-lasting relationships.</p>
            </div>
          </div>
          <div className="about-left-lower">
            <div className="about-box">
              <div className="logo">💬</div> {/* Replace with actual logo */}
              <h3>Integrity</h3>
              <p>Keeping our word means everything to us.</p>
            </div>
            <div className="about-box">
              <div className="logo">📝</div> {/* Replace with actual logo */}
              <h3>Knowledge</h3>
              <p>We don't just sell, we educate.</p>
            </div>
          </div>
        </div>

        {/* Right side with Mission and Vision */}
        <div className="about-right">
          <div className="about-heading">
            <h2>Our Mission</h2>
            <p>
              Our mission is to consistently deliver high-quality, sustainably
              sourced products to our global partners. We strive to exceed
              customer expectations through innovation, trust, and a commitment
              to excellence. Our focus is on fostering long-term relationships
              built on integrity and mutual success.
            </p>
          </div>
          <div className="about-heading">
            <h2>Our Vision</h2>
            <p>
              Our vision is to be a global leader in the export industry, known
              for our dedication to quality, sustainability, and ethical
              business practices. We aim to bring the richness of India's
              heritage to the world, while supporting local communities and
              promoting environmentally responsible sourcing. By staying ahead
              of market trends and continuously improving, we aspire to be the
              preferred partner for businesses seeking reliable, premium
              products.
            </p>
          </div>
        </div>
      </div>
      <div
        className="why-choose-us-container"
        ref={sectionRef}
        style={{ backgroundColor: "#f4f3f2" }}
      >
        {/* <div className="divider"></div> */}
        <div className="heading-container">
          <h2>What We Do</h2>
        </div>
        <div className={`boxes-container ${isVisible ? "animate" : ""}`}>
          <div className={`box ${isVisible ? "animate" : ""}`}>
            <h3>Export</h3>
            <p>
              We are Exporting best quality product around the world, You need
              best product on time you are at right place.
            </p>
          </div>
          <div className={`box ${isVisible ? "animate" : ""}`}>
            <h3>Sourcing Agent</h3>
            <p>
              We are working as local partner of our foreign client to source
              best quality product from India as per client requirement and
              Specification
            </p>
          </div>
          <div className={`box ${isVisible ? "animate" : ""}`}>
            <h3>Import agent for foreign client</h3>
            <p>
              We help foreign company to introduce his best quality product in
              India and help them to find local partners in India
            </p>
          </div>
          <div className={`box ${isVisible ? "animate" : ""}`}>
            <h3>Training & consultancy</h3>
            <p>
              We are promoting global business, to make it easy we are giving
              Practical Export import related training for more info visit our
              website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
