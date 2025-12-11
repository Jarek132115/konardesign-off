import React from "react";

import "../../styling/CustomService/includedsection.css";

import uxFocusedIcon from "../../assets/icons/uxfocuseddesign.svg"; // storefront
import responsiveIcon from "../../assets/icons/responsive.svg"; // checkout
import speedIcon from "../../assets/icons/speed.svg";
import dataIcon from "../../assets/icons/data.svg";
import conversionDrivenIcon from "../../assets/icons/conversiondriven.svg";
import shopifyIcon from "../../assets/icons/paymentshipping.svg";
import seoReadyIcon from "../../assets/icons/seoready.svg";
import analyticsIcon from "../../assets/icons/analyticstrackingsetup.svg";
import customCmsIcon from "../../assets/icons/customcms.svg";

const features = [
    {
        title: "Custom Storefront Design",
        description:
            "A unique, branded layout made to reflect your products and convert visitors.",
        icon: uxFocusedIcon,
    },
    {
        title: "Mobile-Optimised Checkout",
        description:
            "Seamless buying experience across phones, tablets, and desktops.",
        icon: responsiveIcon,
    },
    {
        title: "Built For Speed & Conversion",
        description:
            "Pages load fast, funnels are optimised, and every element drives users toward checkout.",
        icon: speedIcon,
    },
    {
        title: "Product & Category Setup",
        description:
            "We’ll upload, organise, and optimise your core product listings and collections.",
        icon: dataIcon,
    },
    {
        title: "Conversion Copywriting",
        description:
            "Clear, persuasive product copy designed to build trust and close sales.",
        icon: conversionDrivenIcon,
    },
    {
        title: "Payment & Shipping Integration",
        description:
            "Stripe, PayPal, Klarna, delivery zones, tracking — all sorted.",
        icon: shopifyIcon,
    },
    {
        title: "Fully SEO-Ready",
        description:
            "Search-engine friendly structure, fast loading, clean code, and metadata ready.",
        icon: seoReadyIcon,
    },
    {
        title: "Analytics, Tracking & Pixel Setup",
        description:
            "Know your numbers with Google Analytics, Meta Pixel, and more — fully configured.",
        icon: analyticsIcon,
    },
    {
        title: "Custom CMS Or Shopify Setup",
        description:
            "Whether it’s a Shopify build or custom CMS — we hand over full access and training.",
        icon: customCmsIcon,
    },
];

const EcommerceIncludedSection = () => {
    return (
        <section className="service-included">
            <div className="service-included__inner">
                <header className="service-included__header">
                    <p className="eyebrow service-included__eyebrow">
                        WHAT’S INCLUDED
                    </p>

                    <h2 className="heading2 service-included__title">
                        What’s{" "}
                        <span className="service-included__title-highlight">
                            Included
                        </span>{" "}
                        In Your E-Commerce Package
                    </h2>

                    <p className="subheading service-included__subtitle">
                        Design, development, setup, and strategy — everything
                        you need to start selling online confidently.
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

export default EcommerceIncludedSection;
