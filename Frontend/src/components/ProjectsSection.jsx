import React, {
    useRef,
    useCallback,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import "../styling/projectssection.css";

import AnimatedHeading from "./animations/AnimatedHeading";
import FadeUp from "./animations/FadeUp";
import { StaggerGroup, StaggerItem } from "./animations/StaggerGroup";
import AnimatedSection from "./animations/AnimatedSection";

import konarVideo from "../assets/videos/KonarCard1.mp4";
import ecommerceVideo from "../assets/videos/ECommerce1.mp4";

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
    const [isPressed, setIsPressed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const xRaw = useMotionValue(0);
    const yRaw = useMotionValue(0);
    const x = useSpring(xRaw, { stiffness: 600, damping: 40, mass: 0.4 });
    const y = useSpring(yRaw, { stiffness: 600, damping: 40, mass: 0.4 });

    // The pill is centered via xPercent/yPercent equivalent (translate -50%, -50%).
    const translateX = useTransform(x, (v) => `calc(${v}px - 50%)`);
    const translateY = useTransform(y, (v) => `calc(${v}px - 50%)`);

    const positionPill = useCallback((clientX, clientY) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        xRaw.set(clientX - rect.left);
        yRaw.set(clientY - rect.top);
    }, [xRaw, yRaw]);

    const handlePointerEnter = useCallback(
        (e) => {
            if (window.innerWidth <= 1024) return;
            positionPill(e.clientX, e.clientY);
            setIsHovered(true);
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
        setIsHovered(false);
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
        <StaggerItem as="article" className="projects-row">
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

                    <motion.div
                        className={`projects-row__hover-pill ${project.isComingSoon
                            ? "projects-row__hover-pill--soon"
                            : ""
                            }`}
                        aria-hidden="true"
                        style={{ x: translateX, y: translateY }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            scale: isHovered ? 1 : 0.92,
                        }}
                        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="projects-row__hover-pill-text">
                            {project.hoverLabel}
                        </span>
                    </motion.div>

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
        </StaggerItem>
    );
};

const ProjectsSection = () => {
    const navigate = useNavigate();

    return (
        <AnimatedSection className="projects">
            <div className="projects__inner">
                <header className="projects__header">
                    <FadeUp as="p" className="eyebrow projects__eyebrow">
                        MY WORK
                    </FadeUp>

                    <AnimatedHeading
                        as="h2"
                        className="heading2 projects__title"
                        highlightWords={["Work"]}
                        highlightClassName="projects__highlight"
                        text="Selected Work"
                    />

                    <FadeUp as="p" className="subheading projects__subtitle" afterHeading="Selected Work">
                        A selection of projects where strategy, design, and
                        development come together to create clear,
                        high-performing websites.
                    </FadeUp>
                </header>

                <StaggerGroup className="projects__list" stagger={0.08}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            navigate={navigate}
                        />
                    ))}
                </StaggerGroup>
            </div>
        </AnimatedSection>
    );
};

export default ProjectsSection;
