import React from "react";
import "../../styles/Home/Reviews.scss";

const reviews = [
  {
    text: "I’ve been sourcing spices and dry fruits from Usha International for over a year, and the quality is always top-notch. Every shipment is timely, and the products are fresh and authentic. Highly recommend!",
    username: "@spiceLover",
    star: 5,
  },
  {
    text: "We've been sourcing garments from Usha International for the last two seasons, and the fabric quality and attention to design have been outstanding. They truly deliver on their promise of excellence every time.",
    username: "@fashionStore",
    star: 5,
  },
  {
    text: "With Usha International, we’ve found the perfect partner for our business. Their extensive range of grocery products, dry fruits, and frozen goods consistently meets the highest standards of quality. Each shipment is delivered on time, maintaining exceptional freshness. What truly sets them apart is their responsiveness, professionalism, and willingness to adapt to our specific needs, ensuring a seamless collaboration. Working with Usha International has been a great experience, and we highly recommend their services.",
    username: "@groceryTrader",
    star: 5,
  },
  {
    text: "We recently partnered with Usha International for their range of handicrafts and furniture, and we couldn’t be more pleased. Our customers are drawn to these unique, beautifully crafted pieces, and we’ve seen a great boost in sales and positive feedback since adding them to our store. Their commitment to quality has truly elevated our product offerings.",
    username: "@decorArtisan",
    star: 5,
  },
  {
    text: "We've been sourcing garments from Usha International for the last two seasons, and the fabric quality and attention to design have been outstanding. They truly deliver on their promise of excellence every time.",
    username: "@garmentRetailer",
    star: 5,
  },
  {
    text: "Partnering with Usha International for our garment line has been an absolute pleasure. Their garments are a perfect mix of quality, style, and durability, which our customers have come to love. Their attention to detail and commitment to excellence make every collaboration seamless, allowing us to consistently meet the high expectations of our clientele.",
    username: "@premiumFashion",
    star: 5,
  },
];
const getCards = (fromIndex, toIndex) => {
  return reviews.slice(fromIndex, toIndex).map((item, index) => {
    return (
      <div key={index} className="cardwrapper">
        {/* <img src={item.logo} /> */}
        <div>
          {[...new Array(item.star)].map((_) => (
            <span>⭐</span>
          ))}
        </div>
        <div>{item.text}</div>
        <div>{item.username}</div>
      </div>
    );
  });
};

const Reviews = () => {
  return (
    <section>
      <div className="cardheading">HEAR FROM OUR CUSTOMERS</div>
      <div className="carditemrow">
        {[0, 1, 2].map((item) => {
          return (
            <div key={`${item}-count`} className="carditemcolumn">
              {getCards(2 * item, 2 * (item + 1))}{" "}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Reviews;
