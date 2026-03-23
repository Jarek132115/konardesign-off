import React, { useEffect, useRef } from "react";
import "../../styling/projects/project1/projectprocess3.css";

import projectStep1Image1 from "../../assets/images/ProjectStep1-Image1.jpg";
import projectStep1Image2 from "../../assets/images/ProjectStep1-Image2.jpg";
import projectStep1Image3 from "../../assets/images/ProjectStep1-Image3.jpg";
import projectStep1Image4 from "../../assets/images/ProjectStep1-Image4.jpg";
import projectStep1Image5 from "../../assets/images/ProjectStep1-Image5.jpg";
import projectStep1Image6 from "../../assets/images/ProjectStep1-Image6.jpg";

import figmaIcon from "../../assets/icons/Figma.svg";
import uxIcon from "../../assets/icons/ux.svg";
import responsiveIcon from "../../assets/icons/responsive.svg";
import conversionIcon from "../../assets/icons/conversiondriven.svg";

const DRAG_THRESHOLD = 6;

const columnOneImages = [
    projectStep1Image3,
    projectStep1Image5,
    projectStep1Image1,
];

const columnTwoImages = [
    projectStep1Image2,
    projectStep1Image6,
    projectStep1Image4,
];

const processCards = [
    {
        icon: figmaIcon,
        title: "Building A More Premium Look",
        body: "The visual direction needed to feel sharper and more deliberate than a typical startup site, so the design leaned into stronger typography, cleaner spacing, and a more controlled presentation throughout.",
    },
    {
        icon: conversionIcon,
        title: "Using Contrast To Guide Attention",
        body: "Colour, contrast, and emphasis were used carefully to highlight key moments on the page, helping calls to action, pricing areas, and important content feel easier to spot without overwhelming the layout.",
    },
    {
        icon: uxIcon,
        title: "Making The Product Feel Distinct",
        body: "The visual language was shaped to make KonarCard feel more established and more specific to its category, helping the brand stand apart from generic SaaS or template driven competitors.",
    },
    {
        icon: responsiveIcon,
        title: "Keeping The Experience Consistent",
        body: "Every design choice had to work across desktop, tablet, and mobile so the brand felt consistent everywhere, not just in polished mockups or isolated screen designs.",
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
                                Visual Direction and Brand Feel
                            </h2>

                            <p className="subheading project-process__subtitle">
                                Once the structure was in place, the focus shifted to how
                                the site should feel visually bold enough to stand out,
                                clear enough to guide users, and polished enough to make
                                the product feel more established.
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
                                                alt={`Project brand feel reference ${index + 1}`}
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