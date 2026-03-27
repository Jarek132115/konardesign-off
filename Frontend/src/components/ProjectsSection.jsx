import React, {
    useEffect,
    useRef,
    useCallback,
    useLayoutEffect,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styling/projectssection.css";

import konarVideo from "../assets/videos/KonarCard1.mp4";
import ecommerceVideo from "../assets/videos/ECommerce1.mp4";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: "konarcard",
        year: "2025–2026",
        title: "KonarCard Website Design & Development",
        description:
            "Designed and built to communicate value clearly, support user flow, and drive conversion.",
        tags: [
            "UX Strategy",
            "UX Design",
            "Web Design",
            "Frontend Development",
        ],
        media: konarVideo,
        route: "/projects/konarcard",
        hoverLabel: "View Case Study",
        isComingSoon: false,
    },
    {
        id: "coming-soon",
        year: "2026",
        title: "A New E-Commerce Project Is On The Way",
        description:
            "A new build focused on clearer product storytelling, improved user flow, and a more refined e-commerce experience.",
        tags: [
            "E-Commerce Design",
            "Conversion Focus",
            "Product Strategy",
            "Responsive Build",
        ],
        media: ecommerceVideo,
        route: "",
        hoverLabel: "Coming Soon",
        isComingSoon: true,
    },
];

const ProjectCard = ({ project, navigate }) => {
    const cardRef = useRef(null);
    const pillRef = useRef(null);
    const pillXTo = useRef(null);
    const pillYTo = useRef(null);
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        const cardEl = cardRef.current;
        const pillEl = pillRef.current;

        if (!cardEl || !pillEl) return;

        gsap.set(pillEl, {
            xPercent: -50,
            yPercent: -50,
            opacity: 0,
            scale: 0.92,
        });

        pillXTo.current = gsap.quickTo(pillEl, "x", {
            duration: 0.12,
            ease: "power3.out",
        });

        pillYTo.current = gsap.quickTo(pillEl, "y", {
            duration: 0.12,
            ease: "power3.out",
        });
    }, []);

    const positionPill = useCallback((clientX, clientY) => {
        const card = cardRef.current;
        if (!card || !pillXTo.current || !pillYTo.current) return;

        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        pillXTo.current(x);
        pillYTo.current(y);
    }, []);

    const handlePointerEnter = useCallback(
        (e) => {
            if (window.innerWidth <= 1024) return;

            const pill = pillRef.current;
            if (!pill) return;

            positionPill(e.clientX, e.clientY);

            gsap.to(pill, {
                opacity: 1,
                scale: 1,
                duration: 0.16,
                ease: "power2.out",
                overwrite: "auto",
            });
        },
        [positionPill]
    );

    const handlePointerMove = useCallback(
        (e) => {
            if (window.innerWidth <= 1024) return;
            positionPill(e.clientX, e.clientY);
        },
        [positionPill]
    );

    const handlePointerLeave = useCallback(() => {
        const pill = pillRef.current;
        if (!pill) return;

        gsap.to(pill, {
            opacity: 0,
            scale: 0.92,
            duration: 0.14,
            ease: "power2.out",
            overwrite: "auto",
        });
    }, []);

    const toggleVideo = useCallback((videoEl) => {
        if (!videoEl) return;

        if (videoEl.paused) {
            videoEl.play().catch(() => { });
        } else {
            videoEl.pause();
        }
    }, []);

    const handleActivate = useCallback(() => {
        if (project.isComingSoon) {
            setIsPressed(true);
            window.setTimeout(() => setIsPressed(false), 180);
            return;
        }

        navigate(project.route);
    }, [navigate, project]);

    return (
        <article className="projects-row">
            <div className="projects-row__glow-frame projects-row__glow-frame--indigo">
                <div
                    ref={cardRef}
                    className={`projects-row__card ${project.isComingSoon ? "projects-row__card--coming-soon" : ""
                        } ${isPressed ? "projects-row__card--pressed" : ""}`}
                    role="button"
                    tabIndex={0}
                    onPointerEnter={handlePointerEnter}
                    onPointerMove={handlePointerMove}
                    onPointerLeave={handlePointerLeave}
                    onPointerDown={() => {
                        if (project.isComingSoon) setIsPressed(true);
                    }}
                    onPointerUp={() => {
                        if (project.isComingSoon) {
                            window.setTimeout(() => setIsPressed(false), 120);
                        }
                    }}
                    onPointerCancel={() => {
                        if (project.isComingSoon) setIsPressed(false);
                    }}
                    onClick={handleActivate}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleActivate();
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

                    <div
                        ref={pillRef}
                        className={`projects-row__hover-pill ${project.isComingSoon
                            ? "projects-row__hover-pill--soon"
                            : ""
                            }`}
                        aria-hidden="true"
                    >
                        <span className="projects-row__hover-pill-text">
                            {project.hoverLabel}
                        </span>
                    </div>

                    <div className="projects-row__content">
                        <span className="projects-row__year">{project.year}</span>

                        <h3 className="heading4 projects-row__title">
                            {project.title}
                        </h3>

                        <p className="body projects-row__description">
                            {project.description}
                        </p>

                        <div className="projects-row__tags">
                            {project.tags.map((tag) => (
                                <span key={tag} className="projects-row__pill">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

const ProjectsSection = () => {
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const header = sectionRef.current?.querySelector(".projects__header");
            const cards = sectionRef.current?.querySelectorAll(".projects-row");

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

            if (cards?.length) {
                gsap.fromTo(
                    cards,
                    { opacity: 0, y: 26 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.55,
                        ease: "power2.out",
                        stagger: 0.08,
                        scrollTrigger: {
                            trigger:
                                sectionRef.current?.querySelector(".projects__list"),
                            start: "top 84%",
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="projects" ref={sectionRef}>
            <div className="projects__inner">
                <header className="projects__header">
                    <p className="eyebrow projects__eyebrow">MY WORK</p>

                    <h2 className="heading2 projects__title">
                        Selected{" "}
                        <span className="projects__highlight">Work</span>
                    </h2>

                    <p className="subheading projects__subtitle">
                        A selection of projects where strategy, design, and
                        development come together to create clear,
                        high-performing websites.
                    </p>
                </header>

                <div className="projects__list">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            navigate={navigate}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;