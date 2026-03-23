import React from "react";
import "../../styling/projects/project1/projectprocess2.css";

const ProjectProcess2 = () => {
    return (
        <section className="project-process project-process--step2">
            <div className="project-process__eyebrow-wrap">
                <span className="project-process__eyebrow">STEP 02</span>
            </div>

            <div className="project-process__grid">
                <div className="project-process__intro">
                    <h2 className="heading2 project-process__title">
                        Structure and Hierarchy
                    </h2>

                    <p className="subheading project-process__subtitle">
                        Once the direction was clear, the next step was shaping the
                        page structure so the content felt easier to scan, easier to
                        understand, and much stronger in how it guided attention.
                    </p>
                </div>

                <div className="project-process__content">
                    <div className="project-process__card">
                        <h3 className="project-process__card-title">
                            Prioritising What Users Need First
                        </h3>

                        <p className="project-process__card-body">
                            The layout had to lead with the strongest value points
                            early, reduce friction in the first few sections, and
                            make it immediately obvious what KonarCard offers and
                            why it matters.
                        </p>
                    </div>

                    <div className="project-process__card">
                        <h3 className="project-process__card-title">
                            Creating Clearer Content Flow
                        </h3>

                        <p className="project-process__card-body">
                            Each section was arranged to build naturally on the last
                            one, moving from explanation to trust, then into product
                            detail, comparison, and action without making the page
                            feel crowded.
                        </p>
                    </div>

                    <div className="project-process__card">
                        <h3 className="project-process__card-title">
                            Strengthening Visual Hierarchy
                        </h3>

                        <p className="project-process__card-body">
                            Spacing, heading scale, section rhythm, and content
                            grouping were all shaped to create a more premium flow,
                            helping users focus on the right information at the
                            right time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectProcess2;