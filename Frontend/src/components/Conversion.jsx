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
        title: "Audience-Led Website Strategy",
        description:
            "Every website starts with who it needs to reach. Structure, messaging, and page flow are shaped around the people most likely to trust, enquire, and convert.",
        icon: audienceIcon,
        alt: "Audience icon",
    },
    {
        title: "Conversion-Focused Decisions",
        description:
            "Layouts are designed to guide attention, reduce hesitation, and make next steps feel obvious. The goal is not just a nicer website—it is a more effective one.",
        icon: dataIcon,
        alt: "Data icon",
    },
    {
        title: "Built for Speed, SEO & Visibility",
        description:
            "Fast-loading pages, strong technical foundations, and SEO-aware structure help your website perform properly after launch—not just look polished on the surface.",
        icon: speedIcon,
        alt: "Speed icon",
    },
    {
        title: "UX That Reduces Friction",
        description:
            "Clear hierarchy, smoother interactions, and simpler journeys help users move from interest to action without confusion, clutter, or unnecessary drop-off.",
        icon: uxIcon,
        alt: "UX icon",
    },
    {
        title: "Responsive by Default",
        description:
            "The experience is designed to hold up across desktop, laptop, tablet, and mobile—so the website feels consistent, credible, and usable on every screen.",
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

        const wordSpans = titleEl.querySelectorAll(".conversion__title-word");
        const highlightSet = new Set(["Conversion", "Performance"]);

        wordSpans.forEach((wordSpan) => {
            const cleaned = wordSpan.textContent.replace(/[^\w-]/g, "");
            if (highlightSet.has(cleaned)) {
                wordSpan.classList.add("conversion__title-highlight");
            }
        });

        const charSpans = titleEl.querySelectorAll(".conversion__title-word span");

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
                    <p className="eyebrow conversion__eyebrow">
                        CONVERSION FOCUSED
                    </p>

                    <h2 className="heading2 conversion__title">
                        Conversion and Performance Built In From the Start.
                    </h2>

                    <p className="subheading conversion__subtitle">
                        Strategy, UX, structure, and technical execution all work
                        together to help your website do more than just look good.
                    </p>
                </header>

                <div className="conversion__grid">
                    {conversionItems.map((item, index) => (
                        <article
                            key={item.title}
                            className={`conversion__card conversion__card--bg${index + 1
                                }`}
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