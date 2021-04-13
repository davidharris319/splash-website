import React from 'react'
import "./Contact.css";

import splashMap from '../../images/product_pictures/splash_map.png'

const Contact = () => {
  return (
<section id="contact" className="contact-container">
      <img className="splash-map" src={splashMap} alt="Google Maps Screenshot"/>
      <div className="contact-box">
          <h3>Visit Us</h3>
          <div className="row">
              <p>395 Cochrane Drive, Markham, ON  L3R 9R5</p>
            
              <p>Mon - Fri: 8:30am - 5:00pm</p>

              <p>Telephone:  (905) 947-4440 | 1-800-237-4115</p>

              <p>Fax: (905) 947-4441</p>

              <p className="email">Email: <a href="mailto:info@splash.com">info@splash.com</a></p>

            <li></li>

          </div>
          <a href="https://www.google.com/maps/dir//Splash+International+Marketing+Inc.,+Cochrane+Drive,+Markham,+ON/@43.842897,-79.4314537,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89d4d4be4cf56c85:0x24e04343b48cea09!2m2!1d-79.3614142!2d43.8429184" target="_blank" rel="noopener noreferrer" className="direction-button" style={{ textDecoration: 'none'}}><button>
          Get Directions </button></a>
      </div>
    </section>
  )
}

export default Contact
