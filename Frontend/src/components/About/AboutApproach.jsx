import React, { useEffect, useRef } from "react";
import "../../styling/about/aboutapproach.css";

import strategyIcon from "../../assets/icons/data.svg";
import uxIcon from "../../assets/icons/ux.svg";
import figmaIcon from "../../assets/icons/Figma.svg";
import responsiveIcon from "../../assets/icons/responsive.svg";

import approachImage from "../../assets/images/ProjectStep1-Image5.jpg";

const DRAG_THRESHOLD = 6;

const approachItems = [
    {
        id: "clarity",
        icon: strategyIcon,
        title: "Clarity Before Visual Noise",
        text: "Remove confusion first and make sure the structure, hierarchy, and communication are doing their job before anything decorative takes over.",
    },
    {
        id: "useful",
        icon: uxIcon,
        title: "Useful, Not Just Attractive",
        text: "The work should feel strong visually, but also easier to use, easier to understand, and more valuable over time.",
    },
    {
        id: "process",
        icon: figmaIcon,
        title: "Process With Intention",
        text: "I begin with direction and strategy first, then shape the design around what matters most and how attention should flow.",
    },
    {
        id: "result",
        icon: responsiveIcon,
        title: "A Premium Result That Holds Together",
        text: "The final build should feel considered, premium, and aligned across structure, design, and responsiveness — not just one polished screen.",
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
        <section className="aboutapproach">
            <div className="aboutapproach__inner">
                <div className="aboutapproach__grid">
                    <div className="aboutapproach__left">
                        <div className="aboutapproach__step-row">
                            <span className="aboutapproach__eyebrow">
                                MY APPROACH
                            </span>
                        </div>

                        <div className="aboutapproach__intro">
                            <h2 className="heading2 aboutapproach__title">
                                I Am Interested in the{" "}
                                <span className="aboutapproach__highlight">
                                    Full Build
                                </span>
                                , Not Just the Surface
                            </h2>

                            <p className="subheading aboutapproach__subtitle">
                                Good websites do more than look polished. They
                                need clear structure, better communication, and
                                a considered journey that helps the brand feel
                                stronger and the product easier to understand.
                            </p>
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
                            <img
                                src={approachImage}
                                alt="Website planning and structure visual"
                                className="aboutapproach__image"
                                draggable="false"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutApproach;