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
            const row = sectionRef.current?.querySelector(".projects-row");

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

            if (row) {
                gsap.fromTo(
                    row,
                    { opacity: 0, y: 26 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.55,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: row,
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
                <header className="projects__header">
                    <p className="eyebrow projects__eyebrow">SELECTED WORK</p>

                    <h2 className="heading2 projects__title">
                        Recent Projects
                    </h2>

                    <p className="subheading projects__subtitle">
                        A selection of websites I’ve designed and built — focused on
                        clarity, performance, and real business outcomes.
                    </p>
                </header>

                <div className="projects__list">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="projects-row"
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
                                className="projects-row__media"
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

                            <div className="projects-row__overlay" />

                            <div className="projects-row__content">
                                <span className="projects-row__year">
                                    {project.year}
                                </span>

                                <h3 className="heading4 projects-row__title">
                                    {project.title}
                                </h3>

                                <p className="body projects-row__description">
                                    {project.description}
                                </p>

                                <div className="projects-row__tags">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="projects-row__pill"
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
        </section>
    );
};

export default ProjectsSection;