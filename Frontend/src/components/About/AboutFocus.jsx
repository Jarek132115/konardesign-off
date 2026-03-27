import React from "react";
import "../../styling/about/aboutfocus.css";

import focusImage1 from "../../assets/images/focusImage1.jpg";
import focusImage2 from "../../assets/images/focusImage2.jpg";
import focusImage3 from "../../assets/images/focusImage3.jpg";
import focusImage4 from "../../assets/images/focusImage4.jpg";

const focusItems = [
    {
        number: "STRENGTH 1",
        title: "Turning design into real websites",
        subtitle:
            "I take ideas beyond static screens and turn them into fully built, responsive websites that feel polished and production-ready.",
        image: focusImage1,
        imageAlt: "Design translated into a functional website",
    },
    {
        number: "STRENGTH 2",
        title: "UX that supports business goals",
        subtitle:
            "I understand how structure, hierarchy, and user flow affect trust, conversion, and how clearly the product is understood.",
        image: focusImage2,
        imageAlt: "UX strategy and structure",
    },
    {
        number: "STRENGTH 3",
        title: "Structure decided by real users",
        subtitle:
            "Websites should not be shaped by guesswork. I think carefully about what users need, how they move, and what matters most.",
        image: focusImage3,
        imageAlt: "User-focused structure and performance",
    },
    {
        number: "STRENGTH 4",
        title: "Thinking beyond the visual layer",
        subtitle:
            "I consider responsiveness, performance, scalability, and implementation from the start so the final result works properly long-term.",
        image: focusImage4,
        imageAlt: "Long-term website thinking and build quality",
    },
];

const AboutFocus = () => {
    return (
        <section className="aboutfocus">
            <div className="aboutfocus__inner">
                <header className="aboutfocus__section-header">
                    <p className="eyebrow aboutfocus__eyebrow">
                        WHAT MAKES MY WORK DIFFERENT
                    </p>

                    <h2 className="heading2 aboutfocus__title">
                        The Areas Where I Bring the Most{" "}
                        <span className="aboutfocus__highlight">Value</span>
                    </h2>

                    <p className="subheading aboutfocus__subtitle">
                        More than visuals, I focus on the parts of a website
                        that make it clearer, stronger, and more effective once
                        it is actually being used.
                    </p>
                </header>

                <div className="aboutfocus__grid">
                    {focusItems.map((item, index) => {
                        const isDesktopReverse = index >= 2;
                        const isSingleColumnReverse = index % 2 === 1;

                        return (
                            <article
                                key={item.number}
                                className={`aboutfocus__card ${isDesktopReverse
                                        ? "aboutfocus__card--reverse"
                                        : ""
                                    } ${isSingleColumnReverse
                                        ? "aboutfocus__card--single-reverse"
                                        : ""
                                    }`}
                            >
                                <div className="aboutfocus__image-wrap">
                                    <div className="aboutfocus__image-card">
                                        <img
                                            src={item.image}
                                            alt={item.imageAlt}
                                            className="aboutfocus__image"
                                            draggable="false"
                                        />
                                    </div>
                                </div>

                                <div className="aboutfocus__content">
                                    <div className="aboutfocus__number">
                                        {item.number}
                                    </div>

                                    <h3 className="heading4 aboutfocus__card-title">
                                        {item.title}
                                    </h3>

                                    <p className="body aboutfocus__card-subtitle">
                                        {item.subtitle}
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

export default AboutFocus;