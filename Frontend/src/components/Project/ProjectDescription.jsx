import React from "react";
import "../../styling/projects/project1/projectdescription.css";

import AnimatedHeading from "../animations/AnimatedHeading";
import FadeUp from "../animations/FadeUp";
import { StaggerGroup, StaggerItem } from "../animations/StaggerGroup";
import AnimatedSection from "../animations/AnimatedSection";

const challengePoints = [
    {
        title: "Explaining a newer type of product",
        text: "Most visitors are familiar with traditional business cards, not a digital-first alternative. The website needed to explain the product quickly and make the value feel obvious from the first few sections.",
    },
    {
        title: "Building trust early",
        text: "Because the offer sits between software, branding, and networking tools, the site needed to feel polished, credible, and easy to understand straight away.",
    },
    {
        title: "Creating a clearer path to action",
        text: "The existing experience needed stronger hierarchy around product value, comparison, and calls to action so users could move from interest to purchase with less friction.",
    },
];

const solutionPoints = [
    {
        title: "Sharper product positioning",
        text: "I reworked the messaging so KonarCard felt more immediate and relevant, focusing on convenience, modern networking, and the practical value of a digital card system.",
    },
    {
        title: "Stronger page hierarchy",
        text: "The layout was restructured to guide attention more clearly, giving more weight to product explanation, trust-building sections, and the conversion journey.",
    },
    {
        title: "A more premium presentation",
        text: "Typography, spacing, contrast, and content structure were all refined so the brand felt cleaner, more established, and more distinct within its category.",
    },
];

const ProjectDescription = () => {
    return (
        <AnimatedSection className="project-description">
            <div className="project-description__container">
                <div className="project-description__left">
                    <FadeUp
                        as="p"
                        className="eyebrow project-description__eyebrow"
                        duration={0.35}
                    >
                        PROJECT OVERVIEW
                    </FadeUp>

                    <AnimatedHeading
                        as="h2"
                        className="project-description__headline heading2"
                        text="A Website Built to Make the Product Easier to Understand and Stronger to Trust"
                        wordClassName="project-description__headline-word"
                        highlightWords={["Product", "Easier", "Stronger", "Trust"]}
                        highlightClassName="project-description__headline-highlight"
                        delay={0.08}
                    />

                    <FadeUp
                        as="p"
                        className="project-description__subheading subheading"
                        duration={0.4}
                        afterHeading="A Website Built to Make the Product Easier to Understand and Stronger to Trust"
                        headingDelay={0.08}
                    >
                        KonarCard needed more than a polished interface. The site had
                        to explain the product clearly, make the offer feel credible,
                        and guide users through a smoother, more conversion-ready
                        experience.
                    </FadeUp>
                </div>

                <div className="project-description__right">
                    <FadeUp
                        as="section"
                        className="project-description__block"
                        y={24}
                        duration={0.45}
                    >
                        <div className="project-description__block-top">
                            <span className="project-description__label">
                                The Challenge
                            </span>

                            <h3 className="heading3 project-description__block-title">
                                Turning a modern product into a clear online
                                experience
                            </h3>
                        </div>

                        <StaggerGroup className="project-description__items">
                            {challengePoints.map((item) => (
                                <StaggerItem
                                    as="article"
                                    key={item.title}
                                    className="project-description__item"
                                >
                                    <h4 className="project-description__item-title">
                                        {item.title}
                                    </h4>

                                    <p className="body project-description__item-text">
                                        {item.text}
                                    </p>
                                </StaggerItem>
                            ))}
                        </StaggerGroup>
                    </FadeUp>

                    <FadeUp
                        as="section"
                        className="project-description__block project-description__block--solution"
                        y={24}
                        duration={0.45}
                        delay={0.08}
                    >
                        <div className="project-description__block-top">
                            <span className="project-description__label">
                                The Solution
                            </span>

                            <h3 className="heading3 project-description__block-title">
                                A clearer structure, stronger messaging, and a more
                                premium digital presence
                            </h3>
                        </div>

                        <StaggerGroup className="project-description__items">
                            {solutionPoints.map((item) => (
                                <StaggerItem
                                    as="article"
                                    key={item.title}
                                    className="project-description__item"
                                >
                                    <h4 className="project-description__item-title">
                                        {item.title}
                                    </h4>

                                    <p className="body project-description__item-text">
                                        {item.text}
                                    </p>
                                </StaggerItem>
                            ))}
                        </StaggerGroup>
                    </FadeUp>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default ProjectDescription;
