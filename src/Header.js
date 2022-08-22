import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h2>James Dev</h2>
      </div>

      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="Contacts">Contact Me</Link>
      </div>
    </div>
  );
}

export default Header;
