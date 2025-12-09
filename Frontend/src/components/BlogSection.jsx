import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/blogsection.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import blogImg1 from "../assets/images/carousel5.jpg";
import blogImg2 from "../assets/images/carousel6.jpg";
import blogImg3 from "../assets/images/carousel7.jpg";

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);

    const articles = [
        {
            id: 1,
            category: "Web Design",
            title: "Why Most Websites Look Good But Don’t Convert (And How To Fix It)",
            readTime: "1 Min Read",
            img: blogImg1,
            link: "/blog",
        },
        {
            id: 2,
            category: "Performance",
            title: "The 5 Metrics That Actually Matter For Website ROI",
            readTime: "1 Min Read",
            img: blogImg2,
            link: "/blog",
        },
        {
            id: 3,
            category: "SEO",
            title: "Technical SEO Vs On-Page SEO: Which One Actually Moves Revenue?",
            readTime: "1 Min Read",
            img: blogImg3,
            link: "/blog",
        },
    ];

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const eyebrowEl = sectionEl.querySelector(".blogsection__eyebrow");
        const titleEl = sectionEl.querySelector(".blogsection__title");
        const subtitleEl = sectionEl.querySelector(".blogsection__subtitle");
        const cards = sectionEl.querySelectorAll(".blogsection__card");

        if (!eyebrowEl || !titleEl || !subtitleEl) return;

        /* ------------ LETTER-BY-LETTER TITLE ------------ */

        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("blogsection__title-word");
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
        const wordSpans = titleEl.querySelectorAll(".blogsection__title-word");
        const highlightSet = new Set(["Insights"]);

        wordSpans.forEach((wordSpan) => {
            const cleaned = wordSpan.textContent.replace(/[^\w-]/g, "");
            if (highlightSet.has(cleaned)) {
                wordSpan.classList.add("blogsection__title-highlight");
            }
        });

        const charSpans = titleEl.querySelectorAll(".blogsection__title-word span");

        gsap.set(subtitleEl, { opacity: 0, y: 8 });

        const headingTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        headingTl
            // eyebrow
            .fromTo(
                eyebrowEl,
                { opacity: 0, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.25,
                }
            )
            // letters
            .to(
                charSpans,
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.018,
                    duration: 0.26,
                },
                ">-0.05"
            )
            // subtitle
            .fromTo(
                subtitleEl,
                { opacity: 0, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.28,
                },
                ">-0.08"
            );

        /* ------------ CARD FADE-IN ON SCROLL ------------ */

        const cardAnims = [];

        cards.forEach((card) => {
            const anim = gsap.fromTo(
                card,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
            cardAnims.push(anim);
        });

        return () => {
            if (headingTl.scrollTrigger) headingTl.scrollTrigger.kill();
            headingTl.kill();
            cardAnims.forEach((anim) => {
                if (anim.scrollTrigger) anim.scrollTrigger.kill();
                anim.kill();
            });
        };
    }, []);

    return (
        <section className="blogsection" ref={sectionRef}>
            <div className="blogsection__inner">
                <header className="blogsection__header">
                    <p className="eyebrow blogsection__eyebrow">Blog</p>
                    <h2 className="heading2 blogsection__title">
                        Growth-Driven Insights For Modern Brands
                    </h2>
                    <p className="subheading blogsection__subtitle">
                        High-impact articles on UX, design, performance, and digital growth—
                        written for brands ready to scale.
                    </p>
                </header>

                <div className="blogsection__grid">
                    {articles.map((article) => (
                        <article
                            key={article.id}
                            className="blogsection__card"
                            onClick={() => navigate(article.link)}
                        >
                            <img
                                src={article.img}
                                alt={article.title}
                                className="blogsection__card-img"
                            />

                            <div className="blogsection__card-content">
                                <span className="blogsection__category">
                                    {article.category}
                                </span>
                                <h3 className="heading3 blogsection__card-title">
                                    {article.title}
                                </h3>

                                <div className="blogsection__meta">
                                    <span className="body blogsection__readtime">
                                        {article.readTime}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <button
                    className="btn btn--white blogsection__cta"
                    onClick={() => navigate("/blog")}
                >
                    Read More Articles
                </button>
            </div>
        </section>
    );
};

export default BlogSection;
