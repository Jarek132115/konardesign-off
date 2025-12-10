import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styling/buttons.css";
import "../styling/blogpage.css";

gsap.registerPlugin(ScrollTrigger);

const BlogPage1 = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const page = pageRef.current;
        if (!page) return;

        /* -----------------------------
           HERO HEADING ANIMATION
        ------------------------------ */
        const heroSection = page.querySelector(".blog-hero");
        const heroEyebrow = heroSection?.querySelector(".blog-hero__eyebrow");
        const heroTitle = heroSection?.querySelector(".blog-hero__title");
        const heroSubtitle = heroSection?.querySelector(".blog-hero__subtitle");

        if (heroSection && heroEyebrow && heroTitle && heroSubtitle) {
            const originalText = heroTitle.textContent;
            heroTitle.textContent = "";

            const highlightSet = new Set(["Convert"]);

            originalText.split(" ").forEach((word, idx, arr) => {
                const wordWrapper = document.createElement("span");
                wordWrapper.classList.add("blog-hero__title-word");
                wordWrapper.style.display = "inline-block";

                const cleaned = word.replace(/[^\w-]/g, "");
                if (highlightSet.has(cleaned)) {
                    wordWrapper.classList.add("blog-hero__title-highlight");
                }

                [...word].forEach((ch) => {
                    const charSpan = document.createElement("span");
                    charSpan.textContent = ch;
                    charSpan.style.display = "inline-block";
                    charSpan.style.opacity = "0";
                    charSpan.style.transform = "translateY(8px)";
                    wordWrapper.appendChild(charSpan);
                });

                heroTitle.appendChild(wordWrapper);
                if (idx < arr.length - 1) heroTitle.append(" ");
            });

            const charSpans = heroTitle.querySelectorAll(
                ".blog-hero__title-word span"
            );
            gsap.set(heroSubtitle, { opacity: 0, y: 8 });

            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroSection,
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
            });

            heroTl
                .fromTo(
                    heroEyebrow,
                    { opacity: 0, y: 8 },
                    { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
                )
                .to(
                    charSpans,
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.02,
                        duration: 0.3,
                        ease: "power2.out",
                    },
                    ">-0.05"
                )
                .fromTo(
                    heroSubtitle,
                    { opacity: 0, y: 8 },
                    { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
                    ">-0.08"
                );
        }

        /* -----------------------------
           ARTICLE BLOCK FADE-UPS
        ------------------------------ */
        const blocks = page.querySelectorAll(".blog-article__block");
        blocks.forEach((block, index) => {
            gsap.fromTo(
                block,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: block,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div className="blog-page">
            <Navbar />

            <main className="blog-page__main" ref={pageRef}>
                {/* HERO */}
                <section className="blog-hero">
                    <div className="blog-hero__inner">
                        <p className="eyebrow blog-hero__eyebrow">
                            WEB DESIGN • 1 MIN READ
                        </p>

                        <h1 className="heading1 blog-hero__title">
                            Why Most Websites Look Good But Don’t Convert (And How To Fix It)
                        </h1>

                        <p className="subheading blog-hero__subtitle">
                            Most sites are built to be approved, not to perform. Here’s how
                            to shift from “looks nice” to “drives pipeline”.
                        </p>
                    </div>
                </section>

                {/* ARTICLE BODY */}
                <section className="blog-article">
                    <div className="blog-article__inner">
                        <div className="blog-article__block">
                            <h2 className="heading2 blog-article__heading">
                                The Real Job Of Your Website
                            </h2>
                            <p className="body blog-article__body">
                                A lot of websites are designed to impress stakeholders,
                                not buyers. The homepage becomes a collage of taglines,
                                awards, and abstract visuals that look premium – but leave
                                visitors wondering: <strong>What do you actually do?</strong>
                            </p>
                            <p className="body blog-article__body">
                                A high-performing site does something much simpler. It
                                quickly answers three questions:
                            </p>
                            <ul className="blog-article__list">
                                <li>Who is this for?</li>
                                <li>What problem do you solve?</li>
                                <li>What’s the next step if I’m interested?</li>
                            </ul>
                        </div>

                        <div className="blog-article__block">
                            <h3 className="heading3 blog-article__subheading">
                                Mistake #1: Vague Hero Messaging
                            </h3>
                            <p className="body blog-article__body">
                                “We build digital experiences for ambitious brands” sounds
                                nice, but it’s interchangeable with a thousand other
                                agencies. High-intent visitors don’t have time to decode
                                your positioning.
                            </p>
                            <p className="body blog-article__body">
                                Instead, make your hero concrete and specific. For
                                example:
                            </p>
                            <ul className="blog-article__list">
                                <li>
                                    <strong>Who:</strong> B2B SaaS teams
                                </li>
                                <li>
                                    <strong>Outcome:</strong> More demos, more qualified
                                    pipeline
                                </li>
                                <li>
                                    <strong>Mechanism:</strong> Conversion-first web
                                    design, messaging, and CRO
                                </li>
                            </ul>
                        </div>

                        <div className="blog-article__block">
                            <h3 className="heading3 blog-article__subheading">
                                Mistake #2: Layouts Built Around Aesthetic, Not Flow
                            </h3>
                            <p className="body blog-article__body">
                                Beautiful layouts that don’t respect buying journeys will
                                always underperform. People don’t scroll in a straight line
                                – they scan, compare, and sanity-check before committing.
                            </p>
                            <p className="body blog-article__body">
                                When we design, we map each section to a specific intent
                                stage: problem awareness, solution understanding,
                                credibility, proof, and next step. That’s why our pages
                                feel “easy” to move through.
                            </p>
                        </div>

                        <div className="blog-article__block">
                            <h3 className="heading3 blog-article__subheading">
                                Mistake #3: No Clear Primary Action
                            </h3>
                            <p className="body blog-article__body">
                                If every section has a different CTA (“Learn more”,
                                “Contact us”, “Get started”, “Book a call”), users don’t
                                know which path matters. Cognitive load goes up, action
                                goes down.
                            </p>
                            <p className="body blog-article__body">
                                Choose one primary action for your site – book a call,
                                start a trial, request pricing – then reinforce it through
                                consistent language and placement.
                            </p>
                        </div>

                        <div className="blog-article__block">
                            <h3 className="heading3 blog-article__subheading">
                                Quick Checklist To Fix A “Pretty But Flat” Website
                            </h3>
                            <ul className="blog-article__list">
                                <li>Rewrite your hero to say who you help and how.</li>
                                <li>Reorder sections around how people actually decide.</li>
                                <li>Reduce CTAs to one primary, one secondary.</li>
                                <li>
                                    Add real proof (logos, quotes, outcomes) near key
                                    decisions.
                                </li>
                            </ul>
                            <p className="body blog-article__body">
                                Do just those four things and you’ll often see conversion
                                move without touching the rest of the funnel.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPage1;
