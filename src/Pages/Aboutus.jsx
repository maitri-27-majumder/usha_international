import React from "react";
import "../styles/About.scss"; // Import the SCSS file

const Aboutus = () => {
  return (
    <div className="aboutcontainer">
      <div className="heading">
        Quality Products, Global Reach, Trusted Partnerships
      </div>
      <div className="paragraph">
        At Usha International, we are dedicated to delivering premium, carefully
        sourced products from India's rich heritage to global markets. With a
        focus on quality, sustainability, and customer satisfaction, we build
        lasting relationships and offer tailored solutions that meet the unique
        needs of our clients worldwide.
      </div>
      <div className="video-container">
        <iframe
          width="900"
          height="380"
          src="https://www.youtube.com/embed/2JcHMhtH6_s?si=v8LPnfs18U1R13IP?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="paragraph">
        Usha International has grown into a leading force in the global export
        industry. Our company is driven by a commitment to excellence,
        sustainability, and reliability, offering a diverse range of premium
        products, including spices, grocery items, dry fruits, honey, mushrooms,
        handicrafts, furniture, garments, and more.<br></br><br></br> At Usha International, we
        take pride in delivering high-quality products to key international
        markets such as the USA, UK, UAE, and South Africa. Every item we export
        is carefully sourced, meticulously packed, and handled with precision to
        ensure it reaches our clients in perfect condition. We value our
        relationships with our global partners and strive to exceed expectations
        through tailored solutions and a customer-first approach.<br></br><br></br> Our unwavering
        focus on quality and sustainability sets us apart, and our extensive
        industry experience makes us a trusted partner for businesses around the
        world. Whether you're looking for agricultural products, artisanal
        handicrafts, or fashion, Usha International is committed to bringing the
        best of India to the global stage.
      </div>
    </div>
  );
};

export default Aboutus;
