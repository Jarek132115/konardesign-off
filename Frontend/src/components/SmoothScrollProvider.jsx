import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrollProvider = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
            smoothTouch: false,
            direction: "vertical",
            gestureDirection: "vertical",
        });

        window.__lenis = lenis;

        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            if (window.__lenis === lenis) delete window.__lenis;
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScrollProvider;
