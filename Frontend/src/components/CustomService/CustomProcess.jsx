import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "../../styling/CustomService/customprocess.css";

import AnimatedHeading from "../animations/AnimatedHeading";
import FadeUp from "../animations/FadeUp";
import { StaggerGroup, StaggerItem } from "../animations/StaggerGroup";
import AnimatedSection from "../animations/AnimatedSection";

const steps = [
    {
        id: "discovery",
        label: "Discovery & Strategy",
        title: "Understanding Your Business Before We Build.",
        description:
            "We start by getting clear on your offers, audience, and goals so the website is built around what actually drives revenue — not just what looks good.",
        bullets: [
            "Current site + funnel review (if you have one)",
            "Audience, offer and conversion goals clarified",
            "Competitive and positioning overview",
            "Technical requirements and constraints mapped",
            "Project scope, milestones and success metrics agreed",
        ],
    },
    {
        id: "structure",
        label: "Structure & Content Plan",
        title: "Mapping A Conversion-Ready Website.",
        description:
            "We design the information architecture and page structure so each screen has a clear job — educate, reassure, or convert.",
        bullets: [
            "Page-level sitemap and user flows",
            "Section-by-section breakdown for key pages",
            "Conversion-focused content outline and CTAs",
            "SEO and landing-page strategy baked into the plan",
            "Sign-off on structure before any pixels are pushed",
        ],
    },
    {
        id: "design",
        label: "Design & Figma Access",
        title: "Designing Your Custom Experience — Together.",
        description:
            "We design every page from scratch in a shared Figma file so you can see progress in real time, comment directly on the work, and stay involved without extra meetings.",
        bullets: [
            "Shared Figma file with full comment access",
            "High-fidelity designs for desktop, tablet and mobile",
            "Design system for components, typography and colour",
            "You choose your update rhythm: daily, weekly or monthly",
            "Live review calls for key milestones and refinements",
        ],
    },
    {
        id: "develop",
        label: "Build & Test",
        title: "Engineering A Fast, Stable Build.",
        description:
            "Once designs are locked, we translate everything into a performant React build with clean structure, analytics and SEO foundations wired in.",
        bullets: [
            "Pixel-accurate React front-end implementation",
            "CMS or content setup based on your stack",
            "Performance and accessibility optimisations",
            "Analytics and tracking integrated from day one",
            "Cross-browser and device testing before launch",
        ],
    },
    {
        id: "launch",
        label: "Launch, Training & Support",
        title: "Going Live With Confidence.",
        description:
            "We don’t just push deploy and disappear. We launch carefully, train your team, and stay close as you start sending real traffic through the site.",
        bullets: [
            "Staging review and final pre-launch checklist",
            "Domain, hosting and deployment handled end-to-end",
            "Training session on the CMS and key flows",
            "Documentation for future updates and experiments",
            "Optional retainers for ongoing optimisation and tests",
        ],
    },
];

const MOBILE_STACK_BREAKPOINT = 850;

const CustomProcess = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobileStack, setIsMobileStack] = useState(false);

    const activeStep = steps[activeIndex];

    const goPrev = () => {
        setActiveIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
    };

    const goNext = () => {
        setActiveIndex((prev) =>
            prev === steps.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {
        const updateMode = () => {
            if (typeof window === "undefined") return;
            setIsMobileStack(window.innerWidth <= MOBILE_STACK_BREAKPOINT);
        };

        updateMode();
        window.addEventListener("resize", updateMode);
        return () => window.removeEventListener("resize", updateMode);
    }, []);

    return (
        <AnimatedSection className="process">
            <div className="process__inner">
                <header className="process__header">
                    <FadeUp
                        as="p"
                        className="eyebrow process__eyebrow"
                        duration={0.35}
                    >
                        CUSTOM WEBSITE PROCESS
                    </FadeUp>

                    <AnimatedHeading
                        as="h2"
                        className="heading2 process__title"
                        text="A Clear, Stress-Free Custom Website Process."
                        highlightWords={["Stress-Free"]}
                        highlightClassName="process__title-highlight"
                        delay={0.08}
                    />

                    <FadeUp
                        as="p"
                        className="subheading process__subtitle"
                        duration={0.4}
                        afterHeading="A Clear, Stress-Free Custom Website Process."
                        headingDelay={0.08}
                    >
                        From first strategy call to launch, you’ll see every
                        step, have access to the live design file, and know
                        exactly what we’re working on each week.
                    </FadeUp>
                </header>

                {/* DESKTOP / TABLET SLIDER */}
                {!isMobileStack && (
                    <>
                        <StaggerGroup className="process__steps" delay={0.28}>
                            {steps.map((step, index) => (
                                <StaggerItem
                                    as="button"
                                    key={step.id}
                                    type="button"
                                    className={`process__step-pill body ${index === activeIndex
                                        ? "process__step-pill--active"
                                        : ""
                                        }`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {step.label}
                                </StaggerItem>
                            ))}
                        </StaggerGroup>

                        <div className="process__card-wrapper">
                            <button
                                type="button"
                                className="process__nav process__nav--prev"
                                onClick={goPrev}
                                aria-label="Previous step"
                            >
                                ←
                            </button>

                            <AnimatePresence mode="wait">
                                <motion.article
                                    key={activeIndex}
                                    className={`process__card process__card--bg${activeIndex + 1
                                        }`}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="process__card-inner">
                                        <div className="process__card-left">
                                            <div className="process__stack-number process__stack-number--desktop">
                                                {activeIndex + 1}
                                            </div>

                                            <h3 className="heading3 process__card-title">
                                                {activeStep.title}
                                            </h3>
                                            <p className="body process__card-description">
                                                {activeStep.description}
                                            </p>
                                        </div>

                                        <div className="process__card-right">
                                            <ul className="process__list">
                                                {activeStep.bullets.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="process__list-item body"
                                                    >
                                                        <span className="process__list-icon">
                                                            ●
                                                        </span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.article>
                            </AnimatePresence>

                            <button
                                type="button"
                                className="process__nav process__nav--next"
                                onClick={goNext}
                                aria-label="Next step"
                            >
                                →
                            </button>
                        </div>
                    </>
                )}

                {/* MOBILE STACKED VERSION */}
                {isMobileStack && (
                    <StaggerGroup className="process__stack">
                        {steps.map((step, index) => (
                            <StaggerItem
                                as="article"
                                key={step.id}
                                className={`process__card process__card--stack process__card--bg${index + 1
                                    }`}
                            >
                                <div className="process__stack-number">
                                    {index + 1}
                                </div>

                                <div className="process__card-inner process__card-inner--stack">
                                    <div className="process__card-left">
                                        <h3 className="heading3 process__card-title">
                                            {step.title}
                                        </h3>
                                        <p className="body process__card-description">
                                            {step.description}
                                        </p>
                                    </div>

                                    <div className="process__card-right">
                                        <ul className="process__list">
                                            {step.bullets.map((item) => (
                                                <li
                                                    key={item}
                                                    className="process__list-item body"
                                                >
                                                    <span className="process__list-icon">
                                                        ●
                                                    </span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                )}
            </div>
        </AnimatedSection>
    );
};

export default CustomProcess;
