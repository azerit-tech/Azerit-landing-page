import { useEffect, useRef, useState } from "react";

// "How it works" as Jacques's picture of four islands on a cable, at work: a
// 24 s loop rendered in Blender over it (a carrier takes a cube out of the
// github towers, lowers it into the ring that reads it and turns it teal,
// sets it in the one gap of the wall, then rides into the post office; an
// empty one comes back on the other rope). The hero's drone then takes the
// teal cube to the campus in the back, and one person on each island steps
// out at their own time. The step cards sit on the clouds
// in one evenly spaced row under the islands.
// The still is the loop's first frame and stands in until the video plays;
// the video only loads once the section comes near, never for reduced motion
// or data saver.

const PIC_W = 1920;
const PIC_H = 815;

type Step = { title: string; text: string };

export function HowLoop({ steps }: { steps: Step[] }) {
  const stage = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const save = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || save) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setPlay(true);
      },
      { rootMargin: "400px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="how-stage" ref={stage}>
      <div className="how-pic" aria-hidden>
        <img
          className="how-pic-img"
          src="/how/isles-poster.jpg"
          srcSet="/how/isles-poster-small.jpg 1000w, /how/isles-poster.jpg 1920w"
          sizes="100vw"
          width={PIC_W}
          height={PIC_H}
          alt=""
          loading="lazy"
          decoding="async"
        />
        {play && (
          <video
            className={"how-pic-img how-pic-video" + (on ? " is-on" : "")}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onPlaying={() => setOn(true)}
          >
            <source src="/how/isles-small.mp4" type="video/mp4" media="(max-width: 760px)" />
            <source
              src="/how/isles-2880.mp4"
              type="video/mp4"
              media="(min-width: 2000px), (min-width: 1100px) and (min-resolution: 1.5dppx)"
            />
            <source src="/how/isles.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <ol className="steps">
        {steps.map((step, i) => (
          <li className="step" data-step={i + 1} key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
