import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import "../styling/bookingsection.css";

import AnimatedHeading from "./animations/AnimatedHeading";
import FadeUp from "./animations/FadeUp";
import { StaggerGroup, StaggerItem } from "./animations/StaggerGroup";
import AnimatedSection from "./animations/AnimatedSection";

import ProfilePic from "../assets/images/ProfilePic.jpg";

const contactCards = [
    {
        label: "Email",
        title: "Prefer email? Send over the details",
        description:
            "Share your project, goals, or current situation and I will come back with clear, practical next steps.",
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
        label: "LinkedIn",
        title: "Reach out professionally or stay connected",
        description:
            "A good option if you want to connect there first, follow along, or message me directly.",
        actionLabel: "View LinkedIn",
        href: "https://www.linkedin.com/in/jarek-konarski-024752274/",
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

const BookingSection = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "30min" });

            cal("ui", {
                theme: "light",
                layout: "month_view",
                hideEventTypeDetails: false,
                cssVarsPerTheme: {
                    light: {
                        "cal-brand": "#4F46E5",
                        "cal-text": "#0F172A",
                        "cal-background": "transparent",
                    },
                    dark: {
                        "cal-brand": "#4F46E5",
                    },
                },
            });
        })();
    }, []);

    return (
        <AnimatedSection className="booking">
            <div className="booking__inner">
                <header className="booking__header">
                    <FadeUp as="p" className="eyebrow booking__eyebrow">
                        Contact
                    </FadeUp>

                    <AnimatedHeading
                        as="h1"
                        className="heading1 booking__title"
                        wordClassName="booking__title-word"
                        highlightWords={["Your", "Project"]}
                        highlightClassName="booking__title-highlight"
                        text="Let’s Talk About Your Project"
                    />

                    <FadeUp as="p" className="subheading booking__subtitle" afterHeading="Let’s Talk About Your Project">
                        Whether you are starting fresh or improving what you already
                        have, we can work out the right next step clearly.
                    </FadeUp>
                </header>

                <FadeUp className="booking__calendar-wrap" y={18} duration={0.5}>
                    <div className="booking__calendar-embed">
                        <Cal
                            namespace="30min"
                            calLink="konardesign/30min"
                            style={{ width: "100%" }}
                            config={{
                                layout: "month_view",
                                theme: "light",
                            }}
                        />
                    </div>
                </FadeUp>

                <FadeUp className="booking__lower-row" y={18} duration={0.55}>
                    <div className="booking__profile-column">
                        <aside className="booking__profile-card">
                            <div className="booking__profile-media">
                                <img
                                    src={ProfilePic}
                                    alt="Jarek Konarski"
                                    className="booking__profile-image"
                                />
                            </div>

                            <div className="booking__profile-details">
                                <div className="booking__profile-content">
                                    <h2 className="heading4 booking__profile-name">
                                        Jarek Konarski
                                    </h2>

                                    <p className="booking__profile-role">
                                        UI/UX Focused Full Stack Designer &amp; Developer
                                    </p>
                                </div>

                                <div className="booking__quick-list">
                                    <div className="booking__quick-item">
                                        <span className="booking__quick-key">Email</span>
                                        <a
                                            href="mailto:hello@konardesign.com"
                                            className="booking__quick-value"
                                        >
                                            hello@konardesign.com
                                        </a>
                                    </div>

                                    <div className="booking__quick-item">
                                        <span className="booking__quick-key">Response</span>
                                        <span className="booking__quick-value">
                                            Within 24 hours
                                        </span>
                                    </div>

                                    <div className="booking__quick-item booking__quick-item--last">
                                        <span className="booking__quick-key">Based In</span>
                                        <span className="booking__quick-value">
                                            United Kingdom
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <div className="booking__cards-column">
                        <StaggerGroup className="booking__contact-grid" stagger={0.06}>
                            {contactCards.map((card) => (
                                <StaggerItem
                                    as="article"
                                    key={card.title}
                                    className="booking__contact-card"
                                >
                                    <div className="booking__contact-card-content">
                                        <p className="booking__contact-label">
                                            {card.label}
                                        </p>

                                        <h3 className="heading4 booking__contact-title">
                                            {card.title}
                                        </h3>

                                        <p className="body booking__contact-text">
                                            {card.description}
                                        </p>
                                    </div>

                                    <div className="booking__contact-action">
                                        <a
                                            href={card.href}
                                            className="btn btn--white booking__contact-button"
                                            target={card.external ? "_blank" : undefined}
                                            rel={card.external ? "noreferrer" : undefined}
                                        >
                                            {card.actionLabel}
                                        </a>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerGroup>
                    </div>
                </FadeUp>

                <FadeUp className="booking__social" y={20} duration={0.5}>
                    <div className="booking__social-copy">
                        <h3 className="booking__social-title">Social Channels</h3>
                        <p className="booking__social-subtitle">
                            Follow along, connect properly, or keep my details close
                            for when the timing is right.
                        </p>
                    </div>

                    <div className="booking__social-pills">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="booking__pill"
                                aria-label={link.label}
                            >
                                {link.short}
                            </a>
                        ))}
                    </div>
                </FadeUp>
            </div>
        </AnimatedSection>
    );
};

export default BookingSection;
