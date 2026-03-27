import React, { useEffect, useRef } from "react";
import "../styling/differencesection.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const proChips = [
    "Strategy-first UX",
    "Custom UI, no templates",
    "Fast, SEO-ready build",
    "Conversion-focused layout",
    "Scalable CMS setup",
    "Clean, modular code",
    "Analytics built in",
    "Easy to improve later",
];

const cheapChips = [
    "Reused generic templates",
    "No UX strategy",
    "Slow performance",
    "Weak SEO structure",
    "Brittle hard-coded layouts",
    "No analytics setup",
    "Hard to scale or update",
    "Expensive to fix later",
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

        gsap.set(titleEl, { opacity: 0, y: 8 });
        gsap.set(subtitleEl, { opacity: 0, y: 8 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        tl.fromTo(
            eyebrowEl,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.25 }
        )
            .fromTo(
                titleEl,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.32 },
                ">-0.04"
            )
            .fromTo(
                subtitleEl,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.28 },
                ">-0.08"
            );

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    delay: index * 0.05,
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
                        WHY THE BUILD MATTERS
                    </p>

                    <h2 className="heading2 difference__title">
                        The Difference Between Good and{" "}
                        <span className="difference__highlight">
                            Properly Built
                        </span>
                    </h2>

                    <p className="subheading difference__subtitle">
                        A lot of websites look fine at first glance, but
                        underneath they are slow, hard to scale, and expensive
                        to fix later.
                    </p>
                </header>

                <div className="difference__grid">
                    <article className="difference__card">
                        <div className="difference__badge difference__badge--pro">
                            Built properly
                        </div>

                        <h3 className="heading4 difference__card-title">
                            Built to perform and scale
                        </h3>

                        <p className="body difference__card-subtitle">
                            Clear foundations from the start
                        </p>

                        <div className="difference__chips">
                            {proChips.map((chip) => (
                                <span
                                    key={chip}
                                    className="difference__chip body"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </article>

                    <article className="difference__card">
                        <div className="difference__badge difference__badge--cheap">
                            Poorly built
                        </div>

                        <h3 className="heading4 difference__card-title">
                            Looks fine, breaks later
                        </h3>

                        <p className="body difference__card-subtitle">
                            Shortcuts early create bigger problems later
                        </p>

                        <div className="difference__chips">
                            {cheapChips.map((chip) => (
                                <span
                                    key={chip}
                                    className="difference__chip body"
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