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
        <footer className="footer">
            <div className="footer__inner">
                {/* LEFT COLUMN */}
                <div className="footer__col footer__col--brand">
                    <div className="footer__logo">KonarDesign</div>

                    <p className="footer__tagline subheading">
                        Websites Engineered For Clarity, Conversion, And Long-Term
                        Growth—Built With Custom Design, Performance-Focused
                        Development, And Data-Driven Strategy.
                    </p>

                    <div className="footer__tools">
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

                {/* QUICK LINKS */}
                <div className="footer__col">
                    <h4 className="footer__heading">Quick Links</h4>
                    <ul className="footer__list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* SERVICES */}
                <div className="footer__col">
                    <h4 className="footer__heading">Services</h4>
                    <ul className="footer__list">
                        <li><a href="#services-custom">Custom Websites</a></li>
                        <li><a href="#services-ecommerce">E-Commerce Websites</a></li>
                        <li><a href="#services-growth">Ongoing Growth Plans</a></li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div className="footer__col">
                    <h4 className="footer__heading">Get in Touch</h4>
                    <ul className="footer__list">
                        <li><a href="mailto:hello@konardesign.com">hello@konardesign.com</a></li>
                        <li><a href="#book-call">Book a Call</a></li>
                        <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
                        <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
                        <li><a href="https://dribbble.com" target="_blank">Dribbble</a></li>
                        <li><a href="https://github.com" target="_blank">GitHub</a></li>
                    </ul>
                </div>

                <div className="footer__divider"></div>

                {/* BOTTOM ROW */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {new Date().getFullYear()} KonarDesign. All Rights Reserved
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
