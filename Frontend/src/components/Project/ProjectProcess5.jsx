import React from "react";
import "../../styling/projects/project1/projectprocess5.css";

const ProjectProcess5 = () => {
    return (
        <section className="project-process project-process--step5">
            <div className="project-process__eyebrow-wrap">
                <span className="project-process__eyebrow">STEP 05</span>
            </div>

            <div className="project-process__grid">
                <div className="project-process__intro">
                    <h2 className="heading2 project-process__title">
                        Refinement and Final Polish
                    </h2>

                    <p className="subheading project-process__subtitle">
                        The final stage focused on tightening everything — refining
                        spacing, improving clarity, and making sure the experience
                        feels smooth, intentional, and complete from start to finish.
                    </p>
                </div>

                <div className="project-process__content">
                    <div className="project-process__card">
                        <h3 className="project-process__card-title">
                            Improving Small Details That Matter
                        </h3>

                        <p className="project-process__card-body">
                            Subtle adjustments to spacing, alignment, and content
                            flow helped remove friction and make the overall
                            experience feel more considered and easier to move
                            through.
                        </p>
                    </div>

                    <div className="project-process__card">
                        <h3 className="project-process__card-title">
                            Strengthening Consistency Across The Site
                        </h3>

                        <p className="project-process__card-body">
                            Every section was reviewed to ensure typography,
                            layout, and component usage felt consistent — so the
                            site reads as one complete system rather than separate
                            parts.
                        </p>
                    </div>

                    <div className="project-process__card">
                        <h3 className="project-process__card-title">
                            Preparing The Site For Launch
                        </h3>

                        <p className="project-process__card-body">
                            Final checks around responsiveness, performance, and
                            usability ensured the site was ready to go live with
                            confidence and continue evolving over time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectProcess5;