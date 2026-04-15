import React from "react";
import "../styling/differencesection.css";

import AnimatedHeading from "./animations/AnimatedHeading";
import FadeUp from "./animations/FadeUp";
import { StaggerGroup, StaggerItem } from "./animations/StaggerGroup";
import AnimatedSection from "./animations/AnimatedSection";

const proChips = [
    "Strategy-first UX",
    "Custom UI, no templates",
    "Fast, SEO-ready build",
    "Conversion-focused layout",
    "Scalable CMS setup",
    "Clean, modular code",
    "Analytics built in",
    "Easy to improve later",
];

const cheapChips = [
    "Reused generic templates",
    "No UX strategy",
    "Slow performance",
    "Weak SEO structure",
    "Brittle hard-coded layouts",
    "No analytics setup",
    "Hard to scale or update",
    "Expensive to fix later",
];

const DifferenceSection = () => {
    return (
        <AnimatedSection className="difference">
            <div className="difference__inner">
                <header className="difference__header">
                    <FadeUp as="p" className="eyebrow difference__eyebrow">
                        WHY THE BUILD MATTERS
                    </FadeUp>

                    <AnimatedHeading
                        as="h2"
                        className="heading2 difference__title"
                        highlightWords={["Properly", "Built"]}
                        highlightClassName="difference__highlight"
                        text="The Difference Between Good and Properly Built"
                    />

                    <FadeUp as="p" className="subheading difference__subtitle" afterHeading="The Difference Between Good and Properly Built">
                        A lot of websites look fine at first glance, but
                        underneath they are slow, hard to scale, and expensive
                        to fix later.
                    </FadeUp>
                </header>

                <StaggerGroup className="difference__grid" stagger={0.08}>
                    <StaggerItem as="article" className="difference__card">
                        <div className="difference__badge difference__badge--pro">
                            Built properly
                        </div>

                        <h3 className="heading4 difference__card-title">
                            Built to perform and scale
                        </h3>

                        <p className="body difference__card-subtitle">
                            Clear foundations from the start
                        </p>

                        <div className="difference__chips">
                            {proChips.map((chip) => (
                                <span
                                    key={chip}
                                    className="difference__chip body"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </StaggerItem>

                    <StaggerItem as="article" className="difference__card">
                        <div className="difference__badge difference__badge--cheap">
                            Poorly built
                        </div>

                        <h3 className="heading4 difference__card-title">
                            Looks fine, breaks later
                        </h3>

                        <p className="body difference__card-subtitle">
                            Shortcuts early create bigger problems later
                        </p>

                        <div className="difference__chips">
                            {cheapChips.map((chip) => (
                                <span
                                    key={chip}
                                    className="difference__chip body"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </StaggerItem>
                </StaggerGroup>
            </div>
        </AnimatedSection>
    );
};

export default DifferenceSection;
