import React from "react";
import { useNavigate } from "react-router-dom";
import "../styling/blogsection.css";

import AnimatedHeading from "./animations/AnimatedHeading";
import FadeUp from "./animations/FadeUp";
import { StaggerGroup, StaggerItem } from "./animations/StaggerGroup";
import AnimatedSection from "./animations/AnimatedSection";

import blogImg1 from "../assets/images/carousel5.jpg";
import blogImg2 from "../assets/images/carousel6.jpg";
import blogImg3 from "../assets/images/carousel7.jpg";

const BlogSection = () => {
    const navigate = useNavigate();

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

    return (
        <AnimatedSection className="blogsection">
            <div className="blogsection__inner">
                <header className="blogsection__header">
                    <FadeUp as="p" className="eyebrow blogsection__eyebrow">
                        BLOG
                    </FadeUp>

                    <AnimatedHeading
                        as="h2"
                        className="heading2 blogsection__title"
                        highlightWords={["Insights", "Brands"]}
                        highlightClassName="blogsection__highlight"
                        text="Growth-Driven Insights for Modern Brands"
                    />

                    <FadeUp as="p" className="subheading blogsection__subtitle" afterHeading="Growth-Driven Insights for Modern Brands">
                        Practical writing on design, UX, performance, and SEO for
                        brands that want a website built to do more.
                    </FadeUp>
                </header>

                <StaggerGroup className="blogsection__grid" stagger={0.07}>
                    {articles.map((article) => (
                        <StaggerItem
                            as="article"
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
                                <h3 className="heading4 blogsection__card-title">
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
                        </StaggerItem>
                    ))}
                </StaggerGroup>

                <FadeUp as="div" delay={0.1}>
                    <button
                        className="btn btn--white blogsection__cta"
                        onClick={() => navigate("/blog")}
                    >
                        Read More Articles
                    </button>
                </FadeUp>
            </div>
        </AnimatedSection>
    );
};

export default BlogSection;
