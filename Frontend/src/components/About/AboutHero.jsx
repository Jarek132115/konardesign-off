import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styling/about/abouthero.css";
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

    return (
        <section className="abouthero">
            <div className="abouthero__inner">
                <div className="abouthero__grid">
                    <div className="abouthero__copy">
                        <div className="abouthero__copy-bg" />

                        <p className="eyebrow abouthero__eyebrow">ABOUT ME</p>

                        <h1 className="heading1 abouthero__title">
                            I Design and Build{" "}
                            <span className="abouthero__highlight">Websites</span>{" "}
                            That Feel{" "}
                            <span className="abouthero__highlight">Premium</span>{" "}
                            and <span className="abouthero__highlight">Work</span>{" "}
                            Properly
                        </h1>

                        <p className="subheading abouthero__subtitle">
                            I focus on clarity, performance, and structure,
                            creating digital experiences that are not just
                            visually strong, but actually support growth.
                        </p>

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
        </section>
    );
};

export default AboutHero;