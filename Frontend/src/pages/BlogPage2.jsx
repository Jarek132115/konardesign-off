import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styling/buttons.css";
import "../styling/blogpage.css";

gsap.registerPlugin(ScrollTrigger);

const BlogPage2 = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const page = pageRef.current;
        if (!page) return;

        /* HERO ANIMATION */
        const heroSection = page.querySelector(".blog-hero");
        const heroEyebrow = heroSection?.querySelector(".blog-hero__eyebrow");
        const heroTitle = heroSection?.querySelector(".blog-hero__title");
        const heroSubtitle = heroSection?.querySelector(".blog-hero__subtitle");

        if (heroSection && heroEyebrow && heroTitle && heroSubtitle) {
            const originalText = heroTitle.textContent;
            heroTitle.textContent = "";

            const highlightSet = new Set(["Metrics"]);

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

        /* ARTICLE BLOCKS */
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
                            PERFORMANCE • 1 MIN READ
                        </p>

                        <h1 className="heading1 blog-hero__title">
                            The 5 Metrics That Actually Matter For Website ROI
                        </h1>

                        <p className="subheading blog-hero__subtitle">
                            Ignore vanity numbers. Track the few signals that tell you if
                            your website is creating real pipeline or just pageviews.
                        </p>
                    </div>
                </section>

                {/* ARTICLE BODY */}
                <section className="blog-article">
                    <div className="blog-article__inner">
                        <div className="blog-article__block">
                            <h2 className="heading2 blog-article__heading">
                                Vanity Metrics Vs Revenue Signals
                            </h2>
                            <p className="body blog-article__body">
                                Traffic, followers, and time-on-page look impressive in a
                                screenshot – but they don’t pay salaries. When we audit
                                websites, we ignore most surface-level stats and focus on
                                the handful that correlate with revenue.
                            </p>
                            <p className="body blog-article__body">
                                The goal isn’t “more sessions”. The goal is{" "}
                                <strong>more qualified people taking the next step</strong>.
                            </p>
                        </div>

                        <div className="blog-article__block">
                            <h3 className="heading3 blog-article__subheading">
                                Metric #1: Primary Conversion Rate
                            </h3>
                            <p className="body blog-article__body">
                                The percentage of visitors who take your main action:
                                book a call, start a trial, request pricing. Everything
                                else is secondary.
                            </p>
                            <p className="body blog-article__body">
                                If this number is low, it doesn’t matter how much traffic
                                you buy – you’re pouring water into a leaky bucket.
                            </p>
                        </div>

                        <div className="blog-article__block">
                            <h3 className="heading3 blog-article__subheading">
                                Metric #2: Qualified Lead Volume
                            </h3>
                            <p className="body blog-article__body">
                                Not all conversions are equal. A calendar full of bad-fit
                                calls is just an expensive distraction.
                            </p>
                            <p className="body blog-article__body">
                                Work with sales to define what “qualified” means, then
                                track how many leads from the site actually fit that
                                profile each month.
                            </p>
                        </div>

                        <div className="blog-article__block">
                            <h3 className="heading3 blog-article__subheading">
                                Metric #3: Source → Outcome Mapping
                            </h3>
                            <p className="body blog-article__body">
                                Instead of asking “What’s our overall conversion rate?”
                                ask: “Which channels bring visitors who convert and stay?”
                            </p>
                            <p className="body blog-article__body">
                                When you map source → conversion → revenue, design and
                                optimisation decisions become much clearer.
                            </p>
                        </div>

                        <div className="blog-article__block">
                            <h3 className="heading3 blog-article__subheading">
                                Metric #4: Task Completion Rate
                            </h3>
                            <p className="body blog-article__body">
                                Can users actually do what they came to do? Download the
                                thing, find pricing, submit the form? Task completion
                                exposes UX friction that analytics alone can’t.
                            </p>
                        </div>

                        <div className="blog-article__block">
                            <h3 className="heading3 blog-article__subheading">
                                Metric #5: Speed & Stability (Core Web Vitals)
                            </h3>
                            <p className="body blog-article__body">
                                Slow, janky experiences silently kill intent. People don’t
                                complain – they just drop.
                            </p>
                            <p className="body blog-article__body">
                                Monitor key performance metrics (LCP, INP, CLS) not as
                                developer vanity, but as leading indicators of conversion
                                and ranking health.
                            </p>
                        </div>

                        <div className="blog-article__block">
                            <h3 className="heading3 blog-article__subheading">
                                Building A Simple ROI Dashboard
                            </h3>
                            <p className="body blog-article__body">
                                Pull these five metrics into a single lightweight
                                dashboard. Review them weekly with marketing and sales.
                            </p>
                            <p className="body blog-article__body">
                                When everyone is staring at the same numbers, it becomes
                                much easier to prioritise experiments and investment.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPage2;
