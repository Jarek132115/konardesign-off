import React, { useEffect, useRef } from "react";
import "../styling/differencesection.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const proChips = [
    "Strategy-led UX built around goals",
    "Custom UI systems (not templates)",
    "Fast, SEO-ready builds (Web Vitals + Schema)",
    "Clear messaging & conversion-first CTAs",
    "Scalable CMS; easy to update",
    "Clean code & structured components",
    "Analytics & tracking built in",
    "Future-proof development",
];

const cheapChips = [
    "Generic templates recycled for other clients",
    "Pretty UI but no UX strategy",
    "Slow load times & bad performance",
    "No SEO structure or content strategy",
    "Hard-coded layouts that break easily",
    "No tracking or analytics",
    "Difficult to scale or update",
    "Ends up needing a full rebuild",
];

const DifferenceSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const eyebrowEl = sectionEl.querySelector(".difference__eyebrow");
        const titleEl = sectionEl.querySelector(".difference__title");
        const subtitleEl = sectionEl.querySelector(".difference__subtitle");
        const cards = sectionEl.querySelectorAll(".difference__card");

        if (!eyebrowEl || !titleEl || !subtitleEl) return;

        // TITLE LETTER ANIMATION (word-safe)
        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("difference__title-word");
            wordWrapper.style.display = "inline-block";

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

        // highlight “Looks Nice” and “Drives Growth”
        const wordSpans = titleEl.querySelectorAll(".difference__title-word");
        const highlightSet = new Set(["Looks", "Nice", "Drives", "Growth"]);

        wordSpans.forEach((wordSpan) => {
            const cleaned = wordSpan.textContent.replace(/[^\w-]/g, "");
            if (highlightSet.has(cleaned)) {
                wordSpan.classList.add("difference__title-highlight");
            }
        });

        const charSpans = titleEl.querySelectorAll(
            ".difference__title-word span"
        );

        gsap.set(subtitleEl, { opacity: 0, y: 8 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        tl
            // 1) Eyebrow
            .fromTo(
                eyebrowEl,
                { opacity: 0, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.25,
                }
            )
            // 2) Letters
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
            // 3) Subheading
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

        // cards fade in on scroll
        cards.forEach((card) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
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
        <section className="difference" ref={sectionRef}>
            <div className="difference__inner">
                <header className="difference__header">
                    <p className="eyebrow difference__eyebrow">
                        Why The Build Matters
                    </p>

                    <h2 className="heading2 difference__title">
                        The Difference Between "Looks Nice" And Actually Drives
                        Growth
                    </h2>

                    <p className="subheading difference__subtitle">
                        Most websites look good at first glance. Under the hood,
                        they&apos;re slow, template-based, unscalable, and
                        expensive to fix later. We build it right the first
                        time.
                    </p>
                </header>

                <div className="difference__grid">
                    {/* LEFT: PROFESSIONAL BUILD */}
                    <article className="difference__card difference__card--pro">
                        <button className="difference__badge difference__badge--pro">
                            Professional build
                        </button>

                        <h3 className="heading3 difference__card-title">
                            Built For Growth
                        </h3>
                        <p className="body difference__card-subtitle">
                            Designed right the first time
                        </p>

                        <p className="body difference__label">What You Get:</p>

                        <div className="difference__chips">
                            {proChips.map((chip) => (
                                <span
                                    key={chip}
                                    className="body difference__chip"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </article>

                    {/* RIGHT: CHEAP / RANDOM BUILD */}
                    <article className="difference__card difference__card--cheap">
                        <button className="difference__badge difference__badge--cheap">
                            Cheap/Random
                        </button>

                        <h3 className="heading3 difference__card-title">
                            Looks Okay – Until It Costs You
                        </h3>
                        <p className="body difference__card-subtitle">
                            Shortcuts now, expensive fixes later
                        </p>

                        <p className="body difference__label">What You Get:</p>

                        <div className="difference__chips">
                            {cheapChips.map((chip) => (
                                <span
                                    key={chip}
                                    className="body difference__chip"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default DifferenceSection;
