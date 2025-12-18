import React from "react";
import Image from "next/image";
import viveka from "../public/images/viveka.png";

export const VivekAlva = () => {
  return (
    <section
      id="vivekAlva"
      className="min-h-screen bg-[#0b153b] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-16 items-center">
        {/* Left – Text Content */}
        <div className="space-y-6">
          <span className="text-sm uppercase tracking-widest text-cyan-400">
            Managing Trustee
          </span>

          <h2 className="text-4xl md:text-5xl font-bold">Mr. Vivek Alva</h2>

          <div className="w-16 h-[2px] bg-cyan-400" />

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Mr. Vivek Alva has been a guiding force behind the growth and vision
            of our Team. From shaping its foundation to nurturing a culture of
            innovation and collaboration, his mentorship has played a vital role
            in our journey. With a deep passion for technology and learning, he
            continuously inspires students to explore new ideas, think
            creatively, and strive for excellence.
          </p>
        </div>

        {/* Right – Image Card */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[500px] h-[420px] md:w-[360px] md:h-[480px] rounded-xl overflow-hidden border border-white/10 shadow-xl bg-gradient-to-br from-cyan-400/10 to-transparent backdrop-blur-sm hover:-translate-y-2 transition-all duration-500">
            {/* Image */}
            <Image
              src={viveka}
              alt="Mr. Vivek Alva"
              fill
              className="object-cover z-100"
            />

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
