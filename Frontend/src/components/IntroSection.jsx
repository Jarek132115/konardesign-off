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
import googleAnalyticsIcon from "../assets/icons/google-analytics-icon.svg";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        const leftEl = leftRef.current;
        if (!sectionEl || !leftEl) return;

        const ctx = gsap.context(() => {
            const eyebrowEl = leftEl.querySelector(".intro__eyebrow");
            const headline = leftEl.querySelector(".intro__headline");
            const subheadingEl = leftEl.querySelector(".intro__subheading");

            if (!eyebrowEl || !headline || !subheadingEl) return;

            const originalText = headline.textContent;
            headline.textContent = "";

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

                if (wordIndex !== words.length - 1) {
                    headline.appendChild(document.createTextNode(" "));
                }
            });

            const wordSpans = headline.querySelectorAll(".intro__headline-word");
            const highlightSet = new Set([
                "Strategy",
                "Design",
                "Performance",
            ]);

            wordSpans.forEach((wordSpan) => {
                const cleaned = wordSpan.textContent.replace(/[^\w-]/g, "");
                if (highlightSet.has(cleaned)) {
                    wordSpan.classList.add("intro__headline-highlight");
                }
            });

            const charSpans = headline.querySelectorAll(
                ".intro__headline-word span"
            );

            const leftTl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionEl,
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
                defaults: { ease: "power2.out" },
            });

            leftTl
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
                    subheadingEl,
                    { opacity: 0, y: 8 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.28,
                    },
                    ">-0.08"
                );

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
                        delay: index * 0.08,
                        scrollTrigger: {
                            trigger: item,
                            start: "top 84%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="intro" ref={sectionRef}>
            <div className="intro__container">
                <div className="intro__left" ref={leftRef}>
                    <p className="eyebrow intro__eyebrow">WHAT I DO</p>

                    <h2 className="intro__headline heading2">
                        Strategy. Design. Performance. Built with clarity from start to finish.
                    </h2>

                    <p className="intro__subheading subheading">
                        I take projects from early direction through to design and development, making sure everything is structured properly, easy to use, and built to perform. The goal is simple - create websites that not only look good, but actually work.
                    </p>
                </div>

                <div className="intro__right">
                    <div className="intro__item">
                        <h3 className="intro__item-title heading3">
                            Design &amp; UX
                        </h3>
                        <p className="intro__item-text body">
                            Clear layouts, strong hierarchy, and user-focused design that makes content easy to understand and actions easy to take.
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
                            Development &amp; Build
                        </h3>
                        <p className="intro__item-text body">
                            Fast, responsive websites built with clean code and a focus on long-term scalability across all devices.
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
                            Performance &amp; Visibility
                        </h3>
                        <p className="intro__item-text body">
                            Strong structure, fast load times, and SEO-aware decisions that help your website perform properly after launch.
                        </p>
                        <div className="intro__icons-row">
                            <span className="intro__icon">
                                <img src={googleIcon} alt="Google" />
                            </span>
                            <span className="intro__icon">
                                <img
                                    src={googleAnalyticsIcon}
                                    alt="Google Analytics"
                                />
                            </span>
                        </div>
                    </div>

                    <p className="intro__bottom-text">
                        One clear direction. One consistent build. No unnecessary complexity.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;