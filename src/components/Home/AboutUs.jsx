import React, { useEffect, useRef, useState } from 'react';
import '../../styles/Home/AboutUs.scss';
import aboutImage from '../../assets/aboutus1.png'; // Update with correct path

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
    <div ref={sectionRef} className="about-us-container">
      <div className={`image-container ${inView ? 'animate' : ''}`}>
        <img src={aboutImage} alt="About Us" />
      </div>
      <div className={`text-container ${inView ? 'animate' : ''}`}>
        
        <p className="bold-text">
          Usha International is founded by visionary entrepreneur Suman Saha.
          As a leader in the export industry, we specialize in premium products
          such as Spices, Ginger, Tea/Coffee, Garlic, Turmeric, Natural Honey,
          Dry Fruits, and Handicrafts. With a focus on sustainability and excellence.
        </p>
        <p>
          We prioritize your satisfaction with reliable, professional service and
          tailored solutions to meet your unique needs. Choose us for unmatched
          quality, global reach, and a commitment to delivering excellence with every order.
        </p>
        <a href="/aboutus" className="learn-more">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
