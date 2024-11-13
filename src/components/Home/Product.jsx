import React from "react";
import "../../styles/Home/Product.scss";
import spices from "../../assets/spices.png";
import tea from "../../assets/tea.png";
import handicrafts from "../../assets/handicrafts.png";
import furniture from "../../assets/furniture.png";
import honey from "../../assets/honey.png";

const Products = () => {
  const products = [
    {
      name: "Spices: Flavorful Heritage",
      description:
        "Unlock the vibrant and rich flavors of India with our premium spice collection. Each spice is carefully sourced and handpicked to bring out the best in your culinary creations. From bold chili powders to aromatic cardamoms, our spices are perfect for elevating any dish to new heights of taste and authenticity.",
      image: spices, // Update the path as per your image location
      link: "/products/spices",
      iframe: (
        <iframe
          src="https://skybox.blockadelabs.com/e/e057b6921a7acff32ee914bfdd1e012a"
          width="540"
          height="360"
          frameBorder="0"
        ></iframe>
      ),
    },
    {
      name: "Tea: A Sip of Tradition",
      description:
        "Indulge in the soothing experience of our finest teas, sourced from renowned plantations. Every sip reflects the tradition and care put into crafting each blend. From robust black teas to delicate greens, our collection offers a delightful escape into the world of refreshing and aromatic flavors.",
      image: tea,
      link: "/products/tea",
      iframe: (
        <iframe
          src="https://skybox.blockadelabs.com/e/854c845c5c5e3ee66401c37ba93747ca"
          width="540"
          height="360"
        ></iframe>
      ),
    },
    {
      name: "Handicrafts: Artistry in Every Detail",
      description:
        "Our exquisite collection of handicrafts showcases Indias rich artistic traditions. Each piece, from decorative items to functional crafts, is handcrafted with skill and care, making it a perfect addition to homes and businesses.",
      image: handicrafts,
      link: "/products/handicrafts",
      iframe: (
        <iframe
          src="https://lumalabs.ai/embed/0c2354fd-8e6a-402e-9c3c-40b3890b74b5?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false"
          width="540"
          height="360"
          frameBorder="0"
          title="luma embed"
        ></iframe>
      ),
    },
    {
      name: "Furniture: Craftsmanship and Comfort",
      description:
        "Enhance your living spaces with our beautifully crafted furniture, where aesthetics meet functionality. Each piece is designed with attention to detail, blending modern design with timeless comfort. Whether for homes or offices, our furniture adds elegance and durability to any environment.",
      image: furniture,
      link: "/products/furniture",
      iframe: (
        <iframe
          src="https://lumalabs.ai/embed/6a1b0c89-15c1-4c7e-a708-7c6e4e2b5e54?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false"
          width="540"
          height="360"
          frameBorder="0"
          title="luma embed"
        ></iframe>
      ),
    },
    {
      name: "Honey: Pure, Natural Sweetness",
      description:
        "Our range of premium dry fruits, including almonds, cashews, and raisins, delivers a healthy snack option. Carefully selected and packaged, they provide freshness and natural goodness in every bite",
      image: honey,
      link: "/products/honey",
      iframe: (
        <iframe
          src="https://skybox.blockadelabs.com/e/dc0ceb93fab5c75d54607aff68e29ad1"
          width="540"
          height="360"
          frameBorder="0"
        ></iframe>
      ),
    },
  ];

  return (
    <>
      <div className="products-container">
        <div className="heading-container">
          <h2>What We Export</h2>
        </div>
        {products.map((product, index) => (
          <div
            key={product.name}
            className={`product-item ${
              index % 2 === 0 ? "left-content" : "right-content"
            }`}
          >
            <div className="content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <a href={product.link} className="learn-more-link">
                Learn More
              </a>
            </div>
            {/* <img src={product.image} alt={product.name} /> */}
            {product.iframe}
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
