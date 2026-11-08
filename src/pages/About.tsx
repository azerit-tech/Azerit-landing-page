import { usePageTitle, PAGES } from "../meta";
import { TopBar, Footer } from "../components/Nav";
import { Founders } from "../components/Founders";
import { DemoLink } from "../components/DemoLink";
import { Email } from "../components/Email";

// A letter from the two of us, under the voxel picture of us reviewing code
// (public/team/review.webp, the one the landing's team panel uses): one
// serif reading column, short paragraphs, signed with the founder cards,
// then a way to reach us. It replaced a hero and three columns of grey
// sales copy nobody wanted to read (2026-11-04). Plain page, no landing
// panels.
export function About() {
  usePageTitle(PAGES["/about"].title);

  return (
    <>
      <TopBar />
      <main className="page about">
        <article className="about-letter">
          <header className="about-head">
            <img
              src="/team/review.webp"
              alt="The two founders as voxel figures, reviewing code on a laptop"
              width={600}
              height={588}
              fetchPriority="high"
            />
            <h1>
              We read their <em>code</em> first.
            </h1>
          </header>

          <div className="about-body">
            <p>
              Azerit is two engineers from Centrale, Lumine and Jacques. We've shipped products,
              reviewed pull requests and run technical interviews, and that taught us where to look
              for a good engineer: in what they've built.
            </p>
            <p>
              So that is where we start. For each role, we look on GitHub for the people who have
              already built something like it, and we read their code before anyone talks to them.
              When we send you an engineer, you can open the projects that got them there.
            </p>
            <p>
              Software we built does the searching: it finds the repositories, reads them at scale
              and drafts each first message, with AI on the heavy lifting. Deciding who fits your
              role stays with us, because it takes an engineer to tell a strong repository from a
              polished profile.
            </p>
            <p>
              That is how two people do the work of an agency. We write to the engineer about their
              own work, and we're on the call with you from the brief to the signed offer.
            </p>
          </div>

          <div className="about-sign">
            <Founders />
          </div>

          <div className="about-contact">
            <h2>Talk to us</h2>
            <p>An open role you'd like us to try, a question, a partnership.</p>
            <div className="page-cta-row">
              <DemoLink className="btn-try">Book a Call</DemoLink>
              <Email user="jacques" domain="azerit.tech" className="demo-link">
                or email us
              </Email>
            </div>
          </div>
        </article>
      </main>
      <Footer plain />
    </>
  );
}
