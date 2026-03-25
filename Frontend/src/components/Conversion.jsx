import React, { useEffect, useRef } from "react";
import "../styling/conversion.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import conversionImage1 from "../assets/images/Conversion1.png";
import conversionImage2 from "../assets/images/Conversion2.png";
import conversionImage3 from "../assets/images/Conversion3.png";
import conversionImage4 from "../assets/images/Conversion4.png";

gsap.registerPlugin(ScrollTrigger);

const conversionItems = [
    {
        id: "strategy",
        eyebrow: "Strategy",
        titleParts: [
            { text: "Every decision starts with the ", highlight: false },
            { text: "people", highlight: true },
            { text: " you want to ", highlight: false },
            { text: "convert", highlight: true },
            { text: ".", highlight: false },
        ],
        description:
            "Structure, messaging, and page flow are shaped around your ideal audience from the beginning, so the website feels clear, relevant, and easier to trust.",
        image: conversionImage1,
    },
    {
        id: "conversion",
        eyebrow: "Conversion",
        titleParts: [
            { text: "Design choices are made to guide ", highlight: false },
            { text: "attention", highlight: true },
            { text: " and reduce ", highlight: false },
            { text: "hesitation", highlight: true },
            { text: ".", highlight: false },
        ],
        description:
            "Layout, hierarchy, and calls to action work together to make next steps feel natural, not forced, helping more visitors move from interest to enquiry.",
        image: conversionImage2,
    },
    {
        id: "performance",
        eyebrow: "Performance",
        titleParts: [
            { text: "Built with ", highlight: false },
            { text: "speed", highlight: true },
            { text: ", structure, and ", highlight: false },
            { text: "visibility", highlight: true },
            { text: " in mind.", highlight: false },
        ],
        description:
            "Strong technical foundations, responsive execution, and SEO-aware decisions help your site perform properly after launch, not just polished on the surface.",
        image: conversionImage3,
    },
    {
        id: "experience",
        eyebrow: "Experience",
        titleParts: [
            { text: "Smooth user journeys create less ", highlight: false },
            { text: "friction", highlight: true },
            { text: " and more ", highlight: false },
            { text: "momentum", highlight: true },
            { text: ".", highlight: false },
        ],
        description:
            "Clear layouts and thoughtful interactions help people understand where they are, what matters, and what to do next without confusion or clutter.",
        image: conversionImage4,
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

        if (!eyebrowEl || !titleEl || !subtitleEl || !cards.length) return;

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
        gsap.set(cards, { opacity: 0, y: 22 });

        const introTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 72%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        introTl
            .fromTo(
                eyebrowEl,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.22 }
            )
            .to(
                charSpans,
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.014,
                    duration: 0.22,
                },
                ">-0.03"
            )
            .fromTo(
                subtitleEl,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.24 },
                ">-0.06"
            )
            .fromTo(
                cards,
                { opacity: 0, y: 22 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.38,
                    stagger: 0.08,
                },
                ">-0.04"
            );

        return () => {
            introTl.kill();
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
                        Strategy, UX, structure, and technical execution work
                        together to create websites that not only look sharp,
                        but help move people towards action.
                    </p>
                </header>

                <div className="conversion__grid">
                    {conversionItems.map((item, index) => {
                        const secondRow = index >= 2;

                        return (
                            <article
                                key={item.id}
                                className={`conversion__card ${secondRow ? "conversion__card--reverse" : ""
                                    }`}
                            >
                                <div className="conversion__image-wrap">
                                    <div className="conversion__image-card">
                                        <img
                                            src={item.image}
                                            alt={item.eyebrow}
                                            className="conversion__image"
                                            draggable="false"
                                        />
                                    </div>
                                </div>

                                <div className="conversion__content">
                                    <div className="conversion__media-badge">
                                        {item.eyebrow}
                                    </div>

                                    <h3 className="heading4 conversion__item-title">
                                        {item.titleParts.map((part, partIndex) => (
                                            <span
                                                key={`${item.id}-${partIndex}`}
                                                className={
                                                    part.highlight
                                                        ? "conversion__title-accent"
                                                        : ""
                                                }
                                            >
                                                {part.text}
                                            </span>
                                        ))}
                                    </h3>

                                    <p className="body conversion__item-text">
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Conversion;