import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styling/about/abouthero.css";
import AnimatedSection from "../animations/AnimatedSection";
import AnimatedHeading, { headingEndDelay } from "../animations/AnimatedHeading";
import FadeUp from "../animations/FadeUp";
import ProfilePic from "../../assets/images/ProfilePic.jpg";

import speedIcon from "../../assets/icons/speed.svg";
import shopifyIcon from "../../assets/icons/shopify.svg";
import uxIcon from "../../assets/icons/ux.svg";
import dataIcon from "../../assets/icons/data.svg";
import responsiveIcon from "../../assets/icons/responsive.svg";

const heroStats = [
    {
        icon: speedIcon,
        title: "6+ Years Experience",
        subtitle: "Designing and building websites",
    },
    {
        icon: dataIcon,
        title: "Web Development Degree",
        subtitle: "BSc focused on digital build",
    },
    {
        icon: responsiveIcon,
        title: "30+ Website Designs",
        subtitle: "Custom UI and UX work",
    },
    {
        icon: shopifyIcon,
        title: "5+ Full Projects",
        subtitle: "Built and launched end-to-end",
    },
    {
        icon: uxIcon,
        title: "UI / UX Designer",
        subtitle: "Clarity-led digital experiences",
    },
];

const marqueeItems = [...heroStats, ...heroStats];

const AboutHero = () => {
    const navigate = useNavigate();
    const headingText = "I Don’t Just Design Websites - I Build Them Properly";

    return (
        <AnimatedSection className="abouthero">
            <div className="abouthero__inner">
                <div className="abouthero__grid">
                    <div className="abouthero__copy">
                        <div className="abouthero__copy-bg" />

                        <FadeUp as="p" className="eyebrow abouthero__eyebrow" trigger="onLoad" duration={0.4} y={8}>ABOUT ME</FadeUp>

                        <AnimatedHeading
                            as="h1"
                            text={headingText}
                            className="heading1 abouthero__title"
                            highlightWords={["Websites", "Properly"]}
                            highlightClassName="abouthero__highlight"
                            trigger="onLoad"
                            delay={0.15}
                        />

                        <FadeUp
                            as="p"
                            className="subheading abouthero__subtitle"
                            trigger="onLoad"
                            afterHeading={headingText}
                            headingDelay={0.15}
                        >
                            I’m Jarek - a UI/UX focused designer and developer
                            creating websites that are structured properly,
                            perform well, and support real business goals.
                        </FadeUp>

                        <FadeUp
                            trigger="onLoad"
                            delay={headingEndDelay(headingText, 0.15) + 0.2}
                        >
                            <div className="abouthero__actions">
                                <button
                                    className="btn btn--indigo"
                                    onClick={() => navigate("/book-a-call")}
                                >
                                    Contact Me
                                </button>

                                <button
                                    className="btn btn--white"
                                    onClick={() => navigate("/projects")}
                                >
                                    View My Work
                                </button>
                            </div>
                        </FadeUp>
                    </div>

                    <div className="abouthero__image-wrap">
                        <div className="abouthero__image-frame">
                            <img
                                src={ProfilePic}
                                alt="Jarek Konarski"
                                className="abouthero__image"
                            />
                        </div>
                    </div>
                </div>

                <div className="abouthero__stats-marquee">
                    <div className="abouthero__stats-track">
                        {marqueeItems.map((item, index) => (
                            <article
                                key={`${item.title}-${index}`}
                                className="abouthero__stat-card"
                            >
                                <div className="abouthero__stat-icon-wrap">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="abouthero__stat-icon"
                                        draggable="false"
                                    />
                                </div>

                                <h3 className="abouthero__stat-title">
                                    {item.title}
                                </h3>

                                <p className="abouthero__stat-subtitle">
                                    {item.subtitle}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default AboutHero;