// src/components/SmoothScrollProvider.jsx
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SmoothScrollProvider
 *
 * Proper Lenis + GSAP ScrollTrigger integration using scrollerProxy.
 * This reduces forced reflow / layout thrash and keeps ScrollTrigger accurate.
 */
const SmoothScrollProvider = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
            smoothTouch: false,
            direction: "vertical",
            gestureDirection: "vertical",
        });

        // Tell ScrollTrigger to use the document as the scroller, but proxy the scroll values via Lenis
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                if (arguments.length) {
                    // set scroll
                    lenis.scrollTo(value, { immediate: true });
                }
                // get scroll
                return lenis.scroll;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            // pinType helps avoid jitter on some setups
            pinType: document.body.style.transform ? "transform" : "fixed",
        });

        // Update ScrollTrigger only when Lenis updates (not constantly via separate loops)
        const onLenisScroll = () => {
            ScrollTrigger.update();
        };

        lenis.on("scroll", onLenisScroll);

        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        // Refresh after everything is wired
        ScrollTrigger.addEventListener("refresh", () => lenis.resize());
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.removeEventListener("refresh", () => lenis.resize());
            cancelAnimationFrame(rafId);
            lenis.off("scroll", onLenisScroll);
            lenis.destroy();

            // clean proxy so it doesn't leak between hot reloads
            ScrollTrigger.scrollerProxy(document.body, null);
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScrollProvider;
