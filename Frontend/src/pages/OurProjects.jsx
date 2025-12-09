// src/pages/OurProjects.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styling/buttons.css";
import "../styling/ourprojects.css";
import "../styling/projects.css"; // ✅ reuse the same card styles as home

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

const OurProjects = () => {
    const pageRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const pageEl = pageRef.current;
        if (!pageEl) return;

        const titleEl = pageEl.querySelector(".our-projects__title");
        const subtitleEl = pageEl.querySelector(".our-projects__subtitle");
        const cards = pageEl.querySelectorAll(".projects__project");

        if (!titleEl || !subtitleEl) return;

        // ----- TITLE: LETTER BY LETTER -----
        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("our-projects__title-word");
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

        // Highlight “Recent” in deep indigo
        const wordSpans = titleEl.querySelectorAll(".our-projects__title-word");
        const highlightSet = new Set(["Recent"]);

        wordSpans.forEach((wordSpan) => {
            const cleaned = wordSpan.textContent.replace(/[^\w-]/g, "");
            if (highlightSet.has(cleaned)) {
                wordSpan.classList.add("our-projects__title-highlight");
            }
        });

        const charSpans = titleEl.querySelectorAll(
            ".our-projects__title-word span"
        );

        gsap.set(subtitleEl, { opacity: 0, y: 8 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pageEl,
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

        // ----- CARDS: FADE IN ON SCROLL -----
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

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    const handleViewDetails = (projectId) => {
        if (projectId === "konarcard") {
            navigate("/projects/konarcard");
        }
    };

    return (
        <div className="our-projects-page">
            <Navbar />

            <main className="our-projects" ref={pageRef}>
                {/* HERO-STYLE HEADER */}
                <header className="our-projects__header">
                    <p className="eyebrow">Our Work</p>

                    <h1 className="heading1 our-projects__title">
                        A Selection Of Our Recent Client Projects
                    </h1>

                    <p className="subheading our-projects__subtitle">
                        Explore real-world websites we’ve designed and built — each crafted
                        to solve business problems, drive conversions, and scale with growth.
                    </p>
                </header>

                {/* PROJECT CARDS */}
                <div className="our-projects__list">
                    {projects.map((project) => (
                        <article key={project.id} className="projects__project">
                            {/* TEXT SIDE – identical structure to home section */}
                            <div className="projects__project-content">
                                <div className="projects__project-header">
                                    <h2 className="heading3 projects__project-title">
                                        {project.title}
                                    </h2>
                                    <span className="heading3 projects__project-year">
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
                                            className="body projects__pill"
                                        >
                                            {metric}
                                        </span>
                                    ))}
                                </div>

                                <div className="projects__project-tags">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="body projects__pill"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    className="projects__link-button"
                                    onClick={() => handleViewDetails(project.id)}
                                >
                                    <span className="projects__link-label">
                                        View Project Details
                                    </span>
                                </button>
                            </div>

                            {/* MEDIA SIDE – same as home section */}
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
            </main>

            <Footer />
        </div>
    );
};

export default OurProjects;
