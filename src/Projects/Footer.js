import React from "react";
import "./Footer.css";
import mscfooterlogo from "./img/mscfooterlogo.png";
import mscfooterbgimage from "./img/mscfooterbgimage.png";
import fb from "./img/fb.png";
import insta from "./img/insta.png";
import linkedin from "./img/linkedin.png";

function Footer() {
  return (
    
      <div className="container">
        <img src={mscfooterbgimage} alt="" className="bg-img" />
        <div id="row">
          {/* Column1 */}
          <div className="about-image">
            <img src={mscfooterlogo} alt="" />
          </div>
          {/* Column2 */}
          <div id="right">
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
                <li><a href="#"><img src={linkedin} alt="" /></a></li>
                <li><a href="#"><img src={fb} alt="" /></a></li>
                <li><a href="#"><img src={insta} alt="" /></a></li>
              </ui>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Made ❤️ from blah blah
          </p>
        </div>
      </div>
  
  );
}

export default Footer;