import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styling/projects/project1/projectresults.css";

gsap.registerPlugin(ScrollTrigger);

const scoreCards = [
    {
        score: "96",
        label: "Performance",
        text: "Fast-loading layouts and cleaner frontend structure helped the site feel quicker and more responsive across devices.",
    },
    {
        score: "93",
        label: "Accessibility",
        text: "Improved contrast, clearer hierarchy, and stronger usability choices made the experience easier to navigate overall.",
    },
    {
        score: "100",
        label: "Best Practices",
        text: "The build follows modern frontend standards more closely, supporting long-term reliability and technical confidence.",
    },
    {
        score: "100",
        label: "SEO",
        text: "Stronger structure and faster loading created a better technical base for search visibility and discoverability.",
    },
];

const outcomeCards = [
    {
        eyebrow: "Visibility",
        title: "A Stronger Base For Search And Traffic",
        text: "With better page structure, improved speed, and clearer content hierarchy, the site is in a much better position to support organic discoverability and future traffic growth.",
    },
    {
        eyebrow: "Trust",
        title: "A More Credible First Impression",
        text: "The redesign helps the brand feel more polished, more intentional, and more established which matters immediately when new users land on the page for the first time.",
    },
    {
        eyebrow: "Conversion",
        title: "Clearer Journeys Toward Action",
        text: "Calls to action, supporting information, and key selling points now sit within a more controlled flow, making it easier for users to understand the offer and know where to go next.",
    },
    {
        eyebrow: "Scalability",
        title: "Better Prepared For Long-Term Growth",
        text: "The final result is not just visually stronger it also gives the project a cleaner, more adaptable foundation that can scale more confidently as the product and content expand.",
    },
];

const ProjectResults = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const titleEl = sectionEl.querySelector(".project-results__title");
        const subtitleEl = sectionEl.querySelector(".project-results__subtitle");
        const leadCardEl = sectionEl.querySelector(".project-results__lead");
        const scoreItems = sectionEl.querySelectorAll(".project-results__score-card");
        const outcomeItems = sectionEl.querySelectorAll(".project-results__outcome-card");

        if (!titleEl || !subtitleEl || !leadCardEl) return;

        const original = titleEl.textContent;
        titleEl.textContent = "";

        const words = original.split(" ");
        const highlightWords = new Set(["Results", "Performance", "Impact"]);

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("project-results__title-word");
            wordWrapper.style.display = "inline-block";

            for (const ch of word) {
                const charSpan = document.createElement("span");
                charSpan.textContent = ch;
                charSpan.style.display = "inline-block";
                charSpan.style.opacity = "0";
                charSpan.style.transform = "translateY(8px)";
                wordWrapper.appendChild(charSpan);
            }

            const cleaned = word.replace(/[^\w]/g, "");
            if (highlightWords.has(cleaned)) {
                wordWrapper.classList.add("project-results__title-highlight");
            }

            titleEl.appendChild(wordWrapper);

            if (wordIndex !== words.length - 1) {
                titleEl.appendChild(document.createTextNode(" "));
            }
        });

        const charSpans = titleEl.querySelectorAll(".project-results__title-word span");

        gsap.set([subtitleEl, leadCardEl], { opacity: 0, y: 12 });

        const introTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        introTl
            .to(charSpans, {
                opacity: 1,
                y: 0,
                stagger: 0.03,
                duration: 0.4,
            })
            .to(
                subtitleEl,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                },
                ">-0.05"
            )
            .to(
                leadCardEl,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                },
                ">-0.05"
            );

        scoreItems.forEach((item, index) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        outcomeItems.forEach((item, index) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        return () => {
            introTl.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section className="project-results" ref={sectionRef}>
            <div className="project-results__container">
                <header className="project-results__header">
                    <span className="project-results__eyebrow">RESULTS</span>

                    <h2 className="heading2 project-results__title">
                        Results,{" "}
                        <span className="project-results__title-highlight">
                            Performance
                        </span>{" "}
                        and{" "}
                        <span className="project-results__title-highlight">
                            Growth
                        </span>{" "}
                        Readiness.
                    </h2>

                    <p className="subheading project-results__subtitle">
                        The final outcome was not just a better looking website it
                        created a stronger technical, strategic, and user-facing
                        foundation for visibility, trust, responsiveness, and future
                        growth.
                    </p>
                </header>

                <div className="project-results__lead">
                    <div className="project-results__lead-top">
                        <span className="project-results__lead-label">
                            Key Outcome
                        </span>
                        <span className="project-results__lead-badge">
                            High-Impact Redesign
                        </span>
                    </div>

                    <div className="project-results__lead-content">
                        <div className="project-results__lead-main">
                            <h3 className="project-results__lead-title">
                                A clearer, faster, more credible digital experience.
                            </h3>

                            <p className="project-results__lead-text">
                                The redesign improved how the product is presented,
                                how quickly the site performs, and how effectively the
                                overall experience supports trust, usability, and
                                search visibility. Instead of only looking better, the
                                final result works harder across the areas that matter
                                most to a real business website.
                            </p>
                        </div>

                        <div className="project-results__lead-stats">
                            <div className="project-results__lead-stat">
                                <span className="project-results__lead-number">
                                    96
                                </span>
                                <span className="project-results__lead-metric">
                                    Performance
                                </span>
                            </div>

                            <div className="project-results__lead-stat">
                                <span className="project-results__lead-number">
                                    100
                                </span>
                                <span className="project-results__lead-metric">
                                    SEO
                                </span>
                            </div>

                            <div className="project-results__lead-stat">
                                <span className="project-results__lead-number">
                                    100
                                </span>
                                <span className="project-results__lead-metric">
                                    Best Practices
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-results__scores">
                    {scoreCards.map((item) => (
                        <article
                            key={item.label}
                            className="project-results__score-card"
                        >
                            <div className="project-results__score-ring">
                                <span>{item.score}</span>
                            </div>

                            <h3 className="project-results__score-title">
                                {item.label}
                            </h3>

                            <p className="project-results__score-text">
                                {item.text}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="project-results__outcomes">
                    {outcomeCards.map((item) => (
                        <article
                            key={item.title}
                            className="project-results__outcome-card"
                        >
                            <span className="project-results__outcome-eyebrow">
                                {item.eyebrow}
                            </span>

                            <h3 className="project-results__outcome-title">
                                {item.title}
                            </h3>

                            <p className="project-results__outcome-text">
                                {item.text}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectResults;