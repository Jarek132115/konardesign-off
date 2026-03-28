import React, { useEffect, useRef } from "react";
import "../../styling/projects/project1/projectprocess3.css";

import projectStep3Image1 from "../../assets/images/Step3-Image1.jpg";
import projectStep3Image2 from "../../assets/images/Step3-Image2.jpg";
import projectStep3Image3 from "../../assets/images/Step3-Image3.jpg";
import projectStep3Image4 from "../../assets/images/Step3-Image4.jpg";
import projectStep3Image5 from "../../assets/images/Step3-Image5.jpg";
import projectStep3Image6 from "../../assets/images/Step3-Image6.jpg";

import figmaIcon from "../../assets/icons/Figma.svg";
import uxIcon from "../../assets/icons/ux.svg";
import responsiveIcon from "../../assets/icons/responsive.svg";
import conversionIcon from "../../assets/icons/conversiondriven.svg";

const DRAG_THRESHOLD = 6;

const columnOneImages = [
    projectStep3Image1,
    projectStep3Image2,
    projectStep3Image3,
];

const columnTwoImages = [
    projectStep3Image4,
    projectStep3Image5,
    projectStep3Image6,
];

const processCards = [
    {
        icon: figmaIcon,
        title: "Visual System and Brand Choices",
        body: "At this stage, the focus shifted to choosing the final colour palette, font direction, and overall visual system so the site felt clearer, more premium, and more consistent.",
    },
    {
        icon: uxIcon,
        title: "Wireframes into Full UI Design",
        body: "Wireframes were used to shape the structure first, then developed into full interface designs that balanced clarity, hierarchy, and a stronger presentation of the product.",
    },
    {
        icon: responsiveIcon,
        title: "Designing Across Every Screen",
        body: "The website was designed across desktop, tablet, and mobile to make sure the experience stayed consistent, usable, and visually strong at every screen size.",
    },
    {
        icon: conversionIcon,
        title: "Supporting Graphic Design",
        body: "Additional graphic design work helped strengthen the visual identity of the site, supporting the product presentation and making the final experience feel more polished and complete.",
    },
];

const ProjectProcess3 = () => {
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
        <section className="project-process project-process--step3">
            <div className="project-process__container">
                <div className="project-process__grid">
                    <div className="project-process__left">
                        <div className="project-process__step-row">
                            <span className="project-process__eyebrow">STEP 03</span>
                        </div>

                        <div className="project-process__intro">
                            <h2 className="heading2 project-process__title">
                                Visual Direction and Design System
                            </h2>

                            <p className="subheading project-process__subtitle">
                                With the structure in place, the next stage was
                                developing the final visual direction through colour,
                                typography, wireframes, and full responsive UI design
                                so the website felt polished, consistent, and ready
                                across every screen.
                            </p>
                        </div>

                        <div
                            className="project-process__cards-scroll"
                            ref={scrollerRef}
                            aria-label="Scrollable visual direction cards"
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
                                                alt={`Project visual direction ${index + 1}`}
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
                                                alt={`Project design system reference ${index + 1}`}
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

export default ProjectProcess3;