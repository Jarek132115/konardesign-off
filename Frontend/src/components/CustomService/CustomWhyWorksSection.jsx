import React from "react";
import "../../styling/CustomService/customwhyworkssection.css";

import noguessworkIcon from "../../assets/icons/noguesswork.svg";
import collaborationIcon from "../../assets/icons/collaboration.svg";
import longtermassetIcon from "../../assets/icons/longtermasset.svg";

const cards = [
    {
        title: "No Guesswork Layouts",
        body: "Every section on the page has a job — educate, reassure, or convert. Nothing is decorative for the sake of it.",
        icon: noguessworkIcon,
    },
    {
        title: "Fast, Focused Collaboration",
        body: "Weekly check-ins, async Loom walkthroughs, and clear decision points keep momentum without eating your calendar.",
        icon: collaborationIcon,
    },
    {
        title: "Built As A Long-Term Asset",
        body: "Clean structure, reusable components, and a CMS you can actually use mean you’re not rebuilding again in 12 months.",
        icon: longtermassetIcon,
    },
];

const CustomWhyWorksSection = () => {
    return (
        <section className="service-why">
            <div className="service-why__inner">
                <header className="service-why__header">
                    <p className="eyebrow service-why__eyebrow">
                        WHY THIS APPROACH WORKS
                    </p>
                    <h2 className="heading2 service-why__title">
                        Why This System{" "}
                        <span className="service-why__title-highlight">
                            Works
                        </span>{" "}
                        So Well
                    </h2>
                    <p className="subheading service-why__subtitle">
                        The structure isn’t there to slow things down — it’s there
                        to remove guesswork, keep decisions simple, and protect the
                        quality of the outcome.
                    </p>
                </header>

                <div className="service-why__grid">
                    {cards.map((card) => (
                        <article
                            key={card.title}
                            className="service-why__card"
                        >
                            <div className="service-why__icon" aria-hidden="true">
                                <img src={card.icon} alt={card.title} />
                            </div>
                            <h3 className="heading3 service-why__card-title">
                                {card.title}
                            </h3>
                            <p className="body service-why__card-body">
                                {card.body}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomWhyWorksSection;
