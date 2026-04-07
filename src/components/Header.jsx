import React, { useState, useEffect, useRef } from 'react'
import logomark from '../assets/LOGOMARK_BLACK.svg'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const skipRestoreScrollRef = useRef(false)

  // Handle scroll to show subtle shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'

      return () => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        if (!skipRestoreScrollRef.current) {
          window.scrollTo(0, scrollY)
        }
      }
    }
  }, [isMenuOpen])

  // Smooth scroll to section (works from desktop nav and hamburger menu)
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (!element) {
      setIsMenuOpen(false)
      return
    }
    const headerHeight = 80
    const wasMenuOpen = isMenuOpen
    if (wasMenuOpen) {
      skipRestoreScrollRef.current = true
      setIsMenuOpen(false)
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight
          window.scrollTo({ top, behavior: 'smooth' })
        }
        skipRestoreScrollRef.current = false
      }, 0)
    } else {
      const top = element.getBoundingClientRect().top + window.pageYOffset - headerHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={() => scrollToSection('home')}>
          <img src={logomark} alt="Avocado Club" className="logo-image" />
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <button onClick={() => scrollToSection('about')}>ABOUT US</button>
          <button onClick={() => scrollToSection('menu')}>MENU</button>
          <button onClick={() => scrollToSection('bookings')}>BOOKINGS</button>
          <button onClick={() => scrollToSection('contact')}>FIND US</button>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button 
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className="nav-close"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        <button onClick={() => scrollToSection('about')}>ABOUT US</button>
        <button onClick={() => scrollToSection('menu')}>MENU</button>
        <button onClick={() => scrollToSection('bookings')}>BOOKINGS</button>
        <button onClick={() => scrollToSection('contact')}>FIND US</button>
      </nav>
    </header>
  )
}

export default Header

