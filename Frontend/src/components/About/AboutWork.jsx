import React, { useEffect, useRef } from "react";
import "../../styling/about/aboutwork.css";
import AnimatedSection from "../animations/AnimatedSection";
import AnimatedHeading from "../animations/AnimatedHeading";
import FadeUp from "../animations/FadeUp";

import workVideo from "../../assets/videos/Custom1.mp4";

const DRAG_THRESHOLD = 6;

const workItems = [
    {
        number: "01",
        title: "Clear, Direct Communication",
        text: "The process stays direct and easy to follow, so you always know what is happening and why.",
    },
    {
        number: "02",
        title: "Strategy Before Visual Polish",
        text: "Goals, structure, and hierarchy are defined first so the design is not just attractive, but effective.",
    },
    {
        number: "03",
        title: "Detail That Holds Together",
        text: "Spacing, responsiveness, and consistency are handled carefully so the final result feels more considered.",
    },
    {
        number: "04",
        title: "Focused Work, No Extra Noise",
        text: "The aim is to keep the project organised, clear, and moving forward without unnecessary clutter.",
    },
];

const AboutWork = () => {
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
        <AnimatedSection className="aboutwork">
            <div className="aboutwork__inner">
                <div className="aboutwork__grid">
                    <div className="aboutwork__visual">
                        <div className="aboutwork__image-card">
                            <video
                                className="aboutwork__video"
                                src={workVideo}
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

                    <div className="aboutwork__right">
                        <div className="aboutwork__step-row">
                            <span className="aboutwork__eyebrow">HOW I WORK</span>
                        </div>

                        <div className="aboutwork__intro">
                            <AnimatedHeading
                                as="h2"
                                text="What Working With Me Feels Like From First Direction to Final Build"
                                className="heading2 aboutwork__title"
                                highlightWords={["Final", "Build"]}
                                highlightClassName="aboutwork__highlight"
                            />

                            <FadeUp
                                as="p"
                                className="subheading aboutwork__subtitle"
                                afterHeading="What Working With Me Feels Like From First Direction to Final Build"
                            >
                                The process is designed to feel clear, focused,
                                and considered from the start, so each stage
                                builds naturally toward a stronger final result.
                            </FadeUp>
                        </div>

                        <div
                            className="aboutwork__cards-scroll"
                            ref={scrollerRef}
                            aria-label="Scrollable work process cards"
                        >
                            <div className="aboutwork__cards-track">
                                {workItems.map((item) => (
                                    <article
                                        key={item.number}
                                        className="aboutwork__card"
                                    >
                                        <div className="aboutwork__number">
                                            {item.number}
                                        </div>

                                        <h3 className="heading4 aboutwork__card-title">
                                            {item.title}
                                        </h3>

                                        <p className="body aboutwork__card-text">
                                            {item.text}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default AboutWork;