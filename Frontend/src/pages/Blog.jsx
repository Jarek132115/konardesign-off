import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styling/buttons.css";
import "../styling/blog.css";

import cardImage1 from "../assets/images/carousel1.jpg";
import cardImage2 from "../assets/images/carousel2.jpg";
import cardImage3 from "../assets/images/carousel3.jpg";

gsap.registerPlugin(ScrollTrigger);

const posts = [
    {
        id: "why-most-websites-dont-convert",
        category: "Web Design",
        title: "Why Most Websites Look Good But Don’t Convert (And How To Fix It)",
        description:
            "The design mistakes that quietly kill conversions — and how to turn your site into a performance asset instead of a pretty brochure.",
        readTime: "1 Min Read",
        image: cardImage1,
        link: "/blog/growth-insights", // BlogPage1
    },
    {
        id: "metrics-that-matter",
        category: "Performance",
        title: "The 5 Metrics That Actually Matter For Website ROI",
        description:
            "Forget vanity metrics. Here are the numbers that actually tell you if your website is pulling its weight for the business.",
        readTime: "1 Min Read",
        image: cardImage2,
        link: "/blog/conversion-playbooks", // BlogPage2
    },
    {
        id: "technical-vs-onpage-seo",
        category: "SEO",
        title:
            "Technical SEO Vs On-Page SEO: Which One Actually Moves Revenue?",
        description:
            "A simple breakdown of where to focus first if you want organic traffic that turns into pipeline — not just impressions.",
        readTime: "1 Min Read",
        image: cardImage3,
        link: "/blog/technical-foundations", // BlogPage3
    },
];

const Blog = () => {
    const pageRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const pageEl = pageRef.current;
        if (!pageEl) return;

        const titleEl = pageEl.querySelector(".blog__title");
        const subtitleEl = pageEl.querySelector(".blog__subtitle");
        const cards = pageEl.querySelectorAll(".blog-card");

        if (!titleEl || !subtitleEl) return;

        const timelines = [];

        // LETTER-BY-LETTER MAIN TITLE
        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("blog__title-word");
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

        // Highlight “Insights”
        const wordSpans = titleEl.querySelectorAll(".blog__title-word");
        const highlightSet = new Set(["Insights"]);

        wordSpans.forEach((wordSpan) => {
            const cleaned = wordSpan.textContent.replace(/[^\w-]/g, "");
            if (highlightSet.has(cleaned)) {
                wordSpan.classList.add("blog__title-highlight");
            }
        });

        const charSpans = titleEl.querySelectorAll(".blog__title-word span");
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

        // CARD FADE-INS
        cards.forEach((card, index) => {
            const tl = gsap.fromTo(
                card,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
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
    }, []);

    return (
        <div className="blog-page">
            <Navbar />

            <main className="blog-page__main" ref={pageRef}>
                {/* HERO SECTION */}
                <section className="blog-hero">
                    <div className="blog-hero__inner">
                        <header className="blog-hero__header">
                            <p className="eyebrow blog__eyebrow">BLOG</p>
                            <h1 className="heading1 blog__title">
                                Growth-Driven Insights For Modern Brands
                            </h1>
                            <p className="subheading blog__subtitle">
                                High-impact articles on UX, design, performance,
                                and digital growth — written for brands ready to
                                scale.
                            </p>
                        </header>
                    </div>

                    {/* POSTS GRID */}
                    <div className="blog__grid">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="blog-card"
                                onClick={() => navigate(post.link)}
                            >
                                <div className="blog-card__media">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="blog-card__image"
                                    />
                                    <span className="blog-card__pill">
                                        {post.category}
                                    </span>
                                </div>

                                <div className="blog-card__body">
                                    <h3 className="heading3 blog-card__title">
                                        {post.title}
                                    </h3>

                                    <p className="body blog-card__description">
                                        {post.description}
                                    </p>

                                    <div className="blog-card__footer">
                                        <div className="blog-card__meta-bottom">
                                            <span className="blog-card__time-dot" />
                                            <span className="body blog-card__time">
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            className="blog-card__link-button"
                                        >
                                            Read Article
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Blog;
