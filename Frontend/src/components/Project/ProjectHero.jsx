import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../styling/projects/project1/projecthero.css";

import konarVideoHero from "../../assets/videos/KonarCard1.mp4";

const ProjectHero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const heroEl = heroRef.current;
        if (!heroEl) return;

        const titleEl = heroEl.querySelector(".project-hero__title");
        const subtitleEl = heroEl.querySelector(".project-hero__subtitle");
        const pillsEl = heroEl.querySelector(".project-hero__pills");
        const metaEl = heroEl.querySelector(".project-hero__meta");
        const mediaEl = heroEl.querySelector(".project-hero__media");

        if (!titleEl || !subtitleEl || !pillsEl || !metaEl || !mediaEl) return;

        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");
        const highlightWords = new Set(["KonarCard"]);

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("project-hero__title-word");
            wordWrapper.style.display = "inline-block";

            const cleanedWord = word.replace(/[^\w]/g, "");
            if (highlightWords.has(cleanedWord)) {
                wordWrapper.classList.add("project-hero__title-word--indigo");
            }

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

        const charSpans = titleEl.querySelectorAll(".project-hero__title-word span");

        gsap.set(subtitleEl, { opacity: 0, y: 8 });
        gsap.set(pillsEl, { opacity: 0, y: 8 });
        gsap.set(metaEl, { opacity: 0, y: 12 });
        gsap.set(mediaEl, { opacity: 0, y: 16 });

        const tl = gsap.timeline({
            defaults: { ease: "power2.out" },
        });

        tl.to(charSpans, {
            opacity: 1,
            y: 0,
            stagger: 0.018,
            duration: 0.26,
        })
            .to(
                subtitleEl,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.28,
                },
                ">-0.06"
            )
            .to(
                pillsEl,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.26,
                },
                ">-0.08"
            )
            .to(
                metaEl,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                },
                "<"
            )
            .to(
                mediaEl,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.32,
                },
                ">-0.04"
            );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section className="project-hero" ref={heroRef}>
            <div className="project-hero__inner">
                <div className="project-hero__top">
                    <div className="project-hero__info">
                        <div className="project-hero__copy-bg" />

                        <h1 className="heading1 project-hero__title">
                            KonarCard Digital Product Website
                        </h1>

                        <p className="subheading project-hero__subtitle">
                            A strategic website redesign and build for a digital
                            business card platform, created to improve clarity,
                            strengthen trust, and support a more conversion-focused
                            user journey.
                        </p>

                        <div className="project-hero__pills">
                            <span className="project-hero__pill">
                                Digital Business Card Platform
                            </span>
                            <span className="project-hero__pill">
                                Strategic Website Redesign
                            </span>
                            <span className="project-hero__pill">
                                Conversion-Focused Build
                            </span>
                        </div>
                    </div>

                    <aside className="project-hero__meta">
                        <div className="project-hero__meta-group">
                            <span className="project-hero__meta-label">
                                Pages Developed
                            </span>
                            <span className="project-hero__meta-value">23+</span>
                        </div>

                        <div className="project-hero__meta-group">
                            <span className="project-hero__meta-label">Industry</span>
                            <span className="project-hero__meta-value">Software</span>
                        </div>

                        <div className="project-hero__meta-group">
                            <span className="project-hero__meta-label">Year</span>
                            <span className="project-hero__meta-value">2026</span>
                        </div>

                        <div className="project-hero__meta-group">
                            <span className="project-hero__meta-label">Website</span>
                            <a
                                href="https://www.konarcard.com"
                                target="_blank"
                                rel="noreferrer"
                                className="project-hero__meta-link"
                            >
                                www.konarcard.com
                            </a>
                        </div>
                    </aside>
                </div>

                <div className="project-hero__media">
                    <div className="project-hero__media-inner">
                        <video
                            src={konarVideoHero}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="project-hero__media-video"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectHero;