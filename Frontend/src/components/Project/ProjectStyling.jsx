import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../styling/projects/project1/projectstyling.css";

const ProjectStyling = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const titleEl = sectionEl.querySelector(".project-styling__title");
        const subtitleEl = sectionEl.querySelector(".project-styling__subtitle");

        if (!titleEl || !subtitleEl) return;

        const original = titleEl.textContent;
        titleEl.textContent = "";

        const words = original.split(" ");
        const highlightWords = new Set(["Styling", "System"]);

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("project-styling__title-word");
            wordWrapper.style.display = "inline-block";

            for (const ch of word) {
                const charSpan = document.createElement("span");
                charSpan.textContent = ch;
                charSpan.style.display = "inline-block";
                charSpan.style.opacity = "0";
                charSpan.style.transform = "translateY(8px)";
                wordWrapper.appendChild(charSpan);
            }

            const cleaned = word.replace(/[^\w]/g, "");
            if (highlightWords.has(cleaned)) {
                wordWrapper.classList.add("project-styling__title-highlight");
            }

            titleEl.appendChild(wordWrapper);

            if (wordIndex !== words.length - 1) {
                titleEl.appendChild(document.createTextNode(" "));
            }
        });

        const charSpans = titleEl.querySelectorAll(".project-styling__title-word span");

        gsap.set(subtitleEl, { opacity: 0, y: 8 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        tl.to(charSpans, {
            opacity: 1,
            y: 0,
            stagger: 0.03,
            duration: 0.4,
        }).to(
            subtitleEl,
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
            },
            ">-0.05"
        );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section className="project-styling" ref={sectionRef}>
            <header className="project-styling__header">
                <h2 className="heading2 project-styling__title">
                    Styling &amp; Visual System Built To Last.
                </h2>

                <p className="subheading project-styling__subtitle">
                    I defined a complete visual language — typography, colour,
                    spacing, and UI components — so every page of KonarCard
                    feels consistent, recognisable, and properly aligned with
                    the brand.
                </p>
            </header>

            <div className="project-styling__grid">
                <div className="project-styling__card">
                    <h3 className="project-styling__card-title">Typography</h3>

                    <div className="project-styling__font-row">
                        <div className="project-styling__font-block">
                            <span className="project-styling__font-label">
                                Primary Font
                            </span>
                            <span className="project-styling__font-name">
                                Cal Sans
                            </span>
                        </div>

                        <div className="project-styling__font-block">
                            <span className="project-styling__font-label">
                                Secondary Font
                            </span>
                            <span className="project-styling__font-name">
                                Inter
                            </span>
                        </div>
                    </div>
                </div>

                <div className="project-styling__card">
                    <h3 className="project-styling__card-title">Colour Scheme</h3>

                    <div className="project-styling__swatches">
                        <div className="project-styling__swatch project-styling__swatch--primary">
                            <span className="project-styling__swatch-name">
                                Primary
                            </span>
                            <span className="project-styling__swatch-hex">
                                #4F46E5
                            </span>
                        </div>

                        <div className="project-styling__swatch project-styling__swatch--accent">
                            <span className="project-styling__swatch-name">
                                Accent
                            </span>
                            <span className="project-styling__swatch-hex">
                                #F97316
                            </span>
                        </div>

                        <div className="project-styling__swatch project-styling__swatch--dark">
                            <span className="project-styling__swatch-name">
                                Deep
                            </span>
                            <span className="project-styling__swatch-hex">
                                #020617
                            </span>
                        </div>

                        <div className="project-styling__swatch project-styling__swatch--muted">
                            <span className="project-styling__swatch-name">
                                Muted
                            </span>
                            <span className="project-styling__swatch-hex">
                                #E5E7EB
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectStyling;