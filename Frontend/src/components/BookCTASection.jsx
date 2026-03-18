import React from "react";
import { useNavigate } from "react-router-dom";
import "../styling/bookctasection.css";

import JarekKonarski from "../assets/images/JarekKonarski.png";

const BookingCTASection = () => {
    const navigate = useNavigate();

    return (
        <section className="bookcta">
            <div className="bookcta__inner">
                {/* NAME IMAGE */}
                <div className="bookcta__name-wrap">
                    <img
                        src={JarekKonarski}
                        alt="Jarek Konarski"
                        className="bookcta__name-image"
                    />
                </div>

                {/* CONTACT OPTIONS */}
                <div className="bookcta__grid">
                    {/* BOOK A CALL */}
                    <article className="bookcta__card">
                        <div className="bookcta__card-top">
                            <p className="bookcta__card-label">Book a Call</p>
                            <h3 className="bookcta__card-title">
                                Let’s talk through your project properly.
                            </h3>
                            <p className="bookcta__card-desc">
                                We’ll go over your goals, timeline, and what kind of
                                website will actually drive results for your business.
                            </p>
                        </div>

                        <div className="bookcta__card-bottom">
                            <button
                                className="btn btn--indigo bookcta__card-btn"
                                onClick={() => navigate("/book-a-call")}
                            >
                                Schedule a Call
                            </button>
                        </div>
                    </article>

                    {/* EMAIL */}
                    <article className="bookcta__card">
                        <div className="bookcta__card-top">
                            <p className="bookcta__card-label">Email Me</p>
                            <h3 className="bookcta__card-title">
                                Prefer email? Send over the details.
                            </h3>
                            <p className="bookcta__card-desc">
                                Tell me about your project, your current site, or what
                                you’re trying to achieve and I’ll get back with next steps.
                            </p>
                        </div>

                        <div className="bookcta__card-bottom">
                            <a
                                href="mailto:hello@konardesign.com"
                                className="btn btn--white bookcta__card-link"
                            >
                                Email Me
                            </a>
                        </div>
                    </article>

                    {/* WHATSAPP */}
                    <article className="bookcta__card">
                        <div className="bookcta__card-top">
                            <p className="bookcta__card-label">WhatsApp</p>
                            <h3 className="bookcta__card-title">
                                Want something quicker and more direct?
                            </h3>
                            <p className="bookcta__card-desc">
                                Message me on WhatsApp and I’ll reply fast so we can
                                move things forward without delays.
                            </p>
                        </div>

                        <div className="bookcta__card-bottom">
                            <a
                                href="https://wa.me/"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn--white bookcta__card-link"
                            >
                                Message Me
                            </a>
                        </div>
                    </article>
                </div>

                {/* SOCIAL */}
                <div className="bookcta__social">
                    <div>
                        <h3 className="bookcta__social-title">Social Channels</h3>
                        <p className="bookcta__social-subtitle">
                            Message me on socials and stay up to date with what I’m building next.
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