import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../styling/projects/project1/projectstyling.css";

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
    {
        label: "Button Text",
        spec: "Satoshi · 14 / Auto",
        preview: "Start Free Trial",
        previewClass: "project-styling__type-preview--button",
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
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const titleEl = sectionEl.querySelector(".project-styling__title");
        const subtitleEl = sectionEl.querySelector(".project-styling__subtitle");

        if (!titleEl || !subtitleEl) return;

        const original = titleEl.textContent;
        titleEl.textContent = "";

        const words = original.split(" ");
        const highlightWords = new Set(["Styling", "Visual", "System"]);

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("project-styling__title-word");
            wordWrapper.style.display = "inline-block";

            for (const ch of word) {
                const charSpan = document.createElement("span");
                charSpan.textContent = ch;
                charSpan.style.display = "inline-block";
                charSpan.style.opacity = "0";
                charSpan.style.transform = "translateY(8px)";
                wordWrapper.appendChild(charSpan);
            }

            const cleaned = word.replace(/[^\w]/g, "");
            if (highlightWords.has(cleaned)) {
                wordWrapper.classList.add("project-styling__title-highlight");
            }

            titleEl.appendChild(wordWrapper);

            if (wordIndex !== words.length - 1) {
                titleEl.appendChild(document.createTextNode(" "));
            }
        });

        const charSpans = titleEl.querySelectorAll(".project-styling__title-word span");
        const animatedItems = sectionEl.querySelectorAll(
            ".project-styling__panel, .project-styling__media"
        );

        gsap.set(subtitleEl, { opacity: 0, y: 8 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        tl.to(charSpans, {
            opacity: 1,
            y: 0,
            stagger: 0.03,
            duration: 0.4,
        }).to(
            subtitleEl,
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
            },
            ">-0.05"
        );

        animatedItems.forEach((item, index) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    ease: "power2.out",
                    delay: index * 0.06,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 82%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section className="project-styling" ref={sectionRef}>
            <div className="project-styling__container">
                <header className="project-styling__header">
                    <h2 className="heading2 project-styling__title">
                        Styling &amp; Visual System Built To Last.
                    </h2>

                    <p className="subheading project-styling__subtitle">
                        A complete design system built to make KonarCard feel sharper,
                        clearer, and more consistent across every page.
                    </p>
                </header>

                <div className="project-styling__grid">
                    <section className="project-styling__panel project-styling__panel--type">
                        <div className="project-styling__panel-header">
                            <span className="project-styling__eyebrow">
                                Typography System
                            </span>

                            <h3 className="project-styling__panel-title">
                                A full hierarchy designed for clarity, consistency, and scale
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
                    </section>

                    <section className="project-styling__panel project-styling__panel--colour">
                        <div className="project-styling__panel-header">
                            <span className="project-styling__eyebrow">
                                Colour Strategy
                            </span>

                            <h3 className="project-styling__panel-title">
                                A restrained palette with clearer hierarchy and better contrast
                            </h3>

                            <p className="project-styling__panel-text">
                                The palette was structured to support product communication,
                                attention control, and a more modern software feel.
                            </p>
                        </div>

                        <div className="project-styling__token-grid">
                            {colourTokens.map((token) => (
                                <article
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
                                </article>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="project-styling__media">
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
                </div>
            </div>
        </section>
    );
};

export default ProjectStyling;