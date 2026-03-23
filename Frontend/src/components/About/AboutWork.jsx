import React, { useEffect, useRef } from "react";
import "../../styling/about/aboutwork.css";

import workImage from "../../assets/images/ProjectStep1-Image6.jpg";

const DRAG_THRESHOLD = 6;

const workItems = [
    {
        number: "01",
        title: "Clear communication throughout",
        text: "I keep the process direct, structured, and easy to follow, so you always know what is happening and why decisions are being made.",
    },
    {
        number: "02",
        title: "Strategy before visual polish",
        text: "The process starts with clarity around goals, hierarchy, and direction first, so the final design is not just attractive, but genuinely effective.",
    },
    {
        number: "03",
        title: "Built with detail and intention",
        text: "I care about the small decisions too — spacing, responsiveness, structure, and consistency — because those details shape how premium the final result feels.",
    },
    {
        number: "04",
        title: "Focused work without unnecessary noise",
        text: "The aim is to make the whole experience feel organised and considered, without bloated process, confusion, or things that do not move the project forward.",
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
        <section className="aboutwork">
            <div className="aboutwork__inner">
                <div className="aboutwork__grid">
                    <div className="aboutwork__visual">
                        <div className="aboutwork__image-card">
                            <img
                                src={workImage}
                                alt="Process and workflow visual"
                                className="aboutwork__image"
                                draggable="false"
                            />
                        </div>
                    </div>

                    <div className="aboutwork__right">
                        <div className="aboutwork__step-row">
                            <span className="aboutwork__eyebrow">HOW I WORK</span>
                        </div>

                        <div className="aboutwork__intro">
                            <h2 className="heading2 aboutwork__title">
                                What Working With Me Feels Like From First
                                Direction to{" "}
                                <span className="aboutwork__highlight">
                                    Final Build
                                </span>
                            </h2>

                            <p className="subheading aboutwork__subtitle">
                                The process is designed to feel clear, focused,
                                and considered from the start, so every stage
                                builds naturally toward a stronger final result.
                            </p>
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
        </section>
    );
};

export default AboutWork;