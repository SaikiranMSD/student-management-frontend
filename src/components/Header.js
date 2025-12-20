import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //B06764
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#CB7E7B" }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <span style={{ fontWeight: "bold" }}>
              Student Management System
            </span>
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <span style={{ fontWeight: "bold" }}>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <span style={{ fontWeight: "bold" }}>About Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <span style={{ fontWeight: "bold" }}>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
