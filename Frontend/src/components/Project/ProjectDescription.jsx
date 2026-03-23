import React from "react";
import "../../styling/projects/project1/projectdescription.css";

const ProjectDescription = () => {
    return (
        <section className="project-description">
            <div className="project-description__inner">
                <header className="project-description__header">
                    <h2 className="heading2 project-description__title">
                        The Challenge
                    </h2>

                    <p className="project-description__lead">
                        KonarCard set out to redefine how tradespeople and business
                        owners connect, but needed a digital experience that matched
                        that ambition. These were the main challenges that needed to
                        be solved.
                    </p>
                </header>

                <div className="project-description__grid project-description__grid--two">
                    <article className="project-description__item">
                        <h3 className="project-description__item-title">
                            Old-School Market Perception
                        </h3>

                        <p className="project-description__item-body">
                            The audience was used to traditional business cards and
                            word-of-mouth referrals, not digital-first experiences
                            with clear landing pages, stronger messaging, and modern
                            value presentation.
                        </p>
                    </article>

                    <article className="project-description__item">
                        <h3 className="project-description__item-title">
                            Complex Custom Functionality
                        </h3>

                        <p className="project-description__item-body">
                            The platform needed to support dynamic user profiles,
                            account flows, calls to action, and sales-driven
                            journeys without making the experience feel heavy or
                            confusing.
                        </p>
                    </article>

                    <article className="project-description__item">
                        <h3 className="project-description__item-title">
                            Clearer Value Communication
                        </h3>

                        <p className="project-description__item-body">
                            The site needed to explain not only what a digital
                            business card is, but why it is more useful, more modern,
                            and more effective than a traditional one.
                        </p>
                    </article>

                    <article className="project-description__item">
                        <h3 className="project-description__item-title">
                            Mobile-First Expectations
                        </h3>

                        <p className="project-description__item-body">
                            The audience browses and buys on mobile, so the
                            experience had to feel fast, intuitive, and premium on
                            smaller screens while still holding up on desktop.
                        </p>
                    </article>
                </div>

                <header className="project-description__header project-description__header--spaced">
                    <h2 className="heading2 project-description__title">
                        The Solution
                    </h2>

                    <p className="project-description__lead">
                        I designed and developed a custom e-commerce experience that
                        combined education, clarity, conversion thinking, and a bold
                        visual system that felt distinct to the product.
                    </p>
                </header>

                <div className="project-description__grid project-description__grid--two">
                    <article className="project-description__item">
                        <h3 className="project-description__item-title">
                            Educating The Market Through The Homepage
                        </h3>

                        <p className="project-description__item-body">
                            I built a homepage structure that explains the product
                            clearly, shows why it matters, and reduces friction for
                            users discovering the idea of a digital business card for
                            the first time.
                        </p>
                    </article>

                    <article className="project-description__item">
                        <h3 className="project-description__item-title">
                            Conversion-Focused E-Commerce Flow
                        </h3>

                        <p className="project-description__item-body">
                            From the hero section to plan comparison, FAQs, and
                            checkout pathways, the experience was shaped to keep the
                            offer understandable and move users closer to purchase.
                        </p>
                    </article>

                    <article className="project-description__item">
                        <h3 className="project-description__item-title">
                            Scalable And Responsive Build
                        </h3>

                        <p className="project-description__item-body">
                            The site was built to be fast, flexible, and easy to grow
                            over time, with a cleaner structure, reusable sections,
                            and responsive layouts that hold together properly.
                        </p>
                    </article>

                    <article className="project-description__item">
                        <h3 className="project-description__item-title">
                            Brand-Led Visual Direction
                        </h3>

                        <p className="project-description__item-body">
                            The visual language leaned into bold typography, stronger
                            contrast, and a more premium presentation so the product
                            felt more established, more modern, and more memorable.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default ProjectDescription;