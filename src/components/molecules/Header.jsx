//React Core
import React from "react";
import { Link } from "react-router-dom";

//Other imports
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <nav>
      <img
        className="logo"
        src={logo}
        alt="Logo of the company"
      />
      <ul className="nav-links">
        <Link to="/Faq">
          <li>Faq</li>
        </Link>
        <Link to="/" >
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
}


