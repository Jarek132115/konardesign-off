import React from "react";
import "../../styling/CustomService/customgreatfitsection.css";

const fitGood = [
    "You treat your online store as a revenue engine — not just a place to display products.",
    "You want a strategic partner who understands conversion, UX, SEO, and the full buying journey.",
    "You’re willing to collaborate, provide feedback, and make decisions that move the build forward.",
    "You value long-term scalability over quick templates or short-term patches.",
];

const fitBad = [
    "You just want the cheapest possible store or a near-copy of another Shopify theme.",
    "You’re not ready to provide product info, content, or timely feedback during the build.",
    "You only care about aesthetics and not the conversion metrics that actually drive sales.",
    "You expect a full-scale ecommerce build instantly, regardless of scope or quality.",
];

const EcommerceGreatFitSection = () => {
    return (
        <section className="service-fit">
            <div className="service-fit__inner">

                <header className="service-fit__header">
                    <p className="eyebrow service-fit__eyebrow">WHO THIS IS FOR</p>

                    <h2 className="heading2 service-fit__title">
                        When We’re A Great{" "}
                        <span className="service-fit__title-highlight">Fit</span>{" "}
                        — And When We’re Not
                    </h2>

                    <p className="subheading service-fit__subtitle">
                        We deliver the best results for ecommerce brands who care about
                        growth, performance, and a store engineered to convert — not
                        just a pretty theme. Here’s how to know if we’re aligned.
                    </p>
                </header>

                <div className="service-fit__grid">

                    <article className="service-fit__column service-fit__column--good">
                        <h3 className="heading3 service-fit__column-title">
                            A Strong Fit If…
                        </h3>
                        <ul className="service-fit__list">
                            {fitGood.map((item) => (
                                <li key={item} className="body service-fit__item">
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
                                <li key={item} className="body service-fit__item">
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

export default EcommerceGreatFitSection;
