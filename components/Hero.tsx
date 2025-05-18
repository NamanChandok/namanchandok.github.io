import React, { useRef } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Machine Learning Enthusiast",
      "UI/UX Designer",
      "Coffee Addict",
      "brain the just not working",
    ],
    loop: true,
    delaySpeed: 4000,
  });

  return (
    <section
      className="h-screen w-screen content-center p-6 bg-[url(/bg.png)] bg-contain bg-no-repeat bg-center"
      id="home"
    >
      <div className="mx-auto md:w-max space-y-2">
        <p className="text-xl md:text-2xl text-secondary" id="subtitle">
          Hi there, I'm
        </p>
        <h1
          className="text-5xl md:text-7xl leading-tight font-semibold flex flex-col md:flex-row"
          id="title"
        >
          <span>Naman Chandok&nbsp;</span>
          <i className="text-muted font-normal">$ @br0wot</i>
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <p className="text-xl md:text-2xl text-secondary">
            {text}
            <Cursor cursorColor="var(--accent)" />
          </p>
          <Link
            href="https://docs.google.com/document/d/14uKJW6Xv5lxFtsOCv4H1ggWbsm3HZOSQpp7KCxWiIwE/view"
            className="decoration-foreground text-xl md:text-2xl text-secondary hover:text-foreground transition underline underline-offset-4"
          >
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
