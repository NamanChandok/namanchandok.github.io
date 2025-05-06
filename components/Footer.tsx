import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faSpotify,
  faDiscord,
  faLinkedinIn,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";

type Props = {};

export default function Footer({}: Props) {
  const lenis = useLenis(() => {});
  return (
    <div className="flex flex-col py-16 items-center bg-[#090909] text-bruh-white relative">
      <div className="absolute bg-bruh-black/50 inset-0 z-0"></div>
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 2,
          ease: "anticipate",
        }}
        viewport={{
          once: true,
        }}
        className="text-center space-y-6 z-10"
      >
        <Link
          href="#home"
          onClick={() => {
            lenis?.scrollTo("#home");
          }}
          className="font-akira text-4xl hover:text-[#CFDBD5]/90 transition duration-300"
        >
          Naman Chandok
        </Link>
        <div className="flex items-center space-x-5 justify-center text-gray-300">
          <Link
            href="https://instagram.com/namanchandok"
            className="h-6 hover:text-bruh-gray transiton duration-300"
            aria-label="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-full" />
          </Link>
          <Link
            href="https://github.com/namanchandok"
            className="h-6 hover:text-bruh-gray transiton duration-300"
            aria-label="github"
          >
            <FontAwesomeIcon icon={faGithub} className="h-full" />
          </Link>
          <Link
            href="https://twitter.com/br0wot"
            className="h-6 hover:text-bruh-gray transiton duration-300"
            aria-label="twitter"
          >
            <FontAwesomeIcon icon={faTwitter} className="h-full" />
          </Link>
          <Link
            href="mailto:namanchandok1@gmail.com"
            className="h-6 hover:text-bruh-gray transiton duration-300"
            aria-label="email"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-full" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/namanchandok/"
            className="h-6 hover:text-bruh-gray transiton duration-300"
            aria-label="linkedin"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="h-full" />
          </Link>
          <Link
            href="https://www.behance.net/naman-chandok"
            className="h-6 hover:text-bruh-gray transiton duration-300"
            aria-label="behance"
          >
            <FontAwesomeIcon icon={faBehance} className="h-full" />
          </Link>
          <Link
            href="https://discord.com/users/481518334509187089"
            className="h-6 hover:text-bruh-gray transiton duration-300"
            aria-label="discord"
          >
            <FontAwesomeIcon icon={faDiscord} className="h-full" />
          </Link>
          <Link
            href="https://open.spotify.com/user/gh04xw1wcz6kkx4icrbbxogb3?si=0b493b9fe369429f"
            className="h-6 hover:text-bruh-gray transiton duration-300"
            aria-label="spotify"
          >
            <FontAwesomeIcon icon={faSpotify} className="h-full" />
          </Link>
        </div>
        <p className="text-gray-400">
          © 2023 <b>Naman Chandok</b>. All Rights Reserved.
        </p>
      </motion.div>
    </div>
  );
}
