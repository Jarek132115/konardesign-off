import React from "react";
import "../../styling/projects/project1/projectfinallooks.css";

import AnimatedHeading from "../animations/AnimatedHeading";
import FadeUp from "../animations/FadeUp";
import { StaggerGroup, StaggerItem } from "../animations/StaggerGroup";
import AnimatedSection from "../animations/AnimatedSection";

import carousel1 from "../../assets/images/carousel1.jpg";
import carousel2 from "../../assets/images/carousel2.jpg";
import carousel3 from "../../assets/images/carousel3.jpg";
import carousel4 from "../../assets/images/carousel4.jpg";
import carousel5 from "../../assets/images/carousel5.jpg";
import carousel6 from "../../assets/images/carousel6.jpg";

const finalLooks = [
    {
        image: carousel1,
        className: "project-final__card project-final__card--large project-final__card--tall",
    },
    {
        image: carousel2,
        className: "project-final__card",
    },
    {
        image: carousel3,
        className: "project-final__card project-final__card--wide",
    },
    {
        image: carousel4,
        className: "project-final__card",
    },
    {
        image: carousel5,
        className: "project-final__card project-final__card--tall",
    },
    {
        image: carousel6,
        className: "project-final__card",
    },
    {
        image: carousel2,
        className: "project-final__card",
    },
    {
        image: carousel4,
        className: "project-final__card project-final__card--wide",
    },
    {
        image: carousel1,
        className: "project-final__card",
    },
    {
        image: carousel6,
        className: "project-final__card project-final__card--tall",
    },
    {
        image: carousel3,
        className: "project-final__card",
    },
    {
        image: carousel5,
        className: "project-final__card project-final__card--large",
    },
];

const ProjectFinalLooks = () => {
    return (
        <AnimatedSection className="project-final">
            <div className="project-final__container">
                <header className="project-final__header">
                    <FadeUp
                        as="span"
                        className="project-final__eyebrow"
                        duration={0.35}
                    >
                        FINAL LOOKS
                    </FadeUp>

                    <AnimatedHeading
                        as="h2"
                        className="heading2 project-final__title"
                        text="Final Looks Across Every Touchpoint."
                        wordClassName="project-final__title-word"
                        highlightWords={["Final", "Looks"]}
                        highlightClassName="project-final__title-highlight"
                        delay={0.08}
                    />

                    <FadeUp
                        as="p"
                        className="subheading project-final__subtitle"
                        duration={0.45}
                        afterHeading="Final Looks Across Every Touchpoint."
                        headingDelay={0.08}
                    >
                        A broader set of KonarCard screens showing how the visual
                        system holds together across landing pages, product moments,
                        supporting sections, and the wider user journey.
                    </FadeUp>
                </header>

                <StaggerGroup className="project-final__grid">
                    {finalLooks.map((item, index) => (
                        <StaggerItem
                            as="article"
                            key={index}
                            className={item.className}
                        >
                            <img
                                src={item.image}
                                alt={`KonarCard final screen ${index + 1}`}
                                className="project-final__image"
                            />
                        </StaggerItem>
                    ))}
                </StaggerGroup>
            </div>
        </AnimatedSection>
    );
};

export default ProjectFinalLooks;
