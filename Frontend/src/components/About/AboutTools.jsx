import React from "react";
import "../../styling/about/abouttools.css";
import AnimatedSection from "../animations/AnimatedSection";
import AnimatedHeading from "../animations/AnimatedHeading";
import FadeUp from "../animations/FadeUp";

import figmaIcon from "../../assets/icons/Tools-Figma.svg";
import framerIcon from "../../assets/icons/Tools-Framer.svg";
import webflowIcon from "../../assets/icons/Tools-Webflow.svg";
import githubIcon from "../../assets/icons/Tools-Github.svg";
import vercelIcon from "../../assets/icons/Tools-Vercel.svg";
import vscodeIcon from "../../assets/icons/Tools-VSCode.svg";
import notionIcon from "../../assets/icons/Tools-Notion.svg";
import photoshopIcon from "../../assets/icons/Tools-Photoshop.svg";
import illustratorIcon from "../../assets/icons/Tools-Illustrator.svg";
import afterEffectsIcon from "../../assets/icons/Tools-AfterEffects.svg";
import aiIcon from "../../assets/icons/Tools_AI.svg";

const tools = [
    {
        name: "Figma",
        subtitle: (
            <>
                Interface design
                <br />
                and systems
            </>
        ),
        icon: figmaIcon,
    },
    {
        name: "Framer",
        subtitle: (
            <>
                Fast visual web
                <br />
                building
            </>
        ),
        icon: framerIcon,
    },
    {
        name: "Webflow",
        subtitle: (
            <>
                Responsive no-code
                <br />
                development
            </>
        ),
        icon: webflowIcon,
    },
    {
        name: "GitHub",
        subtitle: (
            <>
                Version control and
                <br />
                collaboration
            </>
        ),
        icon: githubIcon,
    },
    {
        name: "Vercel",
        subtitle: (
            <>
                Deployment and
                <br />
                hosting workflow
            </>
        ),
        icon: vercelIcon,
    },
    {
        name: "VSCode",
        subtitle: (
            <>
                Frontend / backend
                <br />
                development
            </>
        ),
        icon: vscodeIcon,
    },
    {
        name: "Notion",
        subtitle: (
            <>
                Planning and project
                <br />
                organisation
            </>
        ),
        icon: notionIcon,
    },
    {
        name: "Photoshop",
        subtitle: (
            <>
                Mockups and image
                <br />
                editing
            </>
        ),
        icon: photoshopIcon,
    },
    {
        name: "Illustrator",
        subtitle: (
            <>
                Vector graphics
                <br />
                and assets
            </>
        ),
        icon: illustratorIcon,
    },
    {
        name: "After Effects",
        subtitle: (
            <>
                Motion and
                <br />
                visual polish
            </>
        ),
        icon: afterEffectsIcon,
    },
    {
        name: "AI Tools",
        subtitle: (
            <>
                Research and
                <br />
                workflow support
            </>
        ),
        icon: aiIcon,
    },
];

const AboutTools = () => {
    const topRow = tools.slice(0, 6);
    const bottomRow = tools.slice(6);

    return (
        <AnimatedSection className="abouttools">
            <div className="abouttools__inner">
                <header className="abouttools__header">
                    <p className="eyebrow abouttools__eyebrow">
                        TOOLS & STACK
                    </p>

                    <AnimatedHeading
                        as="h2"
                        text="The Tools I Use to Design, Build, and Ship"
                        className="heading2 abouttools__title"
                        highlightWords={["Design", "Build", "Ship"]}
                        highlightClassName="abouttools__highlight"
                    />

                    <FadeUp
                        as="p"
                        className="subheading abouttools__subtitle"
                        afterHeading="The Tools I Use to Design, Build, and Ship"
                    >
                        A focused toolset across design, development, and
                        delivery that helps me take projects from early ideas to
                        polished final builds.
                    </FadeUp>
                </header>

                <div className="abouttools__grid">
                    <div className="abouttools__row abouttools__row--top">
                        {topRow.map((tool) => (
                            <article key={tool.name} className="abouttools__card">
                                <div className="abouttools__icon-wrap">
                                    <img
                                        src={tool.icon}
                                        alt={tool.name}
                                        className="abouttools__icon"
                                        draggable="false"
                                    />
                                </div>

                                <h3 className="abouttools__card-title">
                                    {tool.name}
                                </h3>

                                <p className="abouttools__card-subtitle">
                                    {tool.subtitle}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="abouttools__row abouttools__row--bottom">
                        {bottomRow.map((tool) => (
                            <article key={tool.name} className="abouttools__card">
                                <div className="abouttools__icon-wrap">
                                    <img
                                        src={tool.icon}
                                        alt={tool.name}
                                        className="abouttools__icon"
                                        draggable="false"
                                    />
                                </div>

                                <h3 className="abouttools__card-title">
                                    {tool.name}
                                </h3>

                                <p className="abouttools__card-subtitle">
                                    {tool.subtitle}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default AboutTools;