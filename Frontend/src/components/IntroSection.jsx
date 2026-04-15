import React from "react";
import "../styling/intro.css";

import AnimatedHeading from "./animations/AnimatedHeading";
import FadeUp from "./animations/FadeUp";
import { StaggerGroup, StaggerItem } from "./animations/StaggerGroup";
import AnimatedSection from "./animations/AnimatedSection";

import figmaIcon from "../assets/icons/figma-icon.svg";
import aiIcon from "../assets/icons/ai-icon.svg";
import psIcon from "../assets/icons/ps-icon.svg";
import aeIcon from "../assets/icons/ae-icon.svg";

import vscodeIcon from "../assets/icons/vscode-icon.svg";
import framerIcon from "../assets/icons/framer-icon.svg";
import webflowIcon from "../assets/icons/webflow-icon.svg";

import googleIcon from "../assets/icons/google-icon.svg";
import googleAnalyticsIcon from "../assets/icons/google-analytics-icon.svg";

const IntroSection = () => {
    return (
        <AnimatedSection className="intro">
            <div className="intro__container">
                <div className="intro__left">
                    <FadeUp as="p" className="eyebrow intro__eyebrow">
                        WHAT I DO
                    </FadeUp>

                    <AnimatedHeading
                        as="h2"
                        className="intro__headline heading2"
                        wordClassName="intro__headline-word"
                        highlightWords={["Strategy", "Design", "Performance"]}
                        highlightClassName="intro__headline-highlight"
                        text="Strategy. Design. Performance. Built with clarity from start to finish."
                    />

                    <FadeUp as="p" className="intro__subheading subheading" afterHeading="Strategy. Design. Performance. Built with clarity from start to finish.">
                        I take projects from early direction through to design and development, making sure everything is structured properly, easy to use, and built to perform. The goal is simple - create websites that not only look good, but actually work.
                    </FadeUp>
                </div>

                <StaggerGroup className="intro__right" stagger={0.08}>
                    <StaggerItem className="intro__item">
                        <h3 className="intro__item-title heading3">
                            Design &amp; UX
                        </h3>
                        <p className="intro__item-text body">
                            Clear layouts, strong hierarchy, and user-focused design that makes content easy to understand and actions easy to take.
                        </p>
                        <div className="intro__icons-row">
                            <span className="intro__icon">
                                <img src={figmaIcon} alt="Figma" />
                            </span>
                            <span className="intro__icon">
                                <img src={aiIcon} alt="Adobe Illustrator" />
                            </span>
                            <span className="intro__icon">
                                <img src={psIcon} alt="Adobe Photoshop" />
                            </span>
                            <span className="intro__icon">
                                <img src={aeIcon} alt="Adobe After Effects" />
                            </span>
                        </div>
                    </StaggerItem>

                    <StaggerItem className="intro__item">
                        <h3 className="intro__item-title heading3">
                            Development &amp; Build
                        </h3>
                        <p className="intro__item-text body">
                            Fast, responsive websites built with clean code and a focus on long-term scalability across all devices.
                        </p>
                        <div className="intro__icons-row">
                            <span className="intro__icon">
                                <img src={vscodeIcon} alt="VS Code" />
                            </span>
                            <span className="intro__icon">
                                <img src={framerIcon} alt="Framer" />
                            </span>
                            <span className="intro__icon">
                                <img src={webflowIcon} alt="Webflow" />
                            </span>
                        </div>
                    </StaggerItem>

                    <StaggerItem className="intro__item">
                        <h3 className="intro__item-title heading3">
                            Performance &amp; Visibility
                        </h3>
                        <p className="intro__item-text body">
                            Strong structure, fast load times, and SEO-aware decisions that help your website perform properly after launch.
                        </p>
                        <div className="intro__icons-row">
                            <span className="intro__icon">
                                <img src={googleIcon} alt="Google" />
                            </span>
                            <span className="intro__icon">
                                <img
                                    src={googleAnalyticsIcon}
                                    alt="Google Analytics"
                                />
                            </span>
                        </div>
                    </StaggerItem>

                    <StaggerItem as="p" className="intro__bottom-text">
                        One clear direction. One consistent build. No unnecessary complexity.
                    </StaggerItem>
                </StaggerGroup>
            </div>
        </AnimatedSection>
    );
};

export default IntroSection;
