import React from 'react';
import '../styles/Reviews.scss';

const reviews = [
  {
    text: "I’ve been sourcing spices and dry fruits from Usha International for over a year, and the quality is always top-notch. Every shipment is timely, and the products are fresh and authentic. Highly recommend!",
    username: '@spiceLover',
  },
  {
    text: "With Usha International, we’ve found that perfect partner. We import a range of grocery products, dry fruits, and frozen goods from them, and each shipment meets the highest standards. They’re always responsive, professional, and flexible to our business needs.",
    username: '@groceryTrader',
  },
  {
    text: "We've been sourcing garments from Usha International for the last two seasons, and the fabric quality and attention to design have been outstanding. They truly deliver on their promise of excellence every time.",
    username: '@fashionStore',
  },
  {
    text: "We recently partnered with Usha International for their range of handicrafts and furniture, and we couldn’t be more pleased. Our customers are drawn to these unique pieces, and we’ve seen a great boost in sales since adding them to our store.",
    username: '@decorArtisan',
  },
  {
    text: "We've been sourcing garments from Usha International for the last two seasons, and the fabric quality and attention to design have been outstanding. They truly deliver on their promise of excellence every time.",
    username: '@garmentRetailer',
  },
  {
    text: "Partnering with Usha International for our garment line has been an absolute pleasure. Their garments are a perfect mix of quality and style, which our customers have come to love.",
    username: '@premiumFashion',
  }
];
const getCards = (fromIndex, toIndex) => {
  return reviews.slice(fromIndex, toIndex).map((item, index) => {
    return (
      <div key={index} className="cardwrapper">
        {/* <img src={item.logo} /> */}
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
  {[0, 1,2].map((item) => {
    return <div key={`${item}-count`} className="carditemcolumn">{getCards(3 * item, 3 * (item + 1))} </div>;
  })}
  </div>
</section>
  );
};

export default Reviews;
