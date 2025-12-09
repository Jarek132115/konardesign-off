// src/components/BlogSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styling/blogsection.css";

import blogImg1 from "../assets/images/carousel5.jpg";
import blogImg2 from "../assets/images/carousel6.jpg";
import blogImg3 from "../assets/images/carousel7.jpg";

const BlogSection = () => {
    const navigate = useNavigate();

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

    return (
        <section className="blogsection">
            <div className="blogsection__inner">
                <header className="blogsection__header">
                    <p className="eyebrow blogsection__eyebrow">Blog</p>
                    <h2 className="heading2 blogsection__title">
                        Growth-Driven <span className="highlight">Insights</span> For Modern Brands
                    </h2>
                    <p className="subheading blogsection__subtitle">
                        High-impact articles on UX, design, performance, and digital growth—written
                        for brands ready to scale.
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
