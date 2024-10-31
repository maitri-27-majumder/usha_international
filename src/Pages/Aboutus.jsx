import React from "react";
import "../styles/About.scss"; // Import the SCSS file

const Aboutus = () => {
  return (
    <>
      <div className="aboutcontainer">
        <div className="heading">
          Quality Products, Global Reach, Trusted Partnerships
        </div>
        <div className="paragraph">
          At Usha International, we are dedicated to delivering premium,
          carefully sourced products from India's rich heritage to global
          markets. With a focus on quality, sustainability, and customer
          satisfaction, we build lasting relationships and offer tailored
          solutions that meet the unique needs of our clients worldwide.
        </div>
       
        <div className="paragraph">
          Usha International has grown into a leading force in the global export
          industry. Our company is driven by a commitment to excellence,
          sustainability, and reliability, offering a diverse range of premium
          products, including spices, grocery items, dry fruits, honey,
          mushrooms, handicrafts, furniture, garments, and more.<br></br>
          <br></br> At Usha International, we take pride in delivering
          high-quality products to key international markets such as the USA,
          UK, UAE, and South Africa. Every item we export is carefully sourced,
          meticulously packed, and handled with precision to ensure it reaches
          our clients in perfect condition. We value our relationships with our
          global partners and strive to exceed expectations through tailored
          solutions and a customer-first approach.<br></br>
          <br></br> Our unwavering focus on quality and sustainability sets us
          apart, and our extensive industry experience makes us a trusted
          partner for businesses around the world. Whether you're looking for
          agricultural products, artisanal handicrafts, or fashion, Usha
          International is committed to bringing the best of India to the global
          stage.
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
    </>
  );
};

export default Aboutus;
