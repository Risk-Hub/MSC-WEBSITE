import React from "react";
import "./Footer.css";
import mscfooterlogo from '../images/mscfooterlogo.png';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className='about-image'>
                <img src={mscfooterlogo} alt=''/>
            </div>
          {/* Column2 */}
          <div className="contact-info">
            <h4>Contact us</h4>
            <ui className="list-unstyled">
              <li>Jane Cooper (239) 555-0108</li>
              <li>Jane Cooper (239) 555-0108</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>FOLLOW US</h4>
            <ui className="list-unstyled">
              <li>Linked In</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Made ❤️ from blah blah
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
