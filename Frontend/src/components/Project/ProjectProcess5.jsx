import React, { useEffect, useRef } from "react";
import "../../styling/projects/project1/projectprocess5.css";

import projectStep1Image1 from "../../assets/images/ProjectStep1-Image1.jpg";
import projectStep1Image2 from "../../assets/images/ProjectStep1-Image2.jpg";
import projectStep1Image3 from "../../assets/images/ProjectStep1-Image3.jpg";
import projectStep1Image4 from "../../assets/images/ProjectStep1-Image4.jpg";
import projectStep1Image5 from "../../assets/images/ProjectStep1-Image5.jpg";
import projectStep1Image6 from "../../assets/images/ProjectStep1-Image6.jpg";

import conversionIcon from "../../assets/icons/conversiondriven.svg";
import responsiveIcon from "../../assets/icons/responsive.svg";
import uxIcon from "../../assets/icons/ux.svg";
import figmaIcon from "../../assets/icons/Figma.svg";

const DRAG_THRESHOLD = 6;

const columnOneImages = [
    projectStep1Image2,
    projectStep1Image4,
    projectStep1Image1,
];

const columnTwoImages = [
    projectStep1Image6,
    projectStep1Image3,
    projectStep1Image5,
];

const processCards = [
    {
        icon: conversionIcon,
        title: "Bringing Everything Together",
        body: "The final stage was about making sure strategy, structure, and visual direction all worked as one cohesive experience so the project felt complete rather than a collection of separate ideas.",
    },
    {
        icon: uxIcon,
        title: "Strengthening The Final Flow",
        body: "Key sections were reviewed in sequence to make sure the page moved naturally from introduction to explanation to action, helping the user journey feel more deliberate and more convincing overall.",
    },
    {
        icon: figmaIcon,
        title: "Sharpening The Presentation",
        body: "Final visual refinements helped the interface feel more resolved, with cleaner alignment, more controlled spacing, and a stronger sense of polish across the full case study experience.",
    },
    {
        icon: responsiveIcon,
        title: "Preparing For Real-World Use",
        body: "The last round of thinking focused on how the work would hold up in practice across devices, screen sizes, and viewing contexts, ensuring the design stayed consistent beyond static mockups.",
    },
];

const ProjectProcess5 = () => {
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
        <section className="project-process project-process--step5">
            <div className="project-process__container">
                <div className="project-process__grid">
                    <div className="project-process__left">
                        <div className="project-process__step-row">
                            <span className="project-process__eyebrow">STEP 05</span>
                        </div>

                        <div className="project-process__intro">
                            <h2 className="heading2 project-process__title">
                                Final Alignment and Delivery
                            </h2>

                            <p className="subheading project-process__subtitle">
                                The final stage focused on bringing everything together
                                into one clear and polished experience making sure the
                                page felt cohesive, intentional, and ready to present the
                                product with confidence across every touchpoint.
                            </p>
                        </div>

                        <div
                            className="project-process__cards-scroll"
                            ref={scrollerRef}
                            aria-label="Scrollable final alignment cards"
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
                                                alt={`Project final alignment visual ${index + 1}`}
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
                                                alt={`Project delivery reference ${index + 1}`}
                                                className="project-process__image"
                                                draggable="false"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectProcess5;