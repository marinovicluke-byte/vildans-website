"use client";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

export function HeroVideo() {
  return (
    <video
      autoPlay
      muted
      playsInline
      className="h-full w-full object-cover object-bottom"
    >
      <source src={`${basePath}/videos/hero.mp4`} type="video/mp4" />
    </video>
  );
}
