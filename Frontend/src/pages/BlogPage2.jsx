import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedHeading from "../components/animations/AnimatedHeading";
import FadeUp from "../components/animations/FadeUp";
import AnimatedSection from "../components/animations/AnimatedSection";

import "../styling/buttons.css";

const BlogPage2 = () => {
    return (
        <div className="blog-page">
            <Navbar />

            <main className="blog-page__main">
                {/* HERO */}
                <section className="blog-hero">
                    <div className="blog-hero__inner">
                        <FadeUp
                            as="p"
                            className="eyebrow blog-hero__eyebrow"
                            trigger="onLoad"
                            delay={0}
                        >
                            PERFORMANCE • 1 MIN READ
                        </FadeUp>

                        <AnimatedHeading
                            as="h1"
                            className="heading1 blog-hero__title"
                            text="The 5 Metrics That Actually Matter For Website ROI"
                            wordClassName="blog-hero__title-word"
                            highlightWords={["Metrics"]}
                            highlightClassName="blog-hero__title-highlight"
                            trigger="onLoad"
                            delay={0.15}
                        />

                        <FadeUp
                            as="p"
                            className="subheading blog-hero__subtitle"
                            trigger="onLoad"
                            afterHeading="The 5 Metrics That Actually Matter For Website ROI"
                            headingDelay={0.15}
                        >
                            Ignore vanity numbers. Track the few signals that tell you if
                            your website is creating real pipeline or just pageviews.
                        </FadeUp>
                    </div>
                </section>

                {/* ARTICLE BODY */}
                <AnimatedSection className="blog-article">
                    <div className="blog-article__inner">
                        <FadeUp className="blog-article__block">
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
                        </FadeUp>

                        <FadeUp className="blog-article__block">
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
                        </FadeUp>

                        <FadeUp className="blog-article__block">
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
                        </FadeUp>

                        <FadeUp className="blog-article__block">
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
                        </FadeUp>

                        <FadeUp className="blog-article__block">
                            <h3 className="heading3 blog-article__subheading">
                                Metric #4: Task Completion Rate
                            </h3>
                            <p className="body blog-article__body">
                                Can users actually do what they came to do? Download the
                                thing, find pricing, submit the form? Task completion
                                exposes UX friction that analytics alone can’t.
                            </p>
                        </FadeUp>

                        <FadeUp className="blog-article__block">
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
                        </FadeUp>

                        <FadeUp className="blog-article__block">
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
                        </FadeUp>
                    </div>
                </AnimatedSection>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPage2;
