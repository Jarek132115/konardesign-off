// src/pages/Project1.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styling/buttons.css";
import "../styling/projectpage.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import konarVideo from "../assets/videos/KonarCard1.mp4";
import carousel1 from "../assets/images/carousel1.jpg";
import carousel2 from "../assets/images/carousel2.jpg";
import carousel3 from "../assets/images/carousel3.jpg";
import carousel4 from "../assets/images/carousel4.jpg";
import carousel5 from "../assets/images/carousel5.jpg";
import carousel6 from "../assets/images/carousel6.jpg";

gsap.registerPlugin(ScrollTrigger);

const finalLooks = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6];

const Project1 = () => {
    const pageRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const pageEl = pageRef.current;
        if (!pageEl) return;

        const titleEl = pageEl.querySelector(".project-hero__title");
        const subtitleEl = pageEl.querySelector(".project-hero__subtitle");

        const sections = pageEl.querySelectorAll(
            ".project-hero__media, .project-section, .project-media-break, .project-styling, .project-performance, .project-final"
        );

        if (!titleEl || !subtitleEl) return;

        // --- LETTER BY LETTER TITLE (hero-style) ---
        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("project-hero__title-word");
            wordWrapper.style.display = "inline-block";

            for (const ch of word) {
                const charSpan = document.createElement("span");
                charSpan.textContent = ch;
                charSpan.style.display = "inline-block";
                charSpan.style.opacity = "0";
                charSpan.style.transform = "translateY(8px)";
                wordWrapper.appendChild(charSpan);
            }

            titleEl.appendChild(wordWrapper);

            if (wordIndex !== words.length - 1) {
                titleEl.appendChild(document.createTextNode(" "));
            }
        });

        const charSpans = titleEl.querySelectorAll(".project-hero__title-word span");

        gsap.set(subtitleEl, { opacity: 0, y: 8 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pageEl,
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

        // Fade-in for each main block
        sections.forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
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
        <div className="project-page">
            <Navbar />

            <main className="project-page__main" ref={pageRef}>
                {/* TOP HERO HEADER */}
                <section className="project-hero">
                    <button
                        className="project-hero__back"
                        onClick={() => navigate(-1)}
                        aria-label="Back to projects"
                    >
                        ×
                    </button>

                    <div className="project-hero__top">
                        <div className="project-hero__info">
                            <h1 className="heading1 project-hero__title">
                                KonarCard E-Commerce Website
                            </h1>
                            <p className="subheading project-hero__subtitle">
                                A tailored e-commerce experience for a next-gen digital business card
                                startup — optimized for speed, clarity, and conversions.
                            </p>

                            <div className="project-hero__pills">
                                <span className="project-hero__pill">Custom E-Commerce Website</span>
                                <span className="project-hero__pill">Conversion-Focused Design</span>
                                <span className="project-hero__pill">Performance-Driven Build</span>
                            </div>
                        </div>

                        <aside className="project-hero__meta">
                            <div className="project-hero__meta-group">
                                <span className="project-hero__meta-label">Pages Developed</span>
                                <span className="project-hero__meta-value">24+</span>
                            </div>
                            <div className="project-hero__meta-group">
                                <span className="project-hero__meta-label">Industry</span>
                                <span className="project-hero__meta-value">E-commerce</span>
                            </div>
                            <div className="project-hero__meta-group">
                                <span className="project-hero__meta-label">Year</span>
                                <span className="project-hero__meta-value">2025</span>
                            </div>
                            <div className="project-hero__meta-group">
                                <span className="project-hero__meta-label">Website</span>
                                <a
                                    href="https://www.konarcard.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-hero__meta-link"
                                >
                                    www.konarcard.com
                                </a>
                            </div>
                        </aside>
                    </div>

                    <div className="project-hero__media">
                        <div className="project-hero__media-inner">
                            <video
                                src={konarVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="project-hero__media-video"
                            />
                        </div>
                    </div>
                </section>

                {/* CHALLENGE + SOLUTION SECTION (PURPLE CARD) */}
                <section className="project-section project-section--indigo">
                    <div className="project-section__inner">
                        <header className="project-section__header">
                            <h2 className="heading2 project-section__title">The Challenge</h2>
                            <p className="project-section__lead">
                                KonarCard set out to redefine how tradespeople and business owners
                                connect, but needed a digital experience that matched their ambitious
                                vision. Here’s what stood in the way.
                            </p>
                        </header>

                        <div className="project-grid project-grid--two">
                            <article className="project-grid__item">
                                <h3 className="project-grid__title">Old-School Market Perception</h3>
                                <p className="project-grid__body">
                                    Their audience was used to traditional business cards and in-person
                                    referrals, not digital-first experiences with landing pages, funnels,
                                    and clear value propositions.
                                </p>
                            </article>

                            <article className="project-grid__item">
                                <h3 className="project-grid__title">Complex Custom Functionality</h3>
                                <p className="project-grid__body">
                                    They needed a way for users to generate their own dynamic digital
                                    profiles — including login flows, CTAs, and sales-driven conversion
                                    funnels — without feeling overwhelming.
                                </p>
                            </article>

                            <article className="project-grid__item">
                                <h3 className="project-grid__title">Convincing Value Proposition</h3>
                                <p className="project-grid__body">
                                    The site had to educate users not just on what a digital card is —
                                    but why it&apos;s more powerful than a traditional card when it comes
                                    to visibility, trust, and conversions.
                                </p>
                            </article>

                            <article className="project-grid__item">
                                <h3 className="project-grid__title">Mobile-First Expectations</h3>
                                <p className="project-grid__body">
                                    Their audience browses and buys on-the-go — so the experience needed
                                    to feel fast, intuitive, and delightful on mobile while still feeling
                                    premium on desktop.
                                </p>
                            </article>
                        </div>

                        <header className="project-section__header project-section__header--spaced">
                            <h2 className="heading2 project-section__title">The Solution</h2>
                            <p className="project-section__lead">
                                We designed and developed a custom e-commerce platform that combines
                                education, storytelling, and conversion-driven UX — all wrapped in a
                                bold, high-contrast visual language.
                            </p>
                        </header>

                        <div className="project-grid project-grid--two">
                            <article className="project-grid__item">
                                <h3 className="project-grid__title">
                                    Educating The Market On A New Product
                                </h3>
                                <p className="project-grid__body">
                                    We built a narrative-driven homepage that clearly explains what a
                                    digital business card is, why it matters, and how KonarCard removes
                                    friction from day-to-day client interactions.
                                </p>
                            </article>

                            <article className="project-grid__item">
                                <h3 className="project-grid__title">
                                    Conversion-Optimised E-Commerce Flow
                                </h3>
                                <p className="project-grid__body">
                                    From hero CTA to checkout, every step is optimised for clarity —
                                    pricing tables, plan comparisons, FAQs, and social proof sections all
                                    work together to move visitors towards purchase.
                                </p>
                            </article>

                            <article className="project-grid__item">
                                <h3 className="project-grid__title">
                                    Fully Responsive, Future-Proof Build
                                </h3>
                                <p className="project-grid__body">
                                    We engineered the site to be fast, scalable, and easy to update —
                                    with modular components, clean structure, and performance-first
                                    development so the brand can grow without replatforming.
                                </p>
                            </article>

                            <article className="project-grid__item">
                                <h3 className="project-grid__title">
                                    Brand Design That Matches The Product
                                </h3>
                                <p className="project-grid__body">
                                    The visual language leans into bold typography, high contrast,
                                    and subtle motion — helping the product feel premium, modern,
                                    and unmistakably different from standard business card tools.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* MID-PAGE VISUAL BREAK */}
                <section className="project-media-break">
                    <div className="project-media-break__inner">
                        <video
                            src={konarVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="project-media-break__video"
                        />
                    </div>
                </section>

                {/* STYLING SECTION */}
                <section className="project-styling">
                    <header className="project-styling__header">
                        <h2 className="heading2 project-styling__title">Styling</h2>
                        <p className="project-styling__subtitle">
                            Design, development, setup, and strategy — everything they need to start
                            selling online confidently.
                        </p>
                    </header>

                    <div className="project-styling__grid">
                        <div className="project-styling__card">
                            <h3 className="project-styling__card-title">Typography</h3>
                            <div className="project-styling__font-row">
                                <div className="project-styling__font-block">
                                    <span className="project-styling__font-label">Primary Font</span>
                                    <span className="project-styling__font-name">Cal Sans</span>
                                </div>
                                <div className="project-styling__font-block">
                                    <span className="project-styling__font-label">Secondary Font</span>
                                    <span className="project-styling__font-name">Inter</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-styling__card">
                            <h3 className="project-styling__card-title">Colour Scheme</h3>
                            <div className="project-styling__swatches">
                                <div className="project-styling__swatch project-styling__swatch--primary">
                                    <span className="project-styling__swatch-name">Primary</span>
                                    <span className="project-styling__swatch-hex">#4F46E5</span>
                                </div>
                                <div className="project-styling__swatch project-styling__swatch--accent">
                                    <span className="project-styling__swatch-name">Accent</span>
                                    <span className="project-styling__swatch-hex">#F97316</span>
                                </div>
                                <div className="project-styling__swatch project-styling__swatch--dark">
                                    <span className="project-styling__swatch-name">Deep</span>
                                    <span className="project-styling__swatch-hex">#020617</span>
                                </div>
                                <div className="project-styling__swatch project-styling__swatch--muted">
                                    <span className="project-styling__swatch-name">Muted</span>
                                    <span className="project-styling__swatch-hex">#E5E7EB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PERFORMANCE SECTION */}
                <section className="project-performance">
                    <header className="project-performance__header">
                        <h2 className="heading2 project-performance__title">
                            Website Performance
                        </h2>
                        <p className="project-performance__subtitle">
                            Our websites consistently achieve top scores on Google PageSpeed
                            Insights — ensuring fast load times, better SEO rankings, and a smoother
                            user experience.
                        </p>
                    </header>

                    <div className="project-performance__grid">
                        <div className="project-performance__item">
                            <div className="project-performance__circle">
                                <span>96</span>
                            </div>
                            <h3 className="project-performance__metric-title">Performance</h3>
                            <p className="project-performance__metric-text">
                                Lightning-fast load times with optimisation across images, fonts, and
                                scripts.
                            </p>
                        </div>

                        <div className="project-performance__item">
                            <div className="project-performance__circle">
                                <span>93</span>
                            </div>
                            <h3 className="project-performance__metric-title">Accessibility</h3>
                            <p className="project-performance__metric-text">
                                Built with semantic HTML, clear contrast, and accessible interactions
                                across devices.
                            </p>
                        </div>

                        <div className="project-performance__item">
                            <div className="project-performance__circle">
                                <span>100</span>
                            </div>
                            <h3 className="project-performance__metric-title">Best Practices</h3>
                            <p className="project-performance__metric-text">
                                Clean, maintainable code that follows modern development standards and
                                security best practices.
                            </p>
                        </div>

                        <div className="project-performance__item">
                            <div className="project-performance__circle">
                                <span>100</span>
                            </div>
                            <h3 className="project-performance__metric-title">SEO</h3>
                            <p className="project-performance__metric-text">
                                Strong technical foundations, structured content, and fast UX that
                                search engines love.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FINAL LOOKS SECTION */}
                <section className="project-final">
                    <header className="project-final__header">
                        <h2 className="heading2 project-final__title">Final Looks</h2>
                        <p className="project-final__subtitle">
                            Design, development, setup, and strategy — everything they need to
                            showcase their brand confidently across the web.
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
            </main>

            <Footer />
        </div>
    );
};

export default Project1;
