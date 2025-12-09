// src/pages/EcommerceService.jsx
import React, { useEffect, useRef } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styling/buttons.css";
import "../styling/servicepage.css"; 

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ecommerceVideo from "../assets/videos/ECommerce1.mp4";

import uxFocusedIcon from "../assets/icons/uxfocuseddesign.svg";
import responsiveIcon from "../assets/icons/responsive.svg";
import speedIcon from "../assets/icons/speed.svg";
import dataIcon from "../assets/icons/data.svg";
import conversionDrivenIcon from "../assets/icons/conversiondriven.svg";
import shopifyIcon from "../assets/icons/shopify.svg";
import seoReadyIcon from "../assets/icons/seoready.svg";
import analyticsIcon from "../assets/icons/analyticstrackingsetup.svg";
import customCmsIcon from "../assets/icons/customcms.svg";

import carousel1 from "../assets/images/carousel1.jpg";
import carousel2 from "../assets/images/carousel2.jpg";
import carousel3 from "../assets/images/carousel3.jpg";
import carousel4 from "../assets/images/carousel4.jpg";

gsap.registerPlugin(ScrollTrigger);

const ecommerceFeatures = [
    {
        id: "storefront",
        title: "Custom Storefront Design",
        description:
            "A unique, branded storefront designed to reflect your products, story, and positioning—engineered to convert visitors into buyers.",
        icon: uxFocusedIcon,
    },
    {
        id: "checkout",
        title: "Mobile-Optimised Checkout",
        description:
            "Seamless checkout experience across phones, tablets, and desktops so customers can buy quickly without friction.",
        icon: responsiveIcon,
    },
    {
        id: "speed-conversion",
        title: "Built For Speed & Conversion",
        description:
            "High-performing pages with optimised layouts, focused CTAs, and fast load times to reduce bounce and increase sales.",
        icon: speedIcon,
    },
    {
        id: "product-setup",
        title: "Product & Category Setup",
        description:
            "We structure, upload, and organise your product listings and collections for intuitive browsing and better discovery.",
        icon: dataIcon,
    },
    {
        id: "copywriting",
        title: "Conversion Copywriting",
        description:
            "Conversion-focused product copy that highlights benefits, reduces objections, and nudges visitors to checkout.",
        icon: conversionDrivenIcon,
    },
    {
        id: "payments-shipping",
        title: "Payment & Shipping Integration",
        description:
            "Stripe, PayPal, Klarna, delivery zones, and tracking—all configured and tested so payments just work.",
        icon: shopifyIcon,
    },
    {
        id: "seo-ready",
        title: "Fully SEO-Ready",
        description:
            "Technical SEO foundations, clean code, and metadata so your store is ready to be indexed and ranked by search engines.",
        icon: seoReadyIcon,
    },
    {
        id: "analytics",
        title: "Analytics, Tracking & Pixel Setup",
        description:
            "Google Analytics, Meta Pixel, and key conversion events configured so you can measure and scale what works.",
        icon: analyticsIcon,
    },
    {
        id: "cms-shopify",
        title: "Custom CMS Or Shopify Setup",
        description:
            "Whether it’s a custom CMS or Shopify, we hand over a store that’s easy to update, manage, and grow in-house.",
        icon: customCmsIcon,
    },
];

const ecommerceGallery = [carousel1, carousel2, carousel3, carousel4];

const EcommerceService = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const pageEl = pageRef.current;
        if (!pageEl) return;

        const heroTitleEl = pageEl.querySelector(".service-hero__title");
        const heroSubtitleEl = pageEl.querySelector(".service-hero__subtitle");
        const featureCards = pageEl.querySelectorAll(".service-included__card");
        const galleryTitleEl = pageEl.querySelector(".service-gallery__title");
        const gallerySubtitleEl = pageEl.querySelector(".service-gallery__subtitle");

        const timelines = [];

        /* ---------------------------------------
           HERO HEADING — LETTER BY LETTER
        ---------------------------------------- */
        if (heroTitleEl && heroSubtitleEl) {
            const originalText = heroTitleEl.textContent;
            heroTitleEl.textContent = "";

            const words = originalText.split(" ");

            words.forEach((word, wordIndex) => {
                const wrapper = document.createElement("span");
                wrapper.classList.add("service-hero__title-word");
                wrapper.style.display = "inline-block";

                [...word].forEach((ch) => {
                    const span = document.createElement("span");
                    span.textContent = ch;
                    span.style.display = "inline-block";
                    span.style.opacity = "0";
                    span.style.transform = "translateY(8px)";
                    wrapper.appendChild(span);
                });

                heroTitleEl.appendChild(wrapper);
                if (wordIndex !== words.length - 1) {
                    heroTitleEl.appendChild(document.createTextNode(" "));
                }
            });

            // highlight “Built” + “Sell.”
            const highlightWords = new Set(["Built", "Sell."]);
            const wordSpans = heroTitleEl.querySelectorAll(
                ".service-hero__title-word"
            );

            wordSpans.forEach((w) => {
                const cleaned = w.textContent.replace(/[^\w.]/g, "");
                if (highlightWords.has(cleaned)) {
                    w.classList.add("service-hero__title-highlight");
                }
            });

            const charSpans = heroTitleEl.querySelectorAll(
                ".service-hero__title-word span"
            );

            gsap.set(heroSubtitleEl, { opacity: 0, y: 8 });

            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: pageEl,
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
                defaults: { ease: "power2.out" },
            });

            heroTl
                .to(charSpans, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.03,
                    duration: 0.4,
                })
                .to(
                    heroSubtitleEl,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.45,
                    },
                    ">-0.05"
                );

            timelines.push(heroTl);
        }

        /* ---------------------------------------
           “INCLUDED” SECTION CARDS FADE-IN
        ---------------------------------------- */
        featureCards.forEach((card, index) => {
            const tl = gsap.fromTo(
                card,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
            timelines.push(tl);
        });

        /* ---------------------------------------
           BOTTOM GALLERY HEADING ANIMATION
        ---------------------------------------- */
        if (galleryTitleEl && gallerySubtitleEl) {
            const original = galleryTitleEl.textContent;
            galleryTitleEl.textContent = "";

            const words = original.split(" ");

            words.forEach((word, wordIndex) => {
                const wrapper = document.createElement("span");
                wrapper.classList.add("service-gallery__title-word");
                wrapper.style.display = "inline-block";

                [...word].forEach((ch) => {
                    const span = document.createElement("span");
                    span.textContent = ch;
                    span.style.display = "inline-block";
                    span.style.opacity = "0";
                    span.style.transform = "translateY(8px)";
                    wrapper.appendChild(span);
                });

                galleryTitleEl.appendChild(wrapper);
                if (wordIndex !== words.length - 1) {
                    galleryTitleEl.appendChild(document.createTextNode(" "));
                }
            });

            const highlightWords = new Set(["Sell", "Built"]);
            const wordSpans = galleryTitleEl.querySelectorAll(
                ".service-gallery__title-word"
            );

            wordSpans.forEach((w) => {
                const cleaned = w.textContent.replace(/[^\w]/g, "");
                if (highlightWords.has(cleaned)) {
                    w.classList.add("service-gallery__title-highlight");
                }
            });

            const charSpans = galleryTitleEl.querySelectorAll(
                ".service-gallery__title-word span"
            );

            gsap.set(gallerySubtitleEl, { opacity: 0, y: 8 });

            const bottomTl = gsap.timeline({
                scrollTrigger: {
                    trigger: galleryTitleEl,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                defaults: { ease: "power2.out" },
            });

            bottomTl
                .to(charSpans, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.03,
                    duration: 0.4,
                })
                .to(
                    gallerySubtitleEl,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.45,
                    },
                    ">-0.05"
                );

            timelines.push(bottomTl);
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
                {/* HERO */}
                <section className="service-hero">
                    <div className="service-hero__top">
                        <div className="service-hero__content">
                            <h1 className="heading1 service-hero__title">
                                E-Commerce Websites Built To Sell. Not Just Look Pretty.
                            </h1>

                            <p className="subheading service-hero__subtitle">
                                No templates. No guesswork. Just high-converting stores engineered
                                to maximise sales — all for one fixed weekly rate.
                            </p>
                        </div>
                    </div>

                    <div className="service-hero__media">
                        <div className="service-hero__media-inner">
                            <video
                                src={ecommerceVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="service-hero__media-video"
                            />
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="service-included">
                    <header className="service-included__header">
                        <h2 className="heading2 service-included__title">
                            What’s Included In Your E-Commerce Package
                        </h2>
                        <p className="subheading service-included__subtitle">
                            Design, development, setup, and strategy — everything you need to
                            start selling online confidently.
                        </p>
                    </header>

                    <div className="service-included__grid">
                        {ecommerceFeatures.map((feature) => (
                            <article
                                key={feature.id}
                                className="service-included__card"
                            >
                                <div className="service-included__icon" aria-hidden="true">
                                    <img src={feature.icon} alt={feature.title} />
                                </div>

                                <h3 className="heading3 service-included__card-title">
                                    {feature.title}
                                </h3>
                                <p className="body service-included__card-text">
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* GALLERY / RESULTS */}
                <section className="service-gallery">
                    <header className="service-gallery__header">
                        <h2 className="heading2 service-gallery__title">
                            If You Sell Online — This Is Built For You
                        </h2>
                        <p className="subheading service-gallery__subtitle">
                            We help product-based brands launch faster, convert more, and scale
                            smarter with high-performing ecommerce experiences.
                        </p>
                    </header>

                    <div className="service-gallery__grid">
                        {ecommerceGallery.map((src, index) => (
                            <article key={index} className="service-gallery__item">
                                <img
                                    src={src}
                                    alt={`E-commerce project mockup ${index + 1}`}
                                    className="service-gallery__image"
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

export default EcommerceService;
