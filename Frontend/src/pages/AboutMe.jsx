import React from "react";
import { useNavigate } from "react-router-dom";
import "../styling/aboutpage.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ProfilePic from "../assets/images/ProfilePic.jpg";

const expertiseItems = [
    {
        number: "01",
        title: "Strategy-led website thinking",
        text: "I focus on what the website needs to achieve first, then shape the structure, messaging, and design around that goal.",
    },
    {
        number: "02",
        title: "Custom design without template feel",
        text: "Every build is designed with intention so it feels aligned to the brand, clear to use, and strong enough to stand apart.",
    },
    {
        number: "03",
        title: "Development built for performance",
        text: "Good design means very little if the site is slow, brittle, or difficult to scale. I care about how it performs after launch too.",
    },
    {
        number: "04",
        title: "Conversion and clarity together",
        text: "The goal is never just to make something look polished. It needs to guide attention, build trust, and move people to act.",
    },
];

const valuePoints = [
    "Clear thinking before visual decisions",
    "Strong typography and structured spacing",
    "High-end presentation without unnecessary clutter",
    "Responsive design that still feels intentional",
    "A build that is easy to scale and improve later",
    "A website that supports the business, not just the brand image",
];

const AboutMe = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <main className="aboutpage">
                <section className="aboutpage__hero">
                    <div className="aboutpage__inner">
                        <div className="aboutpage__hero-grid">
                            <div className="aboutpage__hero-copy">
                                <div className="aboutpage__hero-copy-bg" />

                                <p className="eyebrow aboutpage__eyebrow">ABOUT ME</p>

                                <h1 className="heading1 aboutpage__title">
                                    I Design and Build{" "}
                                    <span className="aboutpage__highlight">
                                        Websites
                                    </span>{" "}
                                    That Feel Premium and Work Properly
                                </h1>

                                <p className="subheading aboutpage__subtitle">
                                    I care about clarity, performance, structure, and
                                    building digital experiences that actually support
                                    growth.
                                </p>

                                <div className="aboutpage__hero-actions">
                                    <button
                                        className="btn btn--indigo"
                                        onClick={() => navigate("/book-a-call")}
                                    >
                                        Contact Me
                                    </button>

                                    <button
                                        className="btn btn--white"
                                        onClick={() => navigate("/projects")}
                                    >
                                        View My Work
                                    </button>
                                </div>
                            </div>

                            <div className="aboutpage__hero-image-wrap">
                                <img
                                    src={ProfilePic}
                                    alt="Jarek Konarski"
                                    className="aboutpage__hero-image"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="aboutpage__story">
                    <div className="aboutpage__inner">
                        <div className="aboutpage__section-header">
                            <p className="eyebrow aboutpage__eyebrow">MY APPROACH</p>

                            <h2 className="heading2 aboutpage__section-title">
                                I Am Interested in the{" "}
                                <span className="aboutpage__highlight">Full Build</span>,
                                Not Just the Surface
                            </h2>
                        </div>

                        <div className="aboutpage__story-grid">
                            <div className="aboutpage__story-card">
                                <p className="body aboutpage__story-text">
                                    A lot of websites look good for a few seconds, but
                                    underneath they are unclear, slow, difficult to scale,
                                    or simply not helping the business move forward.
                                </p>

                                <p className="body aboutpage__story-text">
                                    That is the gap I care about most. I like building
                                    websites that feel strong visually, but are also
                                    structured properly, easier to use, and more useful in
                                    the long run.
                                </p>
                            </div>

                            <div className="aboutpage__story-card">
                                <p className="body aboutpage__story-text">
                                    My process usually starts with strategy, hierarchy, and
                                    clarity. Then I shape the design around what matters
                                    most, what needs to be communicated, and how the site
                                    should guide attention.
                                </p>

                                <p className="body aboutpage__story-text">
                                    The end result should not feel like a template or a
                                    generic build. It should feel considered, premium, and
                                    aligned with where the brand wants to go.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="aboutpage__expertise">
                    <div className="aboutpage__inner">
                        <div className="aboutpage__section-header">
                            <p className="eyebrow aboutpage__eyebrow">WHAT I FOCUS ON</p>

                            <h2 className="heading2 aboutpage__section-title">
                                The Way I Work Is Built Around{" "}
                                <span className="aboutpage__highlight">Clarity</span>,
                                Quality, and Long-Term Thinking
                            </h2>
                        </div>

                        <div className="aboutpage__expertise-grid">
                            {expertiseItems.map((item) => (
                                <article
                                    key={item.number}
                                    className="aboutpage__expertise-card"
                                >
                                    <div className="aboutpage__expertise-number">
                                        {item.number}
                                    </div>

                                    <h3 className="heading4 aboutpage__expertise-title">
                                        {item.title}
                                    </h3>

                                    <p className="body aboutpage__expertise-text">
                                        {item.text}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="aboutpage__values">
                    <div className="aboutpage__inner">
                        <div className="aboutpage__values-wrap">
                            <div className="aboutpage__values-copy">
                                <p className="eyebrow aboutpage__eyebrow">CORE VALUES</p>

                                <h2 className="heading2 aboutpage__section-title">
                                    What Matters Most in Every{" "}
                                    <span className="aboutpage__highlight">Project</span>
                                </h2>

                                <p className="subheading aboutpage__values-subtitle">
                                    These are the principles I try to protect throughout the
                                    whole process, from first structure to final polish.
                                </p>
                            </div>

                            <div className="aboutpage__values-list">
                                {valuePoints.map((point) => (
                                    <div key={point} className="aboutpage__value-item">
                                        <span className="aboutpage__value-dot" />
                                        <span className="body aboutpage__value-text">
                                            {point}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="aboutpage__cta">
                    <div className="aboutpage__inner">
                        <div className="aboutpage__cta-card">
                            <p className="eyebrow aboutpage__eyebrow">NEXT STEP</p>

                            <h2 className="heading2 aboutpage__cta-title">
                                If You Want a Website That Feels Better and{" "}
                                <span className="aboutpage__highlight">
                                    Performs Better
                                </span>
                                , Let’s Talk
                            </h2>

                            <p className="subheading aboutpage__cta-subtitle">
                                Whether you are starting from scratch or improving an
                                existing site, we can work out the right direction.
                            </p>

                            <div className="aboutpage__cta-actions">
                                <button
                                    className="btn btn--indigo"
                                    onClick={() => navigate("/book-a-call")}
                                >
                                    Book a Call
                                </button>

                                <button
                                    className="btn btn--white"
                                    onClick={() => navigate("/projects")}
                                >
                                    See Projects
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default AboutMe;