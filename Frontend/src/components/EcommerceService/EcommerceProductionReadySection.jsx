import React from "react";
import "../../styling/CustomService/customproductionreadysection.css";

const pillars = [
    {
        id: "performance",
        label: "Performance",
        items: [
            "Optimised storefront performance for fast product browsing and smooth checkout.",
            "Core Web Vitals, image optimisation, and best-practice caching baked into every page.",
        ],
    },
    {
        id: "seo",
        label: "E-Commerce SEO",
        items: [
            "Clean product + collection markup with semantic structure and correct schema.",
            "Search-friendly URLs, redirects, and internal linking that helps products rank.",
        ],
    },
    {
        id: "accessibility",
        label: "Accessibility",
        items: [
            "Accessible navigation, colour contrast, type choices, and interaction patterns across your full store experience.",
        ],
    },
];

const EcommerceProductionReadySection = () => {
    return (
        <section className="service-tech">
            <div className="service-tech__inner">
                <div className="service-tech__card">

                    <header className="service-tech__header">
                        <p className="eyebrow service-tech__eyebrow">BUILT PROPERLY</p>

                        <h2 className="heading2 service-tech__title">
                            Production-Ready From The First{" "}
                            <span className="service-tech__title-highlight">Release</span>
                        </h2>

                        <p className="subheading service-tech__subtitle">
                            Your store is engineered like a long-term revenue asset —
                            fast, stable, scalable, and ready to handle real-world traffic
                            from day one.
                        </p>
                    </header>

                    <div className="service-tech__layout">

                        {/* LEFT SIDE */}
                        <div className="service-tech__overview">
                            <div className="service-tech__badge-block">
                                <span className="service-tech__badge body">
                                    Performance • SEO • Accessibility
                                </span>
                            </div>

                            <p className="body service-tech__description">
                                We build ecommerce stores using modern engineering best
                                practices — so you don’t end up with a beautiful storefront
                                that breaks, slows down, or becomes impossible to maintain.
                            </p>

                            <p className="body service-tech__description">
                                The result: a store that loads fast, feels smooth, and can
                                scale with new products, campaigns, and traffic without
                                needing a rebuild every year.
                            </p>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="service-tech__pillars">
                            {pillars.map((pillar) => (
                                <article key={pillar.id} className="service-tech__pillar">
                                    <div className="service-tech__pillar-header">
                                        <div className="service-tech__pillar-icon">
                                            {pillar.id === "performance" && "⚡"}
                                            {pillar.id === "seo" && "↑"}
                                            {pillar.id === "accessibility" && "♿"}
                                        </div>

                                        <h3 className="heading3 service-tech__pillar-title">
                                            {pillar.label}
                                        </h3>
                                    </div>

                                    <ul className="service-tech__pillar-list">
                                        {pillar.items.map((item) => (
                                            <li
                                                key={item}
                                                className="body service-tech__pillar-item"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcommerceProductionReadySection;
