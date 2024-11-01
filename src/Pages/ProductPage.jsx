import React, { useRef, useEffect } from "react";
import "../styles/ProductPage.scss";
import { useParams } from "react-router-dom";
import { mainProducts, subProducts } from "../util/productData";

const ProductPage = () => {
  const mainProductInfoRef = useRef(null);
  const mainProductImageRef = useRef(null);
  const subProductRefs = useRef([]);

  const { product } = useParams();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe main product info and image separately
    if (mainProductInfoRef.current)
      observer.observe(mainProductInfoRef.current);
    if (mainProductImageRef.current)
      observer.observe(mainProductImageRef.current);

    // Observe each sub-product
    subProductRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [product]);

  return (
    <div className="product-page">
      {/* Main Product Section with separate animations for image and content */}
      <div className="main-product">
        <div className="main-product-info" ref={mainProductInfoRef}>
          <h2>{mainProducts[product]?.name}</h2>
          <p>{mainProducts[product]?.description}</p>
        </div>
        <div className="main-product-image" ref={mainProductImageRef}>
          <img src={mainProducts[product]?.imageUrl} alt={mainProducts[product]?.name} />
        </div>
      </div>
      <div className="divider"></div>
      {/* Sub Products Section with fade-in zoom animation */}
      <div className="sub-products">
        <div className="rotated-text">OUR PREMIUM PRODUCTS</div>
        {subProducts[product]?.map((product, index) => (
          <div
            className={`sub-product ${
              index % 2 === 0 ? "left-image" : "right-image"
            }`}
            key={`${product} ${product.id}`}
            ref={(el) => (subProductRefs.current[index] = el)}
          >
            {index % 2 === 0 ? (
              <>
                <div className="sub-product-image">
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="sub-product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="sub-product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <div className="sub-product-image">
                  <img src={product.imageUrl} alt={product.name} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
