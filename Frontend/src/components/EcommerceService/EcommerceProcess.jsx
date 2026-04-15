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
        label: "Store Strategy & Positioning",
        title: "Understanding Your Store Before We Touch A Pixel.",
        description:
            "We start by getting clear on your products, margins, and customers so the store is built around what actually drives sales — not just what looks nice.",
        bullets: [
            "Current store and performance review (if you have one)",
            "Target audience, AOV and revenue goals clarified",
            "Product mix, hero offers and bundles mapped",
            "Competitive and positioning overview for your niche",
            "Success metrics, timelines and scope agreed",
        ],
    },
    {
        id: "structure",
        label: "Structure & Funnel Map",
        title: "Designing A Conversion-Focused Store Architecture.",
        description:
            "We map out how shoppers move from first visit to checkout — making sure every page has a clear job in the buying journey.",
        bullets: [
            "Store sitemap covering key collections, product and content pages",
            "Collection structures, filters and navigation agreed",
            "Upsell, cross-sell and bundle opportunities identified",
            "Landing pages and offer funnels planned for campaigns",
            "Sign-off on structure before design begins",
        ],
    },
    {
        id: "design",
        label: "Design & Figma Access",
        title: "Designing Your Storefront — Collaboratively.",
        description:
            "We design every key template in Figma so you can see how the store will look on desktop and mobile, and leave comments directly on the work.",
        bullets: [
            "Shared Figma file with full comment access",
            "High-fidelity designs for home, collection, product and key flows",
            "Design system for buttons, cards, typography and colour",
            "Checkout and cart UX patterns tailored to your audience",
            "Regular updates and review calls at agreed checkpoints",
        ],
    },
    {
        id: "develop",
        label: "Build, Integrations & Testing",
        title: "Engineering A Fast, Stable Ecommerce Build.",
        description:
            "Once designs are approved, we turn everything into a performant store – wiring in payments, shipping, tracking and SEO foundations.",
        bullets: [
            "Pixel-accurate front-end build in your chosen platform",
            "Payment gateways and shipping rules configured and tested",
            "Performance, accessibility and SEO best practices applied",
            "Analytics, pixels and key conversion events integrated",
            "Cross-browser and device testing before launch",
        ],
    },
    {
        id: "launch",
        label: "Launch, Training & Optimisation",
        title: "Launching With Confidence — And A Plan To Optimise.",
        description:
            "We don’t just flip the switch and leave. We help you launch smoothly, hand over the store, and set you up to keep improving results.",
        bullets: [
            "Staging review and final QA checklist before go-live",
            "Domain, DNS and deployment handled end-to-end",
            "Training session on product management, orders and content",
            "Documentation for future updates, promos and experiments",
            "Optional retainers for ongoing CRO and feature improvements",
        ],
    },
];

const MOBILE_STACK_BREAKPOINT = 850;

const EcommerceProcess = () => {
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
                        E-COMMERCE WEBSITE PROCESS
                    </FadeUp>

                    <AnimatedHeading
                        as="h2"
                        className="heading2 process__title"
                        text="A Clear, Stress-Free E-Commerce Build Process."
                        highlightWords={["Stress-Free"]}
                        highlightClassName="process__title-highlight"
                        delay={0.08}
                    />

                    <FadeUp
                        as="p"
                        className="subheading process__subtitle"
                        duration={0.4}
                        afterHeading="A Clear, Stress-Free E-Commerce Build Process."
                        headingDelay={0.08}
                    >
                        From first strategy call to launch, you’ll see every step,
                        have access to the live design file, and know exactly what
                        we’re working on as your store moves toward launch.
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

export default EcommerceProcess;
