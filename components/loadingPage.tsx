"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    // Initial state
    gsap.set(letters, { opacity: 0, x: 40 });

    const tl = gsap.timeline({
      onComplete: () => {
        // Wait a short moment before unmounting
        gsap.to(loaderRef.current, {
          opacity: 0,
          //   duration: 0.6,
          ease: "power1.inOut",
          onComplete: () => onComplete?.(), // 👉 Notify parent when fade-out ends
        });
      },
    });

    // Animate text in → out
    tl.to(letters, {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.08,
      ease: "power2.out",
    }).to(letters, {
      x: -20,
      opacity: 0,
      duration: 1,
      stagger: 0.08,
      ease: "power2.inOut",
    });
  }, [onComplete]);

  const text = "Build.Fly.Repeat";

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 flex overflow-y-hidden cursor-none items-center justify-center bg-black text-white z-[99]"
    >
      <h1
        ref={textRef}
        className="text-3xl md:text-5xl lg:text-7xl font-semibold  font-mono tracking-wide overflow-hidden"
      >
        {text.split("").map((char, i) => (
          <span key={i} className="inline-block opacity-0 translate-x-10">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
