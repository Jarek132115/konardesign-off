import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import "../styling/imagine.css";

import AnimatedHeading from "./animations/AnimatedHeading";
import FadeUp from "./animations/FadeUp";

import showreelVideo from "../assets/videos/Custom1.mp4";

const ImagineSection = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const videoRef = useRef(null);
    const progressRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [contentSize, setContentSize] = useState({ w: 0, h: 0 });
    const [smallSize, setSmallSize] = useState(0);

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

    const formatTime = (time) => {
        if (!time || Number.isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    useEffect(() => {
        const contentEl = contentRef.current;
        if (!contentEl) return;

        const updateSize = () => {
            const rect = contentEl.getBoundingClientRect();
            setContentSize({ w: rect.width, h: rect.height });
            const vmin = Math.min(window.innerWidth, window.innerHeight);
            setSmallSize(vmin * 0.4);
        };

        updateSize();

        const ro = new ResizeObserver(updateSize);
        ro.observe(contentEl);
        window.addEventListener("resize", updateSize);

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", updateSize);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const backdropScale = useTransform(scrollYProgress, [0, 0.18], [0, 1], { clamp: true });

    const backdropWidth = useTransform(
        scrollYProgress,
        [0.2, 0.55],
        [smallSize, contentSize.w || smallSize],
        { clamp: true }
    );
    const backdropHeight = useTransform(
        scrollYProgress,
        [0.2, 0.55],
        [smallSize, contentSize.h || smallSize],
        { clamp: true }
    );
    const backdropRadius = useTransform(
        scrollYProgress,
        [0.2, 0.55],
        ["50%", "0%"],
        { clamp: true }
    );
    const headerOpacity = useTransform(scrollYProgress, [0.18, 0.32], [1, 0], { clamp: true });
    const frameOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1], { clamp: true });

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        if (v >= 1 && videoRef.current) {
            // section left — no-op; video can continue or pause based on preference
        }
        if (v < 0.55 && isPlaying && videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    });

    const progressRatio =
        duration && !Number.isNaN(duration) ? currentTime / duration : 0;

    return (
        <section className="imagine" ref={sectionRef}>
            <div className="imagine__pin">
                <div className="imagine__content" ref={contentRef}>
                    <motion.header
                        className="imagine__header"
                        style={{ opacity: headerOpacity }}
                    >
                        <FadeUp
                            as="p"
                            className="eyebrow imagine__eyebrow"
                            duration={0.4}
                            y={8}
                        >
                            SIGNATURE SHOWREEL
                        </FadeUp>

                        <AnimatedHeading
                            as="h2"
                            className="heading2 imagine__title"
                            text="If You Can Imagine It – We Can Build It"
                            wordClassName="imagine__title-word"
                            highlightWords={["Imagine"]}
                            highlightClassName="imagine__title-highlight"
                            delay={0.1}
                        />

                        <FadeUp
                            as="p"
                            className="subheading imagine__subtitle"
                            duration={0.5}
                            afterHeading="If You Can Imagine It – We Can Build It"
                            headingDelay={0.1}
                            y={8}
                        >
                            Every Pixel Built With Purpose. Every Site Designed To Win.
                        </FadeUp>
                    </motion.header>

                    <div className="imagine__video-layer">
                        <motion.div
                            className="imagine__backdrop"
                            style={{
                                width: backdropWidth,
                                height: backdropHeight,
                                borderRadius: backdropRadius,
                                scale: backdropScale,
                                x: "-50%",
                                y: "-50%",
                                transformOrigin: "50% 50%",
                            }}
                        >
                            <motion.div
                                className="imagine__video-frame"
                                style={{ opacity: frameOpacity }}
                            >
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
                                            {formatTime(currentTime)} / {formatTime(duration)}
                                        </div>
                                    </div>

                                    <div
                                        className="imagine__progress-bar"
                                        ref={progressRef}
                                        onClick={handleProgressClick}
                                    >
                                        <div
                                            className="imagine__progress-fill"
                                            style={{ width: `${progressRatio * 100}%` }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImagineSection;
