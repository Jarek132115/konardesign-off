// src/pages/EcommerceService.jsx
import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import EcommerceHeroSection from "../components/EcommerceService/EcommerceHeroSection";
import EcommerceIncludedSection from "../components/EcommerceService/EcommerceIncludedSection";
import EcommerceProcess from "../components/EcommerceService/EcommerceProcess";
import EcommerceWhyWorksSection from "../components/EcommerceService/EcommerceWhyWorksSection";
import EcommerceProductionReadySection from "../components/EcommerceService/EcommerceProductionReadySection";
import EcommerceGreatFitSection from "../components/EcommerceService/EcommerceGreatFitSection";
import EcommerceCTASection from "../components/EcommerceService/EcommerceCTASection";

import "../styling/buttons.css";
import "../styling/servicepage.css";

const EcommerceService = () => {
    return (
        <div className="service-page">
            <Navbar />

            <main className="service-page__main">
                <EcommerceHeroSection />
                <EcommerceIncludedSection />
                <EcommerceProcess />
                <EcommerceWhyWorksSection />
                <EcommerceProductionReadySection />
                <EcommerceGreatFitSection />
                <EcommerceCTASection />
            </main>

            <Footer />
        </div>
    );
};

export default EcommerceService;
