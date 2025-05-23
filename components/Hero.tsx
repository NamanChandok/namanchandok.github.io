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
      className="h-screen w-screen content-center bg-[url(/mobilebg.png)] md:bg-[url(/bg.png)] p-6 bg-cover md:bg-contain bg-no-repeat bg-center"
      id="home"
    >
      <div className="mx-auto md:w-max flex flex-col gap-2">
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
          <p className="text-xl md:text-2xl text-secondary flex items-center gap-2">
            <svg
              className="w-8 h-8 inline"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span>New Delhi, India</span>
          </p>
        </div>
        {/* <Link
          href="https://docs.google.com/document/d/14uKJW6Xv5lxFtsOCv4H1ggWbsm3HZOSQpp7KCxWiIwE/view"
          target="_blank"
          className="decoration-foreground text-xl md:text-2xl text-secondary hover:text-foreground transition underline underline-offset-4 md:self-end"
        >
          View Resume
        </Link> */}
      </div>
    </section>
  );
}
