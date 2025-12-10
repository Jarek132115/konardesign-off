import React from "react";

import "../../styling/CustomService/includedsection.css";

import uxFocusedIcon from "../../assets/icons/uxfocuseddesign.svg";
import responsiveIcon from "../../assets/icons/responsive.svg";
import speedIcon from "../../assets/icons/speed.svg";
import customBuiltIcon from "../../assets/icons/100custombuilt.svg";
import conversionDrivenIcon from "../../assets/icons/conversiondriven.svg";
import seoReadyIcon from "../../assets/icons/seoready.svg";
import analyticsIcon from "../../assets/icons/analyticstrackingsetup.svg";
import customContactFormIcon from "../../assets/icons/customcontactform.svg";
import customCmsIcon from "../../assets/icons/customcms.svg";

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

const IncludedSection = () => {
    return (
        <section className="service-included">
            <div className="service-included__inner">
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
                        Everything you need to launch a high-performing website
                        that’s built to grow your business — from UX and copy to
                        build, analytics, and handover.
                    </p>
                </header>

                <div className="service-included__grid">
                    {features.map((f, index) => (
                        <article
                            key={f.title}
                            className={`service-included__card service-included__card--bg${(index % 5) + 1
                                }`}
                        >
                            <div
                                className="service-included__icon"
                                aria-hidden="true"
                            >
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
            </div>
        </section>
    );
};

export default IncludedSection;
