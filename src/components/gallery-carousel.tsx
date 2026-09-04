"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { gallery } from "@/data/site";
import { carouselPlayback } from "@/utils/carousel";

function subscribeMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const motionSnapshot = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function GalleryCarousel() {
  const reduced = useSyncExternalStore(
    subscribeMotion,
    motionSnapshot,
    () => true,
  );
  const [emblaRef, api] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [enabled, setEnabled] = useState(true);
  const [explicitPlay, setExplicitPlay] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const { requested, playing } = carouselPlayback({
    enabled,
    reduced,
    explicitPlay,
    hovered,
    focused,
  });

  useEffect(() => {
    if (!api) return;
    const select = () => setSelected(api.selectedScrollSnap());
    api.on("select", select).on("reInit", select);
    return () => {
      api.off("select", select).off("reInit", select);
    };
  }, [api]);

  useEffect(() => {
    if (!api || !playing) return;
    const timer = window.setInterval(() => api.scrollNext(reduced), 6000);
    return () => window.clearInterval(timer);
  }, [api, playing, reduced]);

  function move(direction: "previous" | "next") {
    setEnabled(false);
    if (direction === "previous") api?.scrollPrev(reduced);
    else api?.scrollNext(reduced);
  }

  return (
    <div
      className="galleryCarousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Basis Services work gallery"
      data-playing={playing}
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? "previous" : "next");
        }
      }}
    >
      <div
        className="galleryViewport"
        ref={emblaRef}
        onPointerDown={() => setEnabled(false)}
      >
        <div className="galleryTrack">
          {gallery.map((photo, index) => (
            <figure
              className="gallerySlide"
              key={photo.src}
              role="group"
              aria-roledescription="slide"
              aria-label={index + 1 + " of " + gallery.length}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 639px) 84vw, (max-width: 1023px) 60vw, 36vw"
              />
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {photo.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="galleryControls">
        <div className="galleryArrows">
          <button
            type="button"
            onClick={() => move("previous")}
            aria-label="Previous photo"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => {
              setEnabled(!requested);
              setExplicitPlay(true);
            }}
            aria-label={requested ? "Disable gallery autoplay" : "Play gallery"}
            aria-pressed={requested}
          >
            {requested ? <Pause /> : <Play />}
          </button>
          <button
            type="button"
            onClick={() => move("next")}
            aria-label="Next photo"
          >
            <ChevronRight />
          </button>
        </div>
        <p className="galleryStatus">
          {playing
            ? "Moving gently · pause anytime"
            : requested
              ? "Paused while you explore"
              : "Explore at your own pace"}
        </p>
        <span className="galleryCount" aria-live="off">
          {String(selected + 1).padStart(2, "0")} / {gallery.length}
        </span>
      </div>
    </div>
  );
}
