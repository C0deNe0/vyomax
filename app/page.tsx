"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Products from "@/components/products";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { VivekAlva } from "@/components/vivekAlva";
import { FacultyIncharge } from "@/components/facultyIncharge";
import { GallerySection } from "@/components/gallerySection";
import About from "@/components/about";
import Loader from "@/components/loadingPage";
import { OurJourney } from "@/components/OurJourney";
import Book from "@/components/Book";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  // lock scroll only while loader is active
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <div className="relative bg-blue-950">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
          <Loader onComplete={() => setLoading(false)} />
        </div>
      )}

      <main className={`${loading ? "pointer-events-none" : ""}`}>
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <section>
          <OurJourney />
        </section>
        <section id="trustee">
          <VivekAlva />
        </section>
        <section>
          <FacultyIncharge />
        </section>
        <section id="book" className="bg-blue-950">
          <h3 className="text-white text-5xl m-5 p-5 font-bold flex justify-center items-center flex flex-col ">
            Our Journey
                      <div className="w-26 h-[2px] bg-cyan-400 mt-1 mr-44 mb-4" />

          </h3>
          <Book />
        </section>

        <section id="about">
          <About />
        </section>
        <section id="projects" className=" h-[130vh]">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}
