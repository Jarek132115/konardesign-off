import React, { useEffect, useRef } from "react";
import "../styling/offer.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import essentialsIcon from "../assets/icons/essentials.svg";
import performanceIcon from "../assets/icons/performance.svg";
import expansionIcon from "../assets/icons/expansion.svg";

gsap.registerPlugin(ScrollTrigger);

const offers = [
    {
        id: "essentials",
        name: "Essentials",
        tagline: "For businesses that need maintenance and ongoing support.",
        includes: [
            "Content & Image Updates",
            "Bug Fixes & Hosting Help",
            "Security & Uptime Monitoring",
            "Basic Performance Checks",
            "Email Support (24/7)",
        ],
        price: "£295/Mo",
        featured: false,
        icon: essentialsIcon,
    },
    {
        id: "performance",
        name: "Performance",
        tagline: "For businesses optimizing conversions and user experience.",
        includes: [
            "All Essentials Features",
            "UX & UI Improvements",
            "Analytics & Reporting",
            "Heatmaps & User Tracking",
            "SEO Updates & Refinements",
            "A/B Tests To Improve Conversion",
        ],
        price: "£495/Mo",
        featured: true,
        icon: performanceIcon,
    },
    {
        id: "expansion",
        name: "Expansion",
        tagline:
            "For businesses scaling fast and adding new digital experiences.",
        includes: [
            "All Performance Features",
            "New Landing Pages",
            "New Features & Integrations",
            "CRO Roadmap & Experiments",
            "Content Strategy & Updates",
            "Priority Support",
            "Quarterly Strategy Calls",
        ],
        price: "£995/Mo",
        featured: false,
        icon: expansionIcon,
    },
];

const OfferSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const eyebrowEl = sectionEl.querySelector(".offer__eyebrow");
        const titleEl = sectionEl.querySelector(".offer__title");
        const subtitleEl = sectionEl.querySelector(".offer__subtitle");
        const cards = sectionEl.querySelectorAll(".offer__card");

        if (!eyebrowEl || !titleEl || !subtitleEl) return;

        /* -----------------------------
           EYEBROW + LETTER HEADING
        ------------------------------ */

        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("offer__title-word");
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

        // Highlight “Growth”
        const wordSpans = titleEl.querySelectorAll(".offer__title-word");
        const highlightWords = new Set(["Growth"]);

        wordSpans.forEach((w) => {
            const cleaned = w.textContent.replace(/[^\w]/g, "");
            if (highlightWords.has(cleaned)) {
                w.classList.add("offer__title-highlight");
            }
        });

        const charSpans = titleEl.querySelectorAll(".offer__title-word span");

        gsap.set(subtitleEl, { opacity: 0, y: 8 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        // Eyebrow first
        tl.fromTo(
            eyebrowEl,
            { opacity: 0, y: 8 },
            {
                opacity: 1,
                y: 0,
                duration: 0.25,
            }
        )
            // Then headline letters
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
            );

        /* -----------------------------
           CARDS FADE-IN ON SCROLL
        ------------------------------ */

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section className="offer" ref={sectionRef}>
            <div className="offer__inner">
                <header className="offer__header">
                    <p className="eyebrow offer__eyebrow">ONGOING PARTNERSHIPS</p>
                    <h2 className="heading2 offer__title">
                        Ongoing Growth &amp; Optimization
                    </h2>
                    <p className="subheading offer__subtitle">
                        We stay after launch to improve performance, refine UX, add
                        features, and support your business long term.
                    </p>
                </header>

                <div className="offer__grid">
                    {offers.map((plan) => (
                        <article
                            key={plan.id}
                            className={`offer__card ${plan.featured ? "offer__card--featured" : ""
                                }`}
                        >
                            <div className="offer__card-inner">
                                {/* Icon */}
                                <div className="offer__icon">
                                    <img src={plan.icon} alt={`${plan.name} icon`} />
                                </div>

                                {/* Plan name */}
                                <h3 className="heading3 offer__plan-name">
                                    {plan.name}
                                </h3>

                                {/* Tagline */}
                                <p className="body offer__plan-tagline">
                                    {plan.tagline}
                                </p>

                                {/* Includes */}
                                <div className="offer__includes">
                                    <p className="offer__includes-label">Includes:</p>
                                    <div className="offer__pills">
                                        {plan.includes.map((item) => (
                                            <span
                                                key={item}
                                                className="body offer__pill"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Price bar */}
                                <div className="offer__price-bar">
                                    <span className="body offer__price">
                                        {plan.price}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfferSection;
