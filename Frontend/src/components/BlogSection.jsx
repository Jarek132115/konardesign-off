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
            title: (
                <>
                    Why Most <span className="blogsection__highlight">Websites</span>{" "}
                    Look Good But Do Not{" "}
                    <span className="blogsection__highlight">Convert</span>
                </>
            ),
            description:
                "The design mistakes that quietly hurt conversion, and how to turn your site into something that performs properly.",
            readTime: "1 Min Read",
            img: blogImg1,
            link: "/blog/growth-insights",
            alt: "Website design article preview",
        },
        {
            id: 2,
            category: "Performance",
            title: (
                <>
                    The 5 <span className="blogsection__highlight">Metrics</span>{" "}
                    That Actually Matter for Website{" "}
                    <span className="blogsection__highlight">ROI</span>
                </>
            ),
            description:
                "Forget vanity numbers. These are the metrics that show whether your website is genuinely helping the business.",
            readTime: "1 Min Read",
            img: blogImg2,
            link: "/blog/conversion-playbooks",
            alt: "Performance metrics article preview",
        },
        {
            id: 3,
            category: "SEO",
            title: (
                <>
                    Technical <span className="blogsection__highlight">SEO</span> vs
                    On-Page SEO for Real{" "}
                    <span className="blogsection__highlight">Results</span>
                </>
            ),
            description:
                "A clearer way to think about where SEO impact comes from, and what to focus on first if you want stronger results.",
            readTime: "1 Min Read",
            img: blogImg3,
            link: "/blog/technical-foundations",
            alt: "SEO article preview",
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

        gsap.set(titleEl, { opacity: 0, y: 8 });
        gsap.set(subtitleEl, { opacity: 0, y: 8 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
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
                        start: "top 80%",
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
        <section className="blogsection" ref={sectionRef}>
            <div className="blogsection__inner">
                <header className="blogsection__header">
                    <p className="eyebrow blogsection__eyebrow">BLOG</p>

                    <h2 className="heading2 blogsection__title">
                        Growth-Driven{" "}
                        <span className="blogsection__highlight">Insights</span> for
                        Modern{" "}
                        <span className="blogsection__highlight">Brands</span>
                    </h2>

                    <p className="subheading blogsection__subtitle">
                        Practical writing on design, UX, performance, and SEO for
                        brands that want a website built to do more.
                    </p>
                </header>

                <div className="blogsection__grid">
                    {articles.map((article) => (
                        <article
                            key={article.id}
                            className="blogsection__card"
                            onClick={() => navigate(article.link)}
                        >
                            <div className="blogsection__media">
                                <img
                                    src={article.img}
                                    alt={article.alt}
                                    className="blogsection__card-img"
                                    draggable="false"
                                />
                                <span className="blogsection__pill">
                                    {article.category}
                                </span>
                            </div>

                            <div className="blogsection__card-content">
                                <h3 className="heading3 blogsection__card-title">
                                    {article.title}
                                </h3>

                                <p className="body blogsection__card-description">
                                    {article.description}
                                </p>

                                <div className="blogsection__footer">
                                    <div className="blogsection__meta">
                                        <span className="blogsection__time-dot" />
                                        <span className="body blogsection__readtime">
                                            {article.readTime}
                                        </span>
                                    </div>

                                    <button
                                        type="button"
                                        className="blogsection__link-button"
                                    >
                                        Read Article
                                    </button>
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