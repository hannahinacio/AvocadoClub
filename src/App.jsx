import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gather from './components/Gather'
import MenuSection from './components/MenuSection'
import Bookings from './components/Bookings'
import Catering from './components/Catering'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Ensure body is scrollable on load (fixes stuck state from mobile menu or Chrome quirks)
  useEffect(() => {
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    document.body.style.overflow = ''
  }, [])

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Gather />
        <MenuSection />
        <Bookings />
        <Catering />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

