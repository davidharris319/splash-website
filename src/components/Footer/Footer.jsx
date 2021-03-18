import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="footer-row">
        {/* Column 1 */}
        <div className="footer-col">
          <h3 className="footer-headers">Contact Info</h3>
          <ul className="list-unstyled">
            <li>395 Cochrane Drive</li>
            <li>Makham, ON  L3R 9R5</li>
            <li>(905)-947-4440</li>
            <li>1-800-237-4115</li>
          </ul>
        </div>
        {/* Column 2 */}
        <div className="footer-col">
          <h3 className="footer-headers">Information</h3>
          <ul className="list-unstyled">
            <li><a href="/about">About</a></li>
            <li>Catalogue</li>
            <li>Contact</li>
            <li><a href="/terms-of-trading">Terms of Trading</a></li>
          </ul>
        </div>
        {/* Column 3 */}
        <div className="footer-col">
          <h3 className="footer-headers">Social Media</h3>
          <ul className="list-unstyled">
            <li><a href="https://www.facebook.com/SplashInternationalMarketing/">Facebook</a></li>
            <li><a href="https://www.instagram.com/splash_int_marketing/">Instagram</a></li>
            <li>Email</li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className="copyright">
        <p className="">
          &copy;{new Date().getFullYear()} Splash International Marketing
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;