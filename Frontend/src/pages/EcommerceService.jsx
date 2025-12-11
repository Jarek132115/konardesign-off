// src/pages/EcommerceService.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import EcommerceHeroSection from "../components/EcommerceService/EcommerceHeroSection";
import EcommerceIncludedSection from "../components/EcommerceService/EcommerceIncludedSection";
import EcommerceProcess from "../components/EcommerceService/EcommerceProcess";
import EcommerceWhyWorksSection from "../components/EcommerceService/EcommerceWhyWorksSection";
import EcommerceProductionReadySection from "../components/EcommerceService/EcommerceProductionReadySection";
import EcommerceGreatFitSection from "../components/EcommerceService/EcommerceGreatFitSection";
import EcommerceCTASection from "../components/EcommerceService/EcommerceCTASection";

import "../styling/buttons.css";
import "../styling/servicepage.css";

gsap.registerPlugin(ScrollTrigger);

const EcommerceService = () => {
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
                if (idx < arr.length - 1) {
                    title.append(" ");
                }
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
           SECTION HEADERS
        ------------------------------ */

        // INCLUDED
        animateSectionHeading({
            sectionSelector: ".service-included",
            eyebrowSelector: ".service-included__eyebrow",
            titleSelector: ".service-included__title",
            subtitleSelector: ".service-included__subtitle",
            wordClass: "service-included__title-word",
            // "E-Commerce" becomes "ECommerce" after cleaning
            highlightWords: ["ECommerce"],
        });

        // PROCESS
        animateSectionHeading({
            sectionSelector: ".process",
            eyebrowSelector: ".process__eyebrow",
            titleSelector: ".process__title",
            subtitleSelector: ".process__subtitle",
            wordClass: "process__title-word",
            highlightWords: ["Process."],
        });

        // WHY THIS APPROACH WORKS
        animateSectionHeading({
            sectionSelector: ".service-why",
            eyebrowSelector: ".service-why__eyebrow",
            titleSelector: ".service-why__title",
            subtitleSelector: ".service-why__subtitle",
            wordClass: "service-why__title-word",
            highlightWords: ["Works"],
        });

        // PRODUCTION READY
        animateSectionHeading({
            sectionSelector: ".service-tech",
            eyebrowSelector: ".service-tech__eyebrow",
            titleSelector: ".service-tech__title",
            subtitleSelector: ".service-tech__subtitle",
            wordClass: "service-tech__title-word",
            highlightWords: ["Release"],
        });

        // GREAT FIT
        animateSectionHeading({
            sectionSelector: ".service-fit",
            eyebrowSelector: ".service-fit__eyebrow",
            titleSelector: ".service-fit__title",
            subtitleSelector: ".service-fit__subtitle",
            wordClass: "service-fit__title-word",
            highlightWords: ["Fit"],
        });

        // CTA
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

        // Included feature cards
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

        // Production-ready pillar cards (new design)
        page.querySelectorAll(".service-tech__pillar").forEach((card, i) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 16 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.35,
                    delay: i * 0.04,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        // Great-fit columns
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

        // CTA button
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

        return () => {
            timelines.forEach((t) => t.kill());
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div className="service-page">
            <Navbar />

            <main className="service-page__main" ref={pageRef}>
                <EcommerceHeroSection />
                <EcommerceIncludedSection />
                <EcommerceProcess />
                <EcommerceWhyWorksSection />
                <EcommerceProductionReadySection />
                <EcommerceGreatFitSection />
                <EcommerceCTASection />
            </main>

            <Footer />
        </div>
    );
};

export default EcommerceService;
