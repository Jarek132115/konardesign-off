import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AboutHero from "../components/About/AboutHero";
import AboutApproach from "../components/About/AboutApproach";
import AboutWork from "../components/About/AboutWork";
import AboutFocus from "../components/About/AboutFocus";
import AboutValues from "../components/About/AboutValues";
import AboutTools from "../components/About/AboutTools";
import AboutCTA from "../components/About/AboutCTA";

import "../styling/aboutpage.css";

const AboutMe = () => {
    return (
        <>
            <Navbar />

            <main className="aboutpage">
                <AboutHero />
                <AboutApproach />
                <AboutWork />
                <AboutFocus />
                {/* <AboutValues /> */}
                <AboutTools />
                <AboutCTA />
            </main>

            <Footer />
        </>
    );
};

export default AboutMe;