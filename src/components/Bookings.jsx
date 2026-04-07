import React, { useEffect } from 'react'

const WIDGET_ID = 'hors-hydra-21399518-8538-4bfb-8646-17e78f4e857a'
const EMBED_ID = 'hydra-21399518-8538-4bfb-8646-17e78f4e857a'

function Bookings() {
  useEffect(() => {
    window._hors = [
      ['eid', EMBED_ID],
      ['tagid', WIDGET_ID],
      ['width', '100%'],
      ['height', ''],
      ['foregroundColor', '#271b16'],
      ['backgroundColor', '#e4e0db'],
      ['linkColor', '#271b16'],
      ['errorColor', '#271b16'],
      ['primaryButtonForegroundColor', '#e4e0db'],
      ['primaryButtonBackgroundColor', '#271b16'],
      ['secondaryButtonForegroundColor', '#271b16'],
      ['secondaryButtonBackgroundColor', 'transparent']
    ]
    if (document.getElementById('dish-booking-script')) return
    const script = document.createElement('script')
    script.id = 'dish-booking-script'
    script.src = 'https://reservation.dish.co/widget.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section id="bookings" className="bookings">
      <div className="bookings-container">
        <h2 className="section-title">BOOK A TABLE</h2>
        <div className="booking-widget-wrapper">
          <div id={WIDGET_ID} className="booking-widget-embed" />
        </div>
      </div>
    </section>
  )
}

export default Bookings
