import React from "react";
import "../../styling/CustomService/customctasection.css";

const EcommerceCTASection = () => {
    return (
        <section className="service-cta">
            <div className="service-cta__inner">

                <p className="eyebrow service-cta__eyebrow">NEXT STEP</p>

                <h2 className="heading2 service-cta__title">
                    Let’s Map Out Your{" "}
                    <span className="service-cta__title-highlight">
                        E-Commerce Growth Plan
                    </span>
                </h2>

                <p className="subheading service-cta__subtitle">
                    We’ll review your products, audience, and current store setup,
                    then outline what a high-converting ecommerce build could look
                    like — with no pressure or obligations.
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

export default EcommerceCTASection;
