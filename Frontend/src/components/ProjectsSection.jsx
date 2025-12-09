// src/components/ProjectsSection.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/projects.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import konarVideo from "../assets/videos/KonarCard1.mp4";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: "konarcard",
        title: "KonarCard (E-Commerce)",
        year: "2025",
        description:
            "A tailored e-commerce experience for a next-gen digital business card startup — optimized for speed, clarity, and conversions.",
        metrics: ["27% Increase In Conversion", "10k Traffic Each Month"],
        tags: ["Custom Web Design", "Custom Web Development"],
    },
];

const ProjectsSection = () => {
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const titleEl = sectionEl.querySelector(".projects__title");
        const subtitleEl = sectionEl.querySelector(".projects__subtitle");
        const cards = sectionEl.querySelectorAll(".projects__project");
        const ctaEl = sectionEl.querySelector(".projects__cta");

        if (!titleEl || !subtitleEl) return;

        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("projects__title-word");
            wordWrapper.style.display = "inline-block";

            for (const ch of word) {
                const charSpan = document.createElement("span");
                charSpan.textContent = ch;
                charSpan.style.display = "inline-block";
                charSpan.style.opacity = "0";
                charSpan.style.transform = "translateY(8px)";
                wordWrapper.appendChild(charSpan);
            }

            titleEl.appendChild(wordWrapper);

            if (wordIndex !== words.length - 1) {
                titleEl.appendChild(document.createTextNode(" "));
            }
        });

        const wordSpans = titleEl.querySelectorAll(".projects__title-word");
        const highlightSet = new Set(["Built", "Helped"]);

        wordSpans.forEach((wordSpan) => {
            const cleaned = wordSpan.textContent.replace(/[^\w-]/g, "");
            if (highlightSet.has(cleaned)) {
                wordSpan.classList.add("projects__title-highlight");
            }
        });

        const charSpans = titleEl.querySelectorAll(".projects__title-word span");

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
        });

        tl.to(
            subtitleEl,
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
            },
            ">-0.05"
        );

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                    delay: index * 0.05,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        if (ctaEl) {
            gsap.fromTo(
                ctaEl,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ctaEl,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    const handleViewDetails = () => {
        navigate("/projects/konarcard");
    };

    return (
        <section className="projects" ref={sectionRef}>
            <div className="projects__inner">
                <header className="projects__header">
                    <p className="eyebrow services__eyebrow">OUR WORK</p>
                    <h2 className="heading2 projects__title">
                        What We’ve Built. Who We’ve Helped.
                    </h2>
                    <p className="subheading projects__subtitle">
                        Each project is built with purpose — engineered for clarity,
                        conversion, and lasting client success.
                    </p>
                </header>

                <div className="projects__list">
                    {projects.map((project) => (
                        <article key={project.id} className="projects__project">
                            {/* TEXT SIDE (left on desktop) */}
                            <div className="projects__project-content">
                                <div className="projects__project-header">
                                    <h3 className="heading3 projects__project-title">
                                        {project.title}
                                    </h3>
                                    <span className="heading3">
                                        {project.year}
                                    </span>
                                </div>

                                <p className="body projects__project-description">
                                    {project.description}
                                </p>

                                <div className="projects__project-metrics">
                                    {project.metrics.map((metric) => (
                                        <span
                                            key={metric}
                                            className="body projects__pill projects__pill--metric"
                                        >
                                            {metric}
                                        </span>
                                    ))}
                                </div>

                                <div className="projects__project-tags">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="body projects__pill projects__pill--tag"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA – bottom-left on desktop, 36px below pills on tablet/mobile */}
                                <button
                                    className="projects__link-button"
                                    onClick={handleViewDetails}
                                >
                                    <span className="projects__link-label">
                                        View Project Details
                                    </span>
                                </button>
                            </div>

                            {/* MEDIA SIDE (right on desktop, top on ≤1024px) */}
                            <div className="projects__project-media">
                                <div className="projects__project-media-inner">
                                    <video
                                        src={konarVideo}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="projects__project-video"
                                    />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* BOTTOM CTA STRIP */}
                <div className="projects__cta">
                    <div className="projects__cta-inner">
                        <h3 className="heading2 projects__cta-title">
                            Explore All The Projects We Worked On
                        </h3>
                        <p className="subheading projects__cta-subtitle">
                            Custom websites designed to convert, engineered for performance,
                            and built to scale — across Webflow, Framer, Shopify, and
                            fully-coded platforms.
                        </p>
                        <button
                            className="btn btn--white projects__cta-button"
                            onClick={() => navigate("/projects")}
                        >
                            Explore All Projects
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
