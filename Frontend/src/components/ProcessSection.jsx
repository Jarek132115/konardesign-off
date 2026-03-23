import React from "react";
import "../styling/process.css";

import process1 from "../assets/images/Process1.jpg";
import process2 from "../assets/images/Process2.jpg";
import process3 from "../assets/images/Process3.jpg";
import process4 from "../assets/images/Process4.jpg";
import process5 from "../assets/images/Process5.jpg";
import process6 from "../assets/images/Process5.jpg";

const steps = [
    {
        id: "discovery",
        number: "01",
        title: "Starting with Clarity on Goals and Direction.",
        subtitle:
            "The process begins with focused discussion around what you want to build, what success looks like, and what the website needs to achieve from the start.",
        image: process1,
    },
    {
        id: "strategy",
        number: "02",
        title: "Researching the Market and Planning the Scope.",
        subtitle:
            "Competitor research, audience thinking, and project scope are mapped out properly so the direction is clear before design and development begin.",
        image: process2,
    },
    {
        id: "ux",
        number: "03",
        title: "Planning the Full Journey, Structure, and SEO.",
        subtitle:
            "User journeys, sitemap direction, layout planning, and SEO thinking are shaped together so the experience feels structured and purposeful.",
        image: process3,
    },
    {
        id: "design",
        number: "04",
        title: "Designing the Full Responsive Visual Experience.",
        subtitle:
            "Wireframes, visual design, and responsive decisions are refined carefully so the final interface feels premium across every screen size.",
        image: process4,
    },
    {
        id: "build",
        number: "05",
        title: "Developing a Fast, Scalable, Properly Built Website.",
        subtitle:
            "The site is built cleanly with performance, structure, and long-term scalability in mind so it launches properly and is easy to improve later.",
        image: process5,
    },
    {
        id: "optimisation",
        number: "06",
        title: "Adding Analytics, Auditing Performance, and Final Optimisation.",
        subtitle:
            "Tracking, analytics, ranking checks, performance auditing, and final launch optimisation are handled properly so the site is ready to perform after release.",
        image: process6,
    },
];

const ProcessSection = () => {
    return (
        <section className="process">
            <div className="process__inner">
                <header className="process__header">
                    <p className="eyebrow process__eyebrow">HOW I BUILD</p>

                    <h2 className="heading2 process__title">
                        My <span className="process__title-highlight">Process</span>.{" "}
                        <span className="process__title-highlight">Built</span> from
                        Start to Finish.
                    </h2>

                    <p className="subheading process__subtitle">
                        A clear step by step approach that takes each project
                        from early direction and planning through to design,
                        development, launch, and optimisation.
                    </p>
                </header>

                <div className="process__grid">
                    {steps.map((step) => (
                        <article key={step.id} className="process__card">
                            <div className="process__step-number">
                                {step.number}
                            </div>

                            {/* ✅ UPDATED TITLE */}
                            <h3 className="heading4 process__card-title">
                                <span className="process__card-title-wrap">
                                    {step.title}
                                </span>
                            </h3>

                            <p className="body process__card-subtitle">
                                {step.subtitle}
                            </p>

                            <div className="process__image-wrap">
                                <div className="process__image-card">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="process__card-image"
                                        draggable="false"
                                    />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;