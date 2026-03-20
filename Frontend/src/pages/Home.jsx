import React, { useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import Conversion from "../components/Conversion";
import ProjectsSection from "../components/ProjectsSection";
import ProcessSection from "../components/ProcessSection";
import DifferenceSection from "../components/DifferenceSection";
import BlogSection from "../components/BlogSection";
import BookCTASection from "../components/BookCTASection";
import Footer from "../components/Footer";

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
        const highlightWords = ["websites", "performance", "growth"];

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("hero__title-word");
            wordWrapper.style.display = "inline-block";

            const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, "");

            if (highlightWords.includes(cleanedWord)) {
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
        gsap.set(buttonsEl, { opacity: 0, y: 8 });
        gsap.set(carouselEl, { opacity: 0, y: 16 });

        const introTl = gsap.timeline({ defaults: { ease: "power2.out" } });

        introTl
            .fromTo(
                pillEl,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.25 }
            )
            .to(
                charSpans,
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.018,
                    duration: 0.26,
                },
                ">-0.05"
            )
            .fromTo(
                subheadingEl,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.28 },
                ">-0.08"
            )
            .fromTo(
                buttonsEl,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.28 },
                ">-0.06"
            )
            .fromTo(
                carouselEl,
                { opacity: 0, y: 16 },
                { opacity: 1, y: 0, duration: 0.28 },
                ">-0.04"
            );

        return () => {
            introTl.kill();
        };
    }, []);

    return (
        <div className="page">
            <Navbar />

            <main className="hero" ref={heroRef}>
                <div className="hero__inner">
                    <section className="hero__content">
                        <div className="pill--white hero__pill">
                            Strategy → Design → Development → Performance
                        </div>

                        <h1 className="heading1 hero__title">
                            Custom Websites Built for Performance, Speed &amp; Growth
                        </h1>

                        <p className="hero__subheading subheading">
                            Strategy led websites designed and developed by me from start to launch to look sharp, perform fast, and drive real results.
                        </p>

                        <div className="hero__buttons">
                            <button className="btn btn--indigo">
                                Start a Project
                            </button>

                            <button
                                className="btn btn--white"
                                onClick={() => navigate("/projects")}
                            >
                                View My Work
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
                                    draggable="false"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <IntroSection />
            <Conversion />
            <ProjectsSection />
            <ProcessSection />
            <DifferenceSection />
            <BlogSection />
            <BookCTASection />
            <Footer />
        </div>
    );
};

export default Home;