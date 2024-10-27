import { useState } from 'react'

import './App.css'

import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import AboutUs from './components/AboutUs'
import WhyChooseUs from './components/WhyChooseUs'
import Products from './components/Product'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Aboutus from './Pages/Aboutus'

const App = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <AboutUs/>
    <WhyChooseUs/>
    <Products/>
    <Reviews/>
    {/* <Aboutus/> */}
    <Footer/>
    </>
  )
}

export default App;
  


