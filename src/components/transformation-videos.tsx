"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { transformationVideos } from "@/data/transformations";

export function TransformationVideos() {
  const railRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const scrollRail = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    rail.scrollBy({
      left: direction * Math.min(rail.clientWidth * 0.82, 720),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const pauseOtherVideos = (activeIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeIndex) video.pause();
    });
  };

  return (
    <section className="transformations section" aria-labelledby="transformations-title">
      <div className="shell">
        <div className="transformationHeading">
          <div>
            <p className="kicker">Real transformations</p>
            <h2 id="transformations-title">
              See the care <em>in motion.</em>
            </h2>
          </div>
          <div className="transformationIntro">
            <p>
              Eight real before-and-after moments from spaces cared for by the
              Basis team. Press play to watch each transformation.
            </p>
            <div className="transformationArrows" aria-label="Video navigation">
              <button type="button" onClick={() => scrollRail(-1)} aria-label="Previous videos">
                <ArrowLeft aria-hidden="true" />
              </button>
              <button type="button" onClick={() => scrollRail(1)} aria-label="Next videos">
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div
          className="transformationRail"
          ref={railRef}
          tabIndex={0}
          aria-label="Before and after video gallery"
        >
          {transformationVideos.map((item, index) => (
            <article className="transformationCard" key={item.slug}>
              <div className="transformationMedia">
                <video
                  ref={(element) => {
                    videoRefs.current[index] = element;
                  }}
                  controls
                  playsInline
                  muted
                  preload="none"
                  poster={item.posterSrc}
                  aria-label={`${item.title}. Before and after video, ${item.duration}.`}
                  onPlay={() => pauseOtherVideos(index)}
                >
                  <source src={item.videoSrc} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
                <span className="transformationCue" aria-hidden="true">
                  <Play /> Before → after
                </span>
              </div>
              <div className="transformationCopy">
                <div className="transformationMeta">
                  <span>{item.category}</span>
                  <span>{item.duration} · no audio</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="transformationFooter">
          <p>Real work. Real spaces. Every result shown is from a Basis Services project.</p>
          <a className="button primaryButton" href="#quote">
            Plan your cleaning <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
