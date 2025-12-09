// src/components/ServicesSection.jsx
import React, { useEffect, useRef } from "react";
import "../styling/services.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

import customVideo from "../assets/videos/Custom1.mp4";
import ecommerceVideo from "../assets/videos/ECommerce1.mp4";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "custom-websites",
        title: "Custom Website Builds",
        description:
            "Fully bespoke websites designed from scratch in Figma and built in Webflow, Framer, or code—focused on speed, clarity, and conversion.",
        includes: [
            "Strategy",
            "UI/UX",
            "Branding",
            "Content",
            "SEO",
            "Launch Support",
            "Analytics Setup",
        ],
        pricing: ["From £2,000", "Most Projects Range £3,000—£6,000"],
        video: customVideo,
        route: "/services/custom",
    },
    {
        id: "ecommerce-websites",
        title: "E-Commerce Websites",
        description:
            "Shopify and custom commerce builds optimized for trust, checkout flow, product storytelling, and scalable performance.",
        includes: [
            "UI/UX",
            "Content",
            "SEO",
            "Launch Support",
            "Product Architecture",
            "Automations",
        ],
        pricing: ["From £4,000", "Most Projects Range £5,000—£12,000"],
        video: ecommerceVideo,
        route: "/services/ecommerce",
    },
];

const ServicesSection = () => {
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const eyebrowEl = sectionEl.querySelector(".services__eyebrow");
        const titleEl = sectionEl.querySelector(".services__title");
        const subtitleEl = sectionEl.querySelector(".services__subtitle");
        const cards = sectionEl.querySelectorAll(".services__card");

        if (!eyebrowEl || !titleEl || !subtitleEl) return;

        // -----------------------------
        // Eyebrow + letter animation
        // -----------------------------
        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wrapper = document.createElement("span");
            wrapper.classList.add("services__title-word");
            wrapper.style.display = "inline-block";

            [...word].forEach((ch) => {
                const span = document.createElement("span");
                span.textContent = ch;
                span.style.display = "inline-block";
                span.style.opacity = "0";
                span.style.transform = "translateY(8px)";
                wrapper.appendChild(span);
            });

            titleEl.appendChild(wrapper);
            if (wordIndex !== words.length - 1) {
                titleEl.appendChild(document.createTextNode(" "));
            }
        });

        const highlightWords = new Set(["Engineered"]);
        const wordSpans = titleEl.querySelectorAll(".services__title-word");

        wordSpans.forEach((w) => {
            if (highlightWords.has(w.textContent.replace(/[^\w]/g, ""))) {
                w.classList.add("services__title-highlight");
            }
        });

        const charSpans = titleEl.querySelectorAll(".services__title-word span");

        gsap.set(subtitleEl, { opacity: 0, y: 8 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        // Eyebrow first
        tl.fromTo(
            eyebrowEl,
            { opacity: 0, y: 8 },
            {
                opacity: 1,
                y: 0,
                duration: 0.25,
            }
        )
            // Then headline letters
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
            // Then subheading
            .fromTo(
                subtitleEl,
                { opacity: 0, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.28,
                },
                ">-0.08"
            );

        // -----------------------------
        // Cards fade in on scroll
        // -----------------------------
        cards.forEach((card) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section className="services" ref={sectionRef}>
            <div className="services__inner">
                <header className="services__header">
                    <p className="eyebrow services__eyebrow">OUR SERVICES</p>
                    <h2 className="heading2 services__title">
                        Solutions Engineered For Your Digital Growth
                    </h2>

                    <p className="subheading services__subtitle">
                        Websites Built End-To-End—from Strategy And Design To Development,
                        Launch, And Ongoing Performance.
                    </p>
                </header>

                <div className="services__grid">
                    {services.map((service) => (
                        <article key={service.id} className="services__card">
                            <div className="services__media-inner">
                                <video
                                    src={service.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="services__video"
                                />
                            </div>

                            <div className="services__card-content">
                                <h3 className="heading3 services__card-title">
                                    {service.title}
                                </h3>

                                <p className="body services__card-description">
                                    {service.description}
                                </p>

                                <div className="services__group">
                                    <p className="services__label">Includes:</p>
                                    <div className="services__pills">
                                        {service.includes.map((item) => (
                                            <span key={item} className="body services__pill">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="services__group">
                                    <p className="services__label">Pricing:</p>
                                    <div className="services__pills">
                                        {service.pricing.map((price) => (
                                            <span key={price} className="body services__pill">
                                                {price}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Text-only link button (same style as projects) */}
                                <button
                                    className="services__card-button"
                                    onClick={() => navigate(service.route)}
                                >
                                    <span className="services__card-button-label">
                                        View Service Details
                                    </span>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
