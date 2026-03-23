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
import ProjectFinalLooks from "../components/Project/ProjectFinalLooks";
import ProjectResults from "../components/Project/ProjectResults";

import "../styling/buttons.css";
import "../styling/projectpage.css";

import konarVideoSecondary from "../assets/videos/KonarCard2.mp4";

const Project1 = () => {
    return (
        <div className="project-page">
            <Navbar />

            <main className="project-page__main">
                <ProjectHero />

                <ProjectDescription />

                <ProjectStyling />

                <section className="project-media-break">
                    <div className="project-media-break__container">
                        <div className="project-media-break__inner">
                            <video
                                src={konarVideoSecondary}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="project-media-break__video"
                            />
                        </div>
                    </div>
                </section>

                <ProjectProcess1 />
                <ProjectProcess2 />
                <ProjectProcess3 />
                <ProjectProcess4 />
                <ProjectProcess5 />

                <ProjectFinalLooks />

                <ProjectResults />
            </main>

            <Footer />
        </div>
    );
};

export default Project1;