//React Core
import React from "react";
import { Link } from "react-router-dom";

//Other imports
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img
        className="logo"
        src={logo}
        alt="Logo of the company"
      />
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Faq" >
          <li>FAQ</li>
        </Link>
      </ul>
    </header>
  );
}


