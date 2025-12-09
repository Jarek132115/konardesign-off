// src/pages/Project1.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styling/buttons.css";
import "../styling/projectpage.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import konarVideoHero from "../assets/videos/KonarCard1.mp4";
import konarVideoSecondary from "../assets/videos/KonarCard2.mp4";

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

        const timelines = [];

        /* ------------------------------
           HERO TITLE: LETTER BY LETTER
        ------------------------------- */
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

        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: pageEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        heroTl
            .to(charSpans, {
                opacity: 1,
                y: 0,
                stagger: 0.03,
                duration: 0.4,
            })
            .to(
                subtitleEl,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                },
                ">-0.05"
            );

        timelines.push(heroTl);

        /* -------------------------------------------------
           STYLING / PERFORMANCE / FINAL TITLES ANIMATION
           (same pattern as Offer / Projects sections)
        -------------------------------------------------- */
        const animatedSectionConfigs = [
            {
                titleSelector: ".project-styling__title",
                subtitleSelector: ".project-styling__subtitle",
                wordClass: "project-styling__title-word",
                highlightClass: "project-styling__title-highlight",
                highlightWords: new Set(["Styling", "System"]),
                triggerSelector: ".project-styling",
            },
            {
                titleSelector: ".project-performance__title",
                subtitleSelector: ".project-performance__subtitle",
                wordClass: "project-performance__title-word",
                highlightClass: "project-performance__title-highlight",
                highlightWords: new Set(["Performance", "Growth"]),
                triggerSelector: ".project-performance",
            },
            {
                titleSelector: ".project-final__title",
                subtitleSelector: ".project-final__subtitle",
                wordClass: "project-final__title-word",
                highlightClass: "project-final__title-highlight",
                highlightWords: new Set(["Final", "Looks"]),
                triggerSelector: ".project-final",
            },
        ];

        animatedSectionConfigs.forEach((cfg) => {
            const sectionEl = pageEl.querySelector(cfg.triggerSelector);
            const secTitleEl = pageEl.querySelector(cfg.titleSelector);
            const secSubtitleEl = pageEl.querySelector(cfg.subtitleSelector);

            if (!sectionEl || !secTitleEl || !secSubtitleEl) return;

            const original = secTitleEl.textContent;
            secTitleEl.textContent = "";

            const secWords = original.split(" ");

            secWords.forEach((word, wordIndex) => {
                const wordWrapper = document.createElement("span");
                wordWrapper.classList.add(cfg.wordClass);
                wordWrapper.style.display = "inline-block";

                for (const ch of word) {
                    const charSpan = document.createElement("span");
                    charSpan.textContent = ch;
                    charSpan.style.display = "inline-block";
                    charSpan.style.opacity = "0";
                    charSpan.style.transform = "translateY(8px)";
                    wordWrapper.appendChild(charSpan);
                }

                secTitleEl.appendChild(wordWrapper);

                if (wordIndex !== secWords.length - 1) {
                    secTitleEl.appendChild(document.createTextNode(" "));
                }
            });

            // Highlight specific words in deep indigo
            const wordSpans = secTitleEl.querySelectorAll(`.${cfg.wordClass}`);
            wordSpans.forEach((span) => {
                const cleaned = span.textContent.replace(/[^\w]/g, "");
                if (cfg.highlightWords.has(cleaned)) {
                    span.classList.add(cfg.highlightClass);
                }
            });

            const secCharSpans = secTitleEl.querySelectorAll(`.${cfg.wordClass} span`);

            gsap.set(secSubtitleEl, { opacity: 0, y: 8 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionEl,
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
                defaults: { ease: "power2.out" },
            });

            tl.to(secCharSpans, {
                opacity: 1,
                y: 0,
                stagger: 0.03,
                duration: 0.4,
            }).to(
                secSubtitleEl,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                },
                ">-0.05"
            );

            timelines.push(tl);
        });

        /* ----------------------------
           SECTION FADE-INS ON SCROLL
        ----------------------------- */
        sections.forEach((section) => {
            const tl = gsap.fromTo(
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
            timelines.push(tl);
        });

        return () => {
            timelines.forEach((t) => t.kill());
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, [navigate]);

    return (
        <div className="project-page">
            <Navbar />

            <main className="project-page__main" ref={pageRef}>
                {/* TOP HERO HEADER */}
                <section className="project-hero">
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
                                src={konarVideoHero}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="project-hero__media-video"
                            />
                        </div>
                    </div>
                </section>

                {/* CHALLENGE + SOLUTION SECTION (INDIGO CARD) */}
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
                                    The site had to educate users not just on what a digital card is — but
                                    why it&apos;s more powerful than a traditional card when it comes to
                                    visibility, trust, and conversions.
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
                                    We engineered the site to be fast, scalable, and easy to update — with
                                    modular components, clean structure, and performance-first development
                                    so the brand can grow without replatforming.
                                </p>
                            </article>

                            <article className="project-grid__item">
                                <h3 className="project-grid__title">
                                    Brand Design That Matches The Product
                                </h3>
                                <p className="project-grid__body">
                                    The visual language leans into bold typography, high contrast, and
                                    subtle motion — helping the product feel premium, modern, and
                                    unmistakably different from standard business card tools.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* MID-PAGE VISUAL BREAK (SECOND VIDEO) */}
                <section className="project-media-break">
                    <div className="project-media-break__inner">
                        <video
                            src={konarVideoSecondary}
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
                        <h2 className="heading2 project-styling__title">
                            Styling &amp; Visual System Built To Last.
                        </h2>
                        <p className="subheading project-styling__subtitle">
                            We defined a complete visual language — typography, colour, spacing, and UI
                            components — so every page of KonarCard feels consistent, recognisable, and
                            perfectly on-brand.
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
                            Website Performance That Fuels Real Growth.
                        </h2>
                        <p className="subheading project-performance__subtitle">
                            Every KonarCard page is engineered for speed, clarity, and stability —
                            delivering lightning-fast load times, smooth interactions, and the
                            PageSpeed scores that keep SEO and paid campaigns performing.
                        </p>
                    </header>

                    <div className="project-performance__grid">
                        <div className="project-performance__item">
                            <div className="project-performance__circle">
                                <span>96</span>
                            </div>
                            <h3 className="project-performance__metric-title">Performance</h3>
                            <p className="project-performance__metric-text">
                                Optimised media, lean scripts, and modern image formats keep pages
                                loading quickly, even on slower connections.
                            </p>
                        </div>

                        <div className="project-performance__item">
                            <div className="project-performance__circle">
                                <span>93</span>
                            </div>
                            <h3 className="project-performance__metric-title">Accessibility</h3>
                            <p className="project-performance__metric-text">
                                Semantic HTML, clear contrast, and keyboard-friendly interactions make
                                the experience usable for everyone.
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
                                search engines and users both love.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FINAL LOOKS SECTION */}
                <section className="project-final">
                    <header className="project-final__header">
                        <h2 className="heading2 project-final__title">
                            Final Looks Across Every Touchpoint.
                        </h2>
                        <p className="subheading project-final__subtitle">
                            A snapshot of key KonarCard screens — from marketing pages and onboarding
                            flows to product UI — showcasing how the brand holds together across the
                            entire experience.
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
