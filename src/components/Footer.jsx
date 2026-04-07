import React from 'react'
import logomark from '../assets/LOGOMARK_BLACK.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logomark} alt="Avocado Club" className="footer-logo-image" />
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Get in Touch</h3>
          <div className="footer-contact">
            <p>
              <a href="tel:03022325570" className="footer-link">
                03022325570
              </a>
            </p>
            <p>
              <a href="mailto:eat@avocadoclub-berlin.com" className="footer-link">
                eat@avocadoclub-berlin.com
              </a>
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-social">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              Instagram
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

