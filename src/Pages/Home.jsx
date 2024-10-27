import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import AboutUs from '../components/AboutUs'
import WhyChooseUs from '../components/WhyChooseUs'
import Products from '../components/Product'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <AboutUs/>
    <WhyChooseUs/>
    <Products/>
    <Reviews/>
    <Footer/>
    </>
  )
}

export default Home;