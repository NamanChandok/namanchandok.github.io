"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import CursorTrailer from "@/components/CursorTrailer";
import { useLenis, ReactLenis } from "lenis/react";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export default function Home() {
  const lenis = useLenis();
  return (
    <ReactLenis root>
      <main className="font-sans">
        <Hero />
        <div className="space-y-20">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
      <CursorTrailer />
      <Navbar />
    </ReactLenis>
  );
}
