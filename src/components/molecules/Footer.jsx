//React Core
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    
    <footer className="footer-distributed">
      
      <div className="footer-left">
        <h2>Contact us</h2>

        <h3>Phone</h3>
        <p>+46 783456789</p>
        <p>Monday-Friday 8:00 A.M to 6:00 P.M</p>
        <h3>Write us</h3>
        <a href="mailto:parcelquery@yellow.co.se">yellowcorporation@gmail.com </a>
        <i class="fas fa-envelope"></i>
      </div>
      <div className="footer-right">
        <h2>Follow us</h2>
        <p>
          <a href="https://www.instagram.com/dhl_global/">
            <i class="fab fa-instagram-square"> instagram</i>
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/dhl">
            <i class="fab fa-facebook-square"> facebook</i>
          </a>
        </p>
        <p>
          <a href="https://www.youtube.com/user/dhl">
            <i class="fab fa-youtube"> youtube</i>
          </a>
        </p>
      </div>
    </footer >
  );
}



