import React, { useEffect, useRef } from "react";
import "../../styling/about/aboutapproach.css";
import AnimatedSection from "../animations/AnimatedSection";
import AnimatedHeading from "../animations/AnimatedHeading";
import FadeUp from "../animations/FadeUp";

import strategyIcon from "../../assets/icons/data.svg";
import uxIcon from "../../assets/icons/ux.svg";
import figmaIcon from "../../assets/icons/Figma.svg";
import responsiveIcon from "../../assets/icons/responsive.svg";

import approachVideo from "../../assets/videos/Custom1.mp4";

const DRAG_THRESHOLD = 6;

const approachItems = [
    {
        id: "clarity",
        icon: strategyIcon,
        title: "Clarity Before Decoration",
        text: "Structure, hierarchy, and messaging are defined first so the site feels clear before visual styling takes over.",
    },
    {
        id: "useful",
        icon: uxIcon,
        title: "Useful, Not Just Attractive",
        text: "The work should feel strong visually, while also being easier to use, understand, and more valuable over time.",
    },
    {
        id: "process",
        icon: figmaIcon,
        title: "Direction Before Design",
        text: "I define the goal, audience, and flow first, then shape the design around what actually needs attention.",
    },
    {
        id: "result",
        icon: responsiveIcon,
        title: "A Result That Holds Together",
        text: "The final website feels consistent across structure, design, and responsiveness, not just one polished screen.",
    },
];

const AboutApproach = () => {
    const scrollerRef = useRef(null);

    useEffect(() => {
        const scrollerEl = scrollerRef.current;
        if (!scrollerEl) return;

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
    }, []);

    return (
        <AnimatedSection className="aboutapproach">
            <div className="aboutapproach__inner">
                <div className="aboutapproach__grid">
                    <div className="aboutapproach__left">
                        <div className="aboutapproach__step-row">
                            <span className="aboutapproach__eyebrow">
                                MY APPROACH
                            </span>
                        </div>

                        <div className="aboutapproach__intro">
                            <AnimatedHeading
                                as="h2"
                                text="I Care About the Full Build, Not Just the Surface"
                                className="heading2 aboutapproach__title"
                                highlightWords={["Full", "Build"]}
                                highlightClassName="aboutapproach__highlight"
                            />

                            <FadeUp
                                as="p"
                                className="subheading aboutapproach__subtitle"
                                afterHeading="I Care About the Full Build, Not Just the Surface"
                            >
                                Good websites do more than look polished. They
                                need clear structure, stronger communication,
                                and a considered journey that makes the product
                                easier to understand and use.
                            </FadeUp>
                        </div>

                        <div
                            className="aboutapproach__cards-scroll"
                            ref={scrollerRef}
                            aria-label="Scrollable approach cards"
                        >
                            <div className="aboutapproach__cards-track">
                                {approachItems.map((item) => (
                                    <article
                                        key={item.id}
                                        className="aboutapproach__card"
                                    >
                                        <div className="aboutapproach__icon">
                                            <img
                                                src={item.icon}
                                                alt=""
                                                draggable="false"
                                            />
                                        </div>

                                        <h3 className="heading4 aboutapproach__card-title">
                                            {item.title}
                                        </h3>

                                        <p className="body aboutapproach__card-text">
                                            {item.text}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="aboutapproach__visual">
                        <div className="aboutapproach__image-card">
                            <video
                                className="aboutapproach__video"
                                src={approachVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                onCanPlay={(e) => {
                                    e.currentTarget.play().catch(() => { });
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default AboutApproach;