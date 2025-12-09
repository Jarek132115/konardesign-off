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
import BookingSection from "../components/BookingSection";
import BlogSection from "../components/BlogSection";
import DifferenceSection from "../components/DifferenceSection";

import "../styling/hero.css";
import "../styling/buttons.css";

import { gsap } from "gsap";

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
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
    carousel7,
    carousel8,
    carousel9,
    carousel10,
];

const Home = () => {
    // duplicate sequence once for seamless loop
    const loopImages = [...images, ...images];

    const heroRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const heroEl = heroRef.current;
        if (!heroEl) return;

        const titleEl = heroEl.querySelector(".hero__title");
        const subheadingEl = heroEl.querySelector(".hero__subheading");
        const pillEl = heroEl.querySelector(".hero__pill");
        const buttonsEl = heroEl.querySelector(".hero__buttons");
        const carouselEl = heroEl.querySelector(".hero__carousel");
        const carouselTrackEl = heroEl.querySelector(".hero__carousel-track");

        if (
            !titleEl ||
            !subheadingEl ||
            !pillEl ||
            !buttonsEl ||
            !carouselEl ||
            !carouselTrackEl
        ) {
            return;
        }

        /* -----------------------------
           TITLE LETTER ANIMATION
        ----------------------------- */
        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("hero__title-word");
            wordWrapper.style.display = "inline-block";

            // Make only the word "Websites" indigo in the hero title
            if (word.toLowerCase() === "websites") {
                wordWrapper.classList.add("hero__title-word--indigo");
            }

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

        const charSpans = titleEl.querySelectorAll(".hero__title-word span");

        gsap.set(subheadingEl, { opacity: 0, y: 8 });
        gsap.set([pillEl, buttonsEl], { opacity: 0, y: 8 });
        gsap.set(carouselEl, { opacity: 0, y: 16 });

        const introTl = gsap.timeline({ defaults: { ease: "power2.out" } });

        introTl
            .to(charSpans, {
                opacity: 1,
                y: 0,
                stagger: 0.024,
                duration: 0.32,
            })
            .to(
                subheadingEl,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.35,
                },
                ">-0.04"
            )
            .to(
                [pillEl, buttonsEl],
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.35,
                    stagger: 0.04,
                },
                ">"
            )
            .to(
                carouselEl,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.35,
                },
                ">-0.02"
            );

        /* -----------------------------
           INFINITE MARQUEE + DRAG
           - Uses duplicated sequence
           - offset is kept in [0, distance)
           - Auto-scrolls unless dragging
        ----------------------------- */

        let distance = 0; // width of a single unique sequence
        let offset = 0; // current offset within that sequence
        const speed = 150; // px per second

        let isDragging = false; // pauses ticker when true
        let isPointerDown = false; // finger/mouse is down
        let dragStartX = 0;
        let dragStartY = 0;
        let dragStartOffset = 0;
        let tickerFn = null;

        const applyTransform = () => {
            gsap.set(carouselTrackEl, { x: -offset });
        };

        const startTicker = () => {
            if (!distance) return;

            let lastTime = gsap.ticker.time; // seconds

            tickerFn = (time) => {
                const dt = time - lastTime;
                lastTime = time;

                if (!isDragging) {
                    offset += speed * dt;

                    if (distance > 0) {
                        offset = offset % distance;
                    }

                    applyTransform();
                }
            };

            gsap.ticker.add(tickerFn);
        };

        // Wait for images to load so scrollWidth is correct
        const imgEls = carouselTrackEl.querySelectorAll("img");
        const totalImgs = imgEls.length;
        let loadedCount = 0;

        const handleImageLoaded = () => {
            loadedCount += 1;
            if (loadedCount >= totalImgs) {
                distance = carouselTrackEl.scrollWidth / 2;
                if (distance > 0) {
                    offset = 0;
                    applyTransform();
                    startTicker();
                }
            }
        };

        if (totalImgs === 0) {
            distance = carouselTrackEl.scrollWidth / 2;
            if (distance > 0) {
                offset = 0;
                applyTransform();
                startTicker();
            }
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

        /* -----------------------------
           DRAG (mouse + touch)
           - Horizontal-only drag
           - Vertical swipe scrolls page
        ----------------------------- */

        const getClientX = (e) =>
            e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;

        const getClientY = (e) =>
            e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;

        const HORIZONTAL_THRESHOLD = 8; // px before we decide direction

        const onPointerDown = (e) => {
            if (!distance) return;

            isPointerDown = true;
            isDragging = false; // we only set true once direction is decided
            dragStartX = getClientX(e);
            dragStartY = getClientY(e);
            dragStartOffset = offset;

            // don't preventDefault here so vertical scrolling still works
        };

        const onPointerMove = (e) => {
            if (!isPointerDown || !distance) return;

            const currentX = getClientX(e);
            const currentY = getClientY(e);
            const deltaX = currentX - dragStartX;
            const deltaY = currentY - dragStartY;

            // we haven't decided direction yet
            if (!isDragging) {
                if (
                    Math.abs(deltaX) < HORIZONTAL_THRESHOLD &&
                    Math.abs(deltaY) < HORIZONTAL_THRESHOLD
                ) {
                    // tiny movement – ignore
                    return;
                }

                if (Math.abs(deltaX) > Math.abs(deltaY)) {
                    // horizontal gesture → start carousel drag
                    isDragging = true;
                    carouselTrackEl.classList.add(
                        "hero__carousel-track--dragging"
                    );
                } else {
                    // vertical gesture → let the page scroll
                    isPointerDown = false;
                    isDragging = false;
                    return;
                }
            }

            // actual drag logic (horizontal)
            offset = dragStartOffset - deltaX;

            // wrap offset into [0, distance)
            offset = ((offset % distance) + distance) % distance;

            applyTransform();

            if (e.cancelable) e.preventDefault();
        };

        const endDrag = () => {
            if (!isPointerDown && !isDragging) return;
            isPointerDown = false;
            isDragging = false;
            carouselTrackEl.classList.remove("hero__carousel-track--dragging");
        };

        carouselEl.addEventListener("mousedown", onPointerDown);
        window.addEventListener("mousemove", onPointerMove);
        window.addEventListener("mouseup", endDrag);

        carouselEl.addEventListener("touchstart", onPointerDown, {
            passive: false,
        });
        window.addEventListener("touchmove", onPointerMove, { passive: false });
        window.addEventListener("touchend", endDrag);
        window.addEventListener("touchcancel", endDrag);

        /* -----------------------------
           CLEANUP
        ----------------------------- */
        return () => {
            introTl.kill();

            if (tickerFn) {
                gsap.ticker.remove(tickerFn);
            }

            imgEls.forEach((img) => {
                img.removeEventListener("load", handleImageLoaded);
                img.removeEventListener("error", handleImageLoaded);
            });

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
                        {/* Reusable pill */}
                        <div className="pill--white hero__pill">
                            Strategy → Design → Development → Growth
                        </div>

                        <h1 className="heading1 hero__title">
                            Custom Websites Engineered for Speed, Scalability &amp;
                            Growth
                        </h1>

                        <p className="hero__subheading subheading">
                            Fully Custom Websites Built From Scratch—Designed To Convert,
                            Built For Performance, And Crafted To Scale With Your
                            Business.
                        </p>

                        <div className="hero__buttons">
                            <button className="btn btn--indigo">Book A Call</button>

                            <button
                                className="btn btn--white"
                                onClick={() => navigate("/projects")}
                            >
                                View Our Work
                            </button>
                        </div>
                    </section>
                </div>

                <section className="hero__carousel">
                    <div className="hero__carousel-track">
                        {loopImages.map((src, index) => (
                            <div className="hero__card" key={index}>
                                <img
                                    src={src}
                                    alt={`Carousel ${index + 1}`}
                                    className="hero__image"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <IntroSection />
            <Conversion />
            <ProjectsSection />
            <ServicesSection />
            <OfferSection />
            <ProcessSection />
            <DifferenceSection />
            <ImagineSection />
            <BookingSection />
            <BlogSection />
            <Footer />
        </div>
    );
};

export default Home;
