import React, { useEffect, useRef } from "react";
import "../../styling/projects/project1/projectprocess1.css";

import projectStep1Image1 from "../../assets/images/ProjectStep1-Image1.jpg";
import projectStep1Image2 from "../../assets/images/ProjectStep1-Image2.jpg";
import projectStep1Image3 from "../../assets/images/ProjectStep1-Image3.jpg";
import projectStep1Image4 from "../../assets/images/ProjectStep1-Image4.jpg";
import projectStep1Image5 from "../../assets/images/ProjectStep1-Image5.jpg";
import projectStep1Image6 from "../../assets/images/ProjectStep1-Image6.jpg";

import audienceIcon from "../../assets/icons/audience.svg";
import dataIcon from "../../assets/icons/data.svg";
import uxIcon from "../../assets/icons/ux.svg";
import speedIcon from "../../assets/icons/speed.svg";

const DRAG_THRESHOLD = 6;

const columnOneImages = [
    projectStep1Image1,
    projectStep1Image2,
    projectStep1Image3,
];

const columnTwoImages = [
    projectStep1Image4,
    projectStep1Image5,
    projectStep1Image6,
];

const processCards = [
    {
        icon: audienceIcon,
        title: "Understanding The Product Clearly",
        body: "KonarCard was not just another website build. The product itself needed explanation because many users were still thinking in terms of traditional business cards rather than a more dynamic digital tool.",
    },
    {
        icon: dataIcon,
        title: "Defining What The Website Had To Do",
        body: "The site needed to educate, build trust, position the product as premium, and move users toward sign up or purchase without feeling overloaded or difficult to follow.",
    },
    {
        icon: uxIcon,
        title: "Establishing The Right Direction Early",
        body: "This stage shaped the hierarchy, the messaging direction, and the overall structure of the build so later design decisions had a stronger foundation and felt intentional rather than decorative.",
    },
    {
        icon: speedIcon,
        title: "Creating A Stronger Strategic Base",
        body: "By clarifying the audience, priorities, and core page goals first, the project had a much stronger base for every design and content decision that followed.",
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
                                Before moving into layouts or styling, I focused on what
                                the site needed to communicate, who it was speaking to,
                                and how the experience should guide people from interest
                                to action.
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