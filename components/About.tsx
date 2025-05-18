import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialIcons from "./SocialIcons";
export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto p-6 space-y-12">
      <div className="flex gap-8 items-center">
        <p className="shrink-0 text-lg">
          <span className="text-muted">01.</span> About
        </p>
        <hr className="w-full border-muted" />
      </div>
      <div className="flex flex-col md:flex-row-reverse gap-12">
        <Image
          src="./photo.jpeg"
          alt="photo"
          width={400}
          height={400}
          className="object-cover w-56 self-center h-56 md:w-80 md:h-96 rounded-full md:rounded-md"
        />
        <div className="space-y-6">
          <h2 className="font-semibold text-4xl md:text-5xl">
            Hi, I'm{" "}
            <span className="underline underline-offset-4 decoration-3 decoration-accent">
              Naman Chandok
            </span>
          </h2>
          <p className="text-secondary">
            I'm a full stack developer based in New Delhi with 4+ years of
            experience building scalable web apps using React, Next.js and
            Node.js. I specialize in sleek front-end design, seamless API
            integrations, and machine learning algorithms using Python,
            TensorFlow, and Keras. Currently a college student, I'm eager to
            build high-impact intelligent solution that actually make a
            difference.
            <br />
            <br />
            When I'm not buried in code, I'm probably exploring the latest AI
            tools, chasing hackathon deadlines, or pretending to take a "quick
            break" that turns into a YouTube rabbit hole.
          </p>
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
