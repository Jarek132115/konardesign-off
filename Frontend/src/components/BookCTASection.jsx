import React from "react";
import "../styling/bookctasection.css";

const BookingSection = () => {
    return (
        <section className="booking-cta">
            <div className="booking-cta__inner">
                <p className="eyebrow booking-cta__eyebrow">NEXT STEP</p>

                <h2 className="heading2 booking-cta__title">
                    Let’s Map Out Your{" "}
                    <span className="booking-cta__title-highlight">
                        Website Build Plan
                    </span>
                </h2>

                <p className="subheading booking-cta__subtitle">
                    Whether you need a custom website or an e-commerce build, we’ll review
                    your goals, your current site (if you have one), and outline what a
                    high-conversion setup could look like — with zero pressure to commit.
                </p>

                <button
                    type="button"
                    className="btn btn--indigo booking-cta__button"
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

export default BookingSection;
