import React from "react";
import "../../styling/projects/project1/projecthero.css";

import AnimatedHeading from "../animations/AnimatedHeading";
import FadeUp from "../animations/FadeUp";
import { StaggerGroup, StaggerItem } from "../animations/StaggerGroup";
import AnimatedSection from "../animations/AnimatedSection";

import konarVideoHero from "../../assets/videos/KonarCard1.mp4";

const ProjectHero = () => {
    return (
        <AnimatedSection className="project-hero">
            <div className="project-hero__inner">
                <div className="project-hero__top">
                    <div className="project-hero__info">
                        <div className="project-hero__copy-bg" />

                        <AnimatedHeading
                            as="h1"
                            className="heading1 project-hero__title"
                            text="KonarCard Digital Product Website"
                            wordClassName="project-hero__title-word"
                            highlightWords={["KonarCard"]}
                            highlightClassName="project-hero__title-word--indigo"
                            trigger="onLoad"
                            delay={0}
                        />

                        <FadeUp
                            as="p"
                            className="subheading project-hero__subtitle"
                            trigger="onLoad"
                            afterHeading="KonarCard Digital Product Website"
                            headingDelay={0}
                            duration={0.45}
                        >
                            A strategic website redesign and build for a digital
                            business card platform, created to improve clarity,
                            strengthen trust, and support a more conversion-focused
                            user journey.
                        </FadeUp>

                        <StaggerGroup
                            className="project-hero__pills"
                            trigger="onLoad"
                            delay={0.3}
                        >
                            <StaggerItem as="span" className="project-hero__pill">
                                Digital Business Card Platform
                            </StaggerItem>
                            <StaggerItem as="span" className="project-hero__pill">
                                Strategic Website Redesign
                            </StaggerItem>
                            <StaggerItem as="span" className="project-hero__pill">
                                Conversion-Focused Build
                            </StaggerItem>
                        </StaggerGroup>
                    </div>

                    <FadeUp
                        as="aside"
                        className="project-hero__meta"
                        trigger="onLoad"
                        delay={0.3}
                        duration={0.5}
                        y={12}
                    >
                        <div className="project-hero__meta-group">
                            <span className="project-hero__meta-label">
                                Pages Developed
                            </span>
                            <span className="project-hero__meta-value">23+</span>
                        </div>

                        <div className="project-hero__meta-group">
                            <span className="project-hero__meta-label">Industry</span>
                            <span className="project-hero__meta-value">Software</span>
                        </div>

                        <div className="project-hero__meta-group">
                            <span className="project-hero__meta-label">Year</span>
                            <span className="project-hero__meta-value">2026</span>
                        </div>

                        <div className="project-hero__meta-group">
                            <span className="project-hero__meta-label">Website</span>
                            <a
                                href="https://www.konarcard.com"
                                target="_blank"
                                rel="noreferrer"
                                className="project-hero__meta-link"
                            >
                                www.konarcard.com
                            </a>
                        </div>
                    </FadeUp>
                </div>

                <FadeUp
                    className="project-hero__media"
                    trigger="onLoad"
                    delay={0.45}
                    duration={0.55}
                    y={16}
                >
                    <div className="project-hero__media-inner">
                        <video
                            src={konarVideoHero}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="project-hero__media-video"
                        />
                    </div>
                </FadeUp>
            </div>
        </AnimatedSection>
    );
};

export default ProjectHero;
