import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Home/Slider'
import AboutUs from '../components/Home/AboutUs'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import Products from '../components/Home/Product'
import Reviews from '../components/Home/Reviews'
import Footer from '../components/Footer'
import Certifications from '../components/Home/Certifications'
import Testimonials from '../components/Home/Testimonials'

const Home = () => {
  return (
    <>
    <Slider/>
    <AboutUs/>
    <WhyChooseUs/>
    <Products/>
    {/* <Reviews/> */}
    <Testimonials/>
    <Certifications />
    </>
  )
}

export default Home;