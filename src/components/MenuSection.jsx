import React from 'react'
import avoImage from '../assets/avo.jpg'

const MENU_LINKS = [
  { label: 'BREAKFAST', href: '/ac-breakfast.pdf' },
  { label: 'LUNCH', href: '/ac-lunch.pdf' },
  { label: 'DINNER', href: '/AC_Dinner.pdf' }
]

function MenuSection() {
  return (
    <section id="menu" className="menu">
      <div className="menu-left">
        <div className="menu-content">
          <h2 className="menu-heading">
            It's All About Avocado
          </h2>
          <p className="menu-description">
            Yes, we really love avocado.
            Creamy, savoury, sweet — it shows up everywhere and somehow never gets boring. Our menus are built around its versatility, paired with fresh produce, bold flavours, and a little curiosity. Expect classics, surprises, and dishes you'll want to order again next time. Green at heart. Always evolving.
          </p>
          <nav className="menu-nav" aria-label="Menu PDFs">
            {MENU_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="menu-nav-btn"
              >
                ({label})
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="menu-right">
        <img
          src={avoImage}
          alt="Avocado toast"
          className="menu-image"
        />
      </div>
    </section>
  )
}

export default MenuSection

