import React, { useRef, useEffect } from 'react';
import "../styles/ProductPage.scss"; 


const ProductPage = ({ mainProduct, subProducts }) => {
  const mainProductInfoRef = useRef(null);
  const mainProductImageRef = useRef(null);
  const subProductRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe main product info and image separately
    if (mainProductInfoRef.current) observer.observe(mainProductInfoRef.current);
    if (mainProductImageRef.current) observer.observe(mainProductImageRef.current);

    // Observe each sub-product
    subProductRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="product-page">
      {/* Main Product Section with separate animations for image and content */}
      <div className="main-product">
        <div className="main-product-info" ref={mainProductInfoRef}>
          <h2>{mainProduct.name}</h2>
          <p>{mainProduct.description}</p>
        </div>
        <div className="main-product-image" ref={mainProductImageRef}>
          <img src={mainProduct.imageUrl} alt={mainProduct.name} />
        </div>
      </div>
      <div className="divider"></div>
      {/* Sub Products Section with fade-in zoom animation */}
      <div className="sub-products">
        <div className="rotated-text">OUR PREMIUM PRODUCTS</div>
        {subProducts.map((product, index) => (
          <div
            className={`sub-product ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
            key={product.id}
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
