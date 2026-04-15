import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AnimatedSection from "../components/animations/AnimatedSection";
import AnimatedHeading from "../components/animations/AnimatedHeading";
import FadeUp from "../components/animations/FadeUp";
import { StaggerGroup, StaggerItem } from "../components/animations/StaggerGroup";

import "../styling/buttons.css";
import "../styling/konarcard-case-study.css";

const LIVE_URL = "https://www.konarcard.com";
const FIGMA_URL =
    "https://www.figma.com/design/TKHqdqJrPr2RSBQOJeaHxE/KonarCard---E-Commerce-Project-NEW?node-id=1-10";

const sections = [
    { id: "overview", number: "01", label: "Overview" },
    { id: "brief", number: "02", label: "The Brief" },
    { id: "discovery", number: "03", label: "Discovery" },
    { id: "strategy", number: "04", label: "Strategy" },
    { id: "visual", number: "05", label: "Visual System" },
    { id: "product", number: "06", label: "Product Design" },
    { id: "development", number: "07", label: "Development" },
    { id: "seo", number: "08", label: "SEO" },
    { id: "content", number: "09", label: "Content" },
    { id: "marketing", number: "10", label: "Marketing" },
    { id: "results", number: "11", label: "Results" },
    { id: "learned", number: "12", label: "Learned" },
    { id: "next", number: "13", label: "Next" },
];

function Placeholder({ label, caption, variant = "" }) {
    return (
        <StaggerItem as="figure" className="kccs__screen">
            <div className={`kccs__placeholder ${variant}`}>
                <div className="kccs__placeholder-label">
                    <span className="kccs__placeholder-eyebrow">Image Placeholder</span>
                    {label}
                </div>
            </div>
            {caption ? (
                <figcaption className="kccs__placeholder-caption">{caption}</figcaption>
            ) : null}
        </StaggerItem>
    );
}

function CaseSection({
    id,
    number,
    eyebrow,
    heading,
    highlightWords = [],
    lead,
    children,
    full = false,
}) {
    return (
        <AnimatedSection
            as="section"
            className={`kccs__section ${full ? "kccs__section--full" : ""}`}
            id={id}
        >
            <div className="kccs__section-inner">
                <div className="kccs__section-number">{number}</div>
                <div className="kccs__section-body">
                    <div className="kccs__heading-wrap">
                        {eyebrow ? (
                            <FadeUp as="p" className="eyebrow" duration={0.4} y={8}>
                                {eyebrow}
                            </FadeUp>
                        ) : null}
                        <AnimatedHeading
                            as="h2"
                            className="heading2"
                            text={heading}
                            highlightWords={highlightWords}
                            highlightClassName="kccs__eyebrow-highlight"
                        />
                        {lead ? (
                            <FadeUp
                                as="p"
                                className="subheading kccs__sub"
                                afterHeading={heading}
                            >
                                {lead}
                            </FadeUp>
                        ) : null}
                    </div>
                    {children ? (
                        <FadeUp afterHeading={heading}>{children}</FadeUp>
                    ) : null}
                </div>
            </div>
        </AnimatedSection>
    );
}

const Project1 = () => {
    const navigate = useNavigate();
    const [activeId, setActiveId] = useState(sections[0].id);

    useEffect(() => {
        const observers = sections.map(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const io = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) setActiveId(id);
                    });
                },
                { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
            );
            io.observe(el);
            return io;
        });
        return () => observers.forEach((io) => io && io.disconnect());
    }, []);

    const onNavClick = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (!el) return;
        const w = window.innerWidth;
        const mainNav = w <= 500 ? 84 : w <= 768 ? 90 : w <= 1024 ? 98 : 106;
        const subNav = 54;
        const top = el.getBoundingClientRect().top + window.scrollY - (mainNav + subNav + 12);
        const lenis = window.__lenis;
        if (lenis) lenis.scrollTo(top, { duration: 0.9 });
        else window.scrollTo({ top, behavior: "smooth" });
    };

    const heroTitle = "KonarCard";

    return (
        <div className="kccs">
            <Navbar />

            <nav className="kccs__nav" aria-label="Case study sections">
                <div className="kccs__nav-inner">
                    <a
                        className="kccs__nav-brand"
                        href="/projects"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/projects");
                        }}
                    >
                        Portfolio
                    </a>
                    <div className="kccs__nav-links">
                        {sections.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className={`kccs__nav-link ${activeId === s.id ? "kccs__nav-link--active" : ""
                                    }`}
                                onClick={(e) => onNavClick(e, s.id)}
                            >
                                {s.number} · {s.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* 01 — HERO / OVERVIEW */}
            <section
                id="overview"
                className="kccs__section kccs__section--hero kccs__section--full"
            >
                <div className="kccs__section-inner">
                    <div className="kccs__section-body" style={{ maxWidth: "none" }}>
                        <FadeUp as="p" className="eyebrow" trigger="onLoad" duration={0.4} y={8}>
                            Case Study · 2024
                        </FadeUp>

                        <AnimatedHeading
                            as="h1"
                            className="heading1"
                            text={heroTitle}
                            trigger="onLoad"
                            delay={0.15}
                        />

                        <FadeUp
                            as="p"
                            className="subheading"
                            trigger="onLoad"
                            afterHeading={heroTitle}
                            headingDelay={0.15}
                        >
                            NFC Digital Business Card Platform for UK Tradespeople
                        </FadeUp>

                        <FadeUp trigger="onLoad" delay={0.5}>
                            <div className="kccs__meta-grid">
                                <div>
                                    <div className="kccs__meta-key">Role</div>
                                    <div className="kccs__meta-value">
                                        Jarek Konarski — UI/UX Designer & Full-Stack Developer
                                    </div>
                                </div>
                                <div>
                                    <div className="kccs__meta-key">Timeline</div>
                                    <div className="kccs__meta-value">2–3 months</div>
                                </div>
                                <div>
                                    <div className="kccs__meta-key">Stack</div>
                                    <div className="kccs__tags">
                                        {["React", "Node.js", "MongoDB", "Express", "Vercel"].map((t) => (
                                            <span key={t} className="kccs__tag kccs__tag--stack">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="kccs__meta-key">Tools</div>
                                    <div className="kccs__tags">
                                        {["Figma", "Semrush", "Ahrefs", "Notion", "Adobe CC"].map((t) => (
                                            <span key={t} className="kccs__tag kccs__tag--tool">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeUp>

                        <StaggerGroup className="kccs__hero-stats" stagger={0.1} amount={0.1}>
                            <StaggerItem className="kccs__hero-stat">
                                <div className="kccs__hero-stat-value kccs__hero-stat-value--accent">
                                    96%
                                </div>
                                <div className="kccs__hero-stat-label">
                                    Site Health in Semrush (from 0%)
                                </div>
                            </StaggerItem>
                            <StaggerItem className="kccs__hero-stat">
                                <div className="kccs__hero-stat-value">0 → Live</div>
                                <div className="kccs__hero-stat-label">
                                    Full MERN build shipped in under 3 months
                                </div>
                            </StaggerItem>
                        </StaggerGroup>

                        <FadeUp trigger="onLoad" delay={0.7}>
                            <div className="kccs__btn-row">
                                <a
                                    className="btn btn--indigo"
                                    href={LIVE_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Live Site →
                                </a>
                                <a
                                    className="btn btn--white"
                                    href={FIGMA_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Figma File
                                </a>
                            </div>
                        </FadeUp>

                        <FadeUp>
                            <div
                                className="kccs__placeholder kccs__placeholder--hero"
                                style={{ marginTop: 48 }}
                            >
                                <div className="kccs__placeholder-label">
                                    <span className="kccs__placeholder-eyebrow">Hero Mockup</span>
                                    ADD HERO MOCKUP — full device mockup of KonarCard homepage on
                                    desktop and mobile
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* 02 — THE BRIEF */}
            <CaseSection
                id="brief"
                number="02"
                eyebrow="The Brief"
                heading="Solving a real problem for UK tradespeople."
                highlightWords={["tradespeople."]}
            >
                <p className="kccs__body kccs__body--lead">
                    KonarCard was built to solve a real problem. UK tradespeople —
                    plumbers, electricians, builders, decorators — are losing work every
                    day because their contact details are hard to find, easy to lose, and
                    impossible to update on a paper business card.
                </p>
                <p className="kccs__body">
                    The brief was to design and build a complete NFC digital business
                    card platform from scratch: a product that lets any tradesperson tap
                    a physical card to a customer’s phone and have their full
                    professional profile open instantly — <strong>no app needed</strong>,
                    no ongoing subscription, one-off cost.
                </p>
            </CaseSection>

            {/* 03 — DISCOVERY & RESEARCH */}
            <CaseSection
                id="discovery"
                number="03"
                eyebrow="Discovery & Research"
                heading="Discovery and Research."
                highlightWords={["Research."]}
            >
                <p className="kccs__body">
                    Before any design work began, full competitor analysis was conducted
                    across <strong>VICE, Blinq, Mobilocard, Popl, HiHello and Wave
                        Connect</strong> using Ahrefs and Semrush. Keyword gap analysis
                    identified <strong>8 missing keyword opportunities</strong>. A full
                    keyword map was built across 8 target terms including “digital
                    business card UK” and “NFC business card”. Position tracking was set
                    up in Semrush for <strong>15 target keywords</strong> from day one.
                </p>

                <StaggerGroup className="kccs__screens-grid">
                    <Placeholder
                        label="ADD IMAGE — Semrush/Ahrefs competitor research screenshot"
                        caption="Competitor analysis across 6 NFC card platforms"
                        variant="kccs__placeholder--wide"
                    />
                    <Placeholder
                        label="ADD IMAGE — keyword research spreadsheet or Semrush screenshot"
                        caption="Keyword map: 8 target clusters, 15 tracked keywords"
                        variant="kccs__placeholder--wide"
                    />
                </StaggerGroup>
            </CaseSection>

            {/* 04 — STRATEGY BEFORE SCREENS */}
            <CaseSection
                id="strategy"
                number="04"
                eyebrow="Strategy Before Screens"
                heading="Strategy before screens."
                highlightWords={["screens."]}
            >
                <p className="kccs__body">
                    No design work started until the full information architecture, user
                    flows and content strategy were mapped in Notion. The platform
                    needed two distinct user journeys: a <strong>customer journey</strong>{" "}
                    (tap card → view profile → contact tradesperson) and a{" "}
                    <strong>tradesperson journey</strong> (sign up → build profile →
                    order card → track analytics). Both were mapped and validated before
                    Figma was opened.
                </p>

                <StaggerGroup className="kccs__screens-grid">
                    <Placeholder
                        label="ADD IMAGE — user flow diagram or Notion planning screenshot"
                        caption="Dual-journey user flow (customer × tradesperson)"
                        variant="kccs__placeholder--wide"
                    />
                    <Placeholder
                        label="ADD IMAGE — information architecture map"
                        caption="Full IA mapped in Notion before design"
                        variant="kccs__placeholder--wide"
                    />
                </StaggerGroup>
            </CaseSection>

            {/* 05 — VISUAL DIRECTION & DESIGN SYSTEM */}
            <CaseSection
                id="visual"
                number="05"
                eyebrow="Visual Direction & Design System"
                heading="Visual direction and design system."
                highlightWords={["system."]}
            >
                <p className="kccs__body">
                    The visual direction needed to communicate{" "}
                    <strong>trust, professionalism and simplicity</strong> — the three
                    things UK tradespeople most need their digital presence to convey. A
                    full design system was built in Figma covering colour palette,
                    typography scale, component library, spacing system and responsive
                    grid. Cards are available in 6 colours:{" "}
                    <strong>Black, White, Blue, Green, Red and Gold</strong>. Each colour
                    variant has its own product page with unique SEO metadata.
                </p>

                <StaggerGroup className="kccs__screens-grid kccs__screens-grid--3">
                    <Placeholder
                        label="ADD IMAGE — Figma design system screenshot showing colour palette and components"
                        caption="Design tokens — colour, typography, spacing"
                    />
                    <Placeholder
                        label="ADD IMAGE — Figma component library"
                        caption="Component library built in Figma"
                    />
                    <Placeholder
                        label="ADD IMAGE — 6 card colour variants flat lay"
                        caption="6 physical card colour variants"
                    />
                </StaggerGroup>
            </CaseSection>

            {/* 06 — PRODUCT DESIGN */}
            <CaseSection
                id="product"
                number="06"
                eyebrow="Product Design"
                heading="Product design."
                highlightWords={["design."]}
                lead="Every screen was designed to hold up under real-world use — on job sites, in vans, in front of customers."
            >
                <StaggerGroup className="kccs__screens-grid">
                    <Placeholder
                        label="ADD IMAGE — KonarCard homepage desktop"
                        caption="Homepage — desktop"
                        variant="kccs__placeholder--wide"
                    />
                    <Placeholder
                        label="ADD IMAGE — KonarCard homepage mobile"
                        caption="Homepage — mobile"
                        variant="kccs__placeholder--wide"
                    />
                    <Placeholder
                        label="ADD IMAGE — Shop page showing 6 card colours"
                        caption="Shop — 6 card colour variants"
                        variant="kccs__placeholder--wide"
                    />
                    <Placeholder
                        label="ADD IMAGE — Individual product page"
                        caption="Product detail — per-colour SEO metadata"
                        variant="kccs__placeholder--wide"
                    />
                    <Placeholder
                        label="ADD IMAGE — User dashboard — profile builder"
                        caption="Dashboard — profile builder"
                        variant="kccs__placeholder--wide"
                    />
                    <Placeholder
                        label="ADD IMAGE — User dashboard — analytics screen"
                        caption="Dashboard — views, taps, clicks"
                        variant="kccs__placeholder--wide"
                    />
                    <Placeholder
                        label="ADD IMAGE — Public-facing tradesperson profile (what the customer sees when they tap the card)"
                        caption="Public profile — the tap-to-open experience"
                        variant="kccs__placeholder--wide"
                    />
                    <Placeholder
                        label="ADD IMAGE — Examples page showing 18 real trade profiles"
                        caption="Examples — 18 real trade profiles"
                        variant="kccs__placeholder--wide"
                    />
                </StaggerGroup>
            </CaseSection>

            {/* 07 — FULL-STACK DEVELOPMENT */}
            <CaseSection
                id="development"
                number="07"
                eyebrow="Full-Stack Development"
                heading="Full-stack development."
                highlightWords={["development."]}
            >
                <p className="kccs__body">
                    KonarCard was built end to end in VS Code using the MERN stack —{" "}
                    <strong>MongoDB</strong> for the database, <strong>Express and
                        Node.js</strong> for the backend API, <strong>React</strong> for the
                    frontend, and <strong>Vercel</strong> for deployment and hosting.
                </p>
                <p className="kccs__body">
                    Key technical features include: NFC profile linking, user
                    authentication with Google login, a full profile builder dashboard,
                    card analytics tracking (views, taps, clicks), Stripe payment
                    integration for card orders, and a Google Merchant Center product
                    feed with all 6 card colours submitted for free shopping listings.
                </p>

                <div className="kccs__tags" style={{ margin: "24px 0 32px" }}>
                    {[
                        "MongoDB",
                        "Express",
                        "Node.js",
                        "React",
                        "Vercel",
                        "Stripe",
                        "Google Auth",
                        "Google Merchant Center",
                    ].map((t) => (
                        <span key={t} className="kccs__tag kccs__tag--stack">
                            {t}
                        </span>
                    ))}
                </div>

                <StaggerGroup className="kccs__screens-grid">
                    <Placeholder
                        label="ADD IMAGE — VS Code screenshot or code snippet showing key component"
                        caption="Key component — VS Code"
                        variant="kccs__placeholder--wide"
                    />
                    <Placeholder
                        label="ADD IMAGE — Database schema or API structure diagram"
                        caption="MongoDB schema / API structure"
                        variant="kccs__placeholder--wide"
                    />
                </StaggerGroup>
            </CaseSection>

            {/* 08 — SEO FOUNDATION */}
            <CaseSection
                id="seo"
                number="08"
                eyebrow="SEO Foundation"
                heading="SEO foundation."
                highlightWords={["foundation."]}
            >
                <p className="kccs__body">
                    SEO was not an afterthought — it was built into the architecture from
                    day one. Every page has a unique title tag, meta description and
                    canonical URL. Product schema was validated on all 6 colour pages
                    including shipping details. FAQ schema on the homepage was confirmed
                    valid in Google Search Console. A sitemap was rebuilt, cleaned and
                    submitted. 301 redirects were implemented for all deleted pages.
                </p>
                <p className="kccs__body">
                    The result:{" "}
                    <strong>site health went from 0 to 96% in Semrush</strong>. Google is
                    now crawling and indexing all pages.{" "}
                    <strong>9 SEO-targeted blog posts</strong> were written and published
                    covering the full keyword map.
                </p>

                <StaggerGroup className="kccs__callout-row">
                    <StaggerItem className="kccs__callout">
                        <div className="kccs__callout-value">0 → 96%</div>
                        <div className="kccs__callout-label">Site Health in Semrush</div>
                    </StaggerItem>
                    <StaggerItem className="kccs__callout">
                        <div className="kccs__callout-value">9</div>
                        <div className="kccs__callout-label">Blog Posts Published</div>
                    </StaggerItem>
                    <StaggerItem className="kccs__callout">
                        <div className="kccs__callout-value">15</div>
                        <div className="kccs__callout-label">Keywords in Position Tracking</div>
                    </StaggerItem>
                </StaggerGroup>

                <StaggerGroup className="kccs__screens-grid">
                    <Placeholder
                        label="ADD IMAGE — Semrush site health dashboard screenshot showing 96%"
                        caption="Semrush — site health 96%"
                        variant="kccs__placeholder--wide"
                    />
                    <Placeholder
                        label="ADD IMAGE — Google Search Console coverage report"
                        caption="Search Console — indexing coverage"
                        variant="kccs__placeholder--wide"
                    />
                </StaggerGroup>
            </CaseSection>

            {/* 09 — CONTENT & BLOG STRATEGY */}
            <CaseSection
                id="content"
                number="09"
                eyebrow="Content & Blog Strategy"
                heading="Content and blog strategy."
                highlightWords={["strategy."]}
            >
                <p className="kccs__body">
                    A full content strategy was built around 8 target keywords identified
                    through Ahrefs research. <strong>9 blog posts</strong> were written,
                    structured and published — each targeting a specific keyword cluster.
                    The blog page was built with category filters, a responsive grid
                    layout, and individual post pages with reading progress bar, related
                    posts section and CTA. Article schema was added to every post.
                </p>

                <StaggerGroup className="kccs__screens-grid">
                    <Placeholder
                        label="ADD IMAGE — Blog page screenshot"
                        caption="Blog index — category filters & grid"
                        variant="kccs__placeholder--wide"
                    />
                    <Placeholder
                        label="ADD IMAGE — Individual blog post screenshot"
                        caption="Blog post — reading progress & related posts"
                        variant="kccs__placeholder--wide"
                    />
                </StaggerGroup>
            </CaseSection>

            {/* 10 — SOCIAL MEDIA & MARKETING */}
            <CaseSection
                id="marketing"
                number="10"
                eyebrow="Social Media & Marketing Strategy"
                heading="Social media and marketing strategy."
                highlightWords={["strategy."]}
            >
                <p className="kccs__body">
                    A full organic social media strategy was built for{" "}
                    <strong>TikTok, Facebook and Instagram</strong> targeting UK
                    tradespeople. The core creative concept: <strong>show the tap</strong>.
                    A tradesperson finishes a job, taps the KonarCard to the customer’s
                    phone, the profile opens.
                </p>
                <p className="kccs__body">
                    A full weekly content workflow was built in Notion covering content
                    creation days, posting days, engagement routines, and a performance
                    tracking system. Week 1 content was written and scheduled across all
                    three platforms.
                </p>

                <StaggerGroup className="kccs__screens-grid">
                    <Placeholder
                        label="ADD IMAGE — Notion content calendar screenshot"
                        caption="Notion weekly content workflow"
                        variant="kccs__placeholder--wide"
                    />
                    <Placeholder
                        label="ADD IMAGE — Social media mockup or post example"
                        caption="Creative — ‘show the tap’"
                        variant="kccs__placeholder--wide"
                    />
                </StaggerGroup>
            </CaseSection>

            {/* 11 — RESULTS & OUTCOMES */}
            <CaseSection
                id="results"
                number="11"
                eyebrow="Results & Outcomes"
                heading="Results and outcomes."
                highlightWords={["outcomes."]}
            >
                <StaggerGroup className="kccs__results-grid">
                    <StaggerItem className="kccs__result-card">
                        <div className="kccs__result-value">0 → 96%</div>
                        <div className="kccs__result-label">Site Health (Semrush)</div>
                    </StaggerItem>
                    <StaggerItem className="kccs__result-card">
                        <div className="kccs__result-value">9</div>
                        <div className="kccs__result-label">Blog Posts Live</div>
                    </StaggerItem>
                    <StaggerItem className="kccs__result-card">
                        <div className="kccs__result-value">15</div>
                        <div className="kccs__result-label">Keywords Tracked</div>
                    </StaggerItem>
                    <StaggerItem className="kccs__result-card">
                        <div className="kccs__result-value">6</div>
                        <div className="kccs__result-label">Card Colours in Google Shopping</div>
                    </StaggerItem>
                    <StaggerItem className="kccs__result-card">
                        <div className="kccs__result-value">18</div>
                        <div className="kccs__result-label">Trade Profiles on Examples Page</div>
                    </StaggerItem>
                    <StaggerItem className="kccs__result-card">
                        <div className="kccs__result-value">100%</div>
                        <div className="kccs__result-label">Structured Data Score</div>
                    </StaggerItem>
                </StaggerGroup>

                <p className="kccs__body">
                    KonarCard launched as a <strong>complete, production-ready
                        platform</strong> — designed, built, optimised and marketed end to
                    end. The SEO foundation is in place and Google is indexing all pages.
                    The Merchant Center is under review for free Shopping listings. The
                    social media system is built and running.{" "}
                    <strong>The platform is ready to scale.</strong>
                </p>
            </CaseSection>

            {/* 12 — WHAT I LEARNED */}
            <CaseSection
                id="learned"
                number="12"
                eyebrow="What I Learned"
                heading="Strategy before execution."
                highlightWords={["execution."]}
            >
                <p className="kccs__body kccs__body--lead">
                    Building KonarCard end to end reinforced one principle above
                    everything else: <strong>strategy before execution</strong>. Every
                    week spent on research, competitor analysis and content mapping
                    before any design or code was written saved three weeks of rework
                    later.
                </p>
                <p className="kccs__body">
                    The most valuable skill on this project was not Figma or React — it
                    was <strong>knowing in which order to do things</strong>.
                </p>
            </CaseSection>

            {/* 13 — NEXT STEPS */}
            <CaseSection
                id="next"
                number="13"
                eyebrow="Next Steps"
                heading="Next steps."
                highlightWords={["steps."]}
            >
                <p className="kccs__body">
                    Phase 2 is <strong>paid acquisition and community building</strong>.
                    TikTok and Meta ads will run once organic content has proven what
                    performs. A KonarCard Facebook community group for UK tradespeople is
                    being built. LinkedIn content will begin once real customer data is
                    available to reference.
                </p>
            </CaseSection>

            {/* 14 — FOOTER CTA */}
            <AnimatedSection className="kccs__footer">
                <div className="kccs__footer-inner">
                    <AnimatedHeading
                        as="h2"
                        className="heading2"
                        text="Want to see the platform in action?"
                        highlightWords={["action?"]}
                        highlightClassName="kccs__eyebrow-highlight"
                    />
                    <FadeUp
                        as="p"
                        className="kccs__footer-sub"
                        afterHeading="Want to see the platform in action?"
                    >
                        Tap into the live site, explore the Figma file, or head back to the
                        portfolio.
                    </FadeUp>
                    <FadeUp className="kccs__footer-buttons">
                        <a
                            className="btn btn--indigo"
                            href={LIVE_URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Live Site →
                        </a>
                        <a
                            className="btn btn--white"
                            href={FIGMA_URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Figma File
                        </a>
                        <button
                            className="btn btn--white"
                            onClick={() => navigate("/projects")}
                            type="button"
                        >
                            ← Back to Portfolio
                        </button>
                    </FadeUp>
                </div>
            </AnimatedSection>

            <Footer />
        </div>
    );
};

export default Project1;
