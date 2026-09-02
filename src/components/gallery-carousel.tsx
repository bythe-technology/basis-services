"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/data/site";

export function GalleryCarousel() {
  const [autoplay] = useState(() => Autoplay({ delay: 4200, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay]);
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(true);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      autoplay.stop();
      window.setTimeout(() => setPlaying(false), 0);
    }
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [autoplay, emblaApi]);

  function toggleAutoplay() {
    if (playing) autoplay.stop(); else autoplay.play();
    setPlaying(!playing);
  }

  return (
    <div className="galleryCarousel" aria-roledescription="carousel" aria-label="Basis Services work gallery" onFocusCapture={() => autoplay.stop()} onBlurCapture={() => playing && autoplay.play()}>
      <div className="galleryViewport" ref={emblaRef}>
        <div className="galleryTrack">
          {gallery.map((image, index) => <figure className="gallerySlide" key={image.src} aria-label={`${index + 1} of ${gallery.length}`}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 84vw, (max-width: 1100px) 45vw, 34vw" /><figcaption><span>{String(index + 1).padStart(2, "0")}</span>{image.alt}</figcaption></figure>)}
        </div>
      </div>
      <div className="galleryControls"><div className="galleryArrows"><button type="button" onClick={scrollPrev} aria-label="Previous photo"><ChevronLeft /></button><button type="button" onClick={toggleAutoplay} aria-label={playing ? "Pause gallery" : "Play gallery"}>{playing ? <Pause /> : <Play />}</button><button type="button" onClick={scrollNext} aria-label="Next photo"><ChevronRight /></button></div><div className="galleryProgress" aria-hidden="true"><span style={{ width: `${((selected + 1) / gallery.length) * 100}%` }} /></div><span className="galleryCount">{String(selected + 1).padStart(2, "0")} / {gallery.length}</span></div>
    </div>
  );
}
