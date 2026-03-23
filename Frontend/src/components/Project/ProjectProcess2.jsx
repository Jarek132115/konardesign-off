import React, { useEffect, useRef } from "react";
import "../../styling/projects/project1/projectprocess2.css";

import projectStep1Image1 from "../../assets/images/ProjectStep1-Image1.jpg";
import projectStep1Image2 from "../../assets/images/ProjectStep1-Image2.jpg";
import projectStep1Image3 from "../../assets/images/ProjectStep1-Image3.jpg";
import projectStep1Image4 from "../../assets/images/ProjectStep1-Image4.jpg";
import projectStep1Image5 from "../../assets/images/ProjectStep1-Image5.jpg";
import projectStep1Image6 from "../../assets/images/ProjectStep1-Image6.jpg";

import uxIcon from "../../assets/icons/ux.svg";
import responsiveIcon from "../../assets/icons/responsive.svg";
import conversionIcon from "../../assets/icons/conversiondriven.svg";
import dataIcon from "../../assets/icons/data.svg";

const DRAG_THRESHOLD = 6;

const columnOneImages = [
    projectStep1Image2,
    projectStep1Image4,
    projectStep1Image6,
];

const columnTwoImages = [
    projectStep1Image1,
    projectStep1Image3,
    projectStep1Image5,
];

const processCards = [
    {
        icon: uxIcon,
        title: "Prioritising What Users Need First",
        body: "The layout had to lead with the strongest value points early, reduce friction in the first few sections, and make it immediately obvious what KonarCard offers and why it matters.",
    },
    {
        icon: conversionIcon,
        title: "Creating Clearer Content Flow",
        body: "Each section was arranged to build naturally on the last one, moving from explanation to trust, then into product detail, comparison, and action without making the page feel crowded.",
    },
    {
        icon: responsiveIcon,
        title: "Strengthening Visual Hierarchy",
        body: "Spacing, heading scale, section rhythm, and content grouping were all shaped to create a more premium flow, helping users focus on the right information at the right time.",
    },
    {
        icon: dataIcon,
        title: "Making The Structure Feel Intentional",
        body: "The page structure was refined so every section had a job to do, creating a clearer journey from curiosity to trust to decision instead of feeling like separate disconnected blocks.",
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
                                                alt={`Project hierarchy reference ${index + 1}`}
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
                                Once the direction was clear, the next step was shaping the
                                page structure so the content felt easier to scan, easier to
                                understand, and much stronger in how it guided attention.
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