import "./App.css";

import "./App.css";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import ProductPage from "./Pages/ProductPage";
import { mainProducts, subProducts } from "./util/productData.js";
import SourcingAgentPage from "./Pages/SourcingAgentPage";
// import assamtea from './assets/AssamTea.png';
// import greentea from './assets/greentea.png';
// import pinktea from './assets/pinktea.png';
// import whitetea from './assets/whitetea.png';
// import blacktea from './assets/blacktea.png';
import Home from "./Pages/Home";
import Team from "./Pages/Team";

// const mainProduct = {
//   id: 1,
//   name: 'ASSAM TEA',
//   description: 'Naturally grown in the lush landscapes of Assam, we carefully select only the finest tea leaves to bring you the best of both worlds. Our range includes rich, dark, and robust tea leaves as well as light green and pale golden varieties, each offering its own unique flavor and aroma. Whether you prefer a bold, full-bodied brew or a more delicate, refreshing cup, we have a diverse selection of flavors to cater to every tea lovers taste.',
//   imageUrl: assamtea,
// };

// const subProducts = [
//   {
//     id: 2,
//     name: 'Green Tea',
//     description: 'Our whole leaf green tea offers a fresh and vibrant taste.Handpicked from the finest tea gardens, it provides a smooth, delicate flavour and a refreshing, health-boosting experience in every sip.',
//     imageUrl: greentea,
//   },
//   {
//     id: 3,
//     name: 'Pink Tea',
//     description: 'Delight in the unique and exotic flavours of our pink tea,a beautiful blend known for its soothing, creamy texture.This traditional brew offers a visually stunning experience while delivering a rich, full-bodied flavour.',
//     imageUrl: pinktea,
//   },
//   {
//     id: 4,
//     name: 'White Tea',
//     description: 'Our white tea is the purest form of tea, made from the youngest tea leaves and buds. With its light, floral notes and delicate flavor, this rare tea is both refreshing and full of antioxidants, perfect for a calm and gentle brew.',
//     imageUrl: whitetea,
//   },
//   {
//     id: 5,
//     name: 'Black Tea',
//     description: 'Bold and full-bodied, our black tea delivers a robust flavour that tea lovers adore. Sourced from the finest leaves, it’s perfect for a strong, energizing brew, whether enjoyed plain or with milk and sugar.',
//     imageUrl: blacktea,
//   },
//   // Add more sub-products as needed
// ];
const App = () => {
  return (
    <>
      <Header />
      {/* <Aboutus/> */}
      <SourcingAgentPage />
      {/* <Contactus/> */}
      {/* <ProductPage mainProduct={mainProducts.spices} subProducts={subProducts.spices} /> */}

      <Footer />
      {/* <Home /> */}
    </>
  );
};

export default App;
