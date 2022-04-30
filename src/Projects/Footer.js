import React from "react";
import "./Footer.css";
import mscfooterlogo from "./img/mscfooterlogo.png";
import mscfooterbgimage from "./img/mscfooterbgimage.png";
import fb from "./img/fb.png";
import insta from "./img/insta.png";
import linkedin from "./img/linkedin.png";

function Footer() {
  return (
    <div className="footer-container">
      <img className="footer-bg-image" src={mscfooterbgimage} alt="footer bg" />
      <div className="footer-content">
          <img className="footer-logo" src={mscfooterlogo} alt="footer logo" />
          <div className="footer-links">
            <div className="contact-us">
              <h4>Contact us</h4>
              <ul>
                <li>Jane Cooper (239) 555-0108</li>
                <li>Jane Cooper (239) 555-0108</li>
              </ul>
            </div>
            <div className="social-info">
              <h4>Follow us</h4>
              <ul>
                <li><a href="https://linkedin.com/"><img src={linkedin} alt="" /></a></li>
                <li><a href="https://facebook.com/"><img src={fb} alt="" /></a></li>
                <li><a href="https://instagram.com/"><img src={insta} alt="" /></a></li>
              </ul>
            </div>
          </div>
      </div>
      <p className="copyright">
        &copy;{new Date().getFullYear()} Made with ❤️ by MSC
      </p>
    </div>
  );
}

export default Footer;
