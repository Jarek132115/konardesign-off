import React from "react";
import "../../styling/CustomService/customgreatfitsection.css";

const fitGood = [
    "You’re ready to treat your website as a growth channel, not just a brochure.",
    "You value clarity, structure, and process as much as visual polish.",
    "You’re happy to give honest feedback and collaborate on decisions.",
    "You want a partner who’ll explain the trade-offs, not just say yes.",
];

const fitBad = [
    "You just want the cheapest possible site or a quick template clone.",
    "You’re not ready to commit time for feedback or content decisions.",
    "You’re only interested in aesthetics with no strategic backbone.",
    "You want everything done yesterday, regardless of quality.",
];

const CustomGreatFitSection = () => {
    return (
        <section className="service-fit">
            <div className="service-fit__inner">
                <header className="service-fit__header">
                    <p className="eyebrow service-fit__eyebrow">
                        WHO THIS IS FOR
                    </p>
                    <h2 className="heading2 service-fit__title">
                        When We’re A Great{" "}
                        <span className="service-fit__title-highlight">
                            Fit
                        </span>{" "}
                        — And When We’re Not
                    </h2>
                    <p className="subheading service-fit__subtitle">
                        We do our best work with teams who treat their website as
                        a growth channel, not just a checkbox. Here’s how to know
                        if that’s you.
                    </p>
                </header>

                <div className="service-fit__grid">
                    <article className="service-fit__column service-fit__column--good">
                        <h3 className="heading3 service-fit__column-title">
                            A Strong Fit If…
                        </h3>
                        <ul className="service-fit__list">
                            {fitGood.map((item) => (
                                <li
                                    key={item}
                                    className="body service-fit__item"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="service-fit__column service-fit__column--bad">
                        <h3 className="heading3 service-fit__column-title">
                            Probably Not A Fit If…
                        </h3>
                        <ul className="service-fit__list">
                            {fitBad.map((item) => (
                                <li
                                    key={item}
                                    className="body service-fit__item"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default CustomGreatFitSection;
