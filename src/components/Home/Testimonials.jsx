import React, { useEffect, useRef } from "react";
import "../../styles/Home/Testimonials.scss";

const testimonials = [
  {
    id: 1,
    name: "Ahamed M",
    photo: "/testimonials/AhamedM.png",
    stars: 5,
    text: "Usha International offers exceptional quality products, and their attention to detail is impressive! I highly recommend their spices and honey for anyone seeking authentic flavors.",
  },
  {
    id: 2,
    name: "Alex",
    photo: "/testimonials/Alex.png",
    stars: 4,
    text: "Outstanding customer service and prompt delivery! Usha International’s commitment to sustainability really shows in the quality of their products.",
  },
  {
    id: 3,
    name: "Emily S",
    photo: "/testimonials/Emilys.png",
    stars: 5,
    text: "The variety of products from Usha International is amazing! Their handcrafted items bring such unique charm and authenticity to my home.",
  },
  {
    id: 4,
    name: "Priya D",
    photo: "/testimonials/priyaD.png",
    stars: 4,
    text: "I love the premium quality of the teas and spices from Usha International. It’s clear they prioritize excellence in every product!",
  },
  {
    id: 5,
    name: "Rajesh K",
    photo: "/testimonials/RajeshK.png",
    stars: 5,
    text: "Usha International has set a high standard for exports. Their dedication to purity and natural products keeps me coming back every time!",
  },
  {
    id: 6,
    name: "Ahamed M",
    photo: "/testimonials/AhamedM.png",
    stars: 5,
    text: "Usha International offers exceptional quality products, and their attention to detail is impressive! I highly recommend their spices and honey for anyone seeking authentic flavors.",
  },
  {
    id: 7,
    name: "Alex",
    photo: "/testimonials/Alex.png",
    stars: 4,
    text: "Outstanding customer service and prompt delivery! Usha International’s commitment to sustainability really shows in the quality of their products.",
  },
  {
    id: 8,
    name: "Emily S",
    photo: "/testimonials/Emilys.png",
    stars: 5,
    text: "The variety of products from Usha International is amazing! Their handcrafted items bring such unique charm and authenticity to my home.",
  },
  {
    id: 9,
    name: "Priya D",
    photo: "/testimonials/priyaD.png",
    stars: 4,
    text: "I love the premium quality of the teas and spices from Usha International. It’s clear they prioritize excellence in every product!",
  },
  {
    id: 10,
    name: "Rajesh K",
    photo: "/testimonials/RajeshK.png",
    stars: 5,
    text: "Usha International has set a high standard for exports. Their dedication to purity and natural products keeps me coming back every time!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-heading">Hear from Our Customers</h2>
      <div className="scrolling-content">
        <div className="testimonials-container">
          {/* Loop through testimonials twice to create an infinite loop effect */}
          {[...testimonials].map((testimonial, index) => (
            <div key={index} className="testimonial-box">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="customer-photo"
              />
              <div className="testimonial-details">
                <h3 className="customer-name">{testimonial.name}</h3>
                <div className="stars">
                  {"★".repeat(testimonial.stars) +
                    "☆".repeat(5 - testimonial.stars)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            </div>
          ))}
          {[...testimonials].map((testimonial, index) => (
            <div key={index} className="testimonial-box">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="customer-photo"
              />
              <div className="testimonial-details">
                <h3 className="customer-name">{testimonial.name}</h3>
                <div className="stars">
                  {"★".repeat(testimonial.stars) +
                    "☆".repeat(5 - testimonial.stars)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
