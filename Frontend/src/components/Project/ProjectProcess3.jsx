import React from "react";
import "../../styling/projects/project1/projectprocess3.css";

const ProjectProcess3 = () => {
    return (
        <section className="project-process project-process--step3">
            <div className="project-process__eyebrow-wrap">
                <span className="project-process__eyebrow">STEP 03</span>
            </div>

            <div className="project-process__grid">
                <div className="project-process__intro">
                    <h2 className="heading2 project-process__title">
                        Visual Direction and Brand Feel
                    </h2>

                    <p className="subheading project-process__subtitle">
                        Once the structure was in place, the focus shifted to how
                        the site should feel visually — bold enough to stand out,
                        clear enough to guide users, and polished enough to make
                        the product feel more established.
                    </p>
                </div>

                <div className="project-process__content">
                    <div className="project-process__card">
                        <h3 className="project-process__card-title">
                            Building A More Premium Look
                        </h3>

                        <p className="project-process__card-body">
                            The visual direction needed to feel sharper and more
                            deliberate than a typical startup site, so the design
                            leaned into stronger typography, cleaner spacing, and a
                            more controlled presentation throughout.
                        </p>
                    </div>

                    <div className="project-process__card">
                        <h3 className="project-process__card-title">
                            Using Contrast To Guide Attention
                        </h3>

                        <p className="project-process__card-body">
                            Colour, contrast, and emphasis were used carefully to
                            highlight key moments on the page, helping calls to
                            action, pricing areas, and important content feel easier
                            to spot without overwhelming the layout.
                        </p>
                    </div>

                    <div className="project-process__card">
                        <h3 className="project-process__card-title">
                            Making The Product Feel Distinct
                        </h3>

                        <p className="project-process__card-body">
                            The final visual system helped separate KonarCard from
                            more generic business card tools by giving it a clearer
                            personality, a stronger presence, and a more memorable
                            digital identity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectProcess3;