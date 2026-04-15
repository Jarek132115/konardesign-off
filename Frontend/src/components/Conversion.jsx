import React from "react";
import "../styling/conversion.css";

import AnimatedHeading from "./animations/AnimatedHeading";
import FadeUp from "./animations/FadeUp";
import { StaggerGroup, StaggerItem } from "./animations/StaggerGroup";
import AnimatedSection from "./animations/AnimatedSection";

import conversionImage1 from "../assets/images/Conversion1.png";
import conversionImage2 from "../assets/images/Conversion2.png";
import conversionImage3 from "../assets/images/Conversion3.png";
import conversionImage4 from "../assets/images/Conversion4.png";

const conversionItems = [
    {
        id: "strategy",
        eyebrow: "Strategy",
        titleParts: [
            { text: "Start with the ", highlight: false },
            { text: "right direction", highlight: true },
            { text: ".", highlight: false },
        ],
        description:
            "The structure, audience, and goals are defined first, so the site has a solid foundation to build on.",
        image: conversionImage1,
    },
    {
        id: "conversion",
        eyebrow: "Conversion",
        titleParts: [
            { text: "Guide ", highlight: false },
            { text: "attention", highlight: true },
            { text: ". Reduce hesitation.", highlight: false },
        ],
        description:
            "Layout, hierarchy, and calls to action are used intentionally so users always know where to look and what to do next.",
        image: conversionImage2,
    },
    {
        id: "performance",
        eyebrow: "Performance",
        titleParts: [
            { text: "Build it ", highlight: false },
            { text: "properly", highlight: true },
            { text: " from the start.", highlight: false },
        ],
        description:
            "Clean code, responsive structure, and SEO-aware decisions ensure the site performs properly after launch.",
        image: conversionImage3,
    },
    {
        id: "experience",
        eyebrow: "Experience",
        titleParts: [
            { text: "Remove ", highlight: false },
            { text: "friction", highlight: true },
            { text: ". Improve flow.", highlight: false },
        ],
        description:
            "Clear journeys and thoughtful layouts help users move through the site naturally without confusion or drop-off.",
        image: conversionImage4,
    },
];

const Conversion = () => {
    return (
        <AnimatedSection className="conversion">
            <div className="conversion__inner">
                <header className="conversion__header">
                    <FadeUp as="p" className="eyebrow conversion__eyebrow">
                        HOW I BUILD
                    </FadeUp>

                    <AnimatedHeading
                        as="h2"
                        className="heading2 conversion__title"
                        wordClassName="conversion__title-word"
                        highlightWords={["4", "Principles"]}
                        highlightClassName="conversion__title-highlight"
                        text="4 Principles I Apply in Every Project"
                    />

                    <FadeUp as="p" className="subheading conversion__subtitle" afterHeading="4 Principles I Apply in Every Project">
                        Every project is built around the same core principles,
                        focused on clarity, usability, and performance from the
                        very beginning.
                    </FadeUp>
                </header>

                <StaggerGroup className="conversion__grid" stagger={0.08}>
                    {conversionItems.map((item, index) => {
                        const isDesktopReverse = index >= 2;
                        const isSingleColumnReverse = index % 2 === 1;

                        return (
                            <StaggerItem
                                as="article"
                                key={item.id}
                                className={`conversion__card ${isDesktopReverse
                                    ? "conversion__card--reverse"
                                    : ""
                                    } ${isSingleColumnReverse
                                        ? "conversion__card--single-reverse"
                                        : ""
                                    }`}
                            >
                                <div className="conversion__image-wrap">
                                    <div className="conversion__image-card">
                                        <img
                                            src={item.image}
                                            alt={item.eyebrow}
                                            className="conversion__image"
                                            draggable="false"
                                        />
                                    </div>
                                </div>

                                <div className="conversion__content">
                                    <div className="conversion__media-badge">
                                        {item.eyebrow.toUpperCase()}
                                    </div>

                                    <h3 className="heading4 conversion__item-title">
                                        {item.titleParts.map((part, partIndex) => (
                                            <span
                                                key={`${item.id}-${partIndex}`}
                                                className={
                                                    part.highlight
                                                        ? "conversion__title-accent"
                                                        : ""
                                                }
                                            >
                                                {part.text}
                                            </span>
                                        ))}
                                    </h3>

                                    <p className="body conversion__item-text">
                                        {item.description}
                                    </p>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerGroup>
            </div>
        </AnimatedSection>
    );
};

export default Conversion;
