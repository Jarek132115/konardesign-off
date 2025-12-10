import React from "react";
import "../../styling/CustomService/customctasection.css";

const CustomCTASection = () => {
    return (
        <section className="service-cta">
            <div className="service-cta__inner">
                <p className="eyebrow service-cta__eyebrow">NEXT STEP</p>
                <h2 className="heading2 service-cta__title">
                    Let’s Map Out Your{" "}
                    <span className="service-cta__title-highlight">
                        Custom Website Plan
                    </span>
                </h2>
                <p className="subheading service-cta__subtitle">
                    We’ll review your goals, your current site (if you have one),
                    and outline what a high-conversion build could look like — with
                    zero pressure to commit.
                </p>

                <button
                    type="button"
                    className="btn btn--indigo service-cta__button"
                    onClick={() => {
                        window.location.href = "/book-a-call";
                    }}
                >
                    Book A Call
                </button>
            </div>
        </section>
    );
};

export default CustomCTASection;
