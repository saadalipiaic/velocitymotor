"use client";

import { useEffect, useRef } from "react";

type CarVideoProps = {
  src: string;
  poster?: string;
  label: string;
  className?: string;
};

export default function CarVideo({ src, poster, label, className = "" }: CarVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }

    const play = () => video.play().catch(() => {});
    play();

    const onVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else if (!video.paused || video.ended) {
        play();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={label}
      role="img"
    />
  );
}
