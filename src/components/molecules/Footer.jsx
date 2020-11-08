//React Core
import React from "react";
import { Link } from "react-router-dom";

//Other imports
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <nav className="Footer">
      <img
        className="logo"
        src={logo}
        alt="Logo of the company"
      />
      <h2>Contact us</h2>

      <h3>Phone</h3>
      <p>+46 783456789</p>
      
      <h3>Mail us</h3>
      <a href="mailto:yellowcorporation@gmail.com">yellowcorporation@gmail.com</a>

      
    </nav >
  );
}



