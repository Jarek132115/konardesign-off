import React from "react";
import { useNavigate } from "react-router-dom";
import "../styling/bookctasection.css";

import ProfilePic from "../assets/images/ProfilePic.jpg";

const contactCards = [
    {
        label: "Book a Call",
        title: "Want to talk it through properly?",
        description:
            "Book a discovery call and we can go through your goals, current situation, and the best next step.",
        actionLabel: "Schedule Call",
        onClickRoute: "/book-a-call",
        isPrimary: true,
    },
    {
        label: "Email",
        title: "Prefer email? Send over the details",
        description:
            "Share your project, goals, or current situation and I will come back with clear next steps.",
        actionLabel: "hello@konardesign.com",
        href: "mailto:hello@konardesign.com",
    },
    {
        label: "WhatsApp",
        title: "Want something quicker and more direct?",
        description:
            "Message me if you want a faster conversation without the long back and forth of email.",
        actionLabel: "Message Me",
        href: "https://wa.me/447935956564",
        external: true,
    },
    {
        label: "Digital Card",
        title: "Save my details for future contact",
        description:
            "Keep my business details on hand so you can reach out again when the timing is right.",
        actionLabel: "View Card",
        href: "https://www.konarcard.com/u/konardesign",
        external: true,
    },
];

const socialLinks = [
    {
        label: "Instagram",
        short: "IG",
        href: "https://instagram.com",
    },
    {
        label: "LinkedIn",
        short: "in",
        href: "https://www.linkedin.com/in/jarek-konarski-024752274/",
    },
    {
        label: "Dribbble",
        short: "Db",
        href: "https://dribbble.com",
    },
    {
        label: "Behance",
        short: "Be",
        href: "https://behance.net",
    },
];

const BookingCTASection = () => {
    const navigate = useNavigate();

    return (
        <section className="bookcta">
            <div className="bookcta__inner">
                <header className="bookcta__header">
                    <p className="eyebrow bookcta__eyebrow">CONTACT</p>

                    <h2 className="heading2 bookcta__heading">
                        Get in <span className="bookcta__highlight">Touch</span> and
                        Let’s Build Something That Actually Works
                    </h2>

                    <p className="subheading bookcta__subtitle">
                        Whether you are starting fresh or improving what you have,
                        we can figure out the right next step together.
                    </p>
                </header>

                <div className="bookcta__lower-row">
                    <div className="bookcta__profile-column">
                        <aside className="bookcta__profile-card">
                            <div className="bookcta__profile-media">
                                <img
                                    src={ProfilePic}
                                    alt="Jarek Konarski"
                                    className="bookcta__profile-image"
                                />
                            </div>

                            <div className="bookcta__profile-details">
                                <div className="bookcta__profile-content">
                                    <h3 className="heading4 bookcta__profile-name">
                                        Jarek Konarski
                                    </h3>

                                    <p className="bookcta__profile-role">
                                        UI/UX Focused Full Stack Designer &amp; Developer
                                    </p>
                                </div>

                                <div className="bookcta__quick-list">
                                    <div className="bookcta__quick-item">
                                        <span className="bookcta__quick-key">Email</span>
                                        <a
                                            href="mailto:hello@konardesign.com"
                                            className="bookcta__quick-value"
                                        >
                                            hello@konardesign.com
                                        </a>
                                    </div>

                                    <div className="bookcta__quick-item">
                                        <span className="bookcta__quick-key">Response</span>
                                        <span className="bookcta__quick-value">
                                            1 hour - 24 hours
                                        </span>
                                    </div>

                                    <div className="bookcta__quick-item bookcta__quick-item--last">
                                        <span className="bookcta__quick-key">Based In</span>
                                        <span className="bookcta__quick-value">
                                            United Kingdom
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <div className="bookcta__cards-column">
                        <div className="bookcta__contact-grid">
                            {contactCards.map((card) => (
                                <article
                                    key={card.title}
                                    className="bookcta__contact-card"
                                >
                                    <div className="bookcta__contact-card-content">
                                        <p className="bookcta__contact-label">
                                            {card.label}
                                        </p>

                                        <h3 className="heading4 bookcta__contact-title">
                                            {card.title}
                                        </h3>

                                        <p className="body bookcta__contact-text">
                                            {card.description}
                                        </p>
                                    </div>

                                    <div className="bookcta__contact-action">
                                        {card.onClickRoute ? (
                                            <button
                                                className={`btn ${card.isPrimary
                                                        ? "btn--indigo"
                                                        : "btn--white"
                                                    } bookcta__contact-button`}
                                                onClick={() =>
                                                    navigate(card.onClickRoute)
                                                }
                                            >
                                                {card.actionLabel}
                                            </button>
                                        ) : (
                                            <a
                                                href={card.href}
                                                className="btn btn--white bookcta__contact-button"
                                                target={card.external ? "_blank" : undefined}
                                                rel={card.external ? "noreferrer" : undefined}
                                            >
                                                {card.actionLabel}
                                            </a>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bookcta__social">
                    <div className="bookcta__social-copy">
                        <h3 className="bookcta__social-title">Social Channels</h3>
                        <p className="bookcta__social-subtitle">
                            Follow along, connect properly, or keep my details close
                            for when the timing is right.
                        </p>
                    </div>

                    <div className="bookcta__social-pills">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="bookcta__pill"
                                aria-label={link.label}
                            >
                                {link.short}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingCTASection;