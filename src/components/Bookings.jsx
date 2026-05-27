import React from 'react'

const BOOKING_LOCATIONS = [
  {
    name: 'Mitte',
    widgetUrl: 'https://reservation.dish.co/widget/hydra-21399518-8538-4bfb-8646-17e78f4e857a'
  },
  {
    name: 'Charlottenburg',
    widgetUrl: 'https://reservation.dish.co/widget/hydra-f90af65f-c35c-4a3f-a762-96f124afded6'
  }
]

function Bookings() {
  return (
    <section id="bookings" className="bookings">
      <div className="bookings-container">
        <h2 className="section-title">BOOK A TABLE</h2>
        <div className="booking-locations">
          {BOOKING_LOCATIONS.map((location) => (
            <div key={location.name} className="booking-location">
              <h3 className="booking-location-title">{location.name}</h3>
              <div className="booking-widget-wrapper">
                <iframe
                  src={location.widgetUrl}
                  title={`${location.name} reservation widget`}
                  className="booking-widget-embed"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bookings
