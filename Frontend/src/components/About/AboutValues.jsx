import React from "react";
import "../../styling/about/aboutvalues.css";
import AnimatedSection from "../animations/AnimatedSection";
import AnimatedHeading from "../animations/AnimatedHeading";
import FadeUp from "../animations/FadeUp";

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
        <AnimatedSection className="aboutvalues">
            <div className="aboutvalues__inner">
                <div className="aboutvalues__wrap">
                    <div className="aboutvalues__copy">
                        <p className="eyebrow aboutvalues__eyebrow">
                            CORE VALUES
                        </p>

                        <AnimatedHeading
                            as="h2"
                            text="What Matters Most in Every Project"
                            className="heading2 aboutvalues__title"
                            highlightWords={["Project"]}
                            highlightClassName="aboutvalues__highlight"
                        />

                        <FadeUp
                            as="p"
                            className="subheading aboutvalues__subtitle"
                            afterHeading="What Matters Most in Every Project"
                        >
                            These are the principles I protect throughout the
                            entire process, from first structure to final polish.
                        </FadeUp>
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
        </AnimatedSection>
    );
};

export default AboutValues;