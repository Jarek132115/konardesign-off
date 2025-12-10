import React, { useEffect, useRef, useState } from "react";
import "../../styling/CustomService/customprocess.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: "discovery",
        label: "Discovery & Strategy",
        title: "Understanding Your Business Before We Build.",
        description:
            "We start by getting clear on your offers, audience, and goals so the website is built around what actually drives revenue — not just what looks good.",
        bullets: [
            "Current site + funnel review (if you have one)",
            "Audience, offer and conversion goals clarified",
            "Competitive and positioning overview",
            "Technical requirements and constraints mapped",
            "Project scope, milestones and success metrics agreed",
        ],
    },
    {
        id: "structure",
        label: "Structure & Content Plan",
        title: "Mapping A Conversion-Ready Website.",
        description:
            "We design the information architecture and page structure so each screen has a clear job — educate, reassure, or convert.",
        bullets: [
            "Page-level sitemap and user flows",
            "Section-by-section breakdown for key pages",
            "Conversion-focused content outline and CTAs",
            "SEO and landing-page strategy baked into the plan",
            "Sign-off on structure before any pixels are pushed",
        ],
    },
    {
        id: "design",
        label: "Design & Figma Access",
        title: "Designing Your Custom Experience — Together.",
        description:
            "We design every page from scratch in a shared Figma file so you can see progress in real time, comment directly on the work, and stay involved without extra meetings.",
        bullets: [
            "Shared Figma file with full comment access",
            "High-fidelity designs for desktop, tablet and mobile",
            "Design system for components, typography and colour",
            "You choose your update rhythm: daily, weekly or monthly",
            "Live review calls for key milestones and refinements",
        ],
    },
    {
        id: "develop",
        label: "Build & Test",
        title: "Engineering A Fast, Stable Build.",
        description:
            "Once designs are locked, we translate everything into a performant React build with clean structure, analytics and SEO foundations wired in.",
        bullets: [
            "Pixel-accurate React front-end implementation",
            "CMS or content setup based on your stack",
            "Performance and accessibility optimisations",
            "Analytics and tracking integrated from day one",
            "Cross-browser and device testing before launch",
        ],
    },
    {
        id: "launch",
        label: "Launch, Training & Support",
        title: "Going Live With Confidence.",
        description:
            "We don’t just push deploy and disappear. We launch carefully, train your team, and stay close as you start sending real traffic through the site.",
        bullets: [
            "Staging review and final pre-launch checklist",
            "Domain, hosting and deployment handled end-to-end",
            "Training session on the CMS and key flows",
            "Documentation for future updates and experiments",
            "Optional retainers for ongoing optimisation and tests",
        ],
    },
];

const MOBILE_STACK_BREAKPOINT = 850;

const CustomProcess = () => {
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
        const highlightWords = new Set(["Process."]);
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
            .fromTo(
                eyebrowEl,
                { opacity: 0, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.25,
                }
            )
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
                    <p className="eyebrow process__eyebrow">
                        CUSTOM WEBSITE PROCESS
                    </p>
                    <h2 className="heading2 process__title">
                        A Clear, Stress-Free Custom Website Process.
                    </h2>
                    <p className="subheading process__subtitle">
                        From first strategy call to launch, you’ll see every step,
                        have access to the live design file, and know exactly what
                        we’re working on each week.
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

export default CustomProcess;
