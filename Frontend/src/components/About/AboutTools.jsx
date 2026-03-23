import React from "react";
import "../../styling/about/abouttools.css";

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
        subtitle: "Interface design and systems",
        icon: figmaIcon,
    },
    {
        name: "Framer",
        subtitle: "Fast visual web building",
        icon: framerIcon,
    },
    {
        name: "Webflow",
        subtitle: "Responsive no-code development",
        icon: webflowIcon,
    },
    {
        name: "GitHub",
        subtitle: "Version control and collaboration",
        icon: githubIcon,
    },
    {
        name: "Vercel",
        subtitle: "Deployment and hosting workflow",
        icon: vercelIcon,
    },
    {
        name: "VSCode",
        subtitle: "Frontend / backend development",
        icon: vscodeIcon,
    },
    {
        name: "Notion",
        subtitle: "Planning and project organisation",
        icon: notionIcon,
    },
    {
        name: "Photoshop",
        subtitle: "Mockups and image editing",
        icon: photoshopIcon,
    },
    {
        name: "Illustrator",
        subtitle: "Vector graphics and assets",
        icon: illustratorIcon,
    },
    {
        name: "After Effects",
        subtitle: "Motion and visual polish",
        icon: afterEffectsIcon,
    },
    {
        name: "AI Tools",
        subtitle: "Research and workflow support",
        icon: aiIcon,
    },
];

const AboutTools = () => {
    const topRow = tools.slice(0, 6);
    const bottomRow = tools.slice(6);

    return (
        <section className="abouttools">
            <div className="abouttools__inner">
                <header className="abouttools__header">
                    <p className="eyebrow abouttools__eyebrow">
                        TOOLS & STACK
                    </p>

                    <h2 className="heading2 abouttools__title">
                        The Tools I Use to{" "}
                        <span className="abouttools__highlight">
                            Design, Build, and Ship
                        </span>
                    </h2>

                    <p className="subheading abouttools__subtitle">
                        A focused set of tools across design, development, and
                        delivery that helps me take projects from early ideas to
                        polished final builds.
                    </p>
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
        </section>
    );
};

export default AboutTools;