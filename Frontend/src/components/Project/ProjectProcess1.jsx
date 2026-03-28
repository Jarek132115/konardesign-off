import React, { useEffect, useRef } from "react";
import "../../styling/projects/project1/projectprocess1.css";

import projectStep1Image1 from "../../assets/images/Step1-Image1.jpg";
import projectStep1Image2 from "../../assets/images/Step1-Image2.jpg";
import projectStep1Image3 from "../../assets/images/Step1-Image3.jpg";
import projectStep1Image4 from "../../assets/images/Step1-Image4.jpg";
import projectStep1Image5 from "../../assets/images/Step1-Image5.jpg";
import projectStep1Image6 from "../../assets/images/Step1-Image6.jpg";
import projectStep1Image7 from "../../assets/images/Step1-Image7.jpg";
import projectStep1Image8 from "../../assets/images/Step1-Image8.jpg";

import audienceIcon from "../../assets/icons/audience.svg";
import dataIcon from "../../assets/icons/data.svg";
import uxIcon from "../../assets/icons/ux.svg";
import speedIcon from "../../assets/icons/speed.svg";

const DRAG_THRESHOLD = 6;

const columnOneImages = [
    projectStep1Image1,
    projectStep1Image2,
    projectStep1Image3,
    projectStep1Image4,
];

const columnTwoImages = [
    projectStep1Image5,
    projectStep1Image6,
    projectStep1Image7,
    projectStep1Image8,
];

const processCards = [
    {
        icon: audienceIcon,
        title: "Discovery & Goal Clarity",
        body: "The first step was understanding exactly what the business needed, what it was struggling with, and what the website needed to solve clearly.",
    },
    {
        icon: dataIcon,
        title: "Industry & Market Research",
        body: "I researched the NFC and digital business card market in depth to understand the landscape, user expectations, and where KonarCard could stand out properly.",
    },
    {
        icon: uxIcon,
        title: "Competitor Review & Full Audits",
        body: "The top 6 competitors were analysed across technical health, SEO visibility, content and messaging, and overall UX to spot strengths, weaknesses, and missed opportunities.",
    },
    {
        icon: speedIcon,
        title: "User Personas & Strategic Direction",
        body: "Those findings were then turned into clear user personas and strategic direction, giving the project a stronger foundation for structure, messaging, and design decisions.",
    },
];

const ProjectProcess1 = () => {
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
        <section className="project-process project-process--step1">
            <div className="project-process__container">
                <div className="project-process__grid">
                    <div className="project-process__left">
                        <div className="project-process__step-row">
                            <span className="project-process__eyebrow">STEP 01</span>
                        </div>

                        <div className="project-process__intro">
                            <h2 className="heading2 project-process__title">
                                Strategy Before Screens
                            </h2>

                            <p className="subheading project-process__subtitle">
                                Before any layouts or styling, the focus was on
                                understanding the business, the market, the
                                competitors, and the audience so the website could
                                be built on clear strategy rather than assumptions.
                            </p>
                        </div>

                        <div
                            className="project-process__cards-scroll"
                            ref={scrollerRef}
                            aria-label="Scrollable strategy cards"
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
                                                alt={`Project strategy visual ${index + 1}`}
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
                                                alt={`Project strategy reference ${index + 1}`}
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

export default ProjectProcess1;