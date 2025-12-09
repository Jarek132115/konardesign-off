// src/components/ImagineSection.jsx
import React, { useEffect, useRef, useState } from "react";
import "../styling/imagine.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import showreelVideo from "../assets/videos/Custom1.mp4";

gsap.registerPlugin(ScrollTrigger);

const ImagineSection = () => {
    const sectionRef = useRef(null);
    const pinRef = useRef(null);
    const headerRef = useRef(null);
    const backdropRef = useRef(null);
    const frameRef = useRef(null);
    const videoRef = useRef(null);
    const progressRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [playbackRate, setPlaybackRate] = useState(1);

    /* -----------------------------
       VIDEO CONTROLS
    ------------------------------ */

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused || video.ended) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const handleLoadedMetadata = () => {
        const video = videoRef.current;
        if (!video) return;
        setDuration(video.duration || 0);
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video) return;
        setCurrentTime(video.currentTime || 0);
    };

    const handleProgressClick = (event) => {
        const bar = progressRef.current;
        const video = videoRef.current;
        if (!bar || !video || !duration) return;

        const rect = bar.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const ratio = Math.min(Math.max(clickX / rect.width, 0), 1);
        video.currentTime = ratio * duration;
        setCurrentTime(video.currentTime);
    };

    const handleSpeedChange = (newRate) => {
        const video = videoRef.current;
        if (!video) return;
        video.playbackRate = newRate;
        setPlaybackRate(newRate);
    };

    const formatTime = (time) => {
        if (!time || Number.isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    /* -----------------------------
       GSAP ANIMATIONS
    ------------------------------ */

    useEffect(() => {
        const sectionEl = sectionRef.current;
        const pinEl = pinRef.current;
        const headerEl = headerRef.current;
        const backdropEl = backdropRef.current;
        const frameEl = frameRef.current;

        if (!sectionEl || !pinEl || !headerEl || !backdropEl || !frameEl) return;

        const eyebrowEl = sectionEl.querySelector(".imagine__eyebrow");
        const titleEl = sectionEl.querySelector(".imagine__title");
        const subtitleEl = sectionEl.querySelector(".imagine__subtitle");

        if (!eyebrowEl || !titleEl || !subtitleEl) return;

        /* -----------------------------
           HEADING: EYEBROW → LETTERS → SUB
        ------------------------------ */

        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("imagine__title-word");
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

        // Highlight "Imagine"
        const wordSpans = titleEl.querySelectorAll(".imagine__title-word");
        const highlightSet = new Set(["Imagine"]);

        wordSpans.forEach((wordSpan) => {
            const cleaned = wordSpan.textContent.replace(/[^\w-]/g, "");
            if (highlightSet.has(cleaned)) {
                wordSpan.classList.add("imagine__title-highlight");
            }
        });

        const charSpans = titleEl.querySelectorAll(".imagine__title-word span");

        const headingTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
        });

        headingTl
            .fromTo(
                eyebrowEl,
                { opacity: 0, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.25,
                    ease: "power2.out",
                }
            )
            .to(
                charSpans,
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.018,
                    duration: 0.26,
                    ease: "power2.out",
                },
                ">-0.05"
            )
            .fromTo(
                subtitleEl,
                { opacity: 0, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.28,
                    ease: "power2.out",
                },
                ">-0.08"
            );

        /* -----------------------------
           PIN + SCRUB (DESKTOP BEHAVIOUR) ON ALL SIZES
           CIRCLE → RECTANGLE + VIDEO
        ------------------------------ */

        gsap.set(backdropEl, {
            xPercent: -50,
            yPercent: -50,
            scale: 0,
            width: "40vmin",
            height: "40vmin",
            borderRadius: "50%",
            opacity: 1,
            transformOrigin: "50% 50%",
        });

        gsap.set(frameEl, { opacity: 0 });

        // dynamic end distance so mobile behaves correctly
        const pinTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: pinEl,
                start: "top top",
                end: () => "+=" + pinEl.offsetHeight * 1.6,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        pinTimeline
            .to(
                backdropEl,
                {
                    scale: 1,
                    duration: 0.45,
                    ease: "power2.out",
                },
                0.1
            )
            .to(
                headerEl,
                {
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.out",
                },
                0.25
            )
            .to(
                backdropEl,
                {
                    width: "100%",
                    height: "100%",
                    borderRadius: "24px",
                    duration: 0.7,
                    ease: "power2.inOut",
                },
                0.4
            )
            .to(
                frameEl,
                {
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                },
                0.7
            );

        // Pause video when the pinned sequence is finished
        const leaveTrigger = ScrollTrigger.create({
            trigger: pinEl,
            start: "top top",
            end: () => "+=" + pinEl.offsetHeight * 1.6,
            onLeave: () => {
                if (videoRef.current) {
                    videoRef.current.pause();
                    setIsPlaying(false);
                }
            },
            onLeaveBack: () => {
                if (videoRef.current) {
                    videoRef.current.pause();
                    setIsPlaying(false);
                }
            },
        });

        // Make sure everything recalculates correctly on resize/orientation
        ScrollTrigger.refresh();

        return () => {
            headingTl.kill();
            pinTimeline.kill();
            leaveTrigger.kill();
        };
    }, []);

    const progressRatio =
        duration && !Number.isNaN(duration) ? currentTime / duration : 0;

    return (
        <section className="imagine" ref={sectionRef}>
            <div className="imagine__pin" ref={pinRef}>
                <div className="imagine__content">
                    <header className="imagine__header" ref={headerRef}>
                        <p className="eyebrow imagine__eyebrow">
                            SIGNATURE SHOWREEL
                        </p>

                        <h2 className="heading2 imagine__title">
                            If You Can Imagine It – We Can Build It
                        </h2>
                        <p className="subheading imagine__subtitle">
                            Every Pixel Built With Purpose. Every Site Designed To
                            Win.
                        </p>
                    </header>

                    <div className="imagine__video-layer">
                        <div className="imagine__backdrop" ref={backdropRef}>
                            <div className="imagine__video-frame" ref={frameRef}>
                                <video
                                    ref={videoRef}
                                    className="imagine__video-element"
                                    src={showreelVideo}
                                    onLoadedMetadata={handleLoadedMetadata}
                                    onTimeUpdate={handleTimeUpdate}
                                    playsInline
                                />

                                <div className="imagine__controls">
                                    <div className="imagine__controls-top">
                                        <button
                                            type="button"
                                            className="imagine__play-btn body"
                                            onClick={togglePlay}
                                        >
                                            {isPlaying ? "Pause" : "Play"}
                                        </button>

                                        <div className="imagine__time body">
                                            {formatTime(currentTime)} /{" "}
                                            {formatTime(duration)}
                                        </div>
                                    </div>

                                    <div
                                        className="imagine__progress-bar"
                                        ref={progressRef}
                                        onClick={handleProgressClick}
                                    >
                                        <div
                                            className="imagine__progress-fill"
                                            style={{
                                                width: `${progressRatio * 100}%`,
                                            }}
                                        />
                                    </div>

                                    <div className="imagine__speed-controls body">
                                        <span className="imagine__speed-label">
                                            Speed
                                        </span>
                                        {[1, 1.5, 2].map((rate) => (
                                            <button
                                                key={rate}
                                                type="button"
                                                className={`imagine__speed-btn ${playbackRate === rate
                                                        ? "imagine__speed-btn--active"
                                                        : ""
                                                    }`}
                                                onClick={() =>
                                                    handleSpeedChange(rate)
                                                }
                                            >
                                                {rate}x
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImagineSection;
