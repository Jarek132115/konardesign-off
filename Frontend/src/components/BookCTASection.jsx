import React from "react";
import { useNavigate } from "react-router-dom";
import "../styling/bookctasection.css";

import sendEmailImg from "../assets/images/sendemail.png";
import sendMessageImg from "../assets/images/sendmessage.png";
import newsletterImg from "../assets/images/newsletter.png";

const BookingCTASection = () => {
    const navigate = useNavigate();

    return (
        <section className="bookcta">
            <div className="bookcta__inner">
                {/* MAIN SECTION HEADING (back) */}
                <header className="bookcta__header">
                    <p className="eyebrow bookcta__eyebrow">NEXT STEP</p>
                    <h2 className="heading2 bookcta__title">
                        Let’s Map Out Your{" "}
                        <span className="bookcta__title-highlight">Website Build Plan</span>
                    </h2>
                    <p className="subheading bookcta__subtitle">
                        Whether you need a custom website or an e-commerce build, we’ll review your
                        goals, your current site (if you have one), and outline what a high-conversion
                        setup could look like — with zero pressure to commit.
                    </p>
                </header>

                {/* TOP: Schedule card */}
                <div className="bookcta__schedule">
                    <div className="bookcta__schedule-left">
                        <h3 className="bookcta__schedule-title">Schedule a Meeting</h3>
                        <p className="bookcta__schedule-subtitle">
                            Let’s schedule a quick discovery call. We’ll walk through your goals, your
                            timeline, and what you’re looking to build.
                        </p>

                        <button
                            type="button"
                            className="btn btn--indigo bookcta__schedule-btn"
                            onClick={() => navigate("/book-a-call")}
                        >
                            Schedule Now
                        </button>
                    </div>

                    <div className="bookcta__schedule-right" aria-hidden="true">
                        <div className="bookcta__mock">
                            <div className="bookcta__mock-avatar" />
                            <div className="bookcta__mock-lines">
                                <div className="bookcta__mock-line" />
                                <div className="bookcta__mock-line bookcta__mock-line--short" />
                            </div>
                            <div className="bookcta__mock-pills">
                                <div className="bookcta__mock-pill" />
                                <div className="bookcta__mock-pill bookcta__mock-pill--muted" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* MIDDLE: 3 cards (match inspiration behavior) */}
                <div className="bookcta__grid">
                    {/* Email */}
                    <article className="bookcta__card">
                        <img className="bookcta__bg" src={sendEmailImg} alt="" />

                        {/* blurred content panel sits ABOVE CTA area, not on top of the image */}
                        <div className="bookcta__panel">
                            <h3 className="bookcta__card-title">Email</h3>
                            <p className="bookcta__card-desc">
                                Send us a quick email about your project and we’ll get back to you as soon
                                as possible.
                            </p>
                        </div>

                        <div className="bookcta__bottom">
                            <button
                                type="button"
                                className="bookcta__pillbtn"
                                onClick={() => (window.location.href = "mailto:hello@konardesign.com")}
                            >
                                Email Us
                            </button>
                        </div>
                    </article>

                    {/* WhatsApp */}
                    <article className="bookcta__card">
                        <img className="bookcta__bg" src={sendMessageImg} alt="" />

                        <div className="bookcta__panel">
                            <h3 className="bookcta__card-title">WhatsApp</h3>
                            <p className="bookcta__card-desc">
                                Prefer messaging? Send us a WhatsApp and we’ll reply with next steps.
                            </p>
                        </div>

                        <div className="bookcta__bottom">
                            <button
                                type="button"
                                className="bookcta__pillbtn"
                                onClick={() => window.open("https://wa.me/", "_blank", "noreferrer")}
                            >
                                Message Us
                            </button>
                        </div>
                    </article>

                    {/* Newsletter */}
                    <article className="bookcta__card bookcta__card--newsletter">
                        <img className="bookcta__bg" src={newsletterImg} alt="" />

                        <div className="bookcta__panel">
                            <h3 className="bookcta__card-title">Digital Growth Tips</h3>
                            <p className="bookcta__card-desc">
                                Sign up for conversion, SEO, and performance insights — sent as practical tips you
                                can apply fast.
                            </p>
                        </div>

                        <div className="bookcta__bottom bookcta__bottom--form">
                            <form
                                className="bookcta__form"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    // hook your newsletter logic here
                                }}
                            >
                                <label className="sr-only" htmlFor="bookcta-name">Your name</label>
                                <input id="bookcta-name" className="bookcta__input" placeholder="Your name" />

                                <label className="sr-only" htmlFor="bookcta-email">Email address</label>
                                <input
                                    id="bookcta-email"
                                    type="email"
                                    className="bookcta__input"
                                    placeholder="Email address"
                                />

                                <button type="submit" className="bookcta__pillbtn">
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    </article>
                </div>

                {/* BOTTOM: Social strip */}
                <div className="bookcta__social">
                    <div>
                        <h3 className="bookcta__social-title">Social Channels</h3>
                        <p className="bookcta__social-subtitle">
                            Message us on our socials and stay up to date with what we’re building next.
                        </p>
                    </div>

                    <div className="bookcta__social-pills">
                        <a className="bookcta__social-pill" href="https://instagram.com" target="_blank" rel="noreferrer">IG</a>
                        <a className="bookcta__social-pill" href="https://linkedin.com" target="_blank" rel="noreferrer">in</a>
                        <a className="bookcta__social-pill" href="https://dribbble.com" target="_blank" rel="noreferrer">Db</a>
                        <a className="bookcta__social-pill" href="https://behance.net" target="_blank" rel="noreferrer">Be</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingCTASection;
