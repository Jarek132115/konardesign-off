import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../styling/projects/project1/projectdescription.css";

const challengePoints = [
    {
        title: "Explaining a newer type of product",
        text: "Most visitors are familiar with traditional business cards, not a digital-first alternative. The website needed to explain the product quickly and make the value feel obvious from the first few sections.",
    },
    {
        title: "Building trust early",
        text: "Because the offer sits between software, branding, and networking tools, the site needed to feel polished, credible, and easy to understand straight away.",
    },
    {
        title: "Creating a clearer path to action",
        text: "The existing experience needed stronger hierarchy around product value, comparison, and calls to action so users could move from interest to purchase with less friction.",
    },
];

const solutionPoints = [
    {
        title: "Sharper product positioning",
        text: "I reworked the messaging so KonarCard felt more immediate and relevant, focusing on convenience, modern networking, and the practical value of a digital card system.",
    },
    {
        title: "Stronger page hierarchy",
        text: "The layout was restructured to guide attention more clearly, giving more weight to product explanation, trust-building sections, and the conversion journey.",
    },
    {
        title: "A more premium presentation",
        text: "Typography, spacing, contrast, and content structure were all refined so the brand felt cleaner, more established, and more distinct within its category.",
    },
];

const ProjectDescription = () => {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        const leftEl = leftRef.current;
        if (!sectionEl || !leftEl) return;

        const eyebrowEl = leftEl.querySelector(".project-description__eyebrow");
        const headline = leftEl.querySelector(".project-description__headline");
        const subheadingEl = leftEl.querySelector(".project-description__subheading");
        if (!eyebrowEl || !headline || !subheadingEl) return;

        const originalText = headline.textContent;
        headline.textContent = "";

        const words = originalText.split(" ");
        const highlightSet = new Set(["Product", "Easier", "Stronger", "Trust"]);

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("project-description__headline-word");
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

        const wordSpans = headline.querySelectorAll(
            ".project-description__headline-word"
        );

        wordSpans.forEach((wordSpan) => {
            const cleaned = wordSpan.textContent.replace(/[^\w-]/g, "");
            if (highlightSet.has(cleaned)) {
                wordSpan.classList.add("project-description__headline-highlight");
            }
        });

        const charSpans = headline.querySelectorAll(
            ".project-description__headline-word span"
        );

        const leftTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
        });

        leftTl
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

        const items = sectionEl.querySelectorAll(
            ".project-description__block, .project-description__item"
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
                    delay: index * 0.05,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 82%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    return (
        <section className="project-description" ref={sectionRef}>
            <div className="project-description__container">
                <div className="project-description__left" ref={leftRef}>
                    <p className="eyebrow project-description__eyebrow">
                        PROJECT OVERVIEW
                    </p>

                    <h2 className="project-description__headline heading2">
                        A Website Built to Make the Product Easier to Understand and
                        Stronger to Trust
                    </h2>

                    <p className="project-description__subheading subheading">
                        KonarCard needed more than a polished interface. The site had
                        to explain the product clearly, make the offer feel credible,
                        and guide users through a smoother, more conversion-ready
                        experience.
                    </p>
                </div>

                <div className="project-description__right">
                    <section className="project-description__block">
                        <div className="project-description__block-top">
                            <span className="project-description__label">
                                The Challenge
                            </span>

                            <h3 className="heading3 project-description__block-title">
                                Turning a modern product into a clear online
                                experience
                            </h3>
                        </div>

                        <div className="project-description__items">
                            {challengePoints.map((item) => (
                                <article
                                    key={item.title}
                                    className="project-description__item"
                                >
                                    <h4 className="project-description__item-title">
                                        {item.title}
                                    </h4>

                                    <p className="body project-description__item-text">
                                        {item.text}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="project-description__block project-description__block--solution">
                        <div className="project-description__block-top">
                            <span className="project-description__label">
                                The Solution
                            </span>

                            <h3 className="heading3 project-description__block-title">
                                A clearer structure, stronger messaging, and a more
                                premium digital presence
                            </h3>
                        </div>

                        <div className="project-description__items">
                            {solutionPoints.map((item) => (
                                <article
                                    key={item.title}
                                    className="project-description__item"
                                >
                                    <h4 className="project-description__item-title">
                                        {item.title}
                                    </h4>

                                    <p className="body project-description__item-text">
                                        {item.text}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default ProjectDescription;