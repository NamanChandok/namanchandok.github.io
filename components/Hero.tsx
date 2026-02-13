import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import { useState } from "react";
import { useLenis } from "lenis/react";

export default function Hero() {
  const lenis = useLenis();
  const calculateAge = () => {
    const current = Date.now();
    const birthDate = new Date("2004-12-10");
    return Math.floor(
      (current - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25),
    );
  };

  const [age] = useState<number>(() => calculateAge());

  return (
    <section
      className="min-h-screen w-full content-center bg-[url(/mobilebg.png)] md:bg-[url(/bg.png)] bg-cover md:bg-contain bg-no-repeat bg-center pt-20 md:pt-0"
      id="home"
    >
      <div className="max-w-7xl mx-auto p-6 space-y-12">
        <div className="flex gap-8 items-center">
          <p className="shrink-0 text-lg">
            <span className="text-muted">01.</span> About
          </p>
          <hr className="w-full border-muted" />
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <Image
            className="w-56 h-56 md:w-80 md:h-96 rounded-full md:rounded-md shrink-0 object-cover"
            src="/photo.jpeg"
            width={500}
            height={500}
            alt="Naman Chandok"
          />
          <div className="space-y-6">
            <h2 className="font-semibold text-4xl md:text-5xl">
              Hi, I&apos;m{" "}
              <span className="underline underline-offset-4 decoration-3 decoration-accent">
                Naman Chandok
              </span>{" "}
              <i className="text-muted font-normal">@br0wot</i>
            </h2>
            <p className="text-secondary">
              I&apos;m a {age} year old CS student based in{" "}
              <svg
                className="w-5 h-5 inline"
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
              </svg>{" "}
              New Delhi building web apps with React, Next.js, and Node.js, with
              a focus on clean UI, reliable backend systems, and practical AI
              integration using Python and TensorFlow.
              <br />
              <br />I love creating polished products, collaborating on
              interesting projects and joining hackathons. When I&apos;m not
              coding, I&apos;m exploring new AI tools, falling down YouTube
              rabbit holes, or losing badly in Valorant.
              <br />
              <br />
              Feel free to{" "}
              <Link
                href="#contact"
                onClick={() => {
                  lenis?.scrollTo("#contact");
                }}
                className="underline underline-offset-3 decoration-2 decoration-muted hover:decoration-accent transition-all"
              >
                reach out
              </Link>{" "}
              if you want to build something cool together. You can find my
              resume{" "}
              <Link
                href="https://docs.google.com/document/d/14uKJW6Xv5lxFtsOCv4H1ggWbsm3HZOSQpp7KCxWiIwE/view"
                target="_blank"
                className="underline underline-offset-3 decoration-2 decoration-muted hover:decoration-accent transition-all"
              >
                here
              </Link>
              .
            </p>
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
}
