import React, { useEffect, useRef } from "react";
import "../../styling/projects/project1/projectprocess4.css";

import projectStep1Image1 from "../../assets/images/ProjectStep1-Image1.jpg";
import projectStep1Image2 from "../../assets/images/ProjectStep1-Image2.jpg";
import projectStep1Image3 from "../../assets/images/ProjectStep1-Image3.jpg";
import projectStep1Image4 from "../../assets/images/ProjectStep1-Image4.jpg";
import projectStep1Image5 from "../../assets/images/ProjectStep1-Image5.jpg";
import projectStep1Image6 from "../../assets/images/ProjectStep1-Image6.jpg";

import uxIcon from "../../assets/icons/ux.svg";
import responsiveIcon from "../../assets/icons/responsive.svg";
import speedIcon from "../../assets/icons/speed.svg";
import dataIcon from "../../assets/icons/data.svg";

const DRAG_THRESHOLD = 6;

const columnOneImages = [
    projectStep1Image4,
    projectStep1Image1,
    projectStep1Image6,
];

const columnTwoImages = [
    projectStep1Image2,
    projectStep1Image5,
    projectStep1Image3,
];

const processCards = [
    {
        icon: uxIcon,
        title: "Refining Key User Journeys",
        body: "Once the overall direction was established, the next step was tightening the experience around the moments that mattered most so users could move through the page with less friction and more confidence.",
    },
    {
        icon: dataIcon,
        title: "Improving Clarity In The Details",
        body: "Small adjustments to layout, copy emphasis, and supporting content helped make the offer easier to understand, ensuring important information felt clearer without adding unnecessary complexity.",
    },
    {
        icon: speedIcon,
        title: "Making Every Section Work Harder",
        body: "Each section was reviewed to make sure it had a clear purpose, whether that meant building trust, explaining value, or supporting conversion, so the page felt more intentional from top to bottom.",
    },
    {
        icon: responsiveIcon,
        title: "Polishing Across Every Screen",
        body: "Refinement did not stop at desktop. Spacing, hierarchy, and component behaviour were adjusted across breakpoints so the experience stayed controlled, premium, and consistent everywhere.",
    },
];

const ProjectProcess4 = () => {
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
        <section className="project-process project-process--step4">
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
                                                alt={`Project refinement visual ${index + 1}`}
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
                                                alt={`Project polish reference ${index + 1}`}
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
                            <span className="project-process__eyebrow">STEP 04</span>
                        </div>

                        <div className="project-process__intro">
                            <h2 className="heading2 project-process__title">
                                Refinement and Experience Polish
                            </h2>

                            <p className="subheading project-process__subtitle">
                                After the core structure and visual direction were in place,
                                the focus shifted to refinement making the experience feel
                                smoother, clearer, and more considered in the details that
                                shape how polished the final product feels.
                            </p>
                        </div>

                        <div
                            className="project-process__cards-scroll"
                            ref={scrollerRef}
                            aria-label="Scrollable refinement cards"
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

export default ProjectProcess4;