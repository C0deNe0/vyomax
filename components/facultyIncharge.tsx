import React from "react";
import Image from "next/image";

export const FacultyIncharge = () => {
  return (
    <section
      id="faculty"
      className="min-h-screen bg-[#d7dae511] text-white flex items-center justify-center overflow-hidden "
    >
      <div className="flex flex-col-reverse md:flex-row w-full h-full max-w-7xl mx-auto px-8 md:px-16 items-center mb-9 justify-between gap-12">
        {/* Left - Image Card Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-[320px] h-[420px] md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0_0_45px_-10px_rgba(0,200,255,0.5)] border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm hover:scale-105 transition-transform duration-500">
            <Image
              src="/images/ashoksir.png"
              alt="Mr. Ashok"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>

        {/* Right - Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
          <span className="text-sm uppercase tracking-widest text-cyan-400 mb-1" >
            Mentor
          </span>

          <h2 className="text-4xl mb-1 md:text-5xl font-bold">Mr. Ashok </h2>

          <div className="w-16 h-[2px] bg-cyan-400 mt-1 mb-4" />
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Mr. Ashok has been a guiding light for our Team since its inception.
            From the very beginning, he plays a key role in building our
            foundation and helping us grow in the right direction. Serving as a
            mentor for both our NCC and club teams, he introduces us to the
            fascinating world of aeromodelling, technology, and innovation.
            Always eager to learn and share knowledge, he inspires everyone to
            stay curious, creative, and collaborative. His constant guidance and
            enthusiasm continue to motivate us to push boundaries and strive for
            excellence.
          </p>
        </div>
      </div>
    </section>
  );
};
