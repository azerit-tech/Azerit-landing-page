import { useEffect, useRef, useState } from "react";

// The hero picture, at work: a 24 s loop rendered in Blender over Jacques's
// clean picture (cubes stepping along the belt, two arms laying a wall on
// the roof, the crane setting the teal cube in last and carrying the
// finished wall away, people about the campus).
// The still is the loop's first frame, so it stands in until the video plays
// and the swap can't be seen. No video for reduced motion or data saver; the
// video only starts loading once the page itself has loaded, and it pauses
// while the hero is scrolled out of view. Retina and wide screens get the
// 2880 px video, as sharp as the still they replace.
// The stills: 1000 to 3840 px for phones up to retina and 4K screens.
export function HeroLoop() {
  const [play, setPlay] = useState(false);
  const [on, setOn] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const save = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || save) return;
    const start = () => setPlay(true);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  useEffect(() => {
    const v = video.current;
    if (!play || !v) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, [play]);

  return (
    <>
      <img
        className="hero-stage-img"
        src="/hero/loop-poster.jpg"
        srcSet="/hero/loop-poster-small.jpg 1000w, /hero/loop-poster.jpg 1920w, /hero/loop-poster-2880.jpg 2880w, /hero/loop-poster-3840.jpg 3840w"
        sizes="100vw"
        alt=""
        width={1920}
        height={814}
        fetchPriority="high"
        decoding="async"
      />
      {play && (
        <video
          ref={video}
          className={"hero-stage-img hero-stage-video" + (on ? " is-on" : "")}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          onPlaying={() => setOn(true)}
        >
          <source src="/hero/loop-small.mp4" type="video/mp4" media="(max-width: 760px)" />
          <source
            src="/hero/loop-2880.mp4"
            type="video/mp4"
            media="(min-width: 2000px), (min-width: 1100px) and (min-resolution: 1.5dppx)"
          />
          <source src="/hero/loop.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
}
