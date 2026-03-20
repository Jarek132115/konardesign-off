import React, { useEffect, useRef } from "react";
import "../styling/process.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import process1 from "../assets/images/Process1.jpg";
import process2 from "../assets/images/Process2.jpg";
import process3 from "../assets/images/Process3.jpg";
import process4 from "../assets/images/Process4.jpg";
import process5 from "../assets/images/Process5.jpg";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: "discovery",
        title: "Starting with Clarity on Goals and Direction.",
        image: process1,
        bullets: [
            "A focused conversation around what you want to build",
            "Clear understanding of your goals and priorities",
            "Early direction shaped around what success should look like",
            "Initial questions answered before anything moves forward",
        ],
    },
    {
        id: "strategy",
        title: "Researching the Market and Planning the Scope.",
        image: process2,
        bullets: [
            "Competitor and industry research carried out properly",
            "User personas and audience thinking mapped out",
            "Project scope defined with clarity from the start",
            "Timeline and delivery plan put in place",
        ],
    },
    {
        id: "ux",
        title: "Planning the Full Journey, Structure, and SEO.",
        image: process3,
        bullets: [
            "User journeys thought through across the full experience",
            "Sitemap and page by page layout planning completed",
            "SEO research carried out for the project properly",
            "Copy direction, inspiration, and ideas explored in depth",
        ],
    },
    {
        id: "design",
        title: "Designing the Full Responsive Visual Experience.",
        image: process4,
        bullets: [
            "Colour system and font direction selected carefully",
            "Wireframes and full website design created",
            "Responsive layouts designed across screen sizes",
            "Graphic design details refined where needed",
        ],
    },
    {
        id: "build",
        title: "Developing a Fast, Scalable, Properly Built Website.",
        image: process5,
        bullets: [
            "Site developed cleanly with performance in mind",
            "Strong technical setup and scalable build structure",
            "Tracking and core setup implemented properly",
            "Everything prepared to launch as it should be",
        ],
    },
];

const ProcessSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const eyebrowEl = sectionEl.querySelector(".process__eyebrow");
        const titleEl = sectionEl.querySelector(".process__title");
        const subtitleEl = sectionEl.querySelector(".process__subtitle");
        const cards = sectionEl.querySelectorAll(".process__card");

        if (!eyebrowEl || !titleEl || !subtitleEl) return;

        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");
        const highlightSet = new Set(["Process", "Built"]);

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("process__title-word");
            wordWrapper.style.display = "inline-block";

            const cleaned = word.replace(/[^\w-]/g, "");
            if (highlightSet.has(cleaned)) {
                wordWrapper.classList.add("process__title-highlight");
            }

            [...word].forEach((ch) => {
                const span = document.createElement("span");
                span.textContent = ch;
                span.style.display = "inline-block";
                span.style.opacity = "0";
                span.style.transform = "translateY(8px)";
                wordWrapper.appendChild(span);
            });

            titleEl.appendChild(wordWrapper);

            if (wordIndex !== words.length - 1) {
                titleEl.appendChild(document.createTextNode(" "));
            }
        });

        const charSpans = titleEl.querySelectorAll(".process__title-word span");

        gsap.set(subtitleEl, { opacity: 0, y: 8 });

        const headerTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        headerTl
            .fromTo(
                eyebrowEl,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.25 }
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
                { opacity: 1, y: 0, duration: 0.28 },
                ">-0.08"
            );

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    ease: "power2.out",
                    delay: index * 0.04,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 84%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        return () => {
            headerTl.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section className="process" ref={sectionRef}>
            <div className="process__inner">
                <header className="process__header">
                    <p className="eyebrow process__eyebrow">HOW I BUILD</p>

                    <h2 className="heading2 process__title">
                        My Process. Built from Start to Finish.
                    </h2>

                    <p className="subheading process__subtitle">
                        A clear step by step approach that takes each project from
                        early direction and planning through to design, development,
                        and launch.
                    </p>
                </header>

                <div className="process__list-wrap">
                    {steps.map((step, index) => {
                        const isReversed = index % 2 === 1;

                        return (
                            <article
                                key={step.id}
                                className={`process__card ${isReversed ? "process__card--reversed" : ""
                                    }`}
                            >
                                <div className="process__card-media">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="process__card-image"
                                        draggable="false"
                                    />
                                </div>

                                <div className="process__card-content">
                                    <div className="process__step-number">
                                        {index + 1}
                                    </div>

                                    <h3 className="heading4 process__card-title">
                                        {step.title}
                                    </h3>

                                    <ul className="process__bullets">
                                        {step.bullets.map((item) => (
                                            <li
                                                key={item}
                                                className="process__bullet body"
                                            >
                                                <span className="process__bullet-dot" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;