// src/components/Conversion.jsx
import React, { useEffect, useRef } from "react";
import "../styling/conversion.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import audienceIcon from "../assets/icons/audience.svg";
import dataIcon from "../assets/icons/data.svg";
import speedIcon from "../assets/icons/speed.svg";
import uxIcon from "../assets/icons/ux.svg";
import responsiveIcon from "../assets/icons/responsive.svg";

gsap.registerPlugin(ScrollTrigger);

const conversionItems = [
    {
        title: "Audience-Tailored Design",
        description:
            "Designed for your customers, not just your brand. Every decision is informed by audience behaviour, intent, and positioning, ensuring your website speaks directly to the people most likely to buy.",
        icon: audienceIcon,
        alt: "Audience icon",
    },
    {
        title: "Data-Driven Conversion Strategy",
        description:
            "We design using analytics, not assumptions. From heatmaps to event tracking, every layout is tested, measured, and iterated for performance, not just aesthetics.",
        icon: dataIcon,
        alt: "Data icon",
    },
    {
        title: "Built For Speed, SEO, & Visibility",
        description:
            "Performance-first builds that rank and convert. Lightweight code, Web Vitals optimization, accessibility, schema, and technical SEO, baked in from day one.",
        icon: speedIcon,
        alt: "Speed icon",
    },
    {
        title: "UX That Reduces Friction",
        description:
            "Every layout and interaction designed around user psychology. We map real user flows and remove friction to guide visitors from interest → action.",
        icon: uxIcon,
        alt: "UX icon",
    },
    {
        title: "Responsive By Design",
        description:
            "Consistent experience, wherever your users land. Optimized layouts for mobile, desktop, tablet, and large screens with adaptive components, not breakpoints.",
        icon: responsiveIcon,
        alt: "Responsive icon",
    },
];

const Conversion = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const eyebrowEl = sectionEl.querySelector(".conversion__eyebrow");
        const titleEl = sectionEl.querySelector(".conversion__title");
        const subtitleEl = sectionEl.querySelector(".conversion__subtitle");
        const cards = sectionEl.querySelectorAll(".conversion__card");

        if (!eyebrowEl || !titleEl || !subtitleEl) return;

        // Split title into word wrappers + chars
        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("conversion__title-word");
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

        // Highlight "Conversion" and "Engineered"
        const wordSpans = titleEl.querySelectorAll(".conversion__title-word");
        const highlightSet = new Set(["Conversion", "Engineered"]);

        wordSpans.forEach((wordSpan) => {
            const cleaned = wordSpan.textContent.replace(/[^\w-]/g, "");
            if (highlightSet.has(cleaned)) {
                wordSpan.classList.add("conversion__title-highlight");
            }
        });

        const charSpans = titleEl.querySelectorAll(".conversion__title-word span");

        // Eyebrow + letters + subheading (fast, like Intro)
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
            );

        // Cards fade-in
        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                    delay: index * 0.05,
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
        <section className="conversion" ref={sectionRef}>
            <div className="conversion__inner">
                <header className="conversion__header">
                    <p className="eyebrow conversion__eyebrow">CONVERSION FOCUSED</p>
                    <h2 className="heading2 conversion__title">
                        Conversion Isn’t An Accident. It’s Engineered.
                    </h2>

                    <p className="subheading conversion__subtitle">
                        We Combine UX, Data, And Performance To Turn Visitors Into
                        Customers.
                    </p>
                </header>

                <div className="conversion__grid">
                    {conversionItems.map((item, index) => (
                        <article
                            key={item.title}
                            className={`conversion__card conversion__card--bg${index + 1}`}
                        >
                            <div className="conversion__icon" aria-hidden="true">
                                <img src={item.icon} alt={item.alt} />
                            </div>

                            <h3 className="heading3 conversion__card-title">
                                {item.title}
                            </h3>

                            <p className="body conversion__card-text">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Conversion;
