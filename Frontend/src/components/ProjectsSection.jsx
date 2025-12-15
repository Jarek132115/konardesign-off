import React, { useLayoutEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styling/projects.css";

import konarVideo from "../assets/videos/KonarCard1.mp4";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: "konarcard",
        year: "2025",
        title: "KonarCard Website Design & Development",
        description:
            "Creative exploration, showcase website design and custom UX/UI built to highlight product value and conversion.",
        tags: ["UX Design", "Web Design", "Web Development"],
        media: konarVideo,
        route: "/projects/konarcard",
    },
];

const ProjectsSection = () => {
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const rows = sectionRef.current?.querySelectorAll(".projects-row");

            rows?.forEach((row) => {
                gsap.fromTo(
                    row,
                    { opacity: 0, y: 32 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: row,
                            start: "top 85%",
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Plays/pauses the video only when user clicks
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
            <header className="projects__header">
                <p className="eyebrow">OUR WORK</p>
                <h2 className="heading2">
                    Selected <span className="projects__highlight">Projects</span> & Case
                    Studies
                </h2>
                <p className="subheading projects__subtitle">
                    A curated look at recent work — full case studies coming soon.
                </p>
            </header>

            <div className="projects__list">
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className="projects-row"
                        onClick={() => navigate(project.route)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                navigate(project.route);
                            }
                        }}
                        role="button"
                        tabIndex={0}
                    >
                        <video
                            className="projects-row__media"
                            src={project.media}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            // IMPORTANT: removing autoPlay improves Lighthouse performance a lot
                            // autoPlay
                            onClick={(e) => {
                                // prevent card navigation when user interacts with video
                                e.stopPropagation();
                                toggleVideo(e.currentTarget);
                            }}
                        />

                        <div className="projects-row__overlay" />

                        <div className="projects-row__content">
                            <span className="projects-row__year">{project.year}</span>

                            <h3 className="projects-row__title">{project.title}</h3>

                            <p className="projects-row__description">{project.description}</p>

                            <div className="projects-row__tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="projects-row__pill">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <button
                                type="button"
                                className="btn btn--indigo projects-row__button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(project.route);
                                }}
                            >
                                View Project
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
