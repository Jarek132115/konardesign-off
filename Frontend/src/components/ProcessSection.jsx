import React, { useEffect, useRef, useState } from "react";
import "../styling/process.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: "discovery",
        label: "Discovery & Strategy",
        title: "Understanding Before Creating.",
        description:
            "We start by uncovering your goals, audience, and opportunities. This stage shapes the strategy and direction for everything that follows.",
        bullets: [
            "Market & competitor research",
            "Audience & conversion analysis",
            "Strategy & sitemap planning",
            "Stakeholder & goals workshop",
            "Project scope & timeline defined",
        ],
    },
    {
        id: "brand",
        label: "Brand Foundations",
        title: "Crafting Your Visual Identity.",
        description:
            "We build your brand’s visual core — from tone and color to typography, establishing the look and feel of your future website.",
        bullets: [
            "Brand positioning & messaging",
            "Color palette & typography",
            "Logo refinement or integration",
            "Moodboards & creative direction",
            "Initial style preview approval",
        ],
    },
    {
        id: "design",
        label: "Design & Prototype",
        title: "Designing Seamless Experiences.",
        description:
            "We transform strategy into a custom, conversion-focused website — starting with wireframes, then polished UI designs and interactive prototypes.",
        bullets: [
            "Sitemap & low-fidelity wireframes",
            "Full-page high-fidelity designs",
            "Mobile & responsive views",
            "Interactive prototype for review",
            "Feedback, refinements & sign-off",
        ],
    },
    {
        id: "develop",
        label: "Develop & Test",
        title: "Engineering Performance.",
        description:
            "We build your site to be fast, scalable, and easy to manage — with clean, responsive code and all the backend essentials in place.",
        bullets: [
            "Front-end & CMS development",
            "Mobile & browser optimization",
            "SEO best practices implemented",
            "Core Web Vitals setup",
            "QA & bug testing",
        ],
    },
    {
        id: "launch",
        label: "Launch & Support",
        title: "Going Live, The Right Way.",
        description:
            "We handle your launch with care and precision — and stick around to ensure everything runs smoothly.",
        bullets: [
            "Domain, hosting & deployment",
            "Post-launch checklist & testing",
            "CMS training & handover",
            "Optional retainer for support or updates",
            "Continued growth guidance (on request)",
        ],
    },
];

const MOBILE_STACK_BREAKPOINT = 850;

const ProcessSection = () => {
    const sectionRef = useRef(null);
    const cardRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobileStack, setIsMobileStack] = useState(false);

    const activeStep = steps[activeIndex];

    const goPrev = () => {
        setActiveIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
    };

    const goNext = () => {
        setActiveIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    };

    /* ---------------------------
       HANDLE STACKED VS SLIDER
    ---------------------------- */
    useEffect(() => {
        const updateMode = () => {
            if (typeof window === "undefined") return;
            setIsMobileStack(window.innerWidth <= MOBILE_STACK_BREAKPOINT);
        };

        updateMode();
        window.addEventListener("resize", updateMode);
        return () => window.removeEventListener("resize", updateMode);
    }, []);

    /* ---------------------------
       SCROLL + EYEBROW / LETTER ANIMATION
    ---------------------------- */
    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const eyebrowEl = sectionEl.querySelector(".process__eyebrow");
        const titleEl = sectionEl.querySelector(".process__title");
        const subtitleEl = sectionEl.querySelector(".process__subtitle");
        const headerRow = sectionEl.querySelector(".process__steps");

        if (!eyebrowEl || !titleEl || !subtitleEl) return;

        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("process__title-word");
            wordWrapper.style.display = "inline-block";

            [...word].forEach((ch) => {
                const span = document.createElement("span");
                span.textContent = ch;
                span.style.display = "inline-block";
                span.style.opacity = "0";
                span.style.transform = "translateY(8px)";
                wordWrapper.appendChild(span);
            });

            titleEl.appendChild(wordWrapper);
            if (wordIndex !== words.length - 1) {
                titleEl.appendChild(document.createTextNode(" "));
            }
        });

        const wordSpans = titleEl.querySelectorAll(".process__title-word");
        const highlightWords = new Set(["Goals."]);
        wordSpans.forEach((w) => {
            const cleaned = w.textContent.replace(/[^\w.]/g, "");
            if (highlightWords.has(cleaned)) {
                w.classList.add("process__title-highlight");
            }
        });

        const charSpans = titleEl.querySelectorAll(".process__title-word span");

        gsap.set(subtitleEl, { opacity: 0, y: 8 });
        if (headerRow) gsap.set(headerRow, { opacity: 0, y: 8 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        tl
            // Eyebrow first
            .fromTo(
                eyebrowEl,
                { opacity: 0, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.25,
                }
            )
            // Then title letters
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
            // Then subheading
            .fromTo(
                subtitleEl,
                { opacity: 0, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.28,
                },
                ">-0.08"
            )
            // Then pills row
            .fromTo(
                headerRow,
                { opacity: 0, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.28,
                },
                ">-0.06"
            );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    /* ---------------------------
       CARD ANIMATION ON CHANGE (slider only)
    ---------------------------- */
    useEffect(() => {
        if (isMobileStack) return;
        if (!cardRef.current) return;

        gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 16 },
            {
                opacity: 1,
                y: 0,
                duration: 0.35,
                ease: "power2.out",
            }
        );
    }, [activeIndex, isMobileStack]);

    return (
        <section className="process" ref={sectionRef}>
            <div className="process__inner">
                <header className="process__header">
                    <p className="eyebrow process__eyebrow">HOW WE WORK</p>
                    <h2 className="heading2 process__title">
                        Our Process. Built Around Your Goals.
                    </h2>
                    <p className="subheading process__subtitle">
                        We guide you through a step-by-step journey — focused on strategy,
                        clarity, and measurable results.
                    </p>
                </header>

                {/* DESKTOP / TABLET SLIDER */}
                {!isMobileStack && (
                    <>
                        <div className="process__steps">
                            {steps.map((step, index) => (
                                <button
                                    key={step.id}
                                    type="button"
                                    className={`process__step-pill body ${index === activeIndex
                                            ? "process__step-pill--active"
                                            : ""
                                        }`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {step.label}
                                </button>
                            ))}
                        </div>

                        <div className="process__card-wrapper">
                            <button
                                type="button"
                                className="process__nav process__nav--prev"
                                onClick={goPrev}
                                aria-label="Previous step"
                            >
                                ←
                            </button>

                            <article
                                className={`process__card process__card--bg${activeIndex + 1
                                    }`}
                                ref={cardRef}
                            >
                                <div className="process__card-inner">
                                    <div className="process__card-left">
                                        <h3 className="heading3 process__card-title">
                                            {activeStep.title}
                                        </h3>
                                        <p className="body process__card-description">
                                            {activeStep.description}
                                        </p>
                                    </div>

                                    <div className="process__card-right">
                                        <ul className="process__list">
                                            {activeStep.bullets.map((item) => (
                                                <li
                                                    key={item}
                                                    className="process__list-item body"
                                                >
                                                    <span className="process__list-icon">
                                                        ●
                                                    </span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </article>

                            <button
                                type="button"
                                className="process__nav process__nav--next"
                                onClick={goNext}
                                aria-label="Next step"
                            >
                                →
                            </button>
                        </div>
                    </>
                )}

                {/* MOBILE STACKED VERSION (<= 850px) */}
                {isMobileStack && (
                    <div className="process__stack">
                        {steps.map((step, index) => (
                            <article
                                key={step.id}
                                className={`process__card process__card--stack process__card--bg${index + 1
                                    }`}
                            >
                                <div className="process__stack-number">
                                    {index + 1}
                                </div>

                                <div className="process__card-inner process__card-inner--stack">
                                    <div className="process__card-left">
                                        <h3 className="heading3 process__card-title">
                                            {step.title}
                                        </h3>
                                        <p className="body process__card-description">
                                            {step.description}
                                        </p>
                                    </div>

                                    <div className="process__card-right">
                                        <ul className="process__list">
                                            {step.bullets.map((item) => (
                                                <li
                                                    key={item}
                                                    className="process__list-item body"
                                                >
                                                    <span className="process__list-icon">
                                                        ●
                                                    </span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProcessSection;
