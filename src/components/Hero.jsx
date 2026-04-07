import React from 'react'
import heroImage from '../assets/hero.jpg'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <img 
          src={heroImage}
          alt="Bistro interior"
          className="hero-image"
        />
      </div>
      <div className="hero-right">
        <div className="hero-content">
          <h1 className="hero-title">A Modern Bistro</h1>
          <p className="hero-description">
            Avocado Club is a modern bistro rooted in simplicity, quality, and really good food.

            We take the humble avocado and build bold, seasonal dishes around it — from breakfast through dinner. Everything is made fresh, balanced, and designed to be enjoyed without rules. Come for coffee, stay for cocktails, or do both. We're into good ingredients, good energy, and food that feels as good as it tastes.
          </p>
          <button 
            className="hero-link"
            onClick={() => scrollToSection('about')}
          >
            (ABOUT US)
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

