import React, {
    useEffect,
    useRef,
    useCallback,
    useState,
    useLayoutEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { gsap } from "gsap";

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
        <article className="our-projects-row">
            <div className="our-projects-row__glow-frame our-projects-row__glow-frame--indigo">
                <div
                    ref={cardRef}
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

                    <div
                        ref={pillRef}
                        className={`our-projects-row__hover-pill ${project.isComingSoon
                                ? "our-projects-row__hover-pill--soon"
                                : ""
                            }`}
                        aria-hidden="true"
                    >
                        <span className="our-projects-row__hover-pill-text">
                            {project.hoverLabel}
                        </span>
                    </div>

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
        </article>
    );
};

const OurProjects = () => {
    const pageRef = useRef(null);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const pageEl = pageRef.current;
        if (!pageEl) return;

        const titleEl = pageEl.querySelector(".our-projects__title");
        const subtitleEl = pageEl.querySelector(".our-projects__subtitle");
        const cards = pageEl.querySelectorAll(".our-projects-row");

        if (!titleEl || !subtitleEl || !cards.length) return;

        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");
        const highlightWords = ["work"];

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("our-projects__title-word");
            wordWrapper.style.display = "inline-block";

            const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, "");

            if (highlightWords.includes(cleanedWord)) {
                wordWrapper.classList.add("our-projects__title-word--indigo");
            }

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

        const charSpans = titleEl.querySelectorAll(
            ".our-projects__title-word span"
        );

        gsap.set(subtitleEl, { opacity: 0, y: 8 });
        gsap.set(cards, { opacity: 0, y: 26 });

        const introTl = gsap.timeline({
            defaults: { ease: "power2.out" },
        });

        introTl
            .to(charSpans, {
                opacity: 1,
                y: 0,
                stagger: 0.018,
                duration: 0.26,
            })
            .fromTo(
                subtitleEl,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.28 },
                ">-0.08"
            )
            .fromTo(
                cards,
                { opacity: 0, y: 26 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    stagger: 0.08,
                },
                ">-0.04"
            );

        return () => {
            introTl.kill();
        };
    }, []);

    return (
        <div className="our-projects-page">
            <Navbar />

            <main className="our-projects" ref={pageRef}>
                <div className="our-projects__inner">
                    <header className="our-projects__header">
                        <p className="eyebrow our-projects__eyebrow">
                            SELECTED WORK
                        </p>

                        <h1 className="heading1 our-projects__title">
                            Selected Work
                        </h1>

                        <p className="subheading our-projects__subtitle">
                            A selection of projects where strategy, design, and
                            development come together to create clear,
                            high-performing websites.
                        </p>
                    </header>

                    <div className="our-projects__list">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                navigate={navigate}
                            />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default OurProjects;