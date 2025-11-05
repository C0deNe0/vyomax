"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Plane, Send } from "lucide-react";
import Image from "next/image";

export default function PaperPlaneCursor() {
  const planeRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const lastMove = useRef(Date.now());

  useEffect(() => {
    const plane = planeRef.current;
    if (!plane) return;

    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      lastMove.current = Date.now();
    };

    window.addEventListener("mousemove", handleMouseMove);

    const update = () => {
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // A "lag" effect — follow slowly
      pos.current.x += dx * 0.08;
      pos.current.y += dy * 0.08;

      // rotate slightly toward direction
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // offset the plane slightly behind cursor
      const offset = Math.min(dist * 0.25, 40); // max 40px behind
      const offsetX =
        pos.current.x - Math.cos((angle * Math.PI) / 180) * offset;
      const offsetY =
        pos.current.y - Math.sin((angle * Math.PI) / 180) * offset;

      // natural settle wobble when near still
      const idle = Date.now() - lastMove.current > 300;
      const smallTilt = idle ? Math.sin(Date.now() / 200) * 2 : 0;

      gsap.set(plane, {
        x: offsetX,
        y: offsetY,
        rotation: angle + smallTilt,
      });

      raf.current = requestAnimationFrame(update);
    };

    raf.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={planeRef}
      className="fixed top-0 left-0 z-[200] text-white pointer-events-none"
      style={{
        transform: "translate(-50%, -50%) rotate(0deg)",
      }}
    >
      <Image
        src="/images/paper-plane1.svg"
        width={30}
        height={30}
        alt="plane"
      />
    </div>
  );
}
