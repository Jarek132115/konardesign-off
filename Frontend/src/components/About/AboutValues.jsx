import React from "react";
import "../../styling/about/aboutvalues.css";

const valuePoints = [
    "Clear thinking before visual decisions",
    "Strong typography and structured spacing",
    "High-end presentation without unnecessary clutter",
    "Responsive design that still feels intentional",
    "A build that is easy to scale and improve later",
    "A website that supports the business, not just the brand image",
];

const AboutValues = () => {
    return (
        <section className="aboutvalues">
            <div className="aboutvalues__inner">
                <div className="aboutvalues__wrap">
                    <div className="aboutvalues__copy">
                        <p className="eyebrow aboutvalues__eyebrow">
                            CORE VALUES
                        </p>

                        <h2 className="heading2 aboutvalues__title">
                            What Matters Most in Every{" "}
                            <span className="aboutvalues__highlight">
                                Project
                            </span>
                        </h2>

                        <p className="subheading aboutvalues__subtitle">
                            These are the principles I protect throughout the
                            entire process, from first structure to final polish.
                        </p>
                    </div>

                    <div className="aboutvalues__list">
                        {valuePoints.map((point) => (
                            <div key={point} className="aboutvalues__item">
                                <span className="aboutvalues__dot" />
                                <span className="body aboutvalues__text">
                                    {point}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutValues;