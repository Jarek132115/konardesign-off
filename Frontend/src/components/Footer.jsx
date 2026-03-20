// src/components/Footer.jsx
import React from "react";
import "../styling/footer.css";

import figmaIcon from "../assets/icons/Figma.svg";
import framerIcon from "../assets/icons/framer.svg";
import webflowIcon from "../assets/icons/webflow.svg";
import shopifyIcon from "../assets/icons/shopify.svg";
import googleIcon from "../assets/icons/google.svg";

const Footer = () => {
    return (
        <footer className="footer" aria-label="Site footer">
            <div className="footer__marquee">
                <div className="footer__marquee-inner">
                    <div className="footer__marquee-track">
                        <h2 className="heading2 footer__marquee-text">
                            Built with clarity. Designed for growth. Engineered to
                            perform.
                        </h2>
                        <h2 className="heading2 footer__marquee-text">
                            Built with clarity. Designed for growth. Engineered to
                            perform.
                        </h2>
                    </div>
                </div>
            </div>

            <div className="footer__inner">
                <div className="footer__top">
                    <div className="footer__col footer__col--brand">
                        <div className="footer__logo">KonarDesign</div>

                        <p className="footer__tagline subheading">
                            Websites engineered for clarity, conversion, and
                            long-term growth, built with custom design,
                            performance-focused development, and data-driven
                            strategy.
                        </p>

                        <div className="footer__tools" aria-label="Tools used">
                            <span className="footer__tool">
                                <img src={figmaIcon} alt="Figma" />
                            </span>
                            <span className="footer__tool">
                                <img src={framerIcon} alt="Framer" />
                            </span>
                            <span className="footer__tool">
                                <img src={webflowIcon} alt="Webflow" />
                            </span>
                            <span className="footer__tool">
                                <img src={shopifyIcon} alt="Shopify" />
                            </span>
                            <span className="footer__tool">
                                <img src={googleIcon} alt="Google" />
                            </span>
                        </div>
                    </div>

                    <div className="footer__col footer__col--links">
                        <h2 className="footer__heading">Quick Links</h2>
                        <ul className="footer__list">
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#portfolio">My Work</a>
                            </li>
                            <li>
                                <a href="#blog">Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__col footer__col--contact">
                        <h2 className="footer__heading">Contact</h2>
                        <ul className="footer__list">
                            <li>
                                <a href="mailto:hello@konardesign.com">
                                    hello@konardesign.com
                                </a>
                            </li>
                            <li>
                                <a href="/book-a-call">Book a Call</a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://dribbble.com"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Dribbble
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__divider" />

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {new Date().getFullYear()} KonarDesign. All Rights
                        Reserved
                    </p>

                    <div className="footer__bottom-links">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms &amp; Conditions</a>
                        <a href="#cookies">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;