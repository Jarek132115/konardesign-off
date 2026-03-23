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
        title: (
            <>
                Why Most <span className="blog__highlight">Websites</span> Look
                Good But Don’t <span className="blog__highlight">Convert</span>{" "}
                (And How To Fix It)
            </>
        ),
        description:
            "The design mistakes that quietly kill conversions — and how to turn your site into a performance asset instead of a pretty brochure.",
        readTime: "1 Min Read",
        image: cardImage1,
        alt: "Website design article preview",
        link: "/blog/growth-insights",
    },
    {
        id: "metrics-that-matter",
        category: "Performance",
        title: (
            <>
                The 5 <span className="blog__highlight">Metrics</span> That
                Actually Matter For Website{" "}
                <span className="blog__highlight">ROI</span>
            </>
        ),
        description:
            "Forget vanity metrics. Here are the numbers that actually tell you if your website is pulling its weight for the business.",
        readTime: "1 Min Read",
        image: cardImage2,
        alt: "Performance metrics article preview",
        link: "/blog/conversion-playbooks",
    },
    {
        id: "technical-vs-onpage-seo",
        category: "SEO",
        title: (
            <>
                Technical <span className="blog__highlight">SEO</span> Vs
                On-Page SEO: Which One Actually Moves{" "}
                <span className="blog__highlight">Revenue</span>?
            </>
        ),
        description:
            "A simple breakdown of where to focus first if you want organic traffic that turns into pipeline — not just impressions.",
        readTime: "1 Min Read",
        image: cardImage3,
        alt: "SEO article preview",
        link: "/blog/technical-foundations",
    },
];

const Blog = () => {
    const pageRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const pageEl = pageRef.current;
        if (!pageEl) return;

        const eyebrowEl = pageEl.querySelector(".blog__eyebrow");
        const titleEl = pageEl.querySelector(".blog__title");
        const subtitleEl = pageEl.querySelector(".blog__subtitle");
        const cards = pageEl.querySelectorAll(".blog-card");

        if (!eyebrowEl || !titleEl || !subtitleEl) return;

        gsap.set(titleEl, { opacity: 0, y: 8 });
        gsap.set(subtitleEl, { opacity: 0, y: 8 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pageEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        tl.fromTo(
            eyebrowEl,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.25 }
        )
            .fromTo(
                titleEl,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.32 },
                ">-0.04"
            )
            .fromTo(
                subtitleEl,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.28 },
                ">-0.08"
            );

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                    delay: index * 0.05,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 82%",
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
        <div className="blog-page">
            <Navbar />

            <main className="blog-page__main" ref={pageRef}>
                <section className="blog-page__section">
                    <div className="blog-page__inner">
                        <header className="blog-page__header">
                            <p className="eyebrow blog__eyebrow">BLOG</p>

                            <h1 className="heading1 blog__title">
                                Growth-Driven{" "}
                                <span className="blog__highlight">Insights</span>{" "}
                                For Modern Brands
                            </h1>

                            <p className="subheading blog__subtitle">
                                High-impact articles on UX, design, performance,
                                and digital growth — written for brands ready to
                                scale.
                            </p>
                        </header>

                        <div className="blog-page__grid">
                            {posts.map((post) => (
                                <article
                                    key={post.id}
                                    className="blog-card"
                                    onClick={() => navigate(post.link)}
                                >
                                    <div className="blog-card__media">
                                        <img
                                            src={post.image}
                                            alt={post.alt}
                                            className="blog-card__image"
                                            draggable="false"
                                        />

                                        <span className="blog-card__pill">
                                            {post.category}
                                        </span>
                                    </div>

                                    <div className="blog-card__body">
                                        <h2 className="heading3 blog-card__title">
                                            {post.title}
                                        </h2>

                                        <p className="body blog-card__description">
                                            {post.description}
                                        </p>

                                        <div className="blog-card__footer">
                                            <div className="blog-card__meta">
                                                <span className="blog-card__time-dot" />
                                                <span className="body blog-card__readtime">
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
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Blog;