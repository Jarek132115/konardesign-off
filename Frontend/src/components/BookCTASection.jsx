import React from "react";
import { useNavigate } from "react-router-dom";
import "../styling/bookctasection.css";

import ProfilePic from "../assets/images/ProfilePic.jpg";

const BookingCTASection = () => {
    const navigate = useNavigate();

    return (
        <section className="bookcta">
            <div className="bookcta__inner">
                <header className="bookcta__header">
                    <p className="eyebrow">CONTACT</p>

                    <h2 className="heading2 bookcta__heading">
                        Get in <span className="bookcta__highlight">Touch</span> and
                        Let’s Build Something That Actually Works
                    </h2>

                    <p className="subheading bookcta__subtitle">
                        Whether you are starting fresh or improving what you have,
                        we can figure out the right next step together.
                    </p>
                </header>

                <div className="bookcta__layout">
                    <div className="bookcta__image-wrap">
                        <img
                            src={ProfilePic}
                            alt="Jarek Konarski"
                            className="bookcta__image"
                        />
                    </div>

                    <div className="bookcta__grid">
                        <article className="bookcta__card">
                            <div className="bookcta__card-content">
                                <p className="bookcta__label">Book a Call</p>

                                <h3 className="heading4 bookcta__card-title">
                                    Let’s talk through your project properly
                                </h3>

                                <p className="body bookcta__card-desc">
                                    We will go over goals, timeline, and what kind of
                                    website will actually drive results.
                                </p>
                            </div>

                            <div className="bookcta__card-action">
                                <button
                                    className="btn btn--indigo bookcta__button"
                                    onClick={() => navigate("/book-a-call")}
                                >
                                    Schedule Call
                                </button>
                            </div>
                        </article>

                        <article className="bookcta__card">
                            <div className="bookcta__card-content">
                                <p className="bookcta__label">Email Me</p>

                                <h3 className="heading4 bookcta__card-title">
                                    Prefer email? Send over the details
                                </h3>

                                <p className="body bookcta__card-desc">
                                    Share your project or current situation and I will
                                    come back with clear next steps.
                                </p>
                            </div>

                            <div className="bookcta__card-action">
                                <a
                                    href="mailto:hello@konardesign.com"
                                    className="btn btn--white bookcta__button"
                                >
                                    Email Me
                                </a>
                            </div>
                        </article>

                        <article className="bookcta__card">
                            <div className="bookcta__card-content">
                                <p className="bookcta__label">WhatsApp</p>

                                <h3 className="heading4 bookcta__card-title">
                                    Want something quicker and more direct?
                                </h3>

                                <p className="body bookcta__card-desc">
                                    Message me and we can move things forward without
                                    delays or long back and forth.
                                </p>
                            </div>

                            <div className="bookcta__card-action">
                                <a
                                    href="https://wa.me/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn--white bookcta__button"
                                >
                                    Message Me
                                </a>
                            </div>
                        </article>

                        <article className="bookcta__card">
                            <div className="bookcta__card-content">
                                <p className="bookcta__label">Digital Card</p>

                                <h3 className="heading4 bookcta__card-title">
                                    Save my details for any future contact
                                </h3>

                                <p className="body bookcta__card-desc">
                                    Keep my contact info on hand so you can reach out
                                    when the timing is right.
                                </p>
                            </div>

                            <div className="bookcta__card-action">
                                <button className="btn btn--white bookcta__button">
                                    View Card
                                </button>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="bookcta__social">
                    <div className="bookcta__social-copy">
                        <h3 className="bookcta__social-title">Social Channels</h3>
                        <p className="bookcta__social-subtitle">
                            Follow along and see what I am building next.
                        </p>
                    </div>

                    <div className="bookcta__social-pills">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bookcta__pill"
                        >
                            IG
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bookcta__pill"
                        >
                            in
                        </a>
                        <a
                            href="https://dribbble.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bookcta__pill"
                        >
                            Db
                        </a>
                        <a
                            href="https://behance.net"
                            target="_blank"
                            rel="noreferrer"
                            className="bookcta__pill"
                        >
                            Be
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingCTASection;