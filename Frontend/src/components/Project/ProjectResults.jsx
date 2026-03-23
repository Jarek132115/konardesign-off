import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styling/projects/project1/projectresults.css";

gsap.registerPlugin(ScrollTrigger);

const results = [
    {
        score: "96",
        title: "Performance",
        text: "Optimised media, lean structure, and efficient frontend choices helped the site load quickly and feel smooth across devices.",
    },
    {
        score: "93",
        title: "Accessibility",
        text: "Clear contrast, better semantic structure, and more usable interaction patterns improved overall accessibility and clarity.",
    },
    {
        score: "100",
        title: "Best Practices",
        text: "The build followed modern frontend standards, with cleaner implementation choices that support stability and maintainability.",
    },
    {
        score: "100",
        title: "SEO",
        text: "Strong technical foundations, fast experience, and clear page structure created a much better base for visibility and search performance.",
    },
];

const ProjectResults = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const titleEl = sectionEl.querySelector(".project-results__title");
        const subtitleEl = sectionEl.querySelector(".project-results__subtitle");
        const items = sectionEl.querySelectorAll(".project-results__item");

        if (!titleEl || !subtitleEl) return;

        const original = titleEl.textContent;
        titleEl.textContent = "";

        const words = original.split(" ");
        const highlightWords = new Set(["Results", "Impact"]);

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("project-results__title-word");
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
                wordWrapper.classList.add("project-results__title-highlight");
            }

            titleEl.appendChild(wordWrapper);

            if (wordIndex !== words.length - 1) {
                titleEl.appendChild(document.createTextNode(" "));
            }
        });

        const charSpans = titleEl.querySelectorAll(".project-results__title-word span");

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

        items.forEach((item, index) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
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
        <section className="project-results" ref={sectionRef}>
            <header className="project-results__header">
                <h2 className="heading2 project-results__title">
                    Results and Performance Impact.
                </h2>

                <p className="subheading project-results__subtitle">
                    The final result was a faster, clearer, and more polished
                    website experience — one that better supports trust,
                    responsiveness, and long-term growth.
                </p>
            </header>

            <div className="project-results__grid">
                {results.map((item) => (
                    <article key={item.title} className="project-results__item">
                        <div className="project-results__circle">
                            <span>{item.score}</span>
                        </div>

                        <h3 className="project-results__item-title">
                            {item.title}
                        </h3>

                        <p className="project-results__item-text">
                            {item.text}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ProjectResults;