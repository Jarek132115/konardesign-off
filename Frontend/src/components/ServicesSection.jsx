import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styling/services.css";

import customVideo from "../assets/videos/Custom1.mp4";
import ecommerceVideo from "../assets/videos/ECommerce1.mp4";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "custom",
        title: "Custom Website Builds",
        description:
            "Fully bespoke websites designed from scratch and built for clarity, speed, and conversion—tailored to your business goals.",
        includes: ["Strategy", "UI/UX", "Branding", "Content", "SEO", "Launch Support", "Analytics"],
        pricing: ["From £3,000", "£3.75k–£5.25k Typical"],
        video: customVideo,
        route: "/services/custom",
    },
    {
        id: "ecommerce",
        title: "E-Commerce Websites",
        description:
            "High-performance Shopify and custom commerce builds focused on trust, product storytelling, and scalable growth.",
        includes: ["Shopify", "UI/UX", "Conversion", "Product Pages", "Automations", "SEO"],
        pricing: ["From £2.5k", "£2.5k–£4k Typical"],
        video: ecommerceVideo,
        route: "/services/ecommerce",
    },
];

const ServicesSection = () => {
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const cards = sectionRef.current?.querySelectorAll(".services-card");
        cards?.forEach((card) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    ease: "power2.out",
                    scrollTrigger: { trigger: card, start: "top 85%" },
                }
            );
        });

        return () => ScrollTrigger.getAll().forEach((st) => st.kill());
    }, []);

    return (
        <section className="services" ref={sectionRef}>
            <header className="services__header">
                <p className="eyebrow services__eyebrow">OUR SERVICES</p>

                <h2 className="heading2 services__title">
                    Solutions <span className="services__highlight">Engineered</span> For Digital Growth
                </h2>

                <p className="subheading services__subtitle">
                    End-to-end website builds designed to perform today and scale tomorrow.
                </p>
            </header>

            <div className="services__stack">
                {services.map((service) => (
                    <article key={service.id} className="services-card">
                        <div className="services-card__media">
                            <video src={service.video} autoPlay muted loop playsInline />
                        </div>

                        <div className="services-card__content">
                            <h3 className="heading3 services-card__title">{service.title}</h3>

                            <p className="body services-card__desc">{service.description}</p>

                            <div className="services-card__pills">
                                {service.includes.map((pill) => (
                                    <span key={pill} className="body services-pill">
                                        {pill}
                                    </span>
                                ))}

                                {service.pricing.map((price) => (
                                    <span key={price} className="body services-pill services-pill--price">
                                        {price}
                                    </span>
                                ))}
                            </div>

                            <button
                                type="button"
                                className="btn btn--white services-card__button"
                                onClick={() => navigate(service.route)}
                            >
                                View Service
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
