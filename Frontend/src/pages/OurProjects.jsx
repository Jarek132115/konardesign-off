// src/pages/OurProjects.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styling/buttons.css";
import "../styling/ourprojects.css";
import "../styling/projects.css"; // reuse pill styles

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ecommerceVideo from "../assets/videos/ECommerce1.mp4";
import konarVideo1 from "../assets/videos/KonarCard1.mp4";
import konarVideo2 from "../assets/videos/Custom1.mp4";

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
        media: konarVideo1,
    },
    {
        id: "comingsoon1",
        title: "Custom Website",
        year: "Coming Soon",
        headline: "Project details will be added soon.",
        description:
            "We’ll share more about this custom website once the case study and results are ready.",
        metrics: ["Case Study Coming Soon"],
        tags: ["More Info Soon"],
        media: ecommerceVideo,
    },
    {
        id: "comingsoon2",
        title: "E-Commerce Website",
        year: "Coming Soon",
        headline: "Project details will be added soon.",
        description:
            "A full overview of this e-commerce project will be published here soon.",
        metrics: ["Case Study Coming Soon"],
        tags: ["More Info Soon"],
        media: konarVideo2,
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
        const cards = pageEl.querySelectorAll(".our-projects__card");

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
                        Explore real-world websites we’ve designed and built —
                        each crafted to solve business problems, drive
                        conversions, and scale with growth.
                    </p>
                </header>

                {/* PROJECT GRID */}
                <div className="our-projects__grid">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="our-projects__card"
                            onClick={() =>
                                project.id === "konarcard" &&
                                handleViewDetails(project.id)
                            }
                        >
                            {/* Header row (white) */}
                            <header className="our-projects__card-header">
                                <h2 className="heading3 our-projects__card-title">
                                    {project.title}
                                </h2>
                                <span className="heading3 our-projects__card-year">
                                    {project.year}
                                </span>
                            </header>

                            {/* Media with overlay */}
                            <div className="our-projects__card-media">
                                <video
                                    src={project.media}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="our-projects__card-video"
                                />

                                <div className="our-projects__card-overlay">
                                    <p className="our-projects__card-headline">
                                        {project.headline}
                                    </p>

                                    <p className="body our-projects__card-description">
                                        {project.description}
                                    </p>

                                    <div className="our-projects__card-meta">
                                        {project.metrics &&
                                            project.metrics.length > 0 && (
                                                <div className="our-projects__card-metrics">
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

                                        <div className="our-projects__card-tags">
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
            </main>

            <Footer />
        </div>
    );
};

export default OurProjects;
