import React from 'react'

function About() {
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
    <section id="about" className="about">
      <div className="about-left">
        {/* Spacer - image stays from hero section */}
      </div>
      <div className="about-right">
        <div className="about-content">
          <h2 className="about-heading">
            WE HAVE TWO RULES:<br />
            COME AS YOU ARE<br />
            AND ENJOY AS YOU PLEASE.<br />
            WE LOOK FORWARD<br />
            TO SEEING YOU.
          </h2>
          <button 
            className="about-cta"
            onClick={() => scrollToSection('bookings')}
          >
            (BOOK YOURSELF IN)
          </button>
        </div>
      </div>
    </section>
  )
}

export default About

