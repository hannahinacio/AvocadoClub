import React from 'react'

function Gather() {
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
    <section id="gather" className="gather">
      <div className="gather-left">
        {/* Spacer - image stays from hero section */}
      </div>
      <div className="gather-right">
        <div className="gather-content">
          <h2 className="gather-heading">
            Gather in Good Company
          </h2>
          <p className="gather-description">
            This is a place to feel comfortable.

            To drop in, slow down, and enjoy the moment. Avocado Club is about good food, good energy, and the people you share it with — friends, family, colleagues, or just yourself. Whether it's a quick coffee or a long meal, everyone's welcome. No fuss, just good company.
          </p>
          <button 
            className="gather-cta"
            onClick={() => scrollToSection('contact')}
          >
            (FIND US)
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gather



