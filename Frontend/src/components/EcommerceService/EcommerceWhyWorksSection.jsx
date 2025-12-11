import React from "react";
import "../../styling/CustomService/customwhyworkssection.css";

import noguessworkIcon from "../../assets/icons/noguesswork.svg";
import collaborationIcon from "../../assets/icons/collaboration.svg";
import longtermassetIcon from "../../assets/icons/longtermasset.svg";

const cards = [
    {
        title: "No Guesswork Store Layouts",
        body: "Every page and section has a specific role in the buying journey — discover, compare, or checkout. Nothing is there just to ‘fill space’.",
        icon: noguessworkIcon,
    },
    {
        title: "Fast, Focused Collaboration",
        body: "Clear decision points, async Loom walkthroughs, and tight feedback loops keep the build moving without hijacking your day-to-day operations.",
        icon: collaborationIcon,
    },
    {
        title: "Built As A Revenue Asset",
        body: "Clean structure, reusable components, and a platform your team can actually use mean you’re improving the store over time — not planning a rebuild in 12 months.",
        icon: longtermassetIcon,
    },
];

const EcommerceWhyWorksSection = () => {
    return (
        <section className="service-why">
            <div className="service-why__inner">
                <header className="service-why__header">
                    <p className="eyebrow service-why__eyebrow">
                        WHY THIS APPROACH WORKS
                    </p>
                    <h2 className="heading2 service-why__title">
                        Why This E-Commerce System{" "}
                        <span className="service-why__title-highlight">
                            Works
                        </span>{" "}
                        So Well
                    </h2>
                    <p className="subheading service-why__subtitle">
                        The process is designed to remove guesswork from your
                        store build — so decisions stay simple, launches stay on
                        track, and you end up with an ecommerce site that’s easy
                        to scale and optimise.
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

export default EcommerceWhyWorksSection;
