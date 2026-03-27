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
                        If You Want a Website That{" "}
                        <span className="aboutcta__highlight">
                            Actually Works Properly
                        </span>
                        , Let’s Talk
                    </h2>

                    <p className="subheading aboutcta__subtitle">
                        If you are planning a new site or improving what you
                        already have, we can go through your situation and work
                        out the right next step.
                    </p>

                    <div className="aboutcta__actions">
                        <button
                            className="btn btn--indigo"
                            onClick={() => navigate("/book-a-call")}
                        >
                            Contact Me
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