// src/pages/Project1.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedHeading from "../components/animations/AnimatedHeading";
import FadeUp from "../components/animations/FadeUp";
import { StaggerGroup, StaggerItem } from "../components/animations/StaggerGroup";

import "../styling/buttons.css";
import "../styling/projectpage.css";

import konarVideo from "../assets/videos/KonarCard1.mp4";
import carousel1 from "../assets/images/carousel1.jpg";
import carousel2 from "../assets/images/carousel2.jpg";
import carousel3 from "../assets/images/carousel3.jpg";
import carousel4 from "../assets/images/carousel4.jpg";
import carousel5 from "../assets/images/carousel5.jpg";
import carousel6 from "../assets/images/carousel6.jpg";

const finalLooks = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6];

const Project1 = () => {
    const navigate = useNavigate();

    return (
        <div className="project-page">
            <Navbar />

            <main className="project-page__main">
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
                            <AnimatedHeading
                                as="h1"
                                className="heading1 project-hero__title"
                                text="KonarCard E-Commerce Website"
                                wordClassName="project-hero__title-word"
                                trigger="onLoad"
                                delay={0.15}
                            />
                            <FadeUp
                                as="p"
                                className="subheading project-hero__subtitle"
                                trigger="onLoad"
                                afterHeading="KonarCard E-Commerce Website"
                                headingDelay={0.15}
                            >
                                A tailored e-commerce experience for a next-gen digital business card
                                startup — optimized for speed, clarity, and conversions.
                            </FadeUp>

                            <FadeUp
                                className="project-hero__pills"
                                trigger="onLoad"
                                delay={0.55}
                            >
                                <span className="project-hero__pill">Custom E-Commerce Website</span>
                                <span className="project-hero__pill">Conversion-Focused Design</span>
                                <span className="project-hero__pill">Performance-Driven Build</span>
                            </FadeUp>
                        </div>

                        <FadeUp
                            as="aside"
                            className="project-hero__meta"
                            trigger="onLoad"
                            delay={0.55}
                        >
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
                        </FadeUp>
                    </div>

                    <FadeUp className="project-hero__media" y={24}>
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
                    </FadeUp>
                </section>

                {/* CHALLENGE + SOLUTION SECTION (PURPLE CARD) */}
                <FadeUp
                    as="section"
                    className="project-section project-section--indigo"
                    y={24}
                >
                    <div className="project-section__inner">
                        <header className="project-section__header">
                            <h2 className="heading2 project-section__title">The Challenge</h2>
                            <p className="project-section__lead">
                                KonarCard set out to redefine how tradespeople and business owners
                                connect, but needed a digital experience that matched their ambitious
                                vision. Here’s what stood in the way.
                            </p>
                        </header>

                        <StaggerGroup className="project-grid project-grid--two" stagger={0.06}>
                            <StaggerItem as="article" className="project-grid__item">
                                <h3 className="project-grid__title">Old-School Market Perception</h3>
                                <p className="project-grid__body">
                                    Their audience was used to traditional business cards and in-person
                                    referrals, not digital-first experiences with landing pages, funnels,
                                    and clear value propositions.
                                </p>
                            </StaggerItem>

                            <StaggerItem as="article" className="project-grid__item">
                                <h3 className="project-grid__title">Complex Custom Functionality</h3>
                                <p className="project-grid__body">
                                    They needed a way for users to generate their own dynamic digital
                                    profiles — including login flows, CTAs, and sales-driven conversion
                                    funnels — without feeling overwhelming.
                                </p>
                            </StaggerItem>

                            <StaggerItem as="article" className="project-grid__item">
                                <h3 className="project-grid__title">Convincing Value Proposition</h3>
                                <p className="project-grid__body">
                                    The site had to educate users not just on what a digital card is —
                                    but why it&apos;s more powerful than a traditional card when it comes
                                    to visibility, trust, and conversions.
                                </p>
                            </StaggerItem>

                            <StaggerItem as="article" className="project-grid__item">
                                <h3 className="project-grid__title">Mobile-First Expectations</h3>
                                <p className="project-grid__body">
                                    Their audience browses and buys on-the-go — so the experience needed
                                    to feel fast, intuitive, and delightful on mobile while still feeling
                                    premium on desktop.
                                </p>
                            </StaggerItem>
                        </StaggerGroup>

                        <header className="project-section__header project-section__header--spaced">
                            <h2 className="heading2 project-section__title">The Solution</h2>
                            <p className="project-section__lead">
                                We designed and developed a custom e-commerce platform that combines
                                education, storytelling, and conversion-driven UX — all wrapped in a
                                bold, high-contrast visual language.
                            </p>
                        </header>

                        <StaggerGroup className="project-grid project-grid--two" stagger={0.06}>
                            <StaggerItem as="article" className="project-grid__item">
                                <h3 className="project-grid__title">
                                    Educating The Market On A New Product
                                </h3>
                                <p className="project-grid__body">
                                    We built a narrative-driven homepage that clearly explains what a
                                    digital business card is, why it matters, and how KonarCard removes
                                    friction from day-to-day client interactions.
                                </p>
                            </StaggerItem>

                            <StaggerItem as="article" className="project-grid__item">
                                <h3 className="project-grid__title">
                                    Conversion-Optimised E-Commerce Flow
                                </h3>
                                <p className="project-grid__body">
                                    From hero CTA to checkout, every step is optimised for clarity —
                                    pricing tables, plan comparisons, FAQs, and social proof sections all
                                    work together to move visitors towards purchase.
                                </p>
                            </StaggerItem>

                            <StaggerItem as="article" className="project-grid__item">
                                <h3 className="project-grid__title">
                                    Fully Responsive, Future-Proof Build
                                </h3>
                                <p className="project-grid__body">
                                    We engineered the site to be fast, scalable, and easy to update —
                                    with modular components, clean structure, and performance-first
                                    development so the brand can grow without replatforming.
                                </p>
                            </StaggerItem>

                            <StaggerItem as="article" className="project-grid__item">
                                <h3 className="project-grid__title">
                                    Brand Design That Matches The Product
                                </h3>
                                <p className="project-grid__body">
                                    The visual language leans into bold typography, high contrast,
                                    and subtle motion — helping the product feel premium, modern,
                                    and unmistakably different from standard business card tools.
                                </p>
                            </StaggerItem>
                        </StaggerGroup>
                    </div>
                </FadeUp>

                {/* MID-PAGE VISUAL BREAK */}
                <FadeUp as="section" className="project-media-break" y={24}>
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
                </FadeUp>

                {/* STYLING SECTION */}
                <FadeUp as="section" className="project-styling" y={24}>
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
                </FadeUp>

                {/* PERFORMANCE SECTION */}
                <FadeUp as="section" className="project-performance" y={24}>
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

                    <StaggerGroup className="project-performance__grid" stagger={0.06}>
                        <StaggerItem className="project-performance__item">
                            <div className="project-performance__circle">
                                <span>96</span>
                            </div>
                            <h3 className="project-performance__metric-title">Performance</h3>
                            <p className="project-performance__metric-text">
                                Lightning-fast load times with optimisation across images, fonts, and
                                scripts.
                            </p>
                        </StaggerItem>

                        <StaggerItem className="project-performance__item">
                            <div className="project-performance__circle">
                                <span>93</span>
                            </div>
                            <h3 className="project-performance__metric-title">Accessibility</h3>
                            <p className="project-performance__metric-text">
                                Built with semantic HTML, clear contrast, and accessible interactions
                                across devices.
                            </p>
                        </StaggerItem>

                        <StaggerItem className="project-performance__item">
                            <div className="project-performance__circle">
                                <span>100</span>
                            </div>
                            <h3 className="project-performance__metric-title">Best Practices</h3>
                            <p className="project-performance__metric-text">
                                Clean, maintainable code that follows modern development standards and
                                security best practices.
                            </p>
                        </StaggerItem>

                        <StaggerItem className="project-performance__item">
                            <div className="project-performance__circle">
                                <span>100</span>
                            </div>
                            <h3 className="project-performance__metric-title">SEO</h3>
                            <p className="project-performance__metric-text">
                                Strong technical foundations, structured content, and fast UX that
                                search engines love.
                            </p>
                        </StaggerItem>
                    </StaggerGroup>
                </FadeUp>

                {/* FINAL LOOKS SECTION */}
                <FadeUp as="section" className="project-final" y={24}>
                    <header className="project-final__header">
                        <h2 className="heading2 project-final__title">Final Looks</h2>
                        <p className="project-final__subtitle">
                            Design, development, setup, and strategy — everything they need to
                            showcase their brand confidently across the web.
                        </p>
                    </header>

                    <StaggerGroup className="project-final__grid" stagger={0.06}>
                        {finalLooks.map((src, index) => (
                            <StaggerItem
                                as="article"
                                key={index}
                                className="project-final__card"
                            >
                                <img
                                    src={src}
                                    alt={`KonarCard final screen ${index + 1}`}
                                    className="project-final__image"
                                />
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </FadeUp>
            </main>

            <Footer />
        </div>
    );
};

export default Project1;
