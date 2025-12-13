// src/components/ProjectsSection.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/projects.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import konarVideo from "../assets/videos/KonarCard1.mp4";
import ecommerceVideo from "../assets/videos/ECommerce1.mp4";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: "konarcard",
        title: "KonarCard (E-Commerce)",
        year: "2025",
        headline: "Project details will be added soon.",
        description:
            "A full case study for this build is on the way. Check back soon for a deeper breakdown.",
        metrics: ["Case Study Coming Soon"],
        tags: ["More Info Soon"],
        media: konarVideo,
    },
    {
        id: "custom-website",
        title: "Custom Website",
        year: "Coming Soon",
        headline: "Project details will be added soon.",
        description:
            "We’ll share more about this custom website once the case study and results are ready.",
        metrics: ["Case Study Coming Soon"],
        tags: ["More Info Soon"],
        media: ecommerceVideo,
    },
];

const ProjectsSection = () => {
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const eyebrowEl = sectionEl.querySelector(".projects__eyebrow");
        const titleEl = sectionEl.querySelector(".projects__title");
        const subtitleEl = sectionEl.querySelector(".projects__subtitle");
        const cards = sectionEl.querySelectorAll(".projects__card");
        const ctaEl = sectionEl.querySelector(".projects__cta");

        if (!eyebrowEl || !titleEl || !subtitleEl) return;

        // ----- TITLE LETTER ANIMATION -----
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

        tl.fromTo(
            eyebrowEl,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.25 }
        )
            .to(
                charSpans,
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.018,
                    duration: 0.26,
                },
                ">-0.05"
            )
            .fromTo(
                subtitleEl,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.28 },
                ">-0.08"
            );

        // ----- CARD FADE-UPS -----
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

        // CTA fade
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

    const handleViewDetails = (projectId) => {
        if (projectId === "konarcard") {
            navigate("/projects/konarcard");
        } else {
            navigate("/projects"); // generic for “Custom Website”
        }
    };

    return (
        <section className="projects" ref={sectionRef}>
            <div className="projects__inner">
                <header className="projects__header">
                    <p className="eyebrow projects__eyebrow">OUR WORK</p>
                    <h2 className="heading2 projects__title">
                        What We’ve Built. Who We’ve Helped.
                    </h2>
                    <p className="subheading projects__subtitle">
                        A quick look at a couple of projects — full case studies
                        and more work will be added soon.
                    </p>
                </header>

                <div className="projects__grid">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="projects__card"
                            onClick={() => handleViewDetails(project.id)}
                        >
                            <header className="projects__card-header">
                                <h3 className="heading3 projects__card-title">
                                    {project.title}
                                </h3>
                                <span className="heading3 projects__card-year">
                                    {project.year}
                                </span>
                            </header>

                            <div className="projects__card-media">
                                <video
                                    src={project.media}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="projects__card-video"
                                />

                                <div className="projects__card-overlay">
                                    <p className="projects__card-headline">
                                        {project.headline}
                                    </p>

                                    <p className="body projects__card-description">
                                        {project.description}
                                    </p>

                                    <div className="projects__card-meta">
                                        {project.metrics &&
                                            project.metrics.length > 0 && (
                                                <div className="projects__card-metrics">
                                                    {project.metrics.map(
                                                        (metric) => (
                                                            <span
                                                                key={metric}
                                                                className="body projects__pill projects__pill--metric"
                                                            >
                                                                {metric}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            )}

                                        <div className="projects__card-tags">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="body projects__pill projects__pill--tag"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* BOTTOM CTA STRIP */}
                <div className="projects__cta">
                    <div className="projects__cta-inner">
                        <h3 className="heading2 projects__cta-title">
                            Explore More Of Our Client Work
                        </h3>
                        <p className="subheading projects__cta-subtitle">
                            We’re gradually adding full case studies as projects
                            wrap and results roll in. See the current line-up on
                            the projects page.
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
