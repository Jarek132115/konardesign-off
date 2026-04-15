import React from "react";
import "../styling/offer.css";

import AnimatedHeading from "./animations/AnimatedHeading";
import FadeUp from "./animations/FadeUp";
import { StaggerGroup, StaggerItem } from "./animations/StaggerGroup";
import AnimatedSection from "./animations/AnimatedSection";

import essentialsIcon from "../assets/icons/essentials.svg";
import performanceIcon from "../assets/icons/performance.svg";
import expansionIcon from "../assets/icons/expansion.svg";

const offers = [
    {
        id: "essentials",
        name: "Essentials",
        tagline: "For businesses that need maintenance and ongoing support.",
        includes: [
            "Content & Image Updates",
            "Bug Fixes & Hosting Help",
            "Security & Uptime Monitoring",
            "Basic Performance Checks",
            "Email Support (24/7)",
        ],
        price: "£295/Mo",
        featured: false,
        icon: essentialsIcon,
    },
    {
        id: "performance",
        name: "Performance",
        tagline: "For businesses optimizing conversions and user experience.",
        includes: [
            "All Essentials Features",
            "UX & UI Improvements",
            "Analytics & Reporting",
            "Heatmaps & User Tracking",
            "SEO Updates & Refinements",
            "A/B Tests To Improve Conversion",
        ],
        price: "£495/Mo",
        featured: true,
        icon: performanceIcon,
    },
    {
        id: "expansion",
        name: "Expansion",
        tagline:
            "For businesses scaling fast and adding new digital experiences.",
        includes: [
            "All Performance Features",
            "New Landing Pages",
            "New Features & Integrations",
            "CRO Roadmap & Experiments",
            "Content Strategy & Updates",
            "Priority Support",
            "Quarterly Strategy Calls",
        ],
        price: "£995/Mo",
        featured: false,
        icon: expansionIcon,
    },
];

const OfferSection = () => {
    return (
        <AnimatedSection className="offer">
            <div className="offer__inner">
                <header className="offer__header">
                    <FadeUp as="p" className="eyebrow offer__eyebrow">
                        ONGOING PARTNERSHIPS
                    </FadeUp>
                    <AnimatedHeading
                        as="h2"
                        className="heading2 offer__title"
                        wordClassName="offer__title-word"
                        highlightWords={["Growth"]}
                        highlightClassName="offer__title-highlight"
                        text="Ongoing Growth & Optimization"
                    />
                    <FadeUp as="p" className="subheading offer__subtitle" afterHeading="Ongoing Growth & Optimization">
                        We stay after launch to improve performance, refine UX, add
                        features, and support your business long term.
                    </FadeUp>
                </header>

                <StaggerGroup className="offer__grid" stagger={0.07}>
                    {offers.map((plan) => (
                        <StaggerItem
                            as="article"
                            key={plan.id}
                            className={`offer__card ${plan.featured ? "offer__card--featured" : ""
                                }`}
                        >
                            <div className="offer__card-inner">
                                <div className="offer__icon">
                                    <img src={plan.icon} alt={`${plan.name} icon`} />
                                </div>

                                <h3 className="heading3 offer__plan-name">
                                    {plan.name}
                                </h3>

                                <p className="body offer__plan-tagline">
                                    {plan.tagline}
                                </p>

                                <div className="offer__includes">
                                    <p className="offer__includes-label">Includes:</p>
                                    <div className="offer__pills">
                                        {plan.includes.map((item) => (
                                            <span
                                                key={item}
                                                className="body offer__pill"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="offer__price-bar">
                                    <span className="body offer__price">
                                        {plan.price}
                                    </span>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerGroup>
            </div>
        </AnimatedSection>
    );
};

export default OfferSection;
