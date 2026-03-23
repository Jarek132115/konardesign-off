import React from "react";
import "../../styling/projects/project1/projectprocess1.css";

const ProjectProcess1 = () => {
    return (
        <section className="project-process project-process--step1">
            <div className="project-process__eyebrow-wrap">
                <span className="project-process__eyebrow">STEP 01</span>
            </div>

            <div className="project-process__grid">
                <div className="project-process__intro">
                    <h2 className="heading2 project-process__title">
                        Strategy Before Screens
                    </h2>

                    <p className="subheading project-process__subtitle">
                        Before moving into layouts or styling, I focused on what
                        the site actually needed to communicate, who it was
                        speaking to, and how the experience should guide people
                        from interest to action.
                    </p>
                </div>

                <div className="project-process__content">
                    <div className="project-process__card">
                        <h3 className="project-process__card-title">
                            Understanding The Product Clearly
                        </h3>

                        <p className="project-process__card-body">
                            KonarCard was not just another website build. The
                            product itself needed explanation, because many
                            users were still thinking in terms of traditional
                            business cards rather than a more dynamic digital
                            tool.
                        </p>
                    </div>

                    <div className="project-process__card">
                        <h3 className="project-process__card-title">
                            Defining What The Website Had To Do
                        </h3>

                        <p className="project-process__card-body">
                            The site needed to educate, build trust, position
                            the product as premium, and move users toward
                            sign-up or purchase without feeling overloaded or
                            difficult to follow.
                        </p>
                    </div>

                    <div className="project-process__card">
                        <h3 className="project-process__card-title">
                            Establishing The Right Direction Early
                        </h3>

                        <p className="project-process__card-body">
                            This stage shaped the hierarchy, the messaging
                            direction, and the overall structure of the build so
                            later design decisions had a stronger foundation and
                            felt intentional rather than decorative.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectProcess1;