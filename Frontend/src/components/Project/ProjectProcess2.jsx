import React, { useEffect, useRef } from "react";
import "../../styling/projects/project1/projectprocess2.css";

import projectStep2Image1 from "../../assets/images/Step2-Image1.jpg";
import projectStep2Image2 from "../../assets/images/Step2-Image2.jpg";
import projectStep2Image3 from "../../assets/images/Step2-Image3.jpg";
import projectStep2Image4 from "../../assets/images/Step2-Image4.jpg";
import projectStep2Image5 from "../../assets/images/Step2-Image5.jpg";
import projectStep2Image6 from "../../assets/images/Step2-Image6.jpg";
import projectStep2Image7 from "../../assets/images/Step2-Image7.jpg";

import uxIcon from "../../assets/icons/ux.svg";
import responsiveIcon from "../../assets/icons/responsive.svg";
import conversionIcon from "../../assets/icons/conversiondriven.svg";
import dataIcon from "../../assets/icons/data.svg";

const DRAG_THRESHOLD = 6;

const columnOneImages = [
    projectStep2Image1,
    projectStep2Image2,
    projectStep2Image3,
    projectStep2Image4,
];

const columnTwoImages = [
    projectStep2Image5,
    projectStep2Image6,
    projectStep2Image7,
];

const processCards = [
    {
        icon: uxIcon,
        title: "Sitemap and Page Planning",
        body: "After discovery, the next step was mapping the sitemap and planning the layout direction for each page so the structure felt clear before design work started.",
    },
    {
        icon: dataIcon,
        title: "SEO Research and Strategy",
        body: "I carried out SEO research to understand search opportunities, then used that insight to shape a clearer SEO strategy for page focus, keyword direction, and visibility.",
    },
    {
        icon: conversionIcon,
        title: "Copywriting and Messaging",
        body: "With the structure in place, I wrote the copy so the product was easier to understand, the value was clearer, and each page guided people more naturally toward action.",
    },
    {
        icon: responsiveIcon,
        title: "Ideas, Inspiration, and Direction",
        body: "Alongside planning, I explored ideas and inspiration from other sites to help shape the right visual direction and create a stronger foundation before moving into UI design.",
    },
];

const ProjectProcess2 = () => {
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

    const loopColumnOne = [...columnOneImages, ...columnOneImages];
    const loopColumnTwo = [...columnTwoImages, ...columnTwoImages];

    return (
        <section className="project-process project-process--step2">
            <div className="project-process__container">
                <div className="project-process__grid">
                    <div className="project-process__visual">
                        <div className="project-process__marquee">
                            <div className="project-process__marquee-column project-process__marquee-column--up">
                                <div className="project-process__marquee-track">
                                    {loopColumnOne.map((image, index) => (
                                        <div
                                            className="project-process__image-card"
                                            key={`up-${index}`}
                                        >
                                            <img
                                                src={image}
                                                alt={`Project structure visual ${index + 1}`}
                                                className="project-process__image"
                                                draggable="false"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="project-process__marquee-column project-process__marquee-column--down">
                                <div className="project-process__marquee-track">
                                    {loopColumnTwo.map((image, index) => (
                                        <div
                                            className="project-process__image-card"
                                            key={`down-${index}`}
                                        >
                                            <img
                                                src={image}
                                                alt={`Project planning reference ${index + 1}`}
                                                className="project-process__image"
                                                draggable="false"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-process__right">
                        <div className="project-process__step-row">
                            <span className="project-process__eyebrow">STEP 02</span>
                        </div>

                        <div className="project-process__intro">
                            <h2 className="heading2 project-process__title">
                                Structure and Hierarchy
                            </h2>

                            <p className="subheading project-process__subtitle">
                                Once the strategy was clear, the next step was
                                planning the sitemap, page layouts, SEO direction,
                                and messaging so each page had a clearer role,
                                stronger flow, and a more intentional foundation
                                before design exploration began.
                            </p>
                        </div>

                        <div
                            className="project-process__cards-scroll"
                            ref={scrollerRef}
                            aria-label="Scrollable structure cards"
                        >
                            <div className="project-process__cards-track">
                                {processCards.map((card) => (
                                    <article
                                        key={card.title}
                                        className="project-process__info-card"
                                    >
                                        <div className="project-process__info-icon">
                                            <img
                                                src={card.icon}
                                                alt=""
                                                draggable="false"
                                            />
                                        </div>

                                        <h3 className="project-process__info-title">
                                            {card.title}
                                        </h3>

                                        <p className="project-process__info-body">
                                            {card.body}
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

export default ProjectProcess2;