import './App.css'

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App

