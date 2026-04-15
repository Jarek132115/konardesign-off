import React from "react";
import "../../styling/projects/project1/projectresults.css";

import AnimatedHeading from "../animations/AnimatedHeading";
import FadeUp from "../animations/FadeUp";
import { StaggerGroup, StaggerItem } from "../animations/StaggerGroup";
import AnimatedSection from "../animations/AnimatedSection";

const scoreCards = [
    {
        score: "96",
        label: "Performance",
        text: "Fast-loading layouts and cleaner frontend structure helped the site feel quicker and more responsive across devices.",
    },
    {
        score: "93",
        label: "Accessibility",
        text: "Improved contrast, clearer hierarchy, and stronger usability choices made the experience easier to navigate overall.",
    },
    {
        score: "100",
        label: "Best Practices",
        text: "The build follows modern frontend standards more closely, supporting long-term reliability and technical confidence.",
    },
    {
        score: "100",
        label: "SEO",
        text: "Stronger structure and faster loading created a better technical base for search visibility and discoverability.",
    },
];

const outcomeCards = [
    {
        eyebrow: "Visibility",
        title: "A Stronger Base For Search And Traffic",
        text: "With better page structure, improved speed, and clearer content hierarchy, the site is in a much better position to support organic discoverability and future traffic growth.",
    },
    {
        eyebrow: "Trust",
        title: "A More Credible First Impression",
        text: "The redesign helps the brand feel more polished, more intentional, and more established which matters immediately when new users land on the page for the first time.",
    },
    {
        eyebrow: "Conversion",
        title: "Clearer Journeys Toward Action",
        text: "Calls to action, supporting information, and key selling points now sit within a more controlled flow, making it easier for users to understand the offer and know where to go next.",
    },
    {
        eyebrow: "Scalability",
        title: "Better Prepared For Long-Term Growth",
        text: "The final result is not just visually stronger it also gives the project a cleaner, more adaptable foundation that can scale more confidently as the product and content expand.",
    },
];

const ProjectResults = () => {
    return (
        <AnimatedSection className="project-results">
            <div className="project-results__container">
                <header className="project-results__header">
                    <FadeUp
                        as="span"
                        className="project-results__eyebrow"
                        duration={0.35}
                    >
                        RESULTS
                    </FadeUp>

                    <h2 className="heading2 project-results__title">
                        <AnimatedHeading
                            as="span"
                            text="Results, Performance and Growth Readiness."
                            wordClassName="project-results__title-word"
                            highlightWords={["Performance", "Growth"]}
                            highlightClassName="project-results__title-highlight"
                            delay={0.08}
                        />
                    </h2>

                    <FadeUp
                        as="p"
                        className="subheading project-results__subtitle"
                        duration={0.45}
                        afterHeading="Results, Performance and Growth Readiness."
                        headingDelay={0.08}
                    >
                        The final outcome was not just a better looking website it
                        created a stronger technical, strategic, and user-facing
                        foundation for visibility, trust, responsiveness, and future
                        growth.
                    </FadeUp>
                </header>

                <FadeUp
                    className="project-results__lead"
                    y={12}
                    duration={0.5}
                    delay={0.3}
                >
                    <div className="project-results__lead-top">
                        <span className="project-results__lead-label">
                            Key Outcome
                        </span>
                        <span className="project-results__lead-badge">
                            High-Impact Redesign
                        </span>
                    </div>

                    <div className="project-results__lead-content">
                        <div className="project-results__lead-main">
                            <h3 className="project-results__lead-title">
                                A clearer, faster, more credible digital experience.
                            </h3>

                            <p className="project-results__lead-text">
                                The redesign improved how the product is presented,
                                how quickly the site performs, and how effectively the
                                overall experience supports trust, usability, and
                                search visibility. Instead of only looking better, the
                                final result works harder across the areas that matter
                                most to a real business website.
                            </p>
                        </div>

                        <div className="project-results__lead-stats">
                            <div className="project-results__lead-stat">
                                <span className="project-results__lead-number">
                                    96
                                </span>
                                <span className="project-results__lead-metric">
                                    Performance
                                </span>
                            </div>

                            <div className="project-results__lead-stat">
                                <span className="project-results__lead-number">
                                    100
                                </span>
                                <span className="project-results__lead-metric">
                                    SEO
                                </span>
                            </div>

                            <div className="project-results__lead-stat">
                                <span className="project-results__lead-number">
                                    100
                                </span>
                                <span className="project-results__lead-metric">
                                    Best Practices
                                </span>
                            </div>
                        </div>
                    </div>
                </FadeUp>

                <StaggerGroup className="project-results__scores">
                    {scoreCards.map((item) => (
                        <StaggerItem
                            as="article"
                            key={item.label}
                            className="project-results__score-card"
                        >
                            <div className="project-results__score-ring">
                                <span>{item.score}</span>
                            </div>

                            <h3 className="project-results__score-title">
                                {item.label}
                            </h3>

                            <p className="project-results__score-text">
                                {item.text}
                            </p>
                        </StaggerItem>
                    ))}
                </StaggerGroup>

                <StaggerGroup className="project-results__outcomes">
                    {outcomeCards.map((item) => (
                        <StaggerItem
                            as="article"
                            key={item.title}
                            className="project-results__outcome-card"
                        >
                            <span className="project-results__outcome-eyebrow">
                                {item.eyebrow}
                            </span>

                            <h3 className="project-results__outcome-title">
                                {item.title}
                            </h3>

                            <p className="project-results__outcome-text">
                                {item.text}
                            </p>
                        </StaggerItem>
                    ))}
                </StaggerGroup>
            </div>
        </AnimatedSection>
    );
};

export default ProjectResults;
