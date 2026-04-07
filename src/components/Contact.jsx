import React from 'react'

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">FIND US</h2>
        
        <div className="contact-content">
          <div className="contact-location">
            <div className="contact-item">
              <h3 className="location-name">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Dircksenstrasse+47,+10178+Berlin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-link"
                >
                  DIRCKSENSTRASSE 47
                </a>
              </h3>
              <p className="location-address">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Dircksenstrasse+47,+10178+Berlin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-link"
                >
                  10178 BERLIN
                </a>
              </p>
              <p>
                <a href="tel:03022325570">03022325570</a>
              </p>
            </div>

            <div className="contact-item">
              <h3>Opening Hours</h3>
              <div className="hours-list">
                <div className="hours-row">
                  <span className="hours-day">Monday - Friday</span>
                  <span className="hours-time">10:00 – 22:00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Saturday - Sunday</span>
                  <span className="hours-time">10:00 – 18:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-divider"></div>

          <div className="contact-location">
            <div className="contact-item">
              <h3 className="location-name">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Kantstrasse+47,+10178+Berlin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-link"
                >
                  KANTSTRASSE 47
                </a>
              </h3>
              <p className="location-address">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Kantstrasse+47,+10178+Berlin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-link"
                >
                  10178 BERLIN
                </a>
              </p>
              <p>
                <a href="tel:03022325570">03022325570</a>
              </p>
            </div>

            <div className="contact-item">
              <h3>Opening Hours</h3>
              <div className="hours-list">
                <div className="hours-row">
                  <span className="hours-day">Monday - Friday</span>
                  <span className="hours-time">10:00 – 22:00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Saturday - Sunday</span>
                  <span className="hours-time">10:00 – 18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-back-to-top">
          <button onClick={scrollToTop} className="back-to-top">
            Back to top
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact

