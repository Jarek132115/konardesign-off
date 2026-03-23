import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ProjectHero from "../components/Project/ProjectHero";
import ProjectDescription from "../components/Project/ProjectDescription";
import ProjectStyling from "../components/Project/ProjectStyling";
import ProjectProcess1 from "../components/Project/ProjectProcess1";
import ProjectProcess2 from "../components/Project/ProjectProcess2";
import ProjectProcess3 from "../components/Project/ProjectProcess3";
import ProjectProcess4 from "../components/Project/ProjectProcess4";
import ProjectProcess5 from "../components/Project/ProjectProcess5";
import ProjectResults from "../components/Project/ProjectResults";
import ProjectFinalLooks from "../components/Project/ProjectFinalLooks";

import "../styling/buttons.css";
import "../styling/projectpage.css";

const Project1 = () => {
    return (
        <div className="project-page">
            <Navbar />

            <main className="project-page__main">
                <ProjectHero />

                <ProjectDescription />

                <ProjectStyling />

                <ProjectProcess1 />
                <ProjectProcess2 />
                <ProjectProcess3 />
                <ProjectProcess4 />
                <ProjectProcess5 />

                <ProjectResults />

                <ProjectFinalLooks />
            </main>

            <Footer />
        </div>
    );
};

export default Project1;