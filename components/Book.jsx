"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { galleryItems } from "../constants/galleryItems";
import Image from "next/image";

export default function Book() {
  const [index, setIndex] = useState(0);

  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

  const [isFlipping, setIsFlipping] = useState(false);
  const [flipRotation, setFlipRotation] = useState(0);
  const [flipDirection, setFlipDirection] = useState("forward");

  const { scrollYProgress } = useScroll();
  const bookOpenAngle = useTransform(scrollYProgress, [0, 0.3], [0, 180]);
  const [isBookOpen, setIsBookOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = bookOpenAngle.on("change", (latest) => {
      if (latest > 160 && !isBookOpen) {
        setHasOpenedOnce(true);
        setIsBookOpen(true);
      }
    });
    return () => unsubscribe();
  }, [bookOpenAngle, hasOpenedOnce, isBookOpen]);

  const left = galleryItems[index];
  const right = galleryItems[index + 1];

  const next = () => {
    if (index + 2 < galleryItems.length && !isFlipping && isBookOpen) {
      setFlipDirection("forward");
      setIsFlipping(true);
      setTimeout(() => {
        setIndex(index + 2);
        setIsFlipping(false);
      }, 1200);
    }
  };

  const prev = () => {
    if (index > 0 && !isFlipping && isBookOpen) {
      setFlipDirection("backward");
      setIsFlipping(true);
      setTimeout(() => {
        setIndex(Math.max(0, index - 2));
        setIsFlipping(false);
      }, 1200);
    }
  };

  return (
    <div className="min-h-[200vh]  bg-gradient-to-br  p-4">
      {/* <div className="fixed top-8 inset-x-0 text-center z-50">
        {!isBookOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-stone-600 text-lg font-medium"
          >
            Scroll down to open the book ↓
          </motion.div>
        )}
      </div> */}

      <div className=" sticky top-[15vh] -translate-y-1/64  place-items-center mb-20">
        <div className="relative w-full max-w-[900px] h-[520px] perspective-[2000px]">
          <motion.div
            className=" relative  w-full h-full flex shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4),0_30px_40px_-20px_rgba(0,0,0,0.3)]"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {!hasOpenedOnce && (
              <motion.div
                className="absolute inset-0 z-30 rounded-lg"
                style={{
                  transformStyle: "preserve-3d",
                  rotateY: bookOpenAngle,
                  transformOrigin: "left",
                  background:
                    "linear-gradient(135deg, #1e3a8a, #1e40af, #1e3a8a)",
                }}
              >
                {/* cover content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h1 className="text-3xl font-extrabold tracking-widest">
                    SLAM BOOK
                  </h1>
                  <p className="mt-2 text-sm opacity-80">
                    memories • moments • madness
                  </p>
                </div>

                {/* spine shine */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/40 to-transparent" />
              </motion.div>
            )}

            {/* LEFT PAGE (FLIP for backward) */}
            <motion.div
              className="relative w-1/2 h-full origin-right overflow-hidden select-none"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                cursor:
                  isBookOpen && !isFlipping && index > 0
                    ? "pointer"
                    : "default",
              }}
              initial={{ rotateY: 0 }}
              whileHover={
                !isFlipping && isBookOpen && index > 0
                  ? {
                      rotateY: 12,
                      transition: {
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                    }
                  : {}
              }
              animate={{
                rotateY: isFlipping && flipDirection === "backward" ? 180 : 0,
              }}
              transition={{
                duration: 1.2,
                ease: [0.34, 0.46, 0.45, 0.96],
                delay: 0.08,
              }}
              onClick={prev}
            >
              {flipDirection === "backward" && (
                <motion.div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: `linear-gradient(to left, rgba(0,0,0,${
                      (Math.abs(flipRotation) / 180) * 0.5
                    }), transparent 60%)`,
                    mixBlendMode: "multiply",
                    opacity: isFlipping ? 1 : 0,
                  }}
                />
              )}

              {/* FRONT OF LEFT PAGE */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-300"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  rotateY: useTransform(bookOpenAngle, [0, 180], [180, 0]),
                }}
              >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px),repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]" />

                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/20 via-black/5 to-transparent pointer-events-none" />

                <div className="absolute inset-0 shadow-[inset_-10px_0_20px_-10px_rgba(0,0,0,0.15)] pointer-events-none" />
                {left && (
                  <div className="relative w-full h-full px-10 py-12 bg-[#fffdf5] overflow-hidden">
                    {/* notebook ruled lines */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-[0.35]
      bg-[linear-gradient(to_bottom,transparent_23px,#e5e5e5_24px)]
      bg-[length:100%_24px]"
                    />

                    {/* red margin line (near spine for left page) */}
                    <div className="absolute right-10 top-0 bottom-0 w-[2px] bg-red-400/70" />

                    {/* inner spine shadow */}
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/15 to-transparent" />

                    {/* content */}
                    <div className="relative pr-16 h-full font-['Caveat',cursive] text-stone-800">
                      {/* title */}
                      <h3 className="text-2xl mb-6 underline decoration-wavy decoration-pink-400">
                        {left.title}
                      </h3>

                      {/* image — natural size */}
                      <motion.div
                        whileHover={{ rotate: 1.5, scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-block cursor-pointer"
                      >
                        <Image
                          src={left.src || "/placeholder.svg"}
                          alt={left.title}
                          className="h-auto w-auto max-w-[95%]
            shadow-[0_10px_22px_rgba(0,0,0,0.25)]"
                        />
                      </motion.div>

                      {/* handwritten note */}
                      <p className="mt-6 text-base leading-7">
                        {left.description}
                      </p>

                      {/* footer */}
                    </div>
                  </div>
                )}

                {!isFlipping && isBookOpen && index > 0 && (
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-bl from-stone-200/50 to-transparent pointer-events-none" />
                )}
              </div>

              {/* BACK OF LEFT PAGE (Previous spread's right page) */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-300"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px),repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]" />

                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/20 via-black/5 to-transparent pointer-events-none" />

                <div className="absolute inset-0 shadow-[inset_10px_0_20px_-10px_rgba(0,0,0,0.15)] pointer-events-none" />

                {index > 1 && galleryItems[index - 1] && (
                  <div className="relative w-full h-full p-8 scale-x-[-1]">
                    <Image
                      src={galleryItems[index - 1].src || "/placeholder.svg"}
                      alt={galleryItems[index - 1].title}
                      width={400}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
            </motion.div>

            <div className="relative w-[6px] bg-gradient-to-b from-stone-400 via-stone-500 to-stone-400 shadow-[0_0_15px_rgba(0,0,0,0.3)] z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            </div>

            {/* RIGHT PAGE (FLIP for forward) */}
            <motion.div
              className="relative w-1/2 h-full origin-left overflow-hidden select-none"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                cursor:
                  isBookOpen && !isFlipping && index + 2 < galleryItems.length
                    ? "pointer"
                    : "default",
              }}
              initial={{ rotateY: 0 }}
              whileHover={
                !isFlipping && isBookOpen && index + 2 < galleryItems.length
                  ? {
                      rotateY: -12,
                      transition: {
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                    }
                  : {}
              }
              animate={{
                rotateY: isFlipping && flipDirection === "forward" ? -180 : 0,
              }}
              onUpdate={(latest) => {
                if (typeof latest.rotateY === "number") {
                  setFlipRotation(latest.rotateY);
                }
              }}
              transition={{
                duration: 1.2,
                ease: [0.34, 0.46, 0.45, 0.96],
                delay: 0.08,
              }}
              onClick={next}
            >
              {flipDirection === "forward" && (
                <>
                  <motion.div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      background: `linear-gradient(to right, rgba(0,0,0,${
                        (Math.abs(flipRotation) / 180) * 0.5
                      }), transparent 60%)`,
                      mixBlendMode: "multiply",
                      opacity: isFlipping ? 1 : 0,
                    }}
                  />

                  <motion.div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      background: `linear-gradient(to left, rgba(255,255,255,${Math.min(
                        (Math.abs(flipRotation) / 90) * 0.3,
                        0.3
                      )}), transparent 40%)`,
                      opacity:
                        isFlipping &&
                        Math.abs(flipRotation) > 20 &&
                        Math.abs(flipRotation) < 160
                          ? 1
                          : 0,
                    }}
                  />
                </>
              )}

              {/* FRONT OF RIGHT PAGE */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-300"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px),repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]" />

                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/20 via-black/5 to-transparent pointer-events-none" />

                <div className="absolute inset-0 shadow-[inset_10px_0_20px_-10px_rgba(0,0,0,0.15)] pointer-events-none" />

                {right && (
                  <div className="relative w-full h-full px-10 py-12 bg-[#fffdf5] overflow-hidden">
                    {/* notebook paper lines */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.35] bg-[linear-gradient(to_bottom,transparent_23px,#e5e5e5_24px)] bg-[length:100%_24px]" />

                    {/* red margin */}
                    <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-red-400/70" />

                    {/* content */}
                    <div className="relative pl-14 pr-6 h-full font-['Caveat',cursive] text-stone-800">
                      {/* title */}
                      <h3 className="text-2xl mb-4 underline decoration-wavy decoration-blue-400">
                        {right.title}
                      </h3>

                      {/* image — NATURAL SIZE */}
                      <motion.div
                        whileHover={{ rotate: -1.5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block mb-4 cursor-pointer"
                      >
                        <Image
                          src={right.src || "/placeholder.svg"}
                          alt={right.title}
                          className="h-auto w-auto max-w-[95%] shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
                        />
                      </motion.div>

                      {/* description */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-base leading-7 mt-2"
                      >
                        {right.description}
                      </motion.p>

                      {/* interaction hint */}

                      {/* footer note */}
                    </div>
                  </div>
                )}

                {!isFlipping &&
                  isBookOpen &&
                  index + 2 < galleryItems.length && (
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-stone-200/50 to-transparent pointer-events-none" />
                  )}
              </div>

              {/* BACK OF RIGHT PAGE (Next spread's left page) */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-white"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px),repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]" />

                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/20 via-black/5 to-transparent pointer-events-none" />

                <div className="absolute inset-0 shadow-[inset_-10px_0_20px_-10px_rgba(0,0,0,0.15)] pointer-events-none" />

                {galleryItems[index + 2] && (
                  <div className="relative w-full h-full p-8 scale-x-[-1]">
                    <Image
                      src={galleryItems[index + 2].src || "/placeholder.svg"}
                      alt={galleryItems[index + 2].title}
                      width={400}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>

              {flipDirection === "forward" && (
                <motion.div
                  className="absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-stone-300 via-stone-400 to-stone-300 shadow-lg"
                  style={{
                    transform: "translateX(100%) rotateY(90deg)",
                    transformOrigin: "left",
                    transformStyle: "preserve-3d",
                    opacity:
                      isFlipping &&
                      Math.abs(flipRotation) > 15 &&
                      Math.abs(flipRotation) < 165
                        ? 1
                        : 0,
                  }}
                />
              )}
            </motion.div>
          </motion.div>

          {isBookOpen && (
            <>
              <div className="absolute -bottom-20 inset-x-0 flex justify-center items-center gap-6">
                <button
                  onClick={prev}
                  disabled={index === 0 || isFlipping}
                  className="px-6 py-3 bg-stone-800 text-white rounded-lg font-medium shadow-lg hover:bg-stone-700 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-stone-800 disabled:active:scale-100"
                >
                  ← Previous
                </button>

                <div className="text-sm text-stone-600 font-medium">
                  {Math.floor(index / 2) + 1} /{" "}
                  {Math.ceil(galleryItems.length / 2)}
                </div>

                <button
                  onClick={next}
                  disabled={index + 2 >= galleryItems.length || isFlipping}
                  className="px-6 py-3 bg-stone-800 text-white rounded-lg font-medium shadow-lg hover:bg-stone-700 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-stone-800 disabled:active:scale-100"
                >
                  Next →
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
