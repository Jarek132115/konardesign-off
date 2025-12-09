import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styling/buttons.css";
import "../styling/servicepage.css";

import heroVideo from "../assets/videos/Custom1.mp4";

import uxFocusedIcon from "../assets/icons/uxfocuseddesign.svg";
import responsiveIcon from "../assets/icons/responsive.svg";
import speedIcon from "../assets/icons/speed.svg";
import customBuiltIcon from "../assets/icons/100custombuilt.svg";
import conversionDrivenIcon from "../assets/icons/conversiondriven.svg";
import seoReadyIcon from "../assets/icons/seoready.svg";
import analyticsIcon from "../assets/icons/analyticstrackingsetup.svg";
import customContactFormIcon from "../assets/icons/customcontactform.svg";
import customCmsIcon from "../assets/icons/customcms.svg";

import gallery1 from "../assets/images/carousel1.jpg";
import gallery2 from "../assets/images/carousel2.jpg";
import gallery3 from "../assets/images/carousel3.jpg";
import gallery4 from "../assets/images/carousel4.jpg";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "UX-Focused Design",
        description:
            "Tailored layouts that guide visitors naturally toward taking action.",
        icon: uxFocusedIcon,
    },
    {
        title: "Fully Responsive",
        description: "Perfectly adaptive layouts for desktop, tablet and mobile.",
        icon: responsiveIcon,
    },
    {
        title: "Built For Speed",
        description: "Fast-loading pages optimised for SEO and conversions.",
        icon: speedIcon,
    },
    {
        title: "100% Custom Built",
        description: "Every page crafted from scratch — no templates.",
        icon: customBuiltIcon,
    },
    {
        title: "Conversion-Driven Copywriting",
        description: "Messaging that sells, structured for clarity and action.",
        icon: conversionDrivenIcon,
    },
    {
        title: "SEO Ready",
        description: "Technical SEO foundations baked in from day one.",
        icon: seoReadyIcon,
    },
    {
        title: "Analytics & Tracking Setup",
        description:
            "Google Analytics, Pixel and conversion tracking configured.",
        icon: analyticsIcon,
    },
    {
        title: "Custom Contact Forms & CTAs",
        description: "Lead-gen forms built to convert high-intent visitors.",
        icon: customContactFormIcon,
    },
    {
        title: "Custom CMS",
        description:
            "A content management system tailored to your workflow.",
        icon: customCmsIcon,
    },
];

const gallery = [gallery1, gallery2, gallery3, gallery4];

const CustomService = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const page = pageRef.current;
        if (!page) return;

        /* HERO ANIMATION */
        const heroTitle = page.querySelector(".service-hero__title");
        const heroSubtitle = page.querySelector(".service-hero__subtitle");
        if (!heroTitle || !heroSubtitle) return;

        const original = heroTitle.textContent;
        heroTitle.textContent = "";

        original.split(" ").forEach((word, idx, arr) => {
            const span = document.createElement("span");
            span.className = "service-hero__title-word";
            span.style.display = "inline-block";

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

        const chars = heroTitle.querySelectorAll(".service-hero__title-word span");
        gsap.set(heroSubtitle, { opacity: 0, y: 8 });

        gsap.timeline({
            scrollTrigger: {
                trigger: heroTitle,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        })
            .to(chars, { opacity: 1, y: 0, stagger: 0.03, duration: 0.4 })
            .to(
                heroSubtitle,
                { opacity: 1, y: 0, duration: 0.4 },
                "-=0.2"
            );

        /* FEATURE CARDS */
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

        /* GALLERY */
        page.querySelectorAll(".service-gallery__item").forEach((item) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    return (
        <div className="service-page">
            <Navbar />

            <main className="service-page__main" ref={pageRef}>
                {/* HERO */}
                <section className="service-hero">
                    <div className="service-hero__top">
                        <p className="eyebrow service-hero__eyebrow">
                            Custom Website Build
                        </p>

                        <h1 className="heading1 service-hero__title">
                            Custom Websites{" "}
                            <span className="service-hero__title-highlight">
                                Built To Convert
                            </span>
                            . Not Just Look Pretty.
                        </h1>

                        <p className="subheading service-hero__subtitle">
                            One fixed weekly rate. Fully custom builds engineered for
                            speed, clarity and conversions.
                        </p>
                    </div>

                    <div className="service-hero__media">
                        <div className="service-hero__media-inner">
                            <video
                                src={heroVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="service-hero__media-video"
                            />
                        </div>
                    </div>
                </section>

                {/* INCLUDED FEATURES */}
                <section className="service-included">
                    <header className="service-included__header">
                        <p className="eyebrow service-included__eyebrow">
                            WHAT’S INCLUDED
                        </p>

                        <h2 className="heading2 service-included__title">
                            What’s Included In Your{" "}
                            <span className="service-included__title-highlight">
                                Custom Website
                            </span>{" "}
                            Package
                        </h2>

                        <p className="subheading service-included__subtitle">
                            Everything you need to launch a high-performing website that’s
                            built to grow your business.
                        </p>
                    </header>

                    <div className="service-included__grid">
                        {features.map((f, index) => (
                            <article
                                key={f.title}
                                className={`service-included__card service-included__card--bg${(index % 5) + 1}`}
                            >
                                <div className="service-included__icon" aria-hidden="true">
                                    <img src={f.icon} alt={f.title} />
                                </div>
                                <h3 className="heading3 service-included__card-title">
                                    {f.title}
                                </h3>
                                <p className="body service-included__card-text">
                                    {f.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* GALLERY */}
                <section className="service-gallery">
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
                            elevate your brand.
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
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CustomService;
