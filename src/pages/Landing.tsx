import { Link } from "react-router-dom";
import { TopBar, Footer } from "../components/Nav";
import { DemoLink } from "../components/DemoLink";
import { HowLoop } from "../components/HowLoop";
import { Seam } from "../components/Seam";
import { Founders } from "../components/Founders";
import { HeroLoop } from "../components/HeroLoop";
import { People } from "../components/People";

// Why hire through us: three columns of the bridge panel, one promise each, in plain sentences (labels and
// "X, not Y" lines read as a template, 2026-11-04). Where we look and what we read are shown for real further down, so
// only what the two proof panels don't say lives here.
const WHY = [
  { lead: "We send you one engineer.", text: "Already interested in your role. If it isn't them, we keep looking." },
  { lead: "We've done the job.", text: "Shipped products, reviewed pull requests, run technical interviews." },
  { lead: "You pay when you hire.", text: "One fee, set on the first call from the role.", href: "/pricing", more: "how the fee works" },
];

// The four steps of a search, the four stations of the picture: a short
// name, an explicit title, one line on what it means for the hire. Azerit
// does the whole run, the client meets the result. On desktop they sit on the
// clouds under the islands, in one evenly spaced row (HowLoop).
const STEPS = [
  { short: "find", title: "Find them on GitHub", text: "The developers who already build what you're hiring for." },
  { short: "read code", title: "Read their code", text: "Commits, pull requests and reviews." },
  { short: "match", title: "Keep the one who fits", text: "The one whose work matches the role, skill by skill." },
  { short: "reach out", title: "Reach out about their work", text: "The kind of message engineers answer." },
];

// One real hire, told in three dates: the proof between the people we find
// and the two of us. DRAFT: the role and the days are invented, filled in to
// see the section, until Jacques gives Auditoo's real ones.
const HIRE = [
  { day: "Day 0", text: "Gauthier briefs us on the role: a senior full-stack engineer." },
  { day: "Day 6", text: "First call with the engineer we found on GitHub." },
  { day: "Day 21", text: "The offer is signed." },
];

// Local brand assets. Aurel source: https://www.agilitesolutions.com/projects/a-multi-purpose-space-for-aurel-bgc/
// Iterate, RAGLogic and Auditoo marks come from https://iterate.inc/, https://www.raglogic.com/ and https://www.auditoo.eco/.
const CLIENTS = [
  { name: "Aurel BGC", logo: "/clients/aurel-bgc.png", id: "aurel", width: 140, height: 50, wordmark: true },
  { name: "Iterate.inc", logo: "/clients/iterate.png", id: "iterate", width: 48, height: 21, wordmark: false },
  { name: "RAGLogic", logo: "/clients/raglogic.svg", id: "raglogic", width: 32, height: 32, wordmark: false },
  { name: "Auditoo", logo: "/clients/auditoo.svg", id: "auditoo", width: 103, height: 23, wordmark: true },
];

export function Landing() {
  return (
    <>
      <TopBar sky />

      <main>
      {/* hero: one full-width picture under the bar, the promise written
          on it. The picture (2:1, Jacques generates it): a tech campus seen
          from above, the central building being finished with cubes from a
          "github" warehouse, the one teal cube on the plaza; the lower third
          an empty plaza the words sit on. It moves: see HeroLoop. */}
      <header className="hero-stage">
        <HeroLoop />
        <div className="hero-stage-shade" aria-hidden />
        <div className="hero-stage-text">
          <h1>
            A company is the people who build it. We find <em>yours</em>.
          </h1>
          <div className="hero-stage-side">
            <p className="sub">
              Engineer recruiting for tech companies. We find them on GitHub, read their work,
              and bring you the one who fits.
            </p>
            <div className="hero-cta">
              <Link to="/try" className="btn-hero">
                find my engineer
              </Link>
              <DemoLink className="btn-hero-outline">talk to us</DemoLink>
            </div>
          </div>
        </div>
      </header>
      {/* the bridge: one rounded panel set half on the hero's sage, which
          melts into the page's white behind it. A bento, Clay-style: the
          clients and what we promise in the same tiles */}
      <section className="bridge">
        <div className="bridge-panel">
          <h2>Engineers, found by engineers.</h2>
          <div className="bento">
            {CLIENTS.map((client) => (
              <div key={client.id} className={`bento-tile bento-logo client-${client.id}`}>
                <img src={client.logo} alt={client.wordmark ? client.name : ""} width={client.width} height={client.height} />
                {!client.wordmark && <span>{client.name}</span>}
              </div>
            ))}
            {WHY.map((cell, i) => (
              <div key={cell.lead} className={`bento-tile bento-why why-${i}`}>
                <b>{cell.lead}</b>
                <p>{cell.text}</p>
                {cell.href && (
                  <Link to={cell.href} className="why-link">
                    {cell.more} <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* a client's own words, alone on the white: the air between the
          bridge panel and How it works (inside the panel it was cramped,
          2026-11-04). DRAFT: the sentence is our suggestion, to be validated
          or rewritten by Gauthier Favier (CEO, Auditoo) before it ships */}
      <section className="quote">
        <figure className="container quote-inner">
          <img src="/clients/auditoo.svg" alt="Auditoo" width={103} height={23} />
          <blockquote>
            <p>They didn't send us a pile of CVs. They sent us one engineer, and we hired him.</p>
          </blockquote>
          <figcaption>
            {/* DRAFT: initials until the CEO's portrait comes in */}
            <span className="quote-face" aria-hidden>GF</span>
            <span className="quote-who">
              <b>Gauthier Favier</b>
              <span>CEO, Auditoo</span>
            </span>
          </figcaption>
        </figure>
      </section>

      {/* the rule grid starts here: from the first panel down the rails run
          unbroken to the footer */}
      <Seam />

      {/* the kinds of engineers we find, as people of the hero's world
          (People): the role gets one of them */}
      <section className="band">
        <div className="container people">
          <h2>You get the one who fits your role</h2>
          <p className="people-lede">One per role. These are the kinds we find.</p>
          <People />
        </div>
      </section>

      <Seam />

      {/* how it works: a hire, from the code up */}
      <section className="band band-head how-head">
        <div className="container how-title">
          <h2>How it works</h2>
          <p className="how-lede">
            Days from your brief to the first intro, not weeks. One call to brief us, one with
            the engineer, and we stay until signature.
          </p>
        </div>
      </section>
      <section className="band how-band">
        <div className="container how">
          {/* the search as four islands on a cable: a cube out of the
              github towers, read in the ring, set in the wall's one gap, on
              to the post office (HowLoop) */}
          <HowLoop steps={STEPS} />
        </div>
      </section>

      <Seam />

      {/* one hire, start to finish: words and dates only, the break
          between the two sections of figures */}
      <section className="band">
        <div className="container hire">
          <h2>A hire at Auditoo</h2>
          <ol className="hire-days">
            {HIRE.map((step, i) => (
              <li key={i}>
                <b>{step.day}</b>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* team — framed like every other panel so the rails stay unbroken */}
      <section className="band">
        <div className="container team">
          {/* the two of us in the voxel world, reviewing code together, on
              the left; the real faces beside it, under the title */}
          <img
            className="team-pic"
            src="/team/review.webp"
            alt="The two founders as voxel figures, reviewing code on a laptop"
            width={600}
            height={588}
            loading="lazy"
          />
          <div className="team-side">
            <h2>Two engineers read every candidate</h2>
            <p className="team-lede">One of us reads their work and signs off on the one we send you.</p>
            <Founders />
          </div>
        </div>
      </section>

      <Seam />

      {/* final CTA */}
      <section className="band band-bleed">
        <div className="container cta-final">
          <div className="cta-row">
            <span aria-hidden />
            <Link to="/try" className="cta-link">
              Find the engineer who'll build it with you
            </Link>
            <span aria-hidden />
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}
