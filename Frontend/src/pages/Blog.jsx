import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styling/blog.css";

import cardImage1 from "../assets/images/carousel5.jpg";
import cardImage2 from "../assets/images/carousel6.jpg";
import cardImage3 from "../assets/images/carousel7.jpg";

const posts = [
    {
        id: "1",
        category: "Web Design",
        title: (
            <>
                The Biggest <span className="kd-blogpage__highlight">Website</span>{" "}
                Mistake Is Skipping{" "}
                <span className="kd-blogpage__highlight">Strategy</span>
            </>
        ),
        description:
            "Why strong websites are built through discovery, structure, SEO, UX, performance, and measurement instead of jumping straight into visuals.",
        readTime: "5 Min Read",
        image: cardImage1,
        link: "/blog/growth-insights",
        alt: "Strategic website design article preview",
    },
    {
        id: "2",
        category: "Performance",
        title: (
            <>
                The 5 <span className="kd-blogpage__highlight">Metrics</span>{" "}
                That Actually Matter for Website{" "}
                <span className="kd-blogpage__highlight">ROI</span>
            </>
        ),
        description:
            "Forget vanity numbers. These are the metrics that show whether your website is genuinely helping the business.",
        readTime: "3 Min Read",
        image: cardImage2,
        link: "/blog/conversion-playbooks",
        alt: "Performance metrics article preview",
    },
    {
        id: "3",
        category: "SEO",
        title: (
            <>
                Technical <span className="kd-blogpage__highlight">SEO</span> vs
                On-Page SEO for Real{" "}
                <span className="kd-blogpage__highlight">Results</span>
            </>
        ),
        description:
            "A clearer way to think about where SEO impact comes from, and what to focus on first if you want stronger results.",
        readTime: "3 Min Read",
        image: cardImage3,
        link: "/blog/technical-foundations",
        alt: "SEO article preview",
    },
];

const Blog = () => {
    const pageRef = useRef(null);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const pageEl = pageRef.current;
        if (!pageEl) return;

        const titleEl = pageEl.querySelector(".kd-blogpage__title");
        const subtitleEl = pageEl.querySelector(".kd-blogpage__subtitle");
        const cards = pageEl.querySelectorAll(".kd-blogpage__card");

        if (!titleEl || !subtitleEl || !cards.length) return;

        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");
        const highlightWords = ["insights", "brands"];

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("kd-blogpage__title-word");
            wordWrapper.style.display = "inline-block";

            const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, "");

            if (highlightWords.includes(cleanedWord)) {
                wordWrapper.classList.add("kd-blogpage__title-word--indigo");
            }

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

        const charSpans = titleEl.querySelectorAll(
            ".kd-blogpage__title-word span"
        );

        gsap.set(subtitleEl, { opacity: 0, y: 8 });
        gsap.set(cards, { opacity: 0, y: 26 });

        const introTl = gsap.timeline({
            defaults: { ease: "power2.out" },
        });

        introTl
            .to(charSpans, {
                opacity: 1,
                y: 0,
                stagger: 0.018,
                duration: 0.26,
            })
            .fromTo(
                subtitleEl,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.28 },
                ">-0.08"
            )
            .fromTo(
                cards,
                { opacity: 0, y: 26 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    stagger: 0.08,
                },
                ">-0.04"
            );

        return () => {
            introTl.kill();
        };
    }, []);

    return (
        <div className="kd-blogpage-shell">
            <Navbar />

            <main className="kd-blogpage" ref={pageRef}>
                <div className="kd-blogpage__inner">
                    <header className="kd-blogpage__header">
                        <p className="eyebrow kd-blogpage__eyebrow">BLOG</p>

                        <h1 className="heading1 kd-blogpage__title">
                            Growth-Driven Insights for Modern Brands
                        </h1>

                        <p className="subheading kd-blogpage__subtitle">
                            Practical writing on design, UX, performance, and SEO
                            for brands that want a website built to do more.
                        </p>
                    </header>

                    <div className="kd-blogpage__grid">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="kd-blogpage__card"
                                onClick={() => navigate(post.link)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        navigate(post.link);
                                    }
                                }}
                            >
                                <div className="kd-blogpage__media">
                                    <img
                                        src={post.image}
                                        alt={post.alt}
                                        className="kd-blogpage__card-img"
                                        draggable="false"
                                    />
                                    <span className="kd-blogpage__pill">
                                        {post.category}
                                    </span>
                                </div>

                                <div className="kd-blogpage__card-content">
                                    <h2 className="heading4 kd-blogpage__card-title">
                                        {post.title}
                                    </h2>

                                    <p className="body kd-blogpage__card-description">
                                        {post.description}
                                    </p>

                                    <div className="kd-blogpage__footer">
                                        <div className="kd-blogpage__meta">
                                            <span className="kd-blogpage__time-dot" />
                                            <span className="body kd-blogpage__readtime">
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <button
                                            type="button"
                                            className="kd-blogpage__link-button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(post.link);
                                            }}
                                        >
                                            Read Article
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Blog;