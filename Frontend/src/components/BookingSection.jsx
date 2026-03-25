import React, { useEffect, useRef } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import "../styling/bookingsection.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProfilePic from "../assets/images/ProfilePic.jpg";

gsap.registerPlugin(ScrollTrigger);

const contactCards = [
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
        href: "https://wa.me/",
        external: true,
    },
    {
        label: "LinkedIn",
        title: "Reach out professionally or stay connected",
        description:
            "A good option if you want to connect there first, follow along, or message me directly.",
        actionLabel: "View LinkedIn",
        href: "https://linkedin.com",
        external: true,
    },
    {
        label: "Digital Card",
        title: "Save my details for future contact",
        description:
            "Keep my business details on hand so you can reach out again when the timing is right.",
        actionLabel: "View Card",
        href: "#",
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
        href: "https://linkedin.com",
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
    const sectionRef = useRef(null);

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

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const eyebrowEl = sectionEl.querySelector(".booking__eyebrow");
        const titleEl = sectionEl.querySelector(".booking__title");
        const subtitleEl = sectionEl.querySelector(".booking__subtitle");
        const layoutEl = sectionEl.querySelector(".booking__layout");
        const cards = sectionEl.querySelectorAll(".booking__contact-card");
        const socialEl = sectionEl.querySelector(".booking__social");

        if (!eyebrowEl || !titleEl || !subtitleEl || !layoutEl) return;

        const originalText = titleEl.textContent;
        titleEl.textContent = "";

        const words = originalText.split(" ");

        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.classList.add("booking__title-word");
            wordWrapper.style.display = "inline-block";

            for (const ch of word) {
                const charSpan = document.createElement("span");
                charSpan.textContent = ch;
                charSpan.style.display = "inline-block";
                charSpan.style.opacity = "0";
                charSpan.style.transform = "translateY(8px)";
                wordWrapper.appendChild(charSpan);
            }

            titleEl.appendChild(wordWrapper);

            if (wordIndex !== words.length - 1) {
                titleEl.appendChild(document.createTextNode(" "));
            }
        });

        const wordSpans = titleEl.querySelectorAll(".booking__title-word");
        const highlightSet = new Set(["time", "you"]);

        wordSpans.forEach((wordSpan) => {
            const cleaned = wordSpan.textContent
                .replace(/[^\w-]/g, "")
                .toLowerCase();

            if (highlightSet.has(cleaned)) {
                wordSpan.classList.add("booking__title-highlight");
            }
        });

        const charSpans = titleEl.querySelectorAll(".booking__title-word span");

        gsap.set(subtitleEl, { opacity: 0, y: 8 });
        gsap.set(layoutEl, { opacity: 0, y: 18 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionEl,
                start: "top 75%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        tl.fromTo(
            eyebrowEl,
            { opacity: 0, y: 8 },
            {
                opacity: 1,
                y: 0,
                duration: 0.25,
            }
        )
            .to(
                charSpans,
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.018,
                    duration: 0.26,
                },
                ">-0.05"
            )
            .fromTo(
                subtitleEl,
                { opacity: 0, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.28,
                },
                ">-0.08"
            )
            .fromTo(
                layoutEl,
                { opacity: 0, y: 18 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.42,
                },
                ">-0.04"
            );

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 22 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 84%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        if (socialEl) {
            gsap.fromTo(
                socialEl,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.42,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: socialEl,
                        start: "top 84%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section className="booking" ref={sectionRef}>
            <div className="booking__inner">
                <header className="booking__header">
                    <p className="eyebrow booking__eyebrow">Book a discovery call</p>

                    <h1 className="heading1 booking__title">
                        Choose a time that works best for you.
                    </h1>

                    <p className="subheading booking__subtitle">
                        Schedule a 30-minute call and we will talk through your
                        goals, challenges, and what you are looking to build.
                        Whether you prefer booking directly, emailing first, or
                        reaching out another way, everything you need is here.
                    </p>
                </header>

                <div className="booking__layout">
                    <aside className="booking__info-panel">
                        <div className="booking__profile-media">
                            <img
                                src={ProfilePic}
                                alt="Jarek Konarski"
                                className="booking__profile-image"
                            />
                        </div>

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
                                    1 hour - 24 hours
                                </span>
                            </div>

                            <div className="booking__quick-item booking__quick-item--last">
                                <span className="booking__quick-key">Based In</span>
                                <span className="booking__quick-value">
                                    United Kingdom
                                </span>
                            </div>
                        </div>
                    </aside>

                    <div className="booking__embed-panel">
                        <div className="booking__embed-shell">
                            <div className="booking__embed">
                                <Cal
                                    namespace="30min"
                                    calLink="konardesign/30min"
                                    style={{
                                        width: "100%",
                                    }}
                                    config={{
                                        layout: "month_view",
                                        theme: "light",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="booking__contact-grid">
                    {contactCards.map((card) => (
                        <article
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
                        </article>
                    ))}
                </div>

                <div className="booking__social">
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
                </div>
            </div>
        </section>
    );
};

export default BookingSection;