import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styling/buttons.css";
import "../styling/blogpage.css";

gsap.registerPlugin(ScrollTrigger);

const BlogPage3 = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const page = pageRef.current;
        if (!page) return;

        /* -----------------------------
           HERO ANIMATION
        ------------------------------ */
        const heroSection = page.querySelector(".blog-hero");
        const heroEyebrow = heroSection?.querySelector(".blog-hero__eyebrow");
        const heroTitle = heroSection?.querySelector(".blog-hero__title");
        const heroSubtitle = heroSection?.querySelector(".blog-hero__subtitle");

        if (heroSection && heroEyebrow && heroTitle && heroSubtitle) {
            const originalText = heroTitle.textContent;
            heroTitle.textContent = "";

            const highlightSet = new Set(["SEO", "Revenue"]);

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
           ARTICLE BLOCKS FADE-UP
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
                            SEO • 1 MIN READ
                        </p>

                        <h1 className="heading1 blog-hero__title">
                            Technical SEO Vs On-Page SEO: Which One Actually Moves Revenue?
                        </h1>

                        <p className="subheading blog-hero__subtitle">
                            Both matter, but not equally at every stage. Here’s how to
                            decide where to invest first if you care about pipeline, not
                            just impressions.
                        </p>
                    </div>
                </section>

                {/* ARTICLE BODY */}
                <section className="blog-article">
                    <div className="blog-article__inner">
                        <div className="blog-article__block">
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
                        </div>

                        <div className="blog-article__block">
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
                        </div>

                        <div className="blog-article__block">
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
                        </div>

                        <div className="blog-article__block">
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
                        </div>

                        <div className="blog-article__block">
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
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPage3;
