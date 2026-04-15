import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedHeading from "../components/animations/AnimatedHeading";
import FadeUp from "../components/animations/FadeUp";
import { StaggerGroup, StaggerItem } from "../components/animations/StaggerGroup";

import "../styling/ourprojects.css";
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
    const [isPressed, setIsPressed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const pillX = useMotionValue(0);
    const pillY = useMotionValue(0);
    const smoothX = useSpring(pillX, { stiffness: 500, damping: 40, mass: 0.4 });
    const smoothY = useSpring(pillY, { stiffness: 500, damping: 40, mass: 0.4 });
    const translateX = useTransform(smoothX, (v) => `calc(-50% + ${v}px)`);
    const translateY = useTransform(smoothY, (v) => `calc(-50% + ${v}px)`);

    const positionPill = useCallback(
        (clientX, clientY, target) => {
            const rect = target.getBoundingClientRect();
            pillX.set(clientX - rect.left);
            pillY.set(clientY - rect.top);
        },
        [pillX, pillY]
    );

    const handlePointerEnter = useCallback(
        (e) => {
            if (window.innerWidth <= 1024) return;
            positionPill(e.clientX, e.clientY, e.currentTarget);
            setIsHovered(true);
        },
        [positionPill]
    );

    const handlePointerMove = useCallback(
        (e) => {
            if (window.innerWidth <= 1024) return;
            positionPill(e.clientX, e.clientY, e.currentTarget);
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
        <StaggerItem as="article" className="our-projects-row">
            <div className="our-projects-row__glow-frame our-projects-row__glow-frame--indigo">
                <div
                    className={`our-projects-row__card ${project.isComingSoon
                            ? "our-projects-row__card--coming-soon"
                            : ""
                        } ${isPressed ? "our-projects-row__card--pressed" : ""}`}
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
                        className="our-projects-row__media"
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

                    <div className="our-projects-row__overlay" />

                    <motion.div
                        className={`our-projects-row__hover-pill ${project.isComingSoon
                                ? "our-projects-row__hover-pill--soon"
                                : ""
                            }`}
                        aria-hidden="true"
                        style={{
                            translateX,
                            translateY,
                        }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            scale: isHovered ? 1 : 0.92,
                        }}
                        transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="our-projects-row__hover-pill-text">
                            {project.hoverLabel}
                        </span>
                    </motion.div>

                    <div className="our-projects-row__content">
                        <span className="our-projects-row__year">
                            {project.year}
                        </span>

                        <h2 className="heading4 our-projects-row__title">
                            {project.title}
                        </h2>

                        <p className="body our-projects-row__description">
                            {project.description}
                        </p>

                        <div className="our-projects-row__tags">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="our-projects-row__pill"
                                >
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

const OurProjects = () => {
    const navigate = useNavigate();

    return (
        <div className="our-projects-page">
            <Navbar />

            <main className="our-projects">
                <div className="our-projects__inner">
                    <header className="our-projects__header">
                        <FadeUp
                            as="p"
                            className="eyebrow our-projects__eyebrow"
                            trigger="onLoad"
                            delay={0}
                        >
                            SELECTED WORK
                        </FadeUp>

                        <AnimatedHeading
                            as="h1"
                            className="heading1 our-projects__title"
                            text="Selected Work"
                            wordClassName="our-projects__title-word"
                            highlightWords={["Work"]}
                            highlightClassName="our-projects__title-word--indigo"
                            trigger="onLoad"
                            delay={0.15}
                        />

                        <FadeUp
                            as="p"
                            className="subheading our-projects__subtitle"
                            trigger="onLoad"
                            afterHeading="Selected Work"
                            headingDelay={0.15}
                        >
                            A selection of projects where strategy, design, and
                            development come together to create clear,
                            high-performing websites.
                        </FadeUp>
                    </header>

                    <StaggerGroup
                        className="our-projects__list"
                        stagger={0.08}
                        trigger="onLoad"
                        delay={0.55}
                    >
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                navigate={navigate}
                            />
                        ))}
                    </StaggerGroup>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default OurProjects;
