import React, { useEffect, useRef } from "react";

import "../../styling/CustomService/customherosection.css";

import AnimatedHeading from "../animations/AnimatedHeading";
import FadeUp from "../animations/FadeUp";
import { StaggerGroup, StaggerItem } from "../animations/StaggerGroup";
import AnimatedSection from "../animations/AnimatedSection";

import carousel5 from "../../assets/images/carousel5.jpg";
import carousel6 from "../../assets/images/carousel6.jpg";
import carousel7 from "../../assets/images/carousel7.jpg";
import carousel8 from "../../assets/images/carousel8.jpg";
import carousel9 from "../../assets/images/carousel9.jpg";

/* hero carousel uses only carousel5–9, duplicated for seamless loop */
const heroCarouselBase = [carousel5, carousel6, carousel7, carousel8, carousel9];
const heroCarouselImages = [...heroCarouselBase, ...heroCarouselBase];

const CustomHeroSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        /* -----------------------------
           HERO VERTICAL CAROUSEL
        ------------------------------ */
        const carouselEl = section.querySelector(".service-hero__carousel");
        const trackUp = section.querySelector(".service-hero__track--up");
        const trackDown = section.querySelector(".service-hero__track--down");

        if (!carouselEl || !trackUp || !trackDown) return;

        const isBrowser = typeof window !== "undefined";
        const isDraggable = isBrowser && window.innerWidth > 1024;

        let imgEls = [];
        let handleImageLoaded = null;
        let onNativeDragStart = null;
        let onPointerDown = null;
        let onPointerMove = null;
        let endDrag = null;
        let rafId = null;

        let distances = [0, 0];
        let offsets = [0, 0];

        const baseSpeed = 40; // px per second
        let directions = [1, -1];

        let isPointerDown = false;
        let isDragging = false;
        let draggingIndex = null;
        let dragStartY = 0;
        let dragStartX = 0;
        let dragStartOffsets = [0, 0];
        let lastDragDeltaY = 0;

        const applyTransforms = () => {
            trackUp.style.transform = `translate3d(0, ${-offsets[0]}px, 0)`;
            trackDown.style.transform = `translate3d(0, ${-offsets[1]}px, 0)`;
        };

        const wrapOffsets = () => {
            for (let i = 0; i < 2; i++) {
                const d = distances[i];
                if (!d) continue;
                offsets[i] = ((offsets[i] % d) + d) % d;
            }
        };

        const startTicker = () => {
            if (!distances[0] || !distances[1]) return;
            let lastTime = performance.now();

            const tick = (time) => {
                const dt = (time - lastTime) / 1000;
                lastTime = time;

                for (let i = 0; i < 2; i++) {
                    if (isDraggable && isDragging && draggingIndex === i) continue;
                    offsets[i] += directions[i] * baseSpeed * dt;
                }

                wrapOffsets();
                applyTransforms();
                rafId = requestAnimationFrame(tick);
            };

            rafId = requestAnimationFrame(tick);
        };

        imgEls = trackUp.querySelectorAll("img");
        const totalImgs = imgEls.length;
        let loadedCount = 0;

        handleImageLoaded = () => {
            loadedCount += 1;
            if (loadedCount >= totalImgs) {
                distances = [
                    trackUp.scrollHeight / 2,
                    trackDown.scrollHeight / 2,
                ];
                offsets = [0, 0];
                applyTransforms();
                startTicker();
            }
        };

        if (totalImgs === 0) {
            distances = [
                trackUp.scrollHeight / 2,
                trackDown.scrollHeight / 2,
            ];
            offsets = [0, 0];
            applyTransforms();
            startTicker();
        } else {
            imgEls.forEach((img) => {
                if (img.complete) {
                    handleImageLoaded();
                } else {
                    img.addEventListener("load", handleImageLoaded);
                    img.addEventListener("error", handleImageLoaded);
                }
            });
        }

        /* ----- DRAG LOGIC (desktop only > 1024px) ----- */
        if (isDraggable) {
            const getClientX = (e) =>
                e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
            const getClientY = (e) =>
                e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;

            const H_THRESHOLD = 8;
            const MIN_DIRECTION_DELTA = 4;

            onPointerDown = (e) => {
                if (e.button !== undefined && e.button !== 0) return;

                const columnEl = e.target.closest(".service-hero__column");
                if (!columnEl) return;

                const colIndexAttr = columnEl.getAttribute("data-col-index");
                const colIndex = colIndexAttr ? parseInt(colIndexAttr, 10) : 0;

                if (!distances[colIndex]) return;

                isPointerDown = true;
                isDragging = false;
                draggingIndex = colIndex;
                dragStartY = getClientY(e);
                dragStartX = getClientX(e);
                dragStartOffsets = [...offsets];
                lastDragDeltaY = 0;
            };

            onPointerMove = (e) => {
                if (
                    !isPointerDown ||
                    draggingIndex === null ||
                    !distances[draggingIndex]
                )
                    return;

                const currentY = getClientY(e);
                const currentX = getClientX(e);
                const deltaY = currentY - dragStartY;
                const deltaX = currentX - dragStartX;

                if (!isDragging) {
                    if (
                        Math.abs(deltaX) < H_THRESHOLD &&
                        Math.abs(deltaY) < H_THRESHOLD
                    ) {
                        return;
                    }

                    if (Math.abs(deltaY) > Math.abs(deltaX)) {
                        isDragging = true;
                        carouselEl.classList.add(
                            "service-hero__carousel--dragging"
                        );
                    } else {
                        isPointerDown = false;
                        isDragging = false;
                        draggingIndex = null;
                        return;
                    }
                }

                offsets[draggingIndex] =
                    dragStartOffsets[draggingIndex] - deltaY;

                lastDragDeltaY = deltaY;

                wrapOffsets();
                applyTransforms();

                if (e.cancelable) e.preventDefault();
            };

            endDrag = () => {
                if (!isPointerDown && !isDragging) return;

                isPointerDown = false;

                if (
                    draggingIndex !== null &&
                    Math.abs(lastDragDeltaY) > MIN_DIRECTION_DELTA
                ) {
                    directions[draggingIndex] = lastDragDeltaY > 0 ? 1 : -1;
                }

                isDragging = false;
                draggingIndex = null;
                carouselEl.classList.remove(
                    "service-hero__carousel--dragging"
                );
                lastDragDeltaY = 0;
            };

            onNativeDragStart = (e) => {
                e.preventDefault();
            };

            trackUp.addEventListener("dragstart", onNativeDragStart);
            trackDown.addEventListener("dragstart", onNativeDragStart);

            carouselEl.addEventListener("mousedown", onPointerDown);
            window.addEventListener("mousemove", onPointerMove);
            window.addEventListener("mouseup", endDrag);

            carouselEl.addEventListener("touchstart", onPointerDown, {
                passive: false,
            });
            window.addEventListener("touchmove", onPointerMove, {
                passive: false,
            });
            window.addEventListener("touchend", endDrag);
            window.addEventListener("touchcancel", endDrag);
        }

        return () => {
            if (rafId) cancelAnimationFrame(rafId);

            imgEls.forEach((img) => {
                img.removeEventListener("load", handleImageLoaded);
                img.removeEventListener("error", handleImageLoaded);
            });

            if (isDraggable) {
                if (trackUp && onNativeDragStart) {
                    trackUp.removeEventListener("dragstart", onNativeDragStart);
                }
                if (trackDown && onNativeDragStart) {
                    trackDown.removeEventListener("dragstart", onNativeDragStart);
                }

                if (carouselEl && onPointerDown) {
                    carouselEl.removeEventListener("mousedown", onPointerDown);
                    carouselEl.removeEventListener("touchstart", onPointerDown);
                }
                if (onPointerMove) {
                    window.removeEventListener("mousemove", onPointerMove);
                    window.removeEventListener("touchmove", onPointerMove);
                }
                if (endDrag) {
                    window.removeEventListener("mouseup", endDrag);
                    window.removeEventListener("touchend", endDrag);
                    window.removeEventListener("touchcancel", endDrag);
                }
            }
        };
    }, []);

    return (
        <AnimatedSection className="service-hero" ref={sectionRef}>
            <div className="service-hero__grid">
                <div className="service-hero__content">
                    <FadeUp
                        as="p"
                        className="eyebrow service-hero__eyebrow"
                        trigger="onLoad"
                        delay={0}
                    >
                        Custom Website Build
                    </FadeUp>

                    <AnimatedHeading
                        as="h1"
                        className="heading1 service-hero__title"
                        text="Custom Websites Built To Convert. Not Just Look Pretty."
                        wordClassName="service-hero__title-word"
                        highlightWords={["Built", "To", "Convert"]}
                        highlightClassName="service-hero__title-highlight"
                        trigger="onLoad"
                        delay={0.15}
                    />

                    <FadeUp
                        as="p"
                        className="subheading service-hero__subtitle"
                        trigger="onLoad"
                        afterHeading="Custom Websites Built To Convert. Not Just Look Pretty."
                        headingDelay={0.15}
                    >
                        Fully custom, conversion-focused builds engineered for
                        speed, clarity, and long-term growth — on a predictable
                        weekly rate.
                    </FadeUp>

                    <StaggerGroup
                        className="service-hero__metrics"
                        trigger="onLoad"
                        delay={0.55}
                    >
                        <StaggerItem className="service-hero__metrics-item body">
                            <span className="service-hero__metrics-dot" />
                            Conversion-led structure, not just visuals.
                        </StaggerItem>
                        <StaggerItem className="service-hero__metrics-item body">
                            <span className="service-hero__metrics-dot" />
                            Fixed, simple pricing – no surprise extras.
                        </StaggerItem>
                        <StaggerItem className="service-hero__metrics-item body">
                            <span className="service-hero__metrics-dot" />
                            Launch-ready builds with tracking baked in.
                        </StaggerItem>
                    </StaggerGroup>
                </div>

                {/* dual vertical carousel */}
                <div className="service-hero__media">
                    <div className="service-hero__media-inner">
                        <div className="service-hero__carousel">
                            <div
                                className="service-hero__column"
                                data-col-index="0"
                            >
                                <div className="service-hero__track service-hero__track--up">
                                    {heroCarouselImages.map((src, index) => (
                                        <div
                                            key={`col1-${index}`}
                                            className="service-hero__tile"
                                        >
                                            <img
                                                src={src}
                                                alt={`Custom build ${index + 1}`}
                                                className="service-hero__tile-image"
                                                draggable="false"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div
                                className="service-hero__column"
                                data-col-index="1"
                            >
                                <div className="service-hero__track service-hero__track--down">
                                    {heroCarouselImages.map((src, index) => (
                                        <div
                                            key={`col2-${index}`}
                                            className="service-hero__tile"
                                        >
                                            <img
                                                src={src}
                                                alt={`Custom build alt ${index + 1}`}
                                                className="service-hero__tile-image"
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
        </AnimatedSection>
    );
};

export default CustomHeroSection;
