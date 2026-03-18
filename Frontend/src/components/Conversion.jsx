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
        eyebrow: "Strategy",
        title: "Every decision starts with the people you want to convert.",
        description:
            "Structure, messaging, and page flow are shaped around your ideal audience from the beginning, so the website feels clear, relevant, and easier to trust.",
        placeholderLabel: "Image Placeholder 01",
        variant: "strategy",
        icon: audienceIcon,
        alt: "Audience icon",
    },
    {
        eyebrow: "Conversion",
        title: "Design choices are made to guide attention and reduce hesitation.",
        description:
            "Layout, hierarchy, and calls to action work together to make next steps feel natural, not forced—helping more visitors move from interest to enquiry.",
        placeholderLabel: "Image Placeholder 02",
        variant: "conversion",
        icon: dataIcon,
        alt: "Conversion icon",
    },
    {
        eyebrow: "Performance",
        title: "Built with speed, structure, and visibility in mind.",
        description:
            "Strong technical foundations, responsive execution, and SEO-aware decisions help your site perform properly after launch—not just look polished on the surface.",
        placeholderLabel: "Image Placeholder 03",
        variant: "performance",
        icon: speedIcon,
        alt: "Speed icon",
    },
    {
        eyebrow: "Experience",
        title: "Smooth user journeys create less friction and more momentum.",
        description:
            "Clear layouts and thoughtful interactions help people understand where they are, what matters, and what to do next without confusion or clutter.",
        placeholderLabel: "Image Placeholder 04",
        variant: "experience",
        icon: uxIcon,
        alt: "UX icon",
    },
    {
        eyebrow: "Consistency",
        title: "The experience holds up across every screen it appears on.",
        description:
            "From desktop to mobile, the website is designed to feel consistent, credible, and easy to use—so the quality of the experience never drops with screen size.",
        placeholderLabel: "Image Placeholder 05",
        variant: "consistency",
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
        const rows = sectionEl.querySelectorAll(".conversion__row");

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

        rows.forEach((row) => {
            const media = row.querySelector(".conversion__media");
            const content = row.querySelector(".conversion__content");

            gsap.fromTo(
                media,
                { opacity: 0, y: 28, scale: 0.985 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 82%",
                        toggleActions: "play none none none",
                    },
                }
            );

            gsap.fromTo(
                content,
                { opacity: 0, y: 28 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 80%",
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
        <section className="conversion" ref={sectionRef}>
            <div className="conversion__inner">
                <header className="conversion__header">
                    <p className="eyebrow conversion__eyebrow">CONVERSION FOCUSED</p>

                    <h2 className="heading2 conversion__title">
                        Conversion and Performance Built In From the Start.
                    </h2>

                    <p className="subheading conversion__subtitle">
                        Strategy, UX, structure, and technical execution work together
                        to create websites that not only look sharp, but help move
                        people towards action.
                    </p>
                </header>

                <div className="conversion__stack">
                    {conversionItems.map((item, index) => (
                        <article
                            key={item.title}
                            className={`conversion__row conversion__row--${item.variant} ${index % 2 !== 0 ? "conversion__row--reverse" : ""
                                }`}
                        >
                            <div className="conversion__media">
                                <div className="conversion__media-inner">
                                    <div className="conversion__media-badge">
                                        {item.eyebrow}
                                    </div>

                                    <div className="conversion__media-placeholder">
                                        <span>{item.placeholderLabel}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="conversion__content">
                                <div className="conversion__item-icon" aria-hidden="true">
                                    <img src={item.icon} alt={item.alt} />
                                </div>

                                <h3 className="heading4 conversion__item-title">
                                    {item.title}
                                </h3>

                                <p className="body conversion__item-text">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Conversion;