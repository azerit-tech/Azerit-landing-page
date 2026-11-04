import { usePageTitle, PAGES } from "../meta";
import { TopBar, Footer } from "../components/Nav";
import { Founders } from "../components/Founders";
import { DemoLink } from "../components/DemoLink";
import { Email } from "../components/Email";

// The pitch in Jacques's words, beside the two of us in the voxel world
// reviewing code (public/team/review.webp, the picture the landing's team
// panel uses; the old robot arm was the last piece of the pre-voxel world,
// 2026-11-04). Then the three beats, each cut to its one idea, the two
// founders, and a way to reach them. Plain column, no landing panels.
export function About() {
  usePageTitle(PAGES["/about"].title);

  return (
    <>
      <TopBar />
      <main className="page about">
        <section className="about-hero">
          <div className="about-hero-copy">
            <h1>
              Better engineers, faster.
              <br />
              Proven by their <em>code</em>.
            </h1>
            <p className="lede">
              Azerit recruits the engineers who have already built what you're hiring for. We find
              them on GitHub, read their code and open the conversation on their work.
            </p>
          </div>
          <img
            className="about-hero-pic"
            src="/team/review.webp"
            alt="The two founders as voxel figures, reviewing code on a laptop"
            width={600}
            height={588}
            fetchPriority="high"
          />
        </section>

        <section className="about-beats">
          <div className="beat">
            <h2>Skills you can check</h2>
            <p>
              A CV says what someone claims. A repository shows what they did. We start from the
              work: the people who have already shipped something like your role, ranked on what
              they built. You see the projects behind the one we send you.
            </p>
          </div>
          <div className="beat">
            <h2>Two engineers from Centrale</h2>
            <p>
              We've shipped code, reviewed pull requests and run technical interviews. We know
              what a strong engineer looks like in a repository, and what a weak one looks like
              on a polished profile. That judgement is what you pay for.
            </p>
          </div>
          <div className="beat">
            <h2>We automate the search. The judgement is ours.</h2>
            <p>
              Finding the repositories, reading them at scale, the first draft of a message:
              automated, with AI on the heavy lifting. Deciding that this engineer fits your
              role, writing to them about their own work, being on the call with you from the
              brief to the signature: that is us. Two people deliver what used to take a team,
              and the difference goes to you.
            </p>
          </div>
        </section>

        <section className="about-foot">
          <div className="about-team">
            <h2>Who we are</h2>
            <Founders />
          </div>
          <div className="about-contact">
            <h2>Talk to us</h2>
            <p>An open role you'd like us to try, a question, a partnership.</p>
            <div className="page-cta-row">
              <DemoLink className="btn-try">book a call</DemoLink>
              <Email user="jacques" domain="azerit.tech" className="demo-link">
                or email us
              </Email>
            </div>
          </div>
        </section>
      </main>
      <Footer plain />
    </>
  );
}
