//React Core
import React from "react";
import { Link } from "react-router-dom";
//import {  } from 'react-icons/fa';

//Other imports
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-left">
        <h2>Contact us</h2>

        <h3>Phone</h3>
        <p>+46 783456789</p>

        <h3>Mail us</h3>
        <a href="mailto:yellowcorporation@gmail.com">yellowcorporation@gmail.com</a>
        <i class="fas fa-envelope"></i>
      </div>
      <div className="footer-right">
        <h2>Follow us</h2>
        <p>
          <a href="https://www.instagram.com/dhl_global/">
            <i class="fab fa-instagram-square"></i>
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/dhl">
            <i class="fab fa-facebook-square"></i>
          </a>
        </p>
        <p>
          <a href="https://www.youtube.com/user/dhl">
            <i class="fab fa-youtube"></i>
          </a>
        </p>
      </div>
      <p className="center"> 2020 © Yellow Corportions. All rights reserved.</p>
    </footer >
  );
}



