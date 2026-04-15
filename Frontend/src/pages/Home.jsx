import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import Conversion from "../components/Conversion";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import OfferSection from "../components/OfferSection";
import ProcessSection from "../components/ProcessSection";
import ImagineSection from "../components/ImagineSection";
import Footer from "../components/Footer";
import BookCTASection from "../components/BookCTASection";
import BlogSection from "../components/BlogSection";
import DifferenceSection from "../components/DifferenceSection";

import "../styling/hero.css";
import "../styling/buttons.css";

import AnimatedHeading from "../components/animations/AnimatedHeading";
import FadeUp from "../components/animations/FadeUp";

import carousel1 from "../assets/images/carousel1.jpg";
import carousel2 from "../assets/images/carousel2.jpg";
import carousel3 from "../assets/images/carousel3.jpg";
import carousel4 from "../assets/images/carousel4.jpg";
import carousel5 from "../assets/images/carousel5.jpg";
import carousel6 from "../assets/images/carousel6.jpg";
import carousel7 from "../assets/images/carousel7.jpg";
import carousel8 from "../assets/images/carousel8.jpg";
import carousel9 from "../assets/images/carousel9.jpg";
import carousel10 from "../assets/images/carousel10.jpg";

const images = [
    carousel1, carousel2, carousel3, carousel4, carousel5,
    carousel6, carousel7, carousel8, carousel9, carousel10,
];

const highlightWords = ["Websites", "Perform,", "Scale,", "Convert"];

const Home = () => {
    const loopImages = [...images, ...images];

    const heroRef = useRef(null);
    const carouselRef = useRef(null);
    const trackRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const carouselEl = carouselRef.current;
        const trackEl = trackRef.current;
        if (!carouselEl || !trackEl) return;

        let distance = 0;
        let offset = 0;
        const baseSpeed = 150;
        let direction = 1;

        let isDragging = false;
        let isPointerDown = false;
        let dragStartX = 0;
        let dragStartY = 0;
        let dragStartOffset = 0;
        let lastDragDeltaX = 0;
        let rafId = null;
        let lastTime = performance.now();

        const applyTransform = () => {
            trackEl.style.transform = `translate3d(${-offset}px, 0, 0)`;
        };

        const tick = (time) => {
            const dt = (time - lastTime) / 1000;
            lastTime = time;

            if (!isDragging && distance > 0) {
                offset += direction * baseSpeed * dt;
                offset = ((offset % distance) + distance) % distance;
                applyTransform();
            }
            rafId = requestAnimationFrame(tick);
        };

        const startTicker = () => {
            if (!distance || rafId !== null) return;
            lastTime = performance.now();
            rafId = requestAnimationFrame(tick);
        };

        const imgEls = trackEl.querySelectorAll("img");
        const totalImgs = imgEls.length;
        let loadedCount = 0;

        const handleImageLoaded = () => {
            loadedCount += 1;
            if (loadedCount >= totalImgs) {
                distance = trackEl.scrollWidth / 2;
                if (distance > 0) {
                    offset = 0;
                    applyTransform();
                    startTicker();
                }
            }
        };

        if (totalImgs === 0) {
            distance = trackEl.scrollWidth / 2;
            if (distance > 0) {
                offset = 0;
                applyTransform();
                startTicker();
            }
        } else {
            imgEls.forEach((img) => {
                if (img.complete) handleImageLoaded();
                else {
                    img.addEventListener("load", handleImageLoaded);
                    img.addEventListener("error", handleImageLoaded);
                }
            });
        }

        const getClientX = (e) =>
            e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
        const getClientY = (e) =>
            e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;

        const HORIZONTAL_THRESHOLD = 8;
        const MIN_DIRECTION_DELTA = 4;

        const onPointerDown = (e) => {
            if (!distance) return;
            if (e.button !== undefined && e.button !== 0) return;
            isPointerDown = true;
            isDragging = false;
            dragStartX = getClientX(e);
            dragStartY = getClientY(e);
            dragStartOffset = offset;
            lastDragDeltaX = 0;
        };

        const onPointerMove = (e) => {
            if (!isPointerDown || !distance) return;
            const currentX = getClientX(e);
            const currentY = getClientY(e);
            const deltaX = currentX - dragStartX;
            const deltaY = currentY - dragStartY;

            if (!isDragging) {
                if (Math.abs(deltaX) < HORIZONTAL_THRESHOLD && Math.abs(deltaY) < HORIZONTAL_THRESHOLD) return;
                if (Math.abs(deltaX) > Math.abs(deltaY)) {
                    isDragging = true;
                    trackEl.classList.add("hero__carousel-track--dragging");
                } else {
                    isPointerDown = false;
                    isDragging = false;
                    return;
                }
            }

            offset = dragStartOffset - deltaX;
            lastDragDeltaX = deltaX;
            offset = ((offset % distance) + distance) % distance;
            applyTransform();
            if (e.cancelable) e.preventDefault();
        };

        const endDrag = () => {
            if (!isPointerDown && !isDragging) return;
            isPointerDown = false;
            isDragging = false;
            trackEl.classList.remove("hero__carousel-track--dragging");
            if (Math.abs(lastDragDeltaX) > MIN_DIRECTION_DELTA) {
                direction = lastDragDeltaX > 0 ? -1 : 1;
            }
            lastDragDeltaX = 0;
        };

        const onNativeDragStart = (e) => e.preventDefault();

        trackEl.addEventListener("dragstart", onNativeDragStart);
        carouselEl.addEventListener("mousedown", onPointerDown);
        window.addEventListener("mousemove", onPointerMove);
        window.addEventListener("mouseup", endDrag);
        carouselEl.addEventListener("touchstart", onPointerDown, { passive: false });
        window.addEventListener("touchmove", onPointerMove, { passive: false });
        window.addEventListener("touchend", endDrag);
        window.addEventListener("touchcancel", endDrag);

        return () => {
            if (rafId !== null) cancelAnimationFrame(rafId);
            imgEls.forEach((img) => {
                img.removeEventListener("load", handleImageLoaded);
                img.removeEventListener("error", handleImageLoaded);
            });
            trackEl.removeEventListener("dragstart", onNativeDragStart);
            carouselEl.removeEventListener("mousedown", onPointerDown);
            window.removeEventListener("mousemove", onPointerMove);
            window.removeEventListener("mouseup", endDrag);
            carouselEl.removeEventListener("touchstart", onPointerDown);
            window.removeEventListener("touchmove", onPointerMove);
            window.removeEventListener("touchend", endDrag);
            window.removeEventListener("touchcancel", endDrag);
        };
    }, []);

    return (
        <div className="page">
            <Navbar />

            <main className="hero" ref={heroRef}>
                <div className="hero__inner">
                    <section className="hero__content">
                        <FadeUp
                            className="pill--white hero__pill"
                            trigger="onLoad"
                            duration={0.4}
                            y={8}
                        >
                            Strategy → Design → Development → Performance
                        </FadeUp>

                        <AnimatedHeading
                            as="h1"
                            className="heading1 hero__title"
                            text="I Design and Build User-Centred Websites That Perform, Scale, and Convert"
                            wordClassName="hero__title-word"
                            highlightWords={highlightWords}
                            highlightClassName="hero__title-word--indigo"
                            trigger="onLoad"
                            delay={0.15}
                        />

                        <FadeUp
                            as="p"
                            className="hero__subheading subheading"
                            trigger="onLoad"
                            afterHeading="I Design and Build User-Centred Websites That Perform, Scale, and Convert"
                            headingDelay={0.15}
                            duration={0.5}
                            y={8}
                        >
                            I’m Jarek, a UI/UX focused designer and developer creating fast, structured, and conversion-driven websites from strategy to launch.
                        </FadeUp>

                        <FadeUp
                            className="hero__buttons"
                            trigger="onLoad"
                            delay={0.55}
                            duration={0.5}
                            y={8}
                        >
                            <button className="btn btn--indigo" onClick={() => navigate("/book-a-call")}>
                                Contact Me
                            </button>
                            <button className="btn btn--white" onClick={() => navigate("/projects")}>
                                My Work
                            </button>
                        </FadeUp>
                    </section>
                </div>

                <FadeUp
                    as="section"
                    className="hero__carousel"
                    trigger="onLoad"
                    delay={0.65}
                    duration={0.5}
                    y={16}
                    ref={carouselRef}
                >
                    <div className="hero__carousel-track" ref={trackRef}>
                        {loopImages.map((src, index) => (
                            <div className="hero__card" key={index}>
                                <img
                                    src={src}
                                    alt={`Carousel ${index + 1}`}
                                    className="hero__image"
                                    draggable="false"
                                />
                            </div>
                        ))}
                    </div>
                </FadeUp>
            </main>

            <IntroSection />
            <Conversion />
            <ProjectsSection />
            <ProcessSection />
            <DifferenceSection />
            <BookCTASection />
            <BlogSection />
            <Footer />
        </div>
    );
};

export default Home;
