import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.3;
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const lenis = useLenis();
  return (
    <nav
      className={`fixed top-0 inset-x-0 md:py-10 p-6 transition ${scrolled && "bg-background"}`}
    >
      <div className="flex gap-8 items-center max-w-7xl mx-auto font-sans">
        <Link
          href="#home"
          onClick={() => lenis?.scrollTo("#home")}
          className="font-semibold text-xl w-max underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-foreground transition"
        >
          br0wot
        </Link>
        <hr className="w-full border-muted" />
        <div className="h-8 w-8 md:hidden shrink-0"></div>
        <button
          className="h-8 w-8 shrink-0 md:hidden fixed right-6 top-6 z-20"
          onClick={() => setNavOpen(!navOpen)}
        >
          <svg
            className={`w-8 h-8 text-foreground ${navOpen && "rotate-45"} transition`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-7 7V5"
            />
          </svg>
        </button>
        <div
          className={`shrink-0 md:relative fixed flex md:flex-row flex-col md:text-base text-3xl bg-background/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none inset-y-0 gap-8 py-10 md:py-0 md:right-0 transition-all px-6 ${navOpen ? "right-0" : "-right-full"}`}
        >
          <div className="h-8 w-8 md:hidden shrink-0"></div>
          <Link
            href="#home"
            onClick={() => {
              lenis?.scrollTo("#home");
              setNavOpen(false);
            }}
            className="md:hidden underline underline-offset-4 decoration-transparent hover:decoration-foreground transition"
          >
            <span className="text-muted">00.</span> Home
          </Link>
          <Link
            href="#about"
            onClick={() => {
              lenis?.scrollTo("#about");
              setNavOpen(false);
            }}
            className="underline underline-offset-4 decoration-transparent hover:decoration-foreground transition"
          >
            <span className="text-muted">01.</span> About
          </Link>
          <Link
            href="#skills"
            onClick={() => {
              lenis?.scrollTo("#skills");
              setNavOpen(false);
            }}
            className="underline underline-offset-4 decoration-transparent hover:decoration-foreground transition"
          >
            <span className="text-muted">02.</span> Skills
          </Link>
          <Link
            href="#projects"
            onClick={() => {
              lenis?.scrollTo("#projects");
              setNavOpen(false);
            }}
            className="underline underline-offset-4 decoration-transparent hover:decoration-foreground transition"
          >
            <span className="text-muted">03.</span> Projects
          </Link>
          <Link
            href="#contact"
            onClick={() => {
              lenis?.scrollTo("#contact");
              setNavOpen(false);
            }}
            className="underline underline-offset-4 decoration-transparent hover:decoration-foreground transition"
          >
            <span className="text-muted">04.</span> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
