import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import IncludedSection from "../components/CustomService/IncludedSection";
import CustomProcess from "../components/CustomService/CustomProcess";

import "../styling/buttons.css";
import "../styling/servicepage.css";

import gallery1 from "../assets/images/carousel1.jpg";
import gallery2 from "../assets/images/carousel2.jpg";
import gallery3 from "../assets/images/carousel3.jpg";
import gallery4 from "../assets/images/carousel4.jpg";

import carousel5 from "../assets/images/carousel5.jpg";
import carousel6 from "../assets/images/carousel6.jpg";
import carousel7 from "../assets/images/carousel7.jpg";
import carousel8 from "../assets/images/carousel8.jpg";
import carousel9 from "../assets/images/carousel9.jpg";

gsap.registerPlugin(ScrollTrigger);

/* ------------------ DATA ------------------ */

const gallery = [gallery1, gallery2, gallery3, gallery4];

/* hero carousel uses only carousel5–9, duplicated for seamless loop */
const heroCarouselBase = [carousel5, carousel6, carousel7, carousel8, carousel9];
const heroCarouselImages = [...heroCarouselBase, ...heroCarouselBase];

const whyPoints = [
    {
        title: "No Guesswork Layouts",
        body: "Every section on the page has a job — educate, reassure, or convert. Nothing is decorative for the sake of it.",
    },
    {
        title: "Fast, Focused Collaboration",
        body: "Weekly check-ins, async Loom walkthroughs, and clear decision points keep momentum without eating your calendar.",
    },
    {
        title: "Built As A Long-Term Asset",
        body: "Clean structure, reusable components, and a CMS you can actually use mean you’re not rebuilding again in 12 months.",
    },
];

const techPoints = [
    "Modern React-based front-end, optimised for speed and stability.",
    "Core Web Vitals, image optimisation, and best-practice caching baked in.",
    "Semantic HTML structure, sensible heading hierarchy, and schema where it matters.",
    "Accessibility-first decisions across colour, contrast, type, and interactions.",
    "Clean URL structure, redirects, and sensible internal linking for SEO.",
];

const fitGood = [
    "You’re ready to treat your website as a growth channel, not just a brochure.",
    "You value clarity, structure, and process as much as visual polish.",
    "You’re happy to give honest feedback and collaborate on decisions.",
    "You want a partner who’ll explain the trade-offs, not just say yes.",
];

const fitBad = [
    "You just want the cheapest possible site or a quick template clone.",
    "You’re not ready to commit time for feedback or content decisions.",
    "You’re only interested in aesthetics with no strategic backbone.",
    "You want everything done yesterday, regardless of quality.",
];

/* ------------------ COMPONENT ------------------ */

const CustomService = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const page = pageRef.current;
        if (!page) return;

        const timelines = [];

        /* ---------------------------------
           Helper: animate section heading
        ---------------------------------- */
        const animateSectionHeading = ({
            sectionSelector,
            eyebrowSelector,
            titleSelector,
            subtitleSelector,
            wordClass,
            highlightWords = [],
            triggerStart = "top 75%",
        }) => {
            const section = page.querySelector(sectionSelector);
            if (!section) return;

            const eyebrow = section.querySelector(eyebrowSelector);
            const title = section.querySelector(titleSelector);
            const subtitle = subtitleSelector
                ? section.querySelector(subtitleSelector)
                : null;

            if (!eyebrow || !title) return;

            const originalText = title.textContent;
            title.textContent = "";

            const highlightSet = new Set(highlightWords);

            originalText.split(" ").forEach((word, idx, arr) => {
                const span = document.createElement("span");
                span.className = wordClass;
                span.style.display = "inline-block";

                const cleaned = word.replace(/[^\w]/g, "");
                if (highlightSet.has(cleaned)) {
                    span.classList.add(`${wordClass}--highlight`);
                }

                [...word].forEach((ch) => {
                    const char = document.createElement("span");
                    char.textContent = ch;
                    char.style.display = "inline-block";
                    char.style.opacity = "0";
                    char.style.transform = "translateY(8px)";
                    span.appendChild(char);
                });

                title.appendChild(span);
                if (idx < arr.length - 1) title.append(" ");
            });

            const chars = title.querySelectorAll(`.${wordClass} span`);
            if (subtitle) gsap.set(subtitle, { opacity: 0, y: 8 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: triggerStart,
                    toggleActions: "play none none none",
                },
                defaults: { ease: "power2.out" },
            });

            tl.fromTo(
                eyebrow,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.25 }
            )
                .to(
                    chars,
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.02,
                        duration: 0.28,
                    },
                    ">-0.05"
                )
                .fromTo(
                    subtitle || {},
                    { opacity: 0, y: 8 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                    },
                    subtitle ? ">-0.08" : 0
                );

            timelines.push(tl);
        };

        /* -----------------------------
           HERO LETTER ANIMATION
        ------------------------------ */
        const heroTitle = page.querySelector(".service-hero__title");
        const heroSubtitle = page.querySelector(".service-hero__subtitle");

        if (heroTitle && heroSubtitle) {
            const original = heroTitle.textContent;
            heroTitle.textContent = "";

            const highlightWords = new Set(["Built", "To", "Convert"]);

            original.split(" ").forEach((word, idx, arr) => {
                const span = document.createElement("span");
                span.className = "service-hero__title-word";
                span.style.display = "inline-block";

                if (highlightWords.has(word.replace(/[^\w]/g, ""))) {
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

            const heroTl = gsap.timeline({
                scrollTrigger: { trigger: heroTitle, start: "top 80%" },
                defaults: { ease: "power2.out" },
            })
                .to(chars, { opacity: 1, y: 0, stagger: 0.03, duration: 0.4 })
                .to(
                    heroSubtitle,
                    { opacity: 1, y: 0, duration: 0.4 },
                    "-=0.2"
                );

            timelines.push(heroTl);
        }

        /* -----------------------------
           SECTION HEADERS
        ------------------------------ */

        animateSectionHeading({
            sectionSelector: ".service-included",
            eyebrowSelector: ".service-included__eyebrow",
            titleSelector: ".service-included__title",
            subtitleSelector: ".service-included__subtitle",
            wordClass: "service-included__title-word",
            highlightWords: ["Custom", "Website"],
        });

        animateSectionHeading({
            sectionSelector: ".service-why",
            eyebrowSelector: ".service-why__eyebrow",
            titleSelector: ".service-why__title",
            subtitleSelector: ".service-why__subtitle",
            wordClass: "service-why__title-word",
            highlightWords: ["Works"],
        });

        animateSectionHeading({
            sectionSelector: ".service-tech",
            eyebrowSelector: ".service-tech__eyebrow",
            titleSelector: ".service-tech__title",
            subtitleSelector: ".service-tech__subtitle",
            wordClass: "service-tech__title-word",
            highlightWords: ["Release"],
        });

        animateSectionHeading({
            sectionSelector: ".service-gallery",
            eyebrowSelector: ".service-gallery__eyebrow",
            titleSelector: ".service-gallery__title",
            subtitleSelector: ".service-gallery__subtitle",
            wordClass: "service-gallery__title-word",
            highlightWords: ["Examples"],
        });

        animateSectionHeading({
            sectionSelector: ".service-fit",
            eyebrowSelector: ".service-fit__eyebrow",
            titleSelector: ".service-fit__title",
            subtitleSelector: ".service-fit__subtitle",
            wordClass: "service-fit__title-word",
            highlightWords: ["Fit"],
        });

        animateSectionHeading({
            sectionSelector: ".service-cta",
            eyebrowSelector: ".service-cta__eyebrow",
            titleSelector: ".service-cta__title",
            subtitleSelector: ".service-cta__subtitle",
            wordClass: "service-cta__title-word",
            highlightWords: ["Plan"],
            triggerStart: "top 80%",
        });

        /* -----------------------------
           FADE-UPS
        ------------------------------ */

        page.querySelectorAll(".service-included__card").forEach((card, i) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    delay: i * 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        page.querySelectorAll(".service-why__card").forEach((card, i) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    delay: i * 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        page.querySelectorAll(".service-tech__point").forEach((row, i) => {
            gsap.fromTo(
                row,
                { opacity: 0, y: 16 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.35,
                    delay: i * 0.04,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        page.querySelectorAll(".service-gallery__item").forEach((item, i) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    delay: i * 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        page.querySelectorAll(".service-fit__column").forEach((col, i) => {
            gsap.fromTo(
                col,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    delay: i * 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: col,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        const ctaButton = page.querySelector(".service-cta__button");
        if (ctaButton) {
            gsap.fromTo(
                ctaButton,
                { opacity: 0, y: 16 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".service-cta",
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }

        /* -----------------------------
           HERO VERTICAL CAROUSEL
        ------------------------------ */

        const carouselEl = page.querySelector(".service-hero__carousel");
        const trackUp = page.querySelector(".service-hero__track--up");
        const trackDown = page.querySelector(".service-hero__track--down");

        let heroTickerFn = null;

        if (carouselEl && trackUp && trackDown) {
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
                        if (isDragging && draggingIndex === i) continue;
                        offsets[i] += directions[i] * baseSpeed * dt;
                    }

                    wrapOffsets();
                    applyTransforms();
                };

                gsap.ticker.add(heroTickerFn);
            };

            const imgEls = trackUp.querySelectorAll("img");
            const totalImgs = imgEls.length;
            let loadedCount = 0;

            const handleImageLoaded = () => {
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

            const getClientX = (e) =>
                e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
            const getClientY = (e) =>
                e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;

            const H_THRESHOLD = 8;
            const MIN_DIRECTION_DELTA = 4;

            const onPointerDown = (e) => {
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

            const onPointerMove = (e) => {
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

            const endDrag = () => {
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

            const onNativeDragStart = (e) => {
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

            /* cleanup for hero carousel */
            timelines.push({
                kill: () => {
                    if (heroTickerFn) gsap.ticker.remove(heroTickerFn);

                    imgEls.forEach((img) => {
                        img.removeEventListener("load", handleImageLoaded);
                        img.removeEventListener("error", handleImageLoaded);
                    });

                    trackUp.removeEventListener(
                        "dragstart",
                        onNativeDragStart
                    );
                    trackDown.removeEventListener(
                        "dragstart",
                        onNativeDragStart
                    );

                    carouselEl.removeEventListener("mousedown", onPointerDown);
                    window.removeEventListener("mousemove", onPointerMove);
                    window.removeEventListener("mouseup", endDrag);

                    carouselEl.removeEventListener(
                        "touchstart",
                        onPointerDown
                    );
                    window.removeEventListener("touchmove", onPointerMove);
                    window.removeEventListener("touchend", endDrag);
                    window.removeEventListener("touchcancel", endDrag);
                },
            });
        }

        return () => {
            timelines.forEach((t) => t.kill());
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div className="service-page">
            <Navbar />

            <main className="service-page__main" ref={pageRef}>
                {/* HERO */}
                <section className="service-hero">
                    <div className="service-hero__grid">
                        <div className="service-hero__content">
                            <p className="eyebrow service-hero__eyebrow">
                                Custom Website Build
                            </p>

                            <h1 className="heading1 service-hero__title">
                                Custom Websites Built To Convert. Not Just Look Pretty.
                            </h1>

                            <p className="subheading service-hero__subtitle">
                                Fully custom, conversion-focused builds engineered for
                                speed, clarity, and long-term growth — on a predictable
                                weekly rate.
                            </p>

                            <div className="service-hero__metrics">
                                <div className="service-hero__metrics-item body">
                                    <span className="service-hero__metrics-dot" />
                                    Conversion-led structure, not just visuals.
                                </div>
                                <div className="service-hero__metrics-item body">
                                    <span className="service-hero__metrics-dot" />
                                    Fixed, simple pricing – no surprise extras.
                                </div>
                                <div className="service-hero__metrics-item body">
                                    <span className="service-hero__metrics-dot" />
                                    Launch-ready builds with tracking baked in.
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
                                            {heroCarouselImages.map(
                                                (src, index) => (
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
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div
                                        className="service-hero__column"
                                        data-col-index="1"
                                    >
                                        <div className="service-hero__track service-hero__track--down">
                                            {heroCarouselImages.map(
                                                (src, index) => (
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
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="service-hero__badge">
                                    <span className="service-hero__badge-label body">
                                        Signature Build
                                    </span>
                                    <span className="service-hero__badge-text body">
                                        Crafted for clarity, speed & conversion.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INCLUDED */}
                <IncludedSection />

                {/* PROCESS – custom version matching home design */}
                <CustomProcess />

                {/* WHY THIS WORKS */}
                <section className="service-why">
                    <div className="service-why__inner">
                        <header className="service-why__header">
                            <p className="eyebrow service-why__eyebrow">
                                WHY THIS APPROACH WORKS
                            </p>
                            <h2 className="heading2 service-why__title">
                                Why This System{" "}
                                <span className="service-why__title-highlight">
                                    Works
                                </span>{" "}
                                So Well
                            </h2>
                            <p className="subheading service-why__subtitle">
                                The structure isn’t there to slow things down — it’s
                                there to remove guesswork, keep decisions simple, and
                                protect the quality of the outcome.
                            </p>
                        </header>

                        <div className="service-why__grid">
                            {whyPoints.map((item) => (
                                <article
                                    key={item.title}
                                    className="service-why__card"
                                >
                                    <h3 className="heading3 service-why__card-title">
                                        {item.title}
                                    </h3>
                                    <p className="body service-why__card-body">
                                        {item.body}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TECH & QUALITY */}
                <section className="service-tech">
                    <div className="service-tech__inner">
                        <header className="service-tech__header">
                            <p className="eyebrow service-tech__eyebrow">
                                BUILT PROPERLY
                            </p>
                            <h2 className="heading2 service-tech__title">
                                Production-Ready From The First{" "}
                                <span className="service-tech__title-highlight">
                                    Release
                                </span>
                            </h2>
                            <p className="subheading service-tech__subtitle">
                                Under the hood, your site is engineered like a long-term
                                asset — fast, stable, and easy to evolve as your brand
                                grows.
                            </p>
                        </header>

                        <div className="service-tech__grid">
                            <div className="service-tech__column service-tech__column--left">
                                <div className="service-tech__badge-row">
                                    <span className="service-tech__badge body">
                                        Performance • SEO • Accessibility
                                    </span>
                                </div>
                                <p className="body service-tech__description">
                                    We build with modern standards and a pragmatic
                                    engineering mindset — so you’re not stuck with a
                                    beautiful front-end that’s fragile, slow, or
                                    impossible to edit.
                                </p>
                                <p className="body service-tech__description">
                                    The end result: a site that loads fast, feels smooth,
                                    and can handle new pages, campaigns, and experiments
                                    without a full rebuild.
                                </p>
                            </div>

                            <div className="service-tech__column service-tech__column--right">
                                <ul className="service-tech__list">
                                    {techPoints.map((point) => (
                                        <li
                                            key={point}
                                            className="service-tech__point body"
                                        >
                                            <span className="service-tech__dot" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GALLERY */}
                <section className="service-gallery">
                    <div className="service-gallery__inner">
                        <header className="service-gallery__header">
                            <p className="eyebrow service-gallery__eyebrow">
                                PROJECT SHOWCASE
                            </p>

                            <h2 className="heading2 service-gallery__title">
                                A Few{" "}
                                <span className="service-gallery__title-highlight">
                                    Examples
                                </span>{" "}
                                Of What We’ve Built
                            </h2>

                            <p className="subheading service-gallery__subtitle">
                                Clean, modern and conversion-driven layouts designed to
                                elevate your brand and remove friction for your users.
                            </p>
                        </header>

                        <div className="service-gallery__grid">
                            {gallery.map((img, i) => (
                                <article key={i} className="service-gallery__item">
                                    <img
                                        src={img}
                                        alt={`Custom website example ${i + 1}`}
                                        className="service-gallery__image"
                                        loading="lazy"
                                    />
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FIT SECTION */}
                <section className="service-fit">
                    <div className="service-fit__inner">
                        <header className="service-fit__header">
                            <p className="eyebrow service-fit__eyebrow">
                                WHO THIS IS FOR
                            </p>
                            <h2 className="heading2 service-fit__title">
                                When We’re A Great{" "}
                                <span className="service-fit__title-highlight">
                                    Fit
                                </span>{" "}
                                — And When We’re Not
                            </h2>
                            <p className="subheading service-fit__subtitle">
                                We do our best work with teams who treat their website as
                                a growth channel, not just a checkbox. Here’s how to know
                                if that’s you.
                            </p>
                        </header>

                        <div className="service-fit__grid">
                            <article className="service-fit__column service-fit__column--good">
                                <h3 className="heading3 service-fit__column-title">
                                    A Strong Fit If…
                                </h3>
                                <ul className="service-fit__list">
                                    {fitGood.map((item) => (
                                        <li
                                            key={item}
                                            className="body service-fit__item"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>

                            <article className="service-fit__column service-fit__column--bad">
                                <h3 className="heading3 service-fit__column-title">
                                    Probably Not A Fit If…
                                </h3>
                                <ul className="service-fit__list">
                                    {fitBad.map((item) => (
                                        <li
                                            key={item}
                                            className="body service-fit__item"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="service-cta">
                    <div className="service-cta__inner">
                        <p className="eyebrow service-cta__eyebrow">NEXT STEP</p>
                        <h2 className="heading2 service-cta__title">
                            Let’s Map Out Your{" "}
                            <span className="service-cta__title-highlight">
                                Custom Website Plan
                            </span>
                        </h2>
                        <p className="subheading service-cta__subtitle">
                            We’ll review your goals, your current site (if you have
                            one), and outline what a high-conversion build could look
                            like — with zero pressure to commit.
                        </p>

                        <button
                            type="button"
                            className="btn btn--indigo service-cta__button"
                            onClick={() => {
                                window.location.href = "/book-a-call";
                            }}
                        >
                            Book A Call
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CustomService;
