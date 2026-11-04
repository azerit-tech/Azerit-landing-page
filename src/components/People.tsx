import { useState, type ReactNode } from "react";

// "You get the one who fits your role": four of the kinds of engineers we
// find, as figures of the hero's voxel world (one Nano Banana picture cut in
// four, public/people), each on its own little island like How it works'.
// A tag above each says what stands out; hovering (or focusing, or tapping)
// one swaps the figure for a card in its place, under the same tag: the
// proof as it looks and one line on why it matters. On phones the line sits
// under each figure instead. Names, numbers and repos are made up; Datadog
// is real, a name buyers know (it replaced "maintains a 10k★ repo", which
// said little, 2026-11-04).

type Person = { id: string; tag: string; alt: string; line: string; proof: ReactNode };

const GREENS = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
function seeded(n: number) {
  const x = Math.sin(n * 91.7 + 45.3) * 24634.6345;
  return x - Math.floor(x);
}

const PEOPLE: Person[] = [
  {
    id: "founder",
    tag: "ex-founder",
    alt: "A voxel figure in a cream hoodie holding a coffee",
    line: "Has built a product from nothing: ships, picks what matters, talks to users.",
    proof: (
      <div className="pp-co">
        <span className="pp-logo">K</span>
        <span>
          <b>Kova</b>
          <small>founder & CTO · 2019–2024</small>
        </span>
        <em>acquired</em>
      </div>
    ),
  },
  {
    id: "medalist",
    tag: "olympiad medalist",
    alt: "A voxel figure with round glasses and a gold medal",
    line: "Solves hard problems fast and knows the algorithms cold.",
    proof: (
      <div className="pp-rank">
        <span className="pp-medal" />
        <span>
          <b>IOI · gold</b>
          <small>rank 7 of 342</small>
        </span>
      </div>
    ),
  },
  {
    id: "github",
    tag: "top 1% on GitHub",
    alt: "A voxel figure in a denim jacket and a yellow beanie, a laptop under her arm",
    line: "Writes code every day, in the open, so we can read how she works.",
    proof: (
      <div className="pp-graph">
        <div className="pp-cells">
          {Array.from({ length: 22 * 7 }, (_, i) => (
            <i key={i} style={{ background: GREENS[seeded(i) > 0.25 ? 1 + Math.floor(seeded(i + 0.5) * 4) : 0] }} />
          ))}
        </div>
        <small>2,914 contributions this year</small>
      </div>
    ),
  },
  {
    id: "datadog",
    tag: "ex-Datadog",
    alt: "A voxel figure with a grey beard and a work vest, holding a mug",
    line: "Joined early and grew with the company: knows what breaks at scale.",
    proof: (
      <div className="pp-co">
        <span className="pp-logo pp-logo-dd">D</span>
        <span>
          <b>Datadog</b>
          <small>engineer #12 · 2011–2017</small>
        </span>
        <em>20 → 1,000 people</em>
      </div>
    ),
  },
];

export function People() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <ul className="pp" onMouseLeave={() => setOpen(null)}>
      {PEOPLE.map((p, i) => (
        <li key={p.id} className={`pp-one${open === p.id ? " open" : ""}`}>
          <button
            type="button"
            className="pp-fig"
            aria-expanded={open === p.id}
            aria-describedby={`pp-${p.id}`}
            onMouseEnter={() => setOpen(p.id)}
            onFocus={() => setOpen(p.id)}
            onBlur={() => setOpen(null)}
            onClick={() => setOpen(open === p.id ? null : p.id)}
          >
            <span className="pp-tag">{p.tag}</span>
            <img src={`/people/${p.id}.webp`} alt={p.alt} width={429} loading="lazy" style={{ animationDelay: `${-i * 1.3}s` }} />
          </button>
          <div className="pp-card" id={`pp-${p.id}`} role="tooltip">
            {p.proof}
            <p>{p.line}</p>
          </div>
          <p className="pp-line">{p.line}</p>
        </li>
      ))}
    </ul>
  );
}
