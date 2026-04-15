import React from "react";
import { useNavigate } from "react-router-dom";

import "../styling/services.css";

import AnimatedHeading from "./animations/AnimatedHeading";
import FadeUp from "./animations/FadeUp";
import { StaggerGroup, StaggerItem } from "./animations/StaggerGroup";
import AnimatedSection from "./animations/AnimatedSection";

import customVideo from "../assets/videos/Custom1.mp4";
import ecommerceVideo from "../assets/videos/ECommerce1.mp4";

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
    const navigate = useNavigate();

    return (
        <AnimatedSection className="services">
            <header className="services__header">
                <FadeUp as="p" className="eyebrow services__eyebrow">
                    OUR SERVICES
                </FadeUp>

                <AnimatedHeading
                    as="h2"
                    className="heading2 services__title"
                    highlightWords={["Engineered"]}
                    highlightClassName="services__highlight"
                    text="Solutions Engineered For Digital Growth"
                />

                <FadeUp as="p" className="subheading services__subtitle" afterHeading="Solutions Engineered For Digital Growth">
                    End-to-end website builds designed to perform today and scale tomorrow.
                </FadeUp>
            </header>

            <StaggerGroup className="services__stack" stagger={0.08}>
                {services.map((service) => (
                    <StaggerItem as="article" key={service.id} className="services-card">
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
                    </StaggerItem>
                ))}
            </StaggerGroup>
        </AnimatedSection>
    );
};

export default ServicesSection;
