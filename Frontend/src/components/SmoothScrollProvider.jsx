// src/components/SmoothScrollProvider.jsx
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SmoothScrollProvider
 *
 * Provides gentle, inertia-style smooth scroll that stays in sync
 * with GSAP + ScrollTrigger.
 */
const SmoothScrollProvider = ({ children }) => {
    useEffect(() => {
        // Lighter, more natural configuration
        const lenis = new Lenis({
            // lerp controls how much of the distance is traveled per frame.
            // 0.1 = smooth but still responsive, 0.0 = instant, 1.0 = very sluggish.
            lerp: 0.1,
            smoothWheel: true,
            smoothTouch: false,
            direction: "vertical",
            gestureDirection: "vertical",
        });

        // Keep ScrollTrigger in sync with Lenis
        lenis.on("scroll", () => {
            ScrollTrigger.update();
        });

        let animationFrameId;

        const raf = (time) => {
            lenis.raf(time);
            animationFrameId = requestAnimationFrame(raf);
        };

        animationFrameId = requestAnimationFrame(raf);

        ScrollTrigger.refresh();

        return () => {
            cancelAnimationFrame(animationFrameId);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScrollProvider;
