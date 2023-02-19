import React from 'react'
import AboutUs from './About'
import Contact from './Contact'
import Footer from './Footer'
import Slider from './Slider'

export default function Hero() {
  return (
    <div>
        <Slider/>
        <AboutUs/>
        <Contact/>
        <Footer/>
    </div>
  )
}
