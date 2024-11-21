import React from "react";
import "../../styles/Home/Product.scss";
import spices from "../../assets/spices.png";
import tea from "../../assets/tea.png";
import handicrafts from "../../assets/handicrafts.png";
import furniture from "../../assets/furniture.png";
import honey from "../../assets/honey.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Products = () => {
  function Model({ path, position, scale ,rotation }) {
    const { scene } = useGLTF(path);
    return <primitive object={scene} scale={scale} position={position} rotation={rotation} />;
  }
  const products = [
    {
      name: "Spices: Flavorful Heritage",
      description:
        "Unlock the vibrant and rich flavors of India with our premium spice collection. Each spice is carefully sourced and handpicked to bring out the best in your culinary creations. From bold chili powders to aromatic cardamoms, our spices are perfect for elevating any dish to new heights of taste and authenticity.",
      image: spices, // Update the path as per your image location
      link: "/products/spices",
      iframe: (
        <div className="canvas-container">
          <Canvas camera={{ position: [6,4, -2], fov: 50 }} style={{ width: "100%", height: "100%" }}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={2} />
          <directionalLight position={[-10, -10, -10]} intensity={1} />
            <OrbitControls
              minDistance={4}
              maxDistance={7}
              enablePan={false}
            />
            <Model path={"/spices.glb"} position={[0, -1, 0]} scale={15} />
          </Canvas>
        </div>
      ),
    },
    {
      name: "Tea: A Sip of Tradition",
      description:
        "Indulge in the soothing experience of our finest teas, sourced from renowned plantations. Every sip reflects the tradition and care put into crafting each blend. From robust black teas to delicate greens, our collection offers a delightful escape into the world of refreshing and aromatic flavors.",
      image: tea,
      link: "/products/tea",
      iframe: (
        <div className="canvas-container">
          <Canvas camera={{ position: [2, 7, 5], fov: 50 }} style={{ width: "100%", height: "100%" }}>
          <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={2} />
            {/* <directionalLight position={[-10, -10, -10]} intensity={1} /> */}
            <OrbitControls
              minDistance={4}
              maxDistance={7}
              enablePan={false}
            />
            <Model path={"/coffee_cup.glb"} position={[0, -1, 0]} scale={2.5} />
          </Canvas>
        </div>
      ),
    },
    {
      name: "Handicrafts: Artistry in Every Detail",
      description:
        "Our exquisite collection of handicrafts showcases Indias rich artistic traditions. Each piece, from decorative items to functional crafts, is handcrafted with skill and care, making it a perfect addition to homes and businesses.",
      image: handicrafts,
      link: "/products/handicrafts",
      iframe: (
        <div className="canvas-container">
          <Canvas camera={{ position: [2, 5, 5], fov: 50 }} style={{ width: "100%", height: "100%" }}>
          <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={2} />
            <directionalLight position={[-10, -10, -10]} intensity={1} />
            <OrbitControls
              minDistance={4}
              maxDistance={7}
              enablePan={false}
            />
            <Model path={"/handicraft.glb"} position={[0, -2, 0]} scale={8} />
          </Canvas>
        </div>
      ),
    },
    {
      name: "Furniture: Craftsmanship and Comfort",
      description:
        "Enhance your living spaces with our beautifully crafted furniture, where aesthetics meet functionality. Each piece is designed with attention to detail, blending modern design with timeless comfort. Whether for homes or offices, our furniture adds elegance and durability to any environment.",
      image: furniture,
      link: "/products/furniture",
      iframe: (
        <div className="canvas-container">
          <Canvas camera={{ position: [-6, 2, 5], fov: 50 }} style={{ width: "100%", height: "100%" }}>
          <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={2} />
            <directionalLight position={[-10, -10, -10]} intensity={1} />
            <OrbitControls
              minDistance={4}
              maxDistance={7}
              enablePan={false}
            />
            <Model path={"/furniture.glb"} position={[0, 0, 0]} scale={4}/>
          </Canvas>
        </div>
      ),
    },
    {
      name: "Honey: Pure, Natural Sweetness",
      description:
        "Our range of premium dry fruits, including almonds, cashews, and raisins, delivers a healthy snack option. Carefully selected and packaged, they provide freshness and natural goodness in every bite",
      image: honey,
      link: "/products/honey",
      iframe: (
        <div className="canvas-container">
         <Canvas camera={{ position: [6,4, -2], fov: 50 }} style={{ width: "100%", height: "100%" }}>
          <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={2} />
            {/* <directionalLight position={[-10, -10, -10]} intensity={1} /> */}
            <OrbitControls
              minDistance={4}
              maxDistance={7}
              enablePan={false}
            />
          <Model path={"/honey.glb"} position={[0, -1, 0]} scale={6} rotation={[0, Math.PI/1.3, 0]}/>
        </Canvas>
      </div>
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
