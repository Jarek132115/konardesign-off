import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styling/about/aboutcta.css";
import AnimatedSection from "../animations/AnimatedSection";
import AnimatedHeading from "../animations/AnimatedHeading";
import FadeUp from "../animations/FadeUp";

const AboutCTA = () => {
    const navigate = useNavigate();

    return (
        <AnimatedSection className="aboutcta">
            <div className="aboutcta__inner">
                <div className="aboutcta__card">
                    <p className="eyebrow aboutcta__eyebrow">NEXT STEP</p>

                    <AnimatedHeading
                        as="h2"
                        text="If You Want a Website That Actually Works Properly, Let’s Talk"
                        className="heading2 aboutcta__title"
                        highlightWords={["Actually", "Works", "Properly"]}
                        highlightClassName="aboutcta__highlight"
                    />

                    <FadeUp
                        as="p"
                        className="subheading aboutcta__subtitle"
                        afterHeading="If You Want a Website That Actually Works Properly, Let’s Talk"
                    >
                        If you are planning a new site or improving what you
                        already have, we can go through your situation and work
                        out the right next step.
                    </FadeUp>

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
        </AnimatedSection>
    );
};

export default AboutCTA;