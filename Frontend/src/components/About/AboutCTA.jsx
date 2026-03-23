import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styling/about/aboutcta.css";

const AboutCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="aboutcta">
            <div className="aboutcta__inner">
                <div className="aboutcta__card">
                    <p className="eyebrow aboutcta__eyebrow">NEXT STEP</p>

                    <h2 className="heading2 aboutcta__title">
                        If You Want a Website That Feels Better and{" "}
                        <span className="aboutcta__highlight">
                            Performs Better
                        </span>
                        , Let’s Talk
                    </h2>

                    <p className="subheading aboutcta__subtitle">
                        Whether you are starting from scratch or improving an
                        existing site, we can work out the right direction
                        together.
                    </p>

                    <div className="aboutcta__actions">
                        <button
                            className="btn btn--indigo"
                            onClick={() => navigate("/book-a-call")}
                        >
                            Book a Call
                        </button>

                        <button
                            className="btn btn--white"
                            onClick={() => navigate("/projects")}
                        >
                            View My Work
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;