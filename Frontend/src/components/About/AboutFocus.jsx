import React from "react";
import "../../styling/about/aboutfocus.css";

import focusImage1 from "../../assets/images/ProjectStep1-Image1.jpg";
import focusImage2 from "../../assets/images/ProjectStep1-Image2.jpg";
import focusImage3 from "../../assets/images/ProjectStep1-Image3.jpg";
import focusImage4 from "../../assets/images/ProjectStep1-Image4.jpg";

const focusItems = [
    {
        number: "FOCUS 1",
        title: "Strategy-led website thinking",
        subtitle:
            "Every project starts by understanding what the site needs to achieve, how it should guide attention, and what the structure needs to communicate clearly.",
        image: focusImage1,
        imageAlt: "Strategy and planning visual",
    },
    {
        number: "FOCUS 2",
        title: "Custom design without template feel",
        subtitle:
            "The design should feel aligned to the brand, visually distinctive, and intentionally built around the product rather than relying on generic patterns.",
        image: focusImage2,
        imageAlt: "Custom design process visual",
    },
    {
        number: "FOCUS 3",
        title: "Development built for performance",
        subtitle:
            "Good design means very little if the final build is slow, brittle, or difficult to scale, so performance and long-term reliability matter throughout.",
        image: focusImage3,
        imageAlt: "Development and performance visual",
    },
    {
        number: "FOCUS 4",
        title: "Conversion and clarity together",
        subtitle:
            "The experience should build trust, reduce friction, and guide users toward action without sacrificing clarity or making the journey feel forced.",
        image: focusImage4,
        imageAlt: "Conversion and structure visual",
    },
];

const AboutFocus = () => {
    return (
        <section className="aboutfocus">
            <div className="aboutfocus__inner">
                <header className="aboutfocus__section-header">
                    <p className="eyebrow aboutfocus__eyebrow">
                        WHAT I FOCUS ON
                    </p>

                    <h2 className="heading2 aboutfocus__title">
                        The Way I Work Is Built Around{" "}
                        <span className="aboutfocus__highlight">Clarity</span>,{" "}
                        Quality, and Long-Term Thinking
                    </h2>

                    <p className="subheading aboutfocus__subtitle">
                        Each project is shaped around structure, usability, and
                        performance so the final result feels premium, works
                        properly, and supports growth over time.
                    </p>
                </header>

                <div className="aboutfocus__grid">
                    {focusItems.map((item, index) => {
                        const isReversed = index >= 2;

                        return (
                            <article
                                key={item.number}
                                className={`aboutfocus__card ${isReversed ? "aboutfocus__card--reverse" : ""
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