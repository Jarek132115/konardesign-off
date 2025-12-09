// src/components/BookingSection.jsx
import React, { useEffect, useRef } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import "../styling/booking.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BookingSection = () => {
    const sectionRef = useRef(null);

    // Cal.com embed setup
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "30min" });

            cal("ui", {
                theme: "light",
                layout: "month_view",
                hideEventTypeDetails: false,
                cssVarsPerTheme: {
                    light: {
                        // brand colour
                        "cal-brand": "#4F46E5",
                        // main text to match the site
                        "cal-text": "#0F172A",
                        // transparent background so your page colour shows through
                        "cal-background": "transparent",
                    },
                    dark: {
                        "cal-brand": "#4F46E5",
                    },
                },
            });
        })();
    }, []);

    // Title + subtitle animation (same logic as Projects section)
    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const titleEl = sectionEl.querySelector(".booking__title");
        const subtitleEl = sectionEl.querySelector(".booking__subtitle");

        if (!titleEl || !subtitleEl) return;

        // --- LETTER BY LETTER TITLE ANIMATION ---
        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("booking__title-word");
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

        // Highlight a couple of key words (similar to Built/Helped in projects)
        const wordSpans = titleEl.querySelectorAll(".booking__title-word");
        const highlightSet = new Set(["time", "you"]);

        wordSpans.forEach((wordSpan) => {
            const cleaned = wordSpan.textContent.replace(/[^\w-]/g, "");
            if (highlightSet.has(cleaned)) {
                wordSpan.classList.add("booking__title-highlight");
            }
        });

        const charSpans = titleEl.querySelectorAll(".booking__title-word span");

        gsap.set(subtitleEl, { opacity: 0, y: 8 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        // 1) Title letters
        tl.to(charSpans, {
            opacity: 1,
            y: 0,
            stagger: 0.03,
            duration: 0.4,
        });

        // 2) Subtitle
        tl.to(
            subtitleEl,
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
            },
            ">-0.05"
        );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section className="booking" ref={sectionRef}>
            <div className="booking__inner">
                <header className="booking__header">
                    <p className="eyebrow">Book a discovery call</p>
                    <h2 className="heading2 booking__title">
                        Choose a time that works best for you.
                    </h2>
                    <p className="subheading booking__subtitle">
                        Schedule a 30-minute call and we&apos;ll walk through your goals,
                        challenges, and what you&apos;re looking to build. We&apos;ll
                        discuss project requirements, timelines, and how our team can help
                        you achieve a high-performance online presence.
                    </p>
                </header>

                <div className="booking__embed">
                    <Cal
                        namespace="30min"
                        calLink="konardesign/30min"
                        style={{
                            width: "100%",
                            // let Cal decide height so we don't create extra white space
                        }}
                        config={{
                            layout: "month_view",
                            theme: "light",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
