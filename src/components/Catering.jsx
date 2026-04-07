import React from 'react'
import cateringImage from '../assets/catering.jpg'

function Catering() {
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
    <section id="catering" className="catering">
      <div className="catering-left">
        <div className="catering-content">
          <h2 className="catering-heading">Catering</h2>
          <p className="catering-description">
            Avocado Club, wherever you need it.

            From team lunches to private events, our catering menus are designed to travel well and taste even better. Thoughtful, vibrant dishes with avocado at the core — tailored to your vibe, your people, your moment. Easy to share, hard to forget.
          </p>
          <button 
            className="catering-cta"
            onClick={() => scrollToSection('contact')}
          >
            (CONTACT US)
          </button>
        </div>
      </div>
      <div className="catering-right">
        <img 
          src={cateringImage}
          alt="Catering display"
          className="catering-image"
        />
      </div>
    </section>
  )
}

export default Catering

