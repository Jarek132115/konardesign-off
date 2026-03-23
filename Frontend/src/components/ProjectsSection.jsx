import React, { useLayoutEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styling/projectssection.css";

import konarVideo from "../assets/videos/KonarCard1.mp4";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: "konarcard",
        year: "2025–2026",
        title: "KonarCard Website Design & Development",
        description:
            "Designed and built to clearly communicate value, support user flow, and drive meaningful conversion.",
        tags: [
            "UX Strategy",
            "UX Design",
            "Web Design",
            "Frontend Development",
            "Responsive Design",
        ],
        media: konarVideo,
        route: "/projects/konarcard",
    },
];

const ProjectsSection = () => {
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const header = sectionRef.current?.querySelector(".projects__header");
            const card = sectionRef.current?.querySelector(".projects__card");

            if (header) {
                gsap.fromTo(
                    header,
                    { opacity: 0, y: 18 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.45,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: header,
                            start: "top 82%",
                        },
                    }
                );
            }

            if (card) {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 26 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.55,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 84%",
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const toggleVideo = useCallback((videoEl) => {
        if (!videoEl) return;

        if (videoEl.paused) {
            videoEl.play().catch(() => { });
        } else {
            videoEl.pause();
        }
    }, []);

    return (
        <section className="projects" ref={sectionRef}>
            <div className="projects__inner">
                <div className="projects__grid">
                    <header className="projects__header">
                        <p className="eyebrow projects__eyebrow">MY WORK</p>

                        <h2 className="heading2 projects__title">
                            A Look at Some of My{" "}
                            <span className="projects__highlight">Best Work</span>
                        </h2>

                        <p className="subheading projects__subtitle">
                            A selection of websites I’ve designed and built,
                            focused on clarity, performance, and real business
                            results.
                        </p>
                    </header>

                    <div className="projects__list">
                        {projects.map((project) => (
                            <article
                                key={project.id}
                                className="projects__card"
                                role="button"
                                tabIndex={0}
                                onClick={() => navigate(project.route)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        navigate(project.route);
                                    }
                                }}
                            >
                                <video
                                    className="projects__media"
                                    src={project.media}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    onCanPlay={(e) => {
                                        e.currentTarget.play().catch(() => { });
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleVideo(e.currentTarget);
                                    }}
                                />

                                <div className="projects__overlay" />

                                <div className="projects__content">
                                    <span className="projects__year">
                                        {project.year}
                                    </span>

                                    <h3 className="heading4 projects__card-title">
                                        {project.title}
                                    </h3>

                                    <p className="body projects__description">
                                        {project.description}
                                    </p>

                                    <div className="projects__tags">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="projects__pill"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;