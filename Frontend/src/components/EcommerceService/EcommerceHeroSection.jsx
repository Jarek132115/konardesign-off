// src/components/EcommerceService/EcommerceHeroSection.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../../styling/CustomService/customherosection.css";

import carousel1 from "../../assets/images/carousel1.jpg";
import carousel2 from "../../assets/images/carousel2.jpg";
import carousel3 from "../../assets/images/carousel3.jpg";
import carousel4 from "../../assets/images/carousel4.jpg";
import carousel10 from "../../assets/images/carousel10.jpg";

gsap.registerPlugin(ScrollTrigger);

/* hero carousel now uses carousel1,2,3,4,10 duplicated for seamless loop */
const heroCarouselBase = [carousel1, carousel2, carousel3, carousel4, carousel10];
const heroCarouselImages = [...heroCarouselBase, ...heroCarouselBase];

const EcommerceHeroSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const timelines = [];
        let heroTickerFn = null;

        /* -----------------------------
           HERO LETTER ANIMATION
        ------------------------------ */
        const heroTitle = section.querySelector(".service-hero__title");
        const heroSubtitle = section.querySelector(".service-hero__subtitle");

        if (heroTitle && heroSubtitle) {
            const original = heroTitle.textContent;
            heroTitle.textContent = "";

            // Highlight “Built” and “Sell.”
            const highlightWords = new Set(["Built", "Sell."]);

            original.split(" ").forEach((word, idx, arr) => {
                const span = document.createElement("span");
                span.className = "service-hero__title-word";
                span.style.display = "inline-block";

                if (highlightWords.has(word.replace(/[^\w.]/g, ""))) {
                    span.classList.add("service-hero__title-highlight");
                }

                [...word].forEach((ch) => {
                    const char = document.createElement("span");
                    char.textContent = ch;
                    char.style.opacity = "0";
                    char.style.transform = "translateY(8px)";
                    span.appendChild(char);
                });

                heroTitle.appendChild(span);
                if (idx < arr.length - 1) heroTitle.append(" ");
            });

            const chars = heroTitle.querySelectorAll(
                ".service-hero__title-word span"
            );
            gsap.set(heroSubtitle, { opacity: 0, y: 8 });

            const heroTl = gsap
                .timeline({
                    scrollTrigger: { trigger: heroTitle, start: "top 80%" },
                    defaults: { ease: "power2.out" },
                })
                .to(chars, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.03,
                    duration: 0.4,
                })
                .to(
                    heroSubtitle,
                    { opacity: 1, y: 0, duration: 0.4 },
                    "-=0.2"
                );

            timelines.push(heroTl);
        }

        /* -----------------------------
           HERO VERTICAL CAROUSEL
        ------------------------------ */

        const carouselEl = section.querySelector(".service-hero__carousel");
        const trackUp = section.querySelector(".service-hero__track--up");
        const trackDown = section.querySelector(".service-hero__track--down");

        if (!carouselEl || !trackUp || !trackDown) {
            return () => {
                timelines.forEach((t) => t.kill());
                ScrollTrigger.getAll().forEach((st) => st.kill());
            };
        }

        const isBrowser = typeof window !== "undefined";
        const isDraggable = isBrowser && window.innerWidth > 1024;

        let imgEls = [];
        let handleImageLoaded = null;
        let onNativeDragStart = null;
        let onPointerDown = null;
        let onPointerMove = null;
        let endDrag = null;

        let distances = [0, 0];
        let offsets = [0, 0];

        const baseSpeed = 40; // px per second
        let directions = [1, -1]; // column 0 down, column 1 up

        let isPointerDown = false;
        let isDragging = false;
        let draggingIndex = null;
        let dragStartY = 0;
        let dragStartX = 0;
        let dragStartOffsets = [0, 0];
        let lastDragDeltaY = 0;

        const applyTransforms = () => {
            gsap.set(trackUp, { y: -offsets[0] });
            gsap.set(trackDown, { y: -offsets[1] });
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
            let lastTime = gsap.ticker.time;

            heroTickerFn = (time) => {
                const dt = time - lastTime;
                lastTime = time;

                for (let i = 0; i < 2; i++) {
                    // if dragging is enabled and this column is being dragged, skip auto
                    if (isDraggable && isDragging && draggingIndex === i) continue;
                    offsets[i] += directions[i] * baseSpeed * dt;
                }

                wrapOffsets();
                applyTransforms();
            };

            gsap.ticker.add(heroTickerFn);
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
                e.touches && e.touches.length
                    ? e.touches[0].clientX
                    : e.clientX;
            const getClientY = (e) =>
                e.touches && e.touches.length
                    ? e.touches[0].clientY
                    : e.clientY;

            const H_THRESHOLD = 8;
            const MIN_DIRECTION_DELTA = 4;

            onPointerDown = (e) => {
                if (e.button !== undefined && e.button !== 0) return;

                const columnEl = e.target.closest(".service-hero__column");
                if (!columnEl) return;

                const colIndexAttr = columnEl.getAttribute("data-col-index");
                const colIndex = colIndexAttr
                    ? parseInt(colIndexAttr, 10)
                    : 0;

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
                    directions[draggingIndex] =
                        lastDragDeltaY > 0 ? 1 : -1;
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

        /* -----------------------------
           CLEANUP
        ------------------------------ */
        return () => {
            timelines.forEach((t) => t.kill());
            ScrollTrigger.getAll().forEach((st) => st.kill());

            if (heroTickerFn) {
                gsap.ticker.remove(heroTickerFn);
            }

            imgEls.forEach((img) => {
                img.removeEventListener("load", handleImageLoaded);
                img.removeEventListener("error", handleImageLoaded);
            });

            if (isDraggable) {
                if (trackUp && onNativeDragStart) {
                    trackUp.removeEventListener("dragstart", onNativeDragStart);
                }
                if (trackDown && onNativeDragStart) {
                    trackDown.removeEventListener(
                        "dragstart",
                        onNativeDragStart
                    );
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
        <section className="service-hero" ref={sectionRef}>
            <div className="service-hero__grid">
                <div className="service-hero__content">
                    <p className="eyebrow service-hero__eyebrow">
                        E-COMMERCE WEBSITE BUILD
                    </p>

                    <h1 className="heading1 service-hero__title">
                        E-Commerce Websites Built To Sell. Not Just Look Pretty.
                    </h1>

                    <p className="subheading service-hero__subtitle">
                        No templates. No guesswork. Just high-converting stores
                        engineered to maximise sales — all for one fixed weekly rate.
                    </p>

                    <div className="service-hero__metrics">
                        <div className="service-hero__metrics-item body">
                            <span className="service-hero__metrics-dot" />
                            Conversion-focused product pages instead of generic themes.
                        </div>
                        <div className="service-hero__metrics-item body">
                            <span className="service-hero__metrics-dot" />
                            Mobile-first storefront and checkout optimised to reduce drop-off.
                        </div>
                        <div className="service-hero__metrics-item body">
                            <span className="service-hero__metrics-dot" />
                            Analytics, pixels, and key purchase events wired in from day one.
                        </div>
                    </div>
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
                                                alt={`E-commerce build ${index + 1}`}
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
                                                alt={`E-commerce build alt ${index + 1}`}
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
        </section>
    );
};

export default EcommerceHeroSection;
