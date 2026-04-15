import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CustomHeroSection from "../components/CustomService/CustomHeroSection";
import IncludedSection from "../components/CustomService/IncludedSection";
import CustomProcess from "../components/CustomService/CustomProcess";
import CustomWhyWorksSection from "../components/CustomService/CustomWhyWorksSection";
import CustomGreatFitSection from "../components/CustomService/CustomGreatFitSection";
import CustomProductionReadySection from "../components/CustomService/CustomProductionReadySection";
import CustomCTASection from "../components/CustomService/CustomCTASection";

import "../styling/buttons.css";
import "../styling/servicepage.css";

/* ------------------ COMPONENT ------------------ */

const CustomService = () => {
    return (
        <div className="service-page">
            <Navbar />

            <main className="service-page__main">
                {/* HERO */}
                <CustomHeroSection />

                {/* INCLUDED */}
                <IncludedSection />

                {/* PROCESS – custom version */}
                <CustomProcess />

                {/* WHY THIS APPROACH WORKS – custom component with icons */}
                <CustomWhyWorksSection />

                {/* PRODUCTION-READY / TECH SECTION */}
                <CustomProductionReadySection />

                {/* GREAT FIT SECTION */}
                <CustomGreatFitSection />

                {/* CTA SECTION */}
                <CustomCTASection />
            </main>

            <Footer />
        </div>
    );
};

export default CustomService;
