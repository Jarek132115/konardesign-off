import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styling/projects/project1/projectfinallooks.css";

import carousel1 from "../../assets/images/carousel1.jpg";
import carousel2 from "../../assets/images/carousel2.jpg";
import carousel3 from "../../assets/images/carousel3.jpg";
import carousel4 from "../../assets/images/carousel4.jpg";
import carousel5 from "../../assets/images/carousel5.jpg";
import carousel6 from "../../assets/images/carousel6.jpg";

gsap.registerPlugin(ScrollTrigger);

const finalLooks = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
];

const ProjectFinalLooks = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const titleEl = sectionEl.querySelector(".project-final__title");
        const subtitleEl = sectionEl.querySelector(".project-final__subtitle");
        const cards = sectionEl.querySelectorAll(".project-final__card");

        if (!titleEl || !subtitleEl) return;

        const original = titleEl.textContent;
        titleEl.textContent = "";

        const words = original.split(" ");
        const highlightWords = new Set(["Final", "Looks"]);

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("project-final__title-word");
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
                wordWrapper.classList.add("project-final__title-highlight");
            }

            titleEl.appendChild(wordWrapper);

            if (wordIndex !== words.length - 1) {
                titleEl.appendChild(document.createTextNode(" "));
            }
        });

        const charSpans = titleEl.querySelectorAll(".project-final__title-word span");

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
                        start: "top 82%",
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
        <section className="project-final" ref={sectionRef}>
            <header className="project-final__header">
                <h2 className="heading2 project-final__title">
                    Final Looks Across Every Touchpoint.
                </h2>

                <p className="subheading project-final__subtitle">
                    A selection of key KonarCard screens showing how the visual
                    system holds together across landing pages, product sections,
                    and the wider user journey.
                </p>
            </header>

            <div className="project-final__grid">
                {finalLooks.map((src, index) => (
                    <article key={index} className="project-final__card">
                        <img
                            src={src}
                            alt={`KonarCard final screen ${index + 1}`}
                            className="project-final__image"
                        />
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ProjectFinalLooks;