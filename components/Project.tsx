import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  imgUrl: string;
  desc: string;
  url: string;
};

export default function Project({ title, imgUrl, desc, url }: Props) {
  return (
    <Link
      href={url}
      className="flex-shrink-0 relative snap-center flex flex-col items-center bg-muted/30 group rounded-xl overflow-hidden"
      aria-label={title}
    >
      <div className="h-64 w-full p-1">
        <div
          className="h-full w-full rounded-lg bg-cover grayscale-50 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
          style={{ backgroundImage: `url(${imgUrl}` }}
        />
      </div>
      <div className="flex flex-col justify-end space-y-1 p-3 pt-1 w-full">
        <h4 className="text-xl font-semibold text-foreground">{title}</h4>
        <div className="relative h-6 overflow-hidden">
          <p className="text-secondary absolute translate-y-0 transition duration-300 group-hover:-translate-y-10">
            {desc}
          </p>
          <p className="text-secondary absolute translate-y-10 transition duration-300 hover:text-accent group-hover:translate-y-0">
            View Project →
          </p>
        </div>
      </div>
    </Link>
  );
}
