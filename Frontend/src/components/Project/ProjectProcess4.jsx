import React, { useEffect, useRef } from "react";
import "../../styling/projects/project1/projectprocess4.css";

import projectStep4Image1 from "../../assets/images/Step4-Image1.jpg";
import projectStep4Image2 from "../../assets/images/Step4-Image2.jpg";
import projectStep4Image3 from "../../assets/images/Step4-Image3.jpg";
import projectStep4Image4 from "../../assets/images/Step4-Image4.jpg";
import projectStep4Image5 from "../../assets/images/Step4-Image5.jpg";
import projectStep4Image6 from "../../assets/images/Step4-Image6.jpg";

import uxIcon from "../../assets/icons/ux.svg";
import responsiveIcon from "../../assets/icons/responsive.svg";
import speedIcon from "../../assets/icons/speed.svg";
import dataIcon from "../../assets/icons/data.svg";

const DRAG_THRESHOLD = 6;

const columnOneImages = [
    projectStep4Image1,
    projectStep4Image2,
    projectStep4Image3,
];

const columnTwoImages = [
    projectStep4Image4,
    projectStep4Image5,
    projectStep4Image6,
];

const processCards = [
    {
        icon: uxIcon,
        title: "From Design to Development",
        body: "Once the final UI was approved, the full website was built into a functional coded experience, making sure the design translated properly into a responsive and polished live product.",
    },
    {
        icon: speedIcon,
        title: "Speed and Performance Optimisation",
        body: "Performance was then refined through optimisation work so the site loaded faster, felt smoother to use, and supported a stronger overall user experience across devices.",
    },
    {
        icon: dataIcon,
        title: "SEO, Indexing, and Analytics Setup",
        body: "The site was prepared properly for search by setting up SEO essentials, connecting Google Search Console, handling indexing, and putting analytics in place for ongoing tracking.",
    },
    {
        icon: responsiveIcon,
        title: "Final Checks and Completion",
        body: "Before launch, everything was reviewed against a final checklist to ensure the site was complete, working correctly, and ready both technically and visually across the full experience.",
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
                                                alt={`Project development visual ${index + 1}`}
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
                                                alt={`Project optimisation reference ${index + 1}`}
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
                                Development, Setup, and Final QA
                            </h2>

                            <p className="subheading project-process__subtitle">
                                Once the design work was complete, the focus shifted to
                                building the site properly, optimising performance,
                                setting up SEO and analytics, and reviewing everything
                                through a final checklist so the website was fully ready
                                to launch.
                            </p>
                        </div>

                        <div
                            className="project-process__cards-scroll"
                            ref={scrollerRef}
                            aria-label="Scrollable development and optimisation cards"
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