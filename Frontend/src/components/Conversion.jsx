import React, { useEffect, useRef } from "react";
import "../styling/conversion.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import audienceIcon from "../assets/icons/audience.svg";
import dataIcon from "../assets/icons/data.svg";
import speedIcon from "../assets/icons/speed.svg";
import uxIcon from "../assets/icons/ux.svg";
import responsiveIcon from "../assets/icons/responsive.svg";

import conversionImage1 from "../assets/images/Conversion1.png";
import conversionImage2 from "../assets/images/Conversion2.png";
import conversionImage3 from "../assets/images/Conversion3.png";
import conversionImage4 from "../assets/images/Conversion4.png";
import conversionImage5 from "../assets/images/Conversion5.png";

gsap.registerPlugin(ScrollTrigger);

const conversionItems = [
    {
        eyebrow: "Strategy",
        titleParts: [
            { text: "Every decision starts with the ", highlight: false },
            { text: "people", highlight: true },
            { text: " you want to ", highlight: false },
            { text: "convert", highlight: true },
            { text: ".", highlight: false },
        ],
        description:
            "Structure, messaging, and page flow are shaped around your ideal audience from the beginning, so the website feels clear, relevant, and easier to trust.",
        icon: audienceIcon,
        alt: "Audience icon",
        image: conversionImage1,
    },
    {
        eyebrow: "Conversion",
        titleParts: [
            { text: "Design choices are made to guide ", highlight: false },
            { text: "attention", highlight: true },
            { text: " and reduce ", highlight: false },
            { text: "hesitation", highlight: true },
            { text: ".", highlight: false },
        ],
        description:
            "Layout, hierarchy, and calls to action work together to make next steps feel natural, not forced—helping more visitors move from interest to enquiry.",
        icon: dataIcon,
        alt: "Conversion icon",
        image: conversionImage2,
    },
    {
        eyebrow: "Performance",
        titleParts: [
            { text: "Built with ", highlight: false },
            { text: "speed", highlight: true },
            { text: ", structure, and ", highlight: false },
            { text: "visibility", highlight: true },
            { text: " in mind.", highlight: false },
        ],
        description:
            "Strong technical foundations, responsive execution, and SEO-aware decisions help your site perform properly after launch—not just polished on the surface.",
        icon: speedIcon,
        alt: "Speed icon",
        image: conversionImage3,
    },
    {
        eyebrow: "Experience",
        titleParts: [
            { text: "Smooth user journeys create less ", highlight: false },
            { text: "friction", highlight: true },
            { text: " and more ", highlight: false },
            { text: "momentum", highlight: true },
            { text: ".", highlight: false },
        ],
        description:
            "Clear layouts and thoughtful interactions help people understand where they are, what matters, and what to do next without confusion or clutter.",
        icon: uxIcon,
        alt: "UX icon",
        image: conversionImage4,
    },
    {
        eyebrow: "Consistency",
        titleParts: [
            { text: "The experience holds up across every ", highlight: false },
            { text: "screen", highlight: true },
            { text: " it appears ", highlight: false },
            { text: "on", highlight: true },
            { text: ".", highlight: false },
        ],
        description:
            "From desktop to mobile, the website is designed to feel consistent, credible, and easy to use—so the quality never drops with screen size.",
        icon: responsiveIcon,
        alt: "Responsive icon",
        image: conversionImage5,
    },
];

const DRAG_THRESHOLD = 6;

const Conversion = () => {
    const sectionRef = useRef(null);
    const scrollerRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        const scrollerEl = scrollerRef.current;
        if (!sectionEl || !scrollerEl) return;

        const eyebrowEl = sectionEl.querySelector(".conversion__eyebrow");
        const titleEl = sectionEl.querySelector(".conversion__title");
        const subtitleEl = sectionEl.querySelector(".conversion__subtitle");
        const cards = sectionEl.querySelectorAll(".conversion__card");

        if (!eyebrowEl || !titleEl || !subtitleEl) return;

        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("conversion__title-word");
            wordWrapper.style.display = "inline-block";

            for (const ch of word) {
                const charSpan = document.createElement("span");
                charSpan.textContent = ch;
                charSpan.style.display = "inline-block";
                charSpan.style.opacity = "0";
                charSpan.style.transform = "translateY(8px)";
                wordWrapper.appendChild(charSpan);
            }

            titleEl.appendChild(wordWrapper);

            if (wordIndex !== words.length - 1) {
                titleEl.appendChild(document.createTextNode(" "));
            }
        });

        const wordSpans = titleEl.querySelectorAll(".conversion__title-word");
        const highlightSet = new Set(["Conversion", "Performance"]);

        wordSpans.forEach((wordSpan) => {
            const cleaned = wordSpan.textContent.replace(/[^\w-]/g, "");
            if (highlightSet.has(cleaned)) {
                wordSpan.classList.add("conversion__title-highlight");
            }
        });

        const charSpans = titleEl.querySelectorAll(".conversion__title-word span");

        gsap.set(subtitleEl, { opacity: 0, y: 8 });

        const introTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 72%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        introTl
            .fromTo(
                eyebrowEl,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.25 }
            )
            .to(
                charSpans,
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.018,
                    duration: 0.26,
                },
                ">-0.05"
            )
            .fromTo(
                subtitleEl,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.28 },
                ">-0.08"
            )
            .fromTo(
                cards,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    stagger: 0.08,
                },
                ">-0.05"
            );

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
            introTl.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());

            scrollerEl.removeEventListener("pointerdown", onPointerDown);
            scrollerEl.removeEventListener("pointermove", onPointerMove);
            scrollerEl.removeEventListener("pointerup", onPointerUp);
            scrollerEl.removeEventListener("pointercancel", onPointerCancel);
            scrollerEl.removeEventListener("dragstart", onDragStart);
        };
    }, []);

    return (
        <section className="conversion" ref={sectionRef}>
            <div className="conversion__inner">
                <header className="conversion__header">
                    <p className="eyebrow conversion__eyebrow">
                        CONVERSION FOCUSED
                    </p>

                    <h2 className="heading2 conversion__title">
                        Conversion and Performance Built In From the Start.
                    </h2>

                    <p className="subheading conversion__subtitle">
                        Strategy, UX, structure, and technical execution work together
                        to create websites that not only look sharp, but help move
                        people towards action.
                    </p>
                </header>

                <div
                    className="conversion__scroller"
                    ref={scrollerRef}
                    aria-label="Scrollable conversion cards"
                >
                    <div className="conversion__track">
                        {conversionItems.map((item) => (
                            <article
                                key={item.eyebrow}
                                className="conversion__card"
                            >
                                <div className="conversion__media">
                                    <div className="conversion__media-inner">
                                        <div className="conversion__media-badge">
                                            {item.eyebrow}
                                        </div>

                                        <img
                                            src={item.image}
                                            alt=""
                                            className="conversion__image"
                                            draggable="false"
                                        />
                                    </div>
                                </div>

                                <div className="conversion__content">
                                    <div
                                        className="conversion__item-icon"
                                        aria-hidden="true"
                                    >
                                        <img
                                            src={item.icon}
                                            alt={item.alt}
                                            draggable="false"
                                        />
                                    </div>

                                    <h3 className="heading4 conversion__item-title">
                                        {item.titleParts.map((part, index) => (
                                            <span
                                                key={`${item.eyebrow}-${index}`}
                                                className={
                                                    part.highlight
                                                        ? "conversion__title-accent"
                                                        : ""
                                                }
                                            >
                                                {part.text}
                                            </span>
                                        ))}
                                    </h3>

                                    <p className="body conversion__item-text">
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Conversion;