import React from "react";
import "../../styling/projects/project1/projectprocess4.css";

const ProjectProcess4 = () => {
    return (
        <section className="project-process project-process--step4">
            <div className="project-process__eyebrow-wrap">
                <span className="project-process__eyebrow">STEP 04</span>
            </div>

            <div className="project-process__grid">
                <div className="project-process__intro">
                    <h2 className="heading2 project-process__title">
                        Development and Performance
                    </h2>

                    <p className="subheading project-process__subtitle">
                        With the design direction defined, the focus shifted to
                        building the site properly — making sure it performs fast,
                        scales cleanly, and works smoothly across all devices.
                    </p>
                </div>

                <div className="project-process__content">
                    <div className="project-process__card">
                        <h3 className="project-process__card-title">
                            Turning Design Into A Real Product
                        </h3>

                        <p className="project-process__card-body">
                            Every layout was translated into a clean, structured
                            build, ensuring the final result matched the design
                            closely while still being maintainable and flexible
                            for future updates.
                        </p>
                    </div>

                    <div className="project-process__card">
                        <h3 className="project-process__card-title">
                            Building With Performance In Mind
                        </h3>

                        <p className="project-process__card-body">
                            The site was developed to load quickly and run
                            smoothly, with optimised assets, efficient structure,
                            and minimal overhead so users don’t experience delays
                            or friction.
                        </p>
                    </div>

                    <div className="project-process__card">
                        <h3 className="project-process__card-title">
                            Making It Reliable Across Devices
                        </h3>

                        <p className="project-process__card-body">
                            Special attention was given to responsiveness and
                            consistency, making sure the experience feels just as
                            strong on mobile as it does on larger screens.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectProcess4;