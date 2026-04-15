import React from "react";
import "../../styling/projects/project1/projectstyling.css";

import AnimatedHeading from "../animations/AnimatedHeading";
import FadeUp from "../animations/FadeUp";
import { StaggerGroup, StaggerItem } from "../animations/StaggerGroup";
import AnimatedSection from "../animations/AnimatedSection";

import konarVideoSecondary from "../../assets/videos/KonarCard2.mp4";

const typographyItems = [
    {
        label: "Heading 1",
        spec: "Cal Sans · 72 / 84",
        preview: "KonarCard",
        previewClass: "project-styling__type-preview--h1",
    },
    {
        label: "Heading 2",
        spec: "Cal Sans · 48 / 62",
        preview: "Built for clarity and trust",
        previewClass: "project-styling__type-preview--h2",
    },
    {
        label: "Heading 3",
        spec: "Cal Sans · 36 / 48",
        preview: "Section structure",
        previewClass: "project-styling__type-preview--h3",
    },
    {
        label: "Heading 4",
        spec: "Cal Sans · 24 / Auto",
        preview: "Product detail",
        previewClass: "project-styling__type-preview--h4",
    },
    {
        label: "Title Text",
        spec: "Cal Sans · 20 / Auto",
        preview: "Interface title",
        previewClass: "project-styling__type-preview--title",
    },
    {
        label: "Body Text",
        spec: "Satoshi · 14 / 1.5",
        preview:
            "Designed for clarity, consistency, and a more premium digital experience.",
        previewClass: "project-styling__type-preview--body",
    },
];

const colourTokens = [
    {
        name: "Primary Accent",
        hex: "#F97316",
        swatchClass: "project-styling__token-swatch--accent",
        role: "Primary CTA, emphasis, active moments",
    },
    {
        name: "Deep Navy",
        hex: "#111827",
        swatchClass: "project-styling__token-swatch--navy",
        role: "Headings, buttons, strong contrast",
    },
    {
        name: "Main Text",
        hex: "#0F172A",
        swatchClass: "project-styling__token-swatch--text",
        role: "Core headings and primary interface text",
    },
    {
        name: "Secondary Text",
        hex: "#475569",
        swatchClass: "project-styling__token-swatch--muted",
        role: "Supporting copy and descriptive UI text",
    },
    {
        name: "Soft Background",
        hex: "#FAFAFA",
        swatchClass: "project-styling__token-swatch--soft",
        role: "Section surfaces and softer content blocks",
    },
    {
        name: "Border System",
        hex: "#E5E7EB",
        swatchClass: "project-styling__token-swatch--border",
        role: "Card outlines, dividers, quiet structure",
    },
];

const ProjectStyling = () => {
    return (
        <AnimatedSection className="project-styling">
            <div className="project-styling__container">
                <header className="project-styling__header">
                    <AnimatedHeading
                        as="h2"
                        className="heading2 project-styling__title"
                        text="Styling & Visual System Built To Last."
                        wordClassName="project-styling__title-word"
                        highlightWords={["Styling", "Visual", "System"]}
                        highlightClassName="project-styling__title-highlight"
                    />

                    <FadeUp
                        as="p"
                        className="subheading project-styling__subtitle"
                        duration={0.45}
                        afterHeading="Styling & Visual System Built To Last."
                    >
                        A complete design system built to make KonarCard feel sharper,
                        clearer, and more consistent across every page.
                    </FadeUp>
                </header>

                <div className="project-styling__grid">
                    <FadeUp
                        as="section"
                        className="project-styling__panel project-styling__panel--type"
                        y={24}
                        duration={0.5}
                    >
                        <div className="project-styling__panel-header">
                            <span className="project-styling__eyebrow">
                                Typography System
                            </span>

                            <h3 className="project-styling__panel-title">
                                A full hierarchy designed for clarity, consistency, and
                                scale
                            </h3>

                            <p className="project-styling__panel-text">
                                The type system combines Cal Sans for strong structure
                                with Satoshi for readable supporting copy and cleaner UI.
                            </p>
                        </div>

                        <div className="project-styling__type-list">
                            {typographyItems.map((item) => (
                                <div
                                    key={item.label}
                                    className="project-styling__type-item"
                                >
                                    <div className="project-styling__type-meta">
                                        <span className="project-styling__type-label">
                                            {item.label}
                                        </span>

                                        <span className="project-styling__type-value">
                                            {item.spec}
                                        </span>
                                    </div>

                                    <div
                                        className={`project-styling__type-preview ${item.previewClass}`}
                                    >
                                        {item.preview}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeUp>

                    <FadeUp
                        as="section"
                        className="project-styling__panel project-styling__panel--colour"
                        y={24}
                        duration={0.5}
                        delay={0.08}
                    >
                        <div className="project-styling__panel-header">
                            <span className="project-styling__eyebrow">
                                Colour Strategy
                            </span>

                            <h3 className="project-styling__panel-title">
                                A restrained palette with clearer hierarchy and better
                                contrast
                            </h3>

                            <p className="project-styling__panel-text">
                                The palette was structured to support product
                                communication, attention control, and a more modern
                                software feel.
                            </p>
                        </div>

                        <StaggerGroup className="project-styling__token-grid">
                            {colourTokens.map((token) => (
                                <StaggerItem
                                    as="article"
                                    key={token.name}
                                    className="project-styling__token-card"
                                >
                                    <div
                                        className={`project-styling__token-swatch ${token.swatchClass}`}
                                    />

                                    <div className="project-styling__token-content">
                                        <div className="project-styling__token-top">
                                            <span className="project-styling__token-name">
                                                {token.name}
                                            </span>
                                            <span className="project-styling__token-hex">
                                                {token.hex}
                                            </span>
                                        </div>

                                        <p className="project-styling__token-role">
                                            {token.role}
                                        </p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerGroup>
                    </FadeUp>
                </div>

                <FadeUp
                    className="project-styling__media"
                    y={20}
                    duration={0.5}
                >
                    <div className="project-styling__media-inner">
                        <video
                            src={konarVideoSecondary}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="project-styling__media-video"
                        />
                    </div>
                </FadeUp>
            </div>
        </AnimatedSection>
    );
};

export default ProjectStyling;
