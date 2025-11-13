"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Products from "@/components/products";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import VideoSection from "@/components/VideoSection";
import { FacultyIncharge } from "@/components/facultyIncharge";
import { GallerySection } from "@/components/gallerySection";
import About from "@/components/about";
import Loader from "@/components/loadingPage";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  // lock scroll only while loader is active
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <div className="relative">
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
        <section id="video">
          <VideoSection />
        </section>
        <section id="gallery">
          <GallerySection />
        </section>
        {/* <section>
          <FacultyIncharge />
        </section> */}
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        {/* <section id="products">
          <Products />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}
