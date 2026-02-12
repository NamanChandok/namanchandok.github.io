"use client";
import { ReactLenis, useLenis } from "lenis/react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import CursorTrailer from "@/components/CursorTrailer";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export default function Home() {
  useLenis((lenis) => {
    console.log(lenis);
  });

  return (
    <>
      <ReactLenis root />
      <main className="font-sans">
        <Hero />
        <div className="space-y-20">
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <CursorTrailer />
      <Navbar />
    </>
  );
}
