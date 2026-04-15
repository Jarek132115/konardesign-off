import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedHeading from "../components/animations/AnimatedHeading";
import FadeUp from "../components/animations/FadeUp";
import { StaggerGroup, StaggerItem } from "../components/animations/StaggerGroup";

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
    const navigate = useNavigate();

    return (
        <div className="kd-blogpage-shell">
            <Navbar />

            <main className="kd-blogpage">
                <div className="kd-blogpage__inner">
                    <header className="kd-blogpage__header">
                        <FadeUp
                            as="p"
                            className="eyebrow kd-blogpage__eyebrow"
                            trigger="onLoad"
                            delay={0}
                        >
                            BLOG
                        </FadeUp>

                        <AnimatedHeading
                            as="h1"
                            className="heading1 kd-blogpage__title"
                            text="Growth-Driven Insights for Modern Brands"
                            wordClassName="kd-blogpage__title-word"
                            highlightWords={["Insights", "Brands"]}
                            highlightClassName="kd-blogpage__title-word--indigo"
                            trigger="onLoad"
                            delay={0.15}
                        />

                        <FadeUp
                            as="p"
                            className="subheading kd-blogpage__subtitle"
                            trigger="onLoad"
                            afterHeading="Growth-Driven Insights for Modern Brands"
                            headingDelay={0.15}
                        >
                            Practical writing on design, UX, performance, and SEO
                            for brands that want a website built to do more.
                        </FadeUp>
                    </header>

                    <StaggerGroup className="kd-blogpage__grid" stagger={0.08}>
                        {posts.map((post) => (
                            <StaggerItem
                                as="article"
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
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Blog;
