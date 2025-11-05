"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BentoGrid } from "./BentoGrid";
import { BentoGridItem } from "../components/ui/bentoGridItems";
import { galleryItems } from "@/constants/galleryItems";

export function GallerySection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Close modal with Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeImage) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [activeImage]);

  return (
    <section className="mt-12 text-center min-h-[150vh]">
      <h2 className="mb-12 text-4xl font-semibold text-white md:text-5xl">
        Our Journey in Frames ✈️
      </h2>

      <BentoGrid className="max-w-3xl mx-auto ">
        {galleryItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            header={
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain object-center transition-transform duration-500 group-hover/bento:scale-105"
                />
              </div>
            }
            onClick={() => setActiveImage(item.src.src)}
            className={item.className}
          />
        ))}
      </BentoGrid>

      {/* 🔍 Expanded Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative flex items-center justify-center rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] p-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          >
            <Image
              src={activeImage}
              alt="Expanded view"
              width={1200}
              height={800}
              className="max-w-[90vw] max-h-[90vh] h-auto w-auto object-contain rounded-xl"
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 text-white text-xl bg-black/50 px-3 py-1 rounded-md hover:bg-black/70"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
