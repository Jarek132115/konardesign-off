import React from "react";
import "../../styling/CustomService/customproductionreadysection.css";

const techPoints = [
    "Modern React-based front-end, optimised for speed and stability.",
    "Core Web Vitals, image optimisation, and best-practice caching baked in.",
    "Semantic HTML structure, sensible heading hierarchy, and schema where it matters.",
    "Accessibility-first decisions across colour, contrast, type, and interactions.",
    "Clean URL structure, redirects, and sensible internal linking for SEO.",
];

const CustomProductionReadySection = () => {
    return (
        <section className="service-tech">
            <div className="service-tech__inner">
                <header className="service-tech__header">
                    <p className="eyebrow service-tech__eyebrow">BUILT PROPERLY</p>
                    <h2 className="heading2 service-tech__title">
                        Production-Ready From The First{" "}
                        <span className="service-tech__title-highlight">Release</span>
                    </h2>
                    <p className="subheading service-tech__subtitle">
                        Under the hood, your site is engineered like a long-term asset —
                        fast, stable, and easy to evolve as your brand grows.
                    </p>
                </header>

                <div className="service-tech__grid">
                    <div className="service-tech__column service-tech__column--left">
                        <div className="service-tech__badge-row">
                            <span className="service-tech__badge body">
                                Performance • SEO • Accessibility
                            </span>
                        </div>
                        <p className="body service-tech__description">
                            We build with modern standards and a pragmatic engineering
                            mindset — so you’re not stuck with a beautiful front-end
                            that’s fragile, slow, or impossible to edit.
                        </p>
                        <p className="body service-tech__description">
                            The end result: a site that loads fast, feels smooth, and can
                            handle new pages, campaigns, and experiments without a full
                            rebuild.
                        </p>
                    </div>

                    <div className="service-tech__column service-tech__column--right">
                        <ul className="service-tech__list">
                            {techPoints.map((point) => (
                                <li key={point} className="service-tech__point body">
                                    <span className="service-tech__dot" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomProductionReadySection;
