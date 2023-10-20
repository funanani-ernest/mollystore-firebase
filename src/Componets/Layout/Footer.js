import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Added FontAwesomeIcon import
import {
  faTwitter,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
         <p>molly online store © 2023 Powered by duvha Technologies</p>
         <p>cell:0794288410</p>
         <div className="footer-content">
  <a href="https://twitter.com">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="https://www.facebook.com/profile.php?id=61551567441427">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href="https://api.whatsapp.com/send?phone=0818836917&text=Hello%21">
    <FontAwesomeIcon icon={faWhatsapp} />
  </a>
</div>

    </div>
  );
};

export default Footer;
