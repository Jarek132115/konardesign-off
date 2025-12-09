import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styling/navbar.css";
import "../styling/buttons.css";

import Logo from "../assets/icons/Logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const goTo = (path) => {
    navigate(path);
    setIsMenuOpen(false); // close menu after navigation
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* LOGO — CLICK → HOME */}
        <div className="navbar__logo" onClick={() => goTo("/")}>
          <img
            src={Logo}
            alt="Konar Logo"
            className="navbar__logo-img"
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* RIGHT SIDE – ONLY MENU ICON NOW */}
        <div className="navbar__actions">
          {/* HAMBURGER BUTTON */}
          <button
            className={`navbar__icon-button ${isMenuOpen ? "navbar__icon-button--open" : ""
              }`}
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <div className="navbar__icon-inner">
              <span className="navbar__icon-line" />
              <span className="navbar__icon-line" />
              <span className="navbar__icon-line" />
            </div>
          </button>

          {/* DROPDOWN MENU */}
          {isMenuOpen && (
            <div className="navbar__menu-dropdown">
              <button className="navbar__menu-item" onClick={() => goTo("/")}>
                Home
              </button>

              <button
                className="navbar__menu-item"
                onClick={() => goTo("/projects")}
              >
                Our Work
              </button>

              <button
                className="navbar__menu-item"
                onClick={() => goTo("/services/custom")}
              >
                Custom Website
              </button>

              <button
                className="navbar__menu-item"
                onClick={() => goTo("/services/ecommerce")}
              >
                E-Commerce Website
              </button>

              <button
                className="navbar__menu-item"
                onClick={() => goTo("/blog")}
              >
                Blog
              </button>

              <button
                className="navbar__menu-item"
                onClick={() => goTo("/book-a-call")}
              >
                Book A Call
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
