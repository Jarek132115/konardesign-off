import React, { useEffect, useRef } from "react";
import "../styling/intro.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import figmaIcon from "../assets/icons/figma-icon.svg";
import aiIcon from "../assets/icons/ai-icon.svg";
import psIcon from "../assets/icons/ps-icon.svg";
import aeIcon from "../assets/icons/ae-icon.svg";

import vscodeIcon from "../assets/icons/vscode-icon.svg";
import framerIcon from "../assets/icons/framer-icon.svg";
import webflowIcon from "../assets/icons/webflow-icon.svg";

import googleIcon from "../assets/icons/google-icon.svg";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        const leftEl = leftRef.current;
        if (!sectionEl || !leftEl) return;

        /* -------------------------------
           LEFT: EYEBROW + LETTER ANIMATION
           ------------------------------- */
        const eyebrowEl = leftEl.querySelector(".intro__eyebrow");
        const headline = leftEl.querySelector(".intro__headline");
        const subheadingEl = leftEl.querySelector(".intro__subheading");
        if (!eyebrowEl || !headline || !subheadingEl) return;

        const originalText = headline.textContent;
        headline.textContent = "";

        // Split into words, then characters inside each word
        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("intro__headline-word");
            wordWrapper.style.display = "inline-block";

            for (const ch of word) {
                const charSpan = document.createElement("span");
                charSpan.textContent = ch;
                charSpan.style.display = "inline-block";
                charSpan.style.opacity = "0";
                charSpan.style.transform = "translateY(8px)";
                wordWrapper.appendChild(charSpan);
            }

            headline.appendChild(wordWrapper);

            // Real space between words so wrapping happens *between* words
            if (wordIndex !== words.length - 1) {
                headline.appendChild(document.createTextNode(" "));
            }
        });

        // Highlight specific words: ONLY Expertise + Outcomes
        const wordSpans = headline.querySelectorAll(".intro__headline-word");
        const highlightSet = new Set(["Expertise", "Outcomes"]);

        wordSpans.forEach((wordSpan) => {
            const cleaned = wordSpan.textContent.replace(/[^\w-]/g, ""); // strip punctuation
            if (highlightSet.has(cleaned)) {
                wordSpan.classList.add("intro__headline-highlight");
            }
        });

        const charSpans = headline.querySelectorAll(".intro__headline-word span");

        // Faster intro animation, in order:
        // 1) eyebrow, 2) letters, 3) subheading
        const leftTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
        });

        leftTl
            // Eyebrow first
            .fromTo(
                eyebrowEl,
                { opacity: 0, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.25,
                    ease: "power2.out",
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
                    ease: "power2.out",
                },
                ">-0.05"
            )
            // Then subheading
            .fromTo(
                subheadingEl,
                { opacity: 0, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.28,
                    ease: "power2.out",
                },
                ">-0.08"
            );

        /* -------------------------------
           RIGHT: EACH ITEM FADES IN ONCE
           ------------------------------- */
        const items = sectionEl.querySelectorAll(
            ".intro__item, .intro__bottom-text"
        );

        items.forEach((item, index) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none none", // fade in only
                    },
                }
            );
        });
    }, []);

    return (
        <section className="intro" ref={sectionRef}>
            <div className="intro__container">
                {/* LEFT SIDE */}
                <div className="intro__left" ref={leftRef}>
                    <p className="eyebrow intro__eyebrow">EXPERT TEAM</p>
                    <h2 className="intro__headline heading2">
                        Senior-Level Expertise. Built For Real Business Outcomes.
                    </h2>
                    <p className="intro__subheading subheading">
                        A Specialist Team Across UX, Design, Development, And Branding—
                        Focused On Building High-Performance Digital Experiences That
                        Convert And Scale.
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="intro__right">
                    <div className="intro__item">
                        <h3 className="intro__item-title heading3">
                            Design &amp; UX
                        </h3>
                        <p className="intro__item-text body">
                            We design conversion-focused visuals and seamless user
                            experiences.
                        </p>
                        <div className="intro__icons-row">
                            <span className="intro__icon">
                                <img src={figmaIcon} alt="Figma" />
                            </span>
                            <span className="intro__icon">
                                <img src={aiIcon} alt="Adobe Illustrator" />
                            </span>
                            <span className="intro__icon">
                                <img src={psIcon} alt="Adobe Photoshop" />
                            </span>
                            <span className="intro__icon">
                                <img src={aeIcon} alt="Adobe After Effects" />
                            </span>
                        </div>
                    </div>

                    <div className="intro__item">
                        <h3 className="intro__item-title heading3">
                            Development &amp; Engineering
                        </h3>
                        <p className="intro__item-text body">
                            Fast, scalable builds engineered for performance, reliability,
                            and future growth.
                        </p>
                        <div className="intro__icons-row">
                            <span className="intro__icon">
                                <img src={vscodeIcon} alt="VS Code" />
                            </span>
                            <span className="intro__icon">
                                <img src={framerIcon} alt="Framer" />
                            </span>
                            <span className="intro__icon">
                                <img src={webflowIcon} alt="Webflow" />
                            </span>
                        </div>
                    </div>

                    <div className="intro__item">
                        <h3 className="intro__item-title heading3">
                            Build For Performance
                        </h3>
                        <p className="intro__item-text body">
                            Fast, scalable builds engineered for performance, reliability,
                            and future growth.
                        </p>
                        <div className="intro__icons-row">
                            <span className="intro__icon">
                                <img src={googleIcon} alt="Google" />
                            </span>
                        </div>
                    </div>

                    <p className="intro__bottom-text">
                        No templates. No outsourcing. Built from scratch, end to end.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
