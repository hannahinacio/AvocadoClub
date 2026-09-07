import React, { useState } from 'react'
import avoImage from '../assets/avo.jpg'
import mitteMenuEnglishPdf from '../../Menu-English.pdf'
import mitteMenuGermanPdf from '../../Menu-German.pdf'
import mitteDinnerPdf from '../../AVO DINNER 04-26 II.pdf'
import savignyplatzDinnerPdf from '../../Savignyplatz-Dinner.pdf'

const LOCATIONS = [
  {
    id: 'mitte',
    name: 'Mitte',
    address: 'Dircksenstraße 47',
    menus: [
      { label: 'Breakfast / Lunch · English', href: mitteMenuEnglishPdf },
      { label: 'Breakfast / Lunch · Deutsch', href: mitteMenuGermanPdf },
      { label: 'Dinner', href: mitteDinnerPdf }
    ]
  },
  {
    id: 'savignyplatz',
    name: 'Savignyplatz',
    address: 'Charlottenburg',
    menus: [
      { label: 'Dinner', href: savignyplatzDinnerPdf }
      // Breakfast / Lunch PDFs to be added when received
    ]
  }
]

function MenuSection() {
  const [selectedLocationId, setSelectedLocationId] = useState(null)
  const selectedLocation = LOCATIONS.find((loc) => loc.id === selectedLocationId)

  return (
    <section id="menu" className="menu">
      <div className="menu-left">
        <div className="menu-content">
          <h2 className="menu-heading">
            It&apos;s All About Avocado
          </h2>
          <p className="menu-description">
            Yes, we really love avocado.
            Creamy, savoury, sweet — it shows up everywhere and somehow never gets boring. Our menus are built around its versatility, paired with fresh produce, bold flavours, and a little curiosity. Expect classics, surprises, and dishes you&apos;ll want to order again next time. Green at heart. Always evolving.
          </p>

          <p className="menu-location-note">
            Menus differ by location. Choose yours to see the right menu.
          </p>

          {!selectedLocation ? (
            <div className="menu-location-picker" role="group" aria-label="Choose location">
              {LOCATIONS.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  className="menu-location-btn"
                  onClick={() => setSelectedLocationId(location.id)}
                >
                  <span className="menu-location-btn-name">{location.name}</span>
                  <span className="menu-location-btn-address">{location.address}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="menu-location-menus">
              <div className="menu-location-header">
                <p className="menu-location-current">
                  <span className="menu-location-current-label">Menus for</span>
                  <span className="menu-location-current-name">{selectedLocation.name}</span>
                </p>
                <button
                  type="button"
                  className="menu-location-change"
                  onClick={() => setSelectedLocationId(null)}
                >
                  (Change location)
                </button>
              </div>

              <nav className="menu-nav" aria-label={`${selectedLocation.name} menus`}>
                {selectedLocation.menus.map(({ label, href }) => (
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
          )}
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
