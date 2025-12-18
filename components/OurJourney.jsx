import React from "react";
import Image from "next/image";

export const OurJourney = () => {
  return (
    <section
      id="faculty"
      className="min-h-screen bg-[#d7dae511] text-white flex items-center justify-center overflow-hidden "
    >
      <div className="flex flex-col-reverse md:flex-row w-full h-full max-w-7xl mx-auto px-8 md:px-16 items-center mb-9 justify-between gap-12">
        {/* Left - Image Card Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative  w-full h-400px   md:w-[1000px] md:h-[500px]  overflow-hidden hover:scale-105 transition-transform duration-500">
            <Image
              src="/images/genTeam.png"
              alt="team"
              fill
              className=" object-contain object-center rotate-270"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Right - Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
          <span className="text-sm uppercase tracking-widest text-cyan-400 mb-1"></span>

          <h2 className="text-4xl mb-1 md:text-5xl font-bold">Our Story </h2>

          <div className="w-16 h-[2px] bg-cyan-400 mt-1 mb-4" />
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Our journey began in NCC, where discipline, leadership, and unity
            shaped our mindset long before we entered the world of engineering
            and innovation. That foundation sparked our curiosity about flight
            and systems, leading us from structured drills to designing and
            testing RC planes and drones. Participating in state and
            national-level competitions challenged us to perform under pressure,
            refine our ideas, and turn failures into learning moments. Each
            competition strengthened our teamwork, precision, and confidence,
            reinforcing our vision to blend discipline with innovation and build
            meaningful technology for aerospace, defense, and advanced
            engineering. This journey is ongoing, and every milestone pushes us
            closer to what we aim to become.
          </p>
        </div>
      </div>
    </section>
  );
};
