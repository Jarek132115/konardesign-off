import React from "react";
import "../styling/process.css";

import process1 from "../assets/images/Process1.jpg";
import process2 from "../assets/images/Process2.jpg";
import process3 from "../assets/images/Process3.jpg";
import process4 from "../assets/images/Process4.jpg";
import process5 from "../assets/images/Process5.jpg";
import process6 from "../assets/images/Process6.jpg";

const steps = [
    {
        id: "discovery",
        number: "STEP 1",
        title: "Define the goals and direction.",
        subtitle:
            "We start by getting clear on what the site needs to achieve, who it is for, and what a strong outcome looks like.",
        image: process1,
    },
    {
        id: "strategy",
        number: "STEP 2",
        title: "Research the market and shape the scope.",
        subtitle:
            "Competitor research, audience thinking, and project scope are mapped out properly so the direction is clear before design begins.",
        image: process2,
    },
    {
        id: "ux",
        number: "STEP 3",
        title: "Plan the structure, journey, and SEO.",
        subtitle:
            "User flow, page structure, layout planning, and SEO foundations are shaped together so the experience feels clear and purposeful.",
        image: process3,
    },
    {
        id: "design",
        number: "STEP 4",
        title: "Design the full responsive interface.",
        subtitle:
            "Wireframes, visual design, and responsive decisions are refined carefully so the final interface works seamlessly across every screen size.",
        image: process4,
    },
    {
        id: "build",
        number: "STEP 5",
        title: "Build the site properly.",
        subtitle:
            "Development is handled with performance, clean structure, responsiveness, and long-term scalability in mind from the start.",
        image: process5,
    },
    {
        id: "optimisation",
        number: "STEP 6",
        title: "Launch, track, and improve.",
        subtitle:
            "Analytics, audits, and final optimisation ensure the site is ready to perform properly after release.",
        image: process6,
    },
];

const ProcessSection = () => {
    return (
        <section className="home-process">
            <div className="home-process__inner">
                <header className="home-process__header">
                    <p className="eyebrow home-process__eyebrow">HOW I WORK</p>

                    <h2 className="heading2 home-process__title">
                        From{" "}
                        <span className="home-process__title-highlight">
                            Direction
                        </span>{" "}
                        to{" "}
                        <span className="home-process__title-highlight">
                            Build
                        </span>
                        .
                    </h2>

                    <p className="subheading home-process__subtitle">
                        A clear, structured process that takes each project from
                        early direction through to design, development, and launch.
                    </p>
                </header>

                <div className="home-process__grid">
                    {steps.map((step, index) => {
                        const isDesktopReverse = index === 2 || index === 3;
                        const isSingleColumnReverse = index % 2 === 1;

                        return (
                            <article
                                key={step.id}
                                className={`home-process__card ${isDesktopReverse
                                        ? "home-process__card--reverse"
                                        : ""
                                    } ${isSingleColumnReverse
                                        ? "home-process__card--single-reverse"
                                        : ""
                                    }`}
                            >
                                <div className="home-process__content">
                                    <div className="home-process__step-number">
                                        {step.number}
                                    </div>

                                    <h3 className="heading4 home-process__card-title">
                                        {step.title}
                                    </h3>

                                    <p className="body home-process__card-subtitle">
                                        {step.subtitle}
                                    </p>
                                </div>

                                <div className="home-process__image-wrap">
                                    <div className="home-process__image-card">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="home-process__card-image"
                                            draggable="false"
                                        />
                                    </div>
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