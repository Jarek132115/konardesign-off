import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedHeading from "../components/animations/AnimatedHeading";
import FadeUp from "../components/animations/FadeUp";

import "../styling/blogpagedetail.css";

import heroImage from "../assets/images/carousel5.jpg";

const DRAG_THRESHOLD = 6;

const keyPoints = [
    {
        id: "looks-good",
        title: "Looks good, performs weakly",
        text: "A polished interface can still fail if the message is unclear, the structure is weak, and the user journey does not support decision-making properly.",
    },
    {
        id: "seo-late",
        title: "SEO gets added too late",
        text: "When search intent, page roles, and internal structure are ignored early, visibility becomes much harder to build later.",
    },
    {
        id: "friction",
        title: "Users feel more friction",
        text: "If the flow is not planned properly, visitors have to work too hard to understand what is being offered and what to do next.",
    },
    {
        id: "analytics",
        title: "Growth becomes harder to measure",
        text: "Without proper analytics, tracking, and technical foundations, it becomes difficult to know what is working and what needs improving.",
    },
];

const processSteps = [
    {
        number: "01",
        title: "Discovery first",
        text: "Start by understanding the business properly, what it is trying to achieve, where it is struggling, and what a successful website actually needs to do.",
    },
    {
        number: "02",
        title: "Clarify the audience",
        text: "Define who the website is speaking to so the message, structure, and overall journey are shaped around the right people instead of vague assumptions.",
    },
    {
        number: "03",
        title: "Study the market",
        text: "Research the wider market, category expectations, and how similar businesses position themselves so there is a clearer strategic base to work from.",
    },
    {
        number: "04",
        title: "Review competitors deeply",
        text: "Look at competitors through UX, content, SEO, structure, and technical quality so you can see where they are strong, where they are weak, and where opportunities exist.",
    },
    {
        number: "05",
        title: "Plan the structure properly",
        text: "Build the sitemap, define page roles, and shape how content should flow so the website feels easier to navigate, understand, and trust.",
    },
    {
        number: "06",
        title: "Align content and SEO",
        text: "Make sure messaging, keyword direction, and page purpose support each other so visibility and clarity are being built together from the start.",
    },
    {
        number: "07",
        title: "Design with purpose",
        text: "Only once the direction is clear should visual design take over, turning the strategy into a cleaner, stronger, and more conversion-focused interface.",
    },
    {
        number: "08",
        title: "Build, optimise, and track",
        text: "Develop the site properly, improve speed, set up analytics and indexing, and check everything thoroughly so the final result is ready to perform.",
    },
];

const BlogPage1 = () => {
    const breaksScrollerRef = useRef(null);
    const processScrollerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const attachDragScroll = (scrollerEl) => {
            if (!scrollerEl) return () => { };

            let isPointerDown = false;
            let isDragging = false;
            let pointerId = null;
            let startX = 0;
            let startScrollLeft = 0;

            const stopDragging = () => {
                isPointerDown = false;
                isDragging = false;
                pointerId = null;
                scrollerEl.classList.remove("is-dragging");
            };

            const onPointerDown = (event) => {
                if (event.button !== 0) return;

                isPointerDown = true;
                isDragging = false;
                pointerId = event.pointerId;
                startX = event.clientX;
                startScrollLeft = scrollerEl.scrollLeft;

                scrollerEl.setPointerCapture?.(event.pointerId);
            };

            const onPointerMove = (event) => {
                if (!isPointerDown) return;

                const deltaX = event.clientX - startX;

                if (!isDragging && Math.abs(deltaX) > DRAG_THRESHOLD) {
                    isDragging = true;
                    scrollerEl.classList.add("is-dragging");
                }

                if (!isDragging) return;

                event.preventDefault();
                scrollerEl.scrollLeft = startScrollLeft - deltaX;
            };

            const onPointerUp = (event) => {
                if (pointerId !== null) {
                    scrollerEl.releasePointerCapture?.(event.pointerId);
                }
                stopDragging();
            };

            const onPointerCancel = (event) => {
                if (pointerId !== null) {
                    scrollerEl.releasePointerCapture?.(event.pointerId);
                }
                stopDragging();
            };

            const onDragStart = (event) => {
                event.preventDefault();
            };

            scrollerEl.addEventListener("pointerdown", onPointerDown);
            scrollerEl.addEventListener("pointermove", onPointerMove);
            scrollerEl.addEventListener("pointerup", onPointerUp);
            scrollerEl.addEventListener("pointercancel", onPointerCancel);
            scrollerEl.addEventListener("dragstart", onDragStart);

            return () => {
                scrollerEl.removeEventListener("pointerdown", onPointerDown);
                scrollerEl.removeEventListener("pointermove", onPointerMove);
                scrollerEl.removeEventListener("pointerup", onPointerUp);
                scrollerEl.removeEventListener("pointercancel", onPointerCancel);
                scrollerEl.removeEventListener("dragstart", onDragStart);
            };
        };

        const detachBreaks = attachDragScroll(breaksScrollerRef.current);
        const detachProcess = attachDragScroll(processScrollerRef.current);

        return () => {
            detachBreaks();
            detachProcess();
        };
    }, []);

    return (
        <div className="kd-blogdetail-shell">
            <Navbar />

            <main className="kd-blogdetail">
                <div className="kd-blogdetail__inner">
                    <button
                        type="button"
                        className="kd-blogdetail__back"
                        onClick={() => navigate("/blog")}
                    >
                        ← Back to Blog
                    </button>

                    <header className="kd-blogdetail__hero">
                        <FadeUp
                            as="p"
                            className="eyebrow kd-blogdetail__eyebrow"
                            trigger="onLoad"
                            delay={0}
                        >
                            Web Design · Strategy
                        </FadeUp>

                        <AnimatedHeading
                            as="h1"
                            className="heading1 kd-blogdetail__title"
                            text="The Biggest Website Mistake Is Skipping Strategy"
                            wordClassName="kd-blogdetail__title-word"
                            highlightWords={["Website", "Strategy"]}
                            highlightClassName="kd-blogdetail__title-word--indigo"
                            trigger="onLoad"
                            delay={0.15}
                        />

                        <FadeUp
                            as="p"
                            className="subheading kd-blogdetail__subtitle"
                            trigger="onLoad"
                            afterHeading="The Biggest Website Mistake Is Skipping Strategy"
                            headingDelay={0.15}
                        >
                            A strong website is not just something that looks
                            polished. It needs the right direction, structure,
                            messaging, SEO, and technical foundations to support
                            real business growth.
                        </FadeUp>

                        <FadeUp
                            className="kd-blogdetail__meta"
                            trigger="onLoad"
                            delay={0.55}
                        >
                            <span className="kd-blogdetail__pill">5 Min Read</span>
                            <span className="kd-blogdetail__meta-text">
                                Practical insight on why strategy matters before
                                visuals
                            </span>
                        </FadeUp>

                        <FadeUp
                            className="kd-blogdetail__hero-media"
                            trigger="onLoad"
                            delay={0.65}
                            y={20}
                        >
                            <img
                                src={heroImage}
                                alt="Website strategy article cover"
                                className="kd-blogdetail__hero-image"
                                draggable="false"
                            />
                        </FadeUp>
                    </header>

                    <article className="kd-blogdetail__article">
                        <FadeUp
                            as="section"
                            className="kd-blogdetail__section kd-blogdetail__section--clean"
                        >
                            <div className="kd-blogdetail__section-intro">
                                <p className="eyebrow kd-blogdetail__section-eyebrow">
                                    The Problem
                                </p>

                                <h2 className="heading2 kd-blogdetail__section-title">
                                    Why so many websites{" "}
                                    <span className="kd-blogdetail__section-highlight">
                                        underperform
                                    </span>
                                </h2>
                            </div>

                            <div className="kd-blogdetail__copy kd-blogdetail__copy--full">
                                <p className="kd-blogdetail__paragraph">
                                    One of the biggest mistakes in web design is
                                    jumping straight into visuals before the
                                    strategy is clear. The result is usually a
                                    website that looks refined on the surface but
                                    feels weak underneath. It may look modern, but
                                    it does not explain the offer clearly enough,
                                    does not guide users naturally, and often does
                                    not support SEO, performance, or conversion in
                                    a serious way.
                                </p>

                                <p className="kd-blogdetail__paragraph">
                                    That is because a website is not just a visual
                                    asset. It is a business tool. It has to bring
                                    the right people in, help them understand the
                                    value quickly, make the next step feel obvious,
                                    and work technically in a way that supports
                                    long-term growth.
                                </p>
                            </div>
                        </FadeUp>

                        <FadeUp
                            as="section"
                            className="kd-blogdetail__quote"
                        >
                            <p className="kd-blogdetail__quote-text">
                                A website is not just something to look at. It is
                                something that needs to perform.
                            </p>
                        </FadeUp>

                        <FadeUp
                            as="section"
                            className="kd-blogdetail__section kd-blogdetail__section--clean"
                        >
                            <div className="kd-blogdetail__section-intro">
                                <p className="eyebrow kd-blogdetail__section-eyebrow">
                                    What Strategy Means
                                </p>

                                <h2 className="heading2 kd-blogdetail__section-title">
                                    Strategy gives design a{" "}
                                    <span className="kd-blogdetail__section-highlight">
                                        reason
                                    </span>
                                </h2>
                            </div>

                            <div className="kd-blogdetail__copy kd-blogdetail__copy--full">
                                <p className="kd-blogdetail__paragraph">
                                    Strategy is the thinking that happens before
                                    the interface is designed. It is the work that
                                    defines what the business needs, who the
                                    website is speaking to, what the user needs to
                                    understand first, and how each page should
                                    support a real goal.
                                </p>

                                <p className="kd-blogdetail__paragraph">
                                    This includes discovery, competitor review,
                                    audience thinking, sitemap planning, content
                                    flow, SEO direction, and making sure UX,
                                    messaging, performance, and business goals are
                                    all working together instead of separately.
                                </p>

                                <p className="kd-blogdetail__paragraph">
                                    Without that foundation, design decisions turn
                                    into guesses. With it, every stage becomes much
                                    more intentional.
                                </p>
                            </div>
                        </FadeUp>

                        <FadeUp
                            as="section"
                            className="kd-blogdetail__section kd-blogdetail__section--clean"
                        >
                            <div className="kd-blogdetail__section-intro">
                                <p className="eyebrow kd-blogdetail__section-eyebrow">
                                    What Usually Breaks
                                </p>

                                <h2 className="heading2 kd-blogdetail__section-title">
                                    What goes wrong when strategy gets{" "}
                                    <span className="kd-blogdetail__section-highlight">
                                        skipped
                                    </span>
                                </h2>
                            </div>

                            <div
                                className="kd-blogdetail__cards-scroll"
                                ref={breaksScrollerRef}
                                aria-label="Scrollable website strategy issue cards"
                            >
                                <div className="kd-blogdetail__cards-track">
                                    {keyPoints.map((item) => (
                                        <article
                                            key={item.id}
                                            className="kd-blogdetail__point-card"
                                        >
                                            <h3 className="heading4 kd-blogdetail__point-title">
                                                {item.title}
                                            </h3>
                                            <p className="body kd-blogdetail__point-text">
                                                {item.text}
                                            </p>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp
                            as="section"
                            className="kd-blogdetail__section kd-blogdetail__section--clean"
                        >
                            <div className="kd-blogdetail__section-intro">
                                <p className="eyebrow kd-blogdetail__section-eyebrow">
                                    A Better Process
                                </p>

                                <h2 className="heading2 kd-blogdetail__section-title">
                                    Strong websites are built in{" "}
                                    <span className="kd-blogdetail__section-highlight">
                                        sequence
                                    </span>
                                </h2>
                            </div>

                            <div className="kd-blogdetail__copy kd-blogdetail__copy--full">
                                <p className="kd-blogdetail__paragraph">
                                    A better website process works in order. Each
                                    stage supports the next one instead of trying
                                    to do everything at once. That is what creates
                                    a site that feels clear, intentional, and much
                                    more capable of supporting real growth.
                                </p>
                            </div>

                            <div
                                className="kd-blogdetail__cards-scroll"
                                ref={processScrollerRef}
                                aria-label="Scrollable website process cards"
                            >
                                <div className="kd-blogdetail__cards-track kd-blogdetail__cards-track--process">
                                    {processSteps.map((step) => (
                                        <article
                                            key={step.number}
                                            className="kd-blogdetail__process-card"
                                        >
                                            <span className="kd-blogdetail__process-card-number">
                                                {step.number}
                                            </span>

                                            <h3 className="heading4 kd-blogdetail__process-card-title">
                                                {step.title}
                                            </h3>

                                            <p className="body kd-blogdetail__process-card-text">
                                                {step.text}
                                            </p>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp
                            as="section"
                            className="kd-blogdetail__section kd-blogdetail__section--clean"
                        >
                            <div className="kd-blogdetail__section-intro">
                                <p className="eyebrow kd-blogdetail__section-eyebrow">
                                    Why It Matters
                                </p>

                                <h2 className="heading2 kd-blogdetail__section-title">
                                    Better process leads to better{" "}
                                    <span className="kd-blogdetail__section-highlight">
                                        results
                                    </span>
                                </h2>
                            </div>

                            <div className="kd-blogdetail__copy kd-blogdetail__copy--full">
                                <p className="kd-blogdetail__paragraph">
                                    When the strategy is right, everything else
                                    becomes stronger. The message becomes clearer.
                                    The layout becomes easier to follow. The SEO
                                    has direction. The design feels more
                                    intentional. The build is cleaner. And the
                                    whole website becomes much more useful as a
                                    real business asset.
                                </p>

                                <p className="kd-blogdetail__paragraph">
                                    That is the difference between a website that
                                    simply exists and one that actively helps a
                                    business move forward.
                                </p>
                            </div>
                        </FadeUp>

                        <FadeUp
                            as="section"
                            className="kd-blogdetail__takeaway"
                        >
                            <p className="eyebrow kd-blogdetail__takeaway-eyebrow">
                                Final Takeaway
                            </p>

                            <h2 className="heading2 kd-blogdetail__takeaway-title">
                                The biggest website mistake is not poor visuals.
                                It is building without clarity.
                            </h2>

                            <p className="subheading kd-blogdetail__takeaway-text">
                                When strategy comes first, every design decision
                                has a reason, every page has a role, and the whole
                                website becomes far more capable of supporting
                                real business goals.
                            </p>
                        </FadeUp>

                        <FadeUp
                            as="section"
                            className="kd-blogdetail__cta"
                        >
                            <p className="eyebrow kd-blogdetail__cta-eyebrow">
                                Next Step
                            </p>

                            <h2 className="heading2 kd-blogdetail__cta-title">
                                Want a website built more{" "}
                                <span className="kd-blogdetail__title-highlight">
                                    strategically
                                </span>
                                ?
                            </h2>

                            <p className="subheading kd-blogdetail__cta-text">
                                If you want a website that feels clearer, performs
                                better, and supports real growth, the process
                                matters just as much as the final design.
                            </p>

                            <div className="kd-blogdetail__cta-actions">
                                <button
                                    type="button"
                                    className="btn btn--indigo"
                                    onClick={() => navigate("/book-a-call")}
                                >
                                    Book a Call
                                </button>

                                <button
                                    type="button"
                                    className="btn btn--white"
                                    onClick={() => navigate("/blog")}
                                >
                                    Back to Blog
                                </button>
                            </div>
                        </FadeUp>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPage1;
