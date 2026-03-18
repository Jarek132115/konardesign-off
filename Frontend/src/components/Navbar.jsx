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
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo" onClick={() => goTo("/")}>
          <img
            src={Logo}
            alt="Konar Logo"
            className="navbar__logo-img"
          />
        </div>

        <nav className="navbar__links" aria-label="Primary navigation">
          <button
            className="navbar__link"
            onClick={() => goTo("/")}
          >
            Home
          </button>

          <button
            className="navbar__link"
            onClick={() => goTo("/projects")}
          >
            My Work
          </button>

          <button
            className="navbar__link"
            onClick={() => goTo("/services/custom")}
          >
            Custom Website
          </button>

          <button
            className="navbar__link"
            onClick={() => goTo("/services/ecommerce")}
          >
            E-Commerce Website
          </button>

          <button
            className="navbar__link"
            onClick={() => goTo("/blog")}
          >
            Blog
          </button>
        </nav>

        <div className="navbar__desktop-cta">
          <button
            className="btn btn--indigo"
            onClick={() => goTo("/book-a-call")}
          >
            Start a Project
          </button>
        </div>

        <div className="navbar__mobile-actions">
          <button
            className={`navbar__icon-button ${isMenuOpen ? "navbar__icon-button--open" : ""
              }`}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <div className="navbar__icon-inner">
              <span className="navbar__icon-line" />
              <span className="navbar__icon-line" />
              <span className="navbar__icon-line" />
            </div>
          </button>

          {isMenuOpen && (
            <div className="navbar__menu-dropdown">
              <button
                className="navbar__menu-item"
                onClick={() => goTo("/")}
              >
                Home
              </button>

              <button
                className="navbar__menu-item"
                onClick={() => goTo("/projects")}
              >
                My Work
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
                className="navbar__menu-item navbar__menu-item--cta"
                onClick={() => goTo("/book-a-call")}
              >
                Start a Project
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;