import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedHeading from "../components/animations/AnimatedHeading";
import FadeUp from "../components/animations/FadeUp";
import AnimatedSection from "../components/animations/AnimatedSection";

import "../styling/buttons.css";

const BlogPage3 = () => {
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
                            SEO • 1 MIN READ
                        </FadeUp>

                        <AnimatedHeading
                            as="h1"
                            className="heading1 blog-hero__title"
                            text="Technical SEO Vs On-Page SEO: Which One Actually Moves Revenue?"
                            wordClassName="blog-hero__title-word"
                            highlightWords={["SEO", "Revenue"]}
                            highlightClassName="blog-hero__title-highlight"
                            trigger="onLoad"
                            delay={0.15}
                        />

                        <FadeUp
                            as="p"
                            className="subheading blog-hero__subtitle"
                            trigger="onLoad"
                            afterHeading="Technical SEO Vs On-Page SEO: Which One Actually Moves Revenue?"
                            headingDelay={0.15}
                        >
                            Both matter, but not equally at every stage. Here’s how to
                            decide where to invest first if you care about pipeline, not
                            just impressions.
                        </FadeUp>
                    </div>
                </section>

                {/* ARTICLE BODY */}
                <AnimatedSection className="blog-article">
                    <div className="blog-article__inner">
                        <FadeUp className="blog-article__block">
                            <h2 className="heading2 blog-article__heading">
                                Think In Bottlenecks, Not Checklists
                            </h2>
                            <p className="body blog-article__body">
                                SEO advice often reads like a never-ending task list:
                                sitemaps, redirects, H1s, schema, internal links, alt
                                text, page speed, meta descriptions… all important, but not
                                equally urgent.
                            </p>
                            <p className="body blog-article__body">
                                Instead of asking “Have we done everything?”, ask:
                                <strong> Where is the current bottleneck to revenue?</strong>
                            </p>
                        </FadeUp>

                        <FadeUp className="blog-article__block">
                            <h3 className="heading3 blog-article__subheading">
                                When Technical SEO Is The Bottleneck
                            </h3>
                            <p className="body blog-article__body">
                                Technical SEO issues stop search engines from reliably
                                crawling, indexing, and understanding your site. If Google
                                can’t see or trust your pages, nothing else matters.
                            </p>
                            <ul className="blog-article__list">
                                <li>Broken or inconsistent canonical tags</li>
                                <li>Large sections of the site blocked by mistake</li>
                                <li>Endless duplicates created by filters / parameters</li>
                                <li>Brutal load times or unstable layouts</li>
                            </ul>
                            <p className="body blog-article__body">
                                Fix these first. You’re clearing the pipes so any future
                                content and optimisation actually lands.
                            </p>
                        </FadeUp>

                        <FadeUp className="blog-article__block">
                            <h3 className="heading3 blog-article__subheading">
                                When On-Page SEO Is The Bottleneck
                            </h3>
                            <p className="body blog-article__body">
                                If your site is technically sound but pages don’t rank or
                                convert, the issue is usually positioning, intent, or
                                on-page execution.
                            </p>
                            <p className="body blog-article__body">
                                We look for:
                            </p>
                            <ul className="blog-article__list">
                                <li>Misaligned keywords (research vs buying intent)</li>
                                <li>Generic copy that could belong to any competitor</li>
                                <li>Weak or missing proof near key claims</li>
                                <li>CTAs that don’t match where the visitor is mentally</li>
                            </ul>
                        </FadeUp>

                        <FadeUp className="blog-article__block">
                            <h3 className="heading3 blog-article__subheading">
                                The Revenue-First Order Of Operations
                            </h3>
                            <ol className="blog-article__list blog-article__list--ordered">
                                <li>Fix critical technical issues that block crawling or UX.</li>
                                <li>Align key pages to the right queries and intent.</li>
                                <li>Strengthen on-page messaging, structure, and proof.</li>
                                <li>Then expand content once the foundation works.</li>
                            </ol>
                            <p className="body blog-article__body">
                                That way, every new blog post, feature page, or resource
                                you publish has a better chance of ranking—and converting.
                            </p>
                        </FadeUp>

                        <FadeUp className="blog-article__block">
                            <h3 className="heading3 blog-article__subheading">
                                A Simple Way To Decide What To Do Next
                            </h3>
                            <p className="body blog-article__body">
                                If organic traffic is low across the board, start with
                                technical. If traffic is decent but leads are weak or
                                non-existent, focus on on-page and conversion.
                            </p>
                            <p className="body blog-article__body">
                                The goal isn’t “perfect SEO”. The goal is{" "}
                                <strong>
                                    getting the right people to the right pages, and
                                    helping them take the next step.
                                </strong>
                            </p>
                        </FadeUp>
                    </div>
                </AnimatedSection>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPage3;
