"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function FloatingImage({
  src,
  alt = "",
  x = "0%",
  y = "0%",
  width = 100,
  height = 100,
  speed = 3,
  direction = "vertical", // or "horizontal"
  className = "",
  range = 25, // how far it moves
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const moveProp = direction === "horizontal" ? "x" : "y";

    gsap.to(ref.current, {
      [moveProp]: `random(-${range}, ${range})`,
      duration: speed,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, [speed, direction, range]);

  return (
    <div
      ref={ref}
      className={`absolute pointer-events-none ${className}`}
      style={{
        left: x,
        top: y,
        width,
        height,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );
}
