import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  imgUrl: string;
  desc: string;
  url: string;
  badge?: string;
};

export default function Project({ title, imgUrl, desc, url, badge }: Props) {
  return (
    <Link
      href={url}
      target="_blank"
      className="bg-muted/30 p-1 group rounded-xl relative"
      aria-label={title}
    >
      <div
        className="h-56 w-full rounded-lg bg-cover grayscale-50 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
        style={{ backgroundImage: `url(${imgUrl}` }}
      />
      <div className="space-y-1 p-3 pt-2">
        <div className="flex items-end justify-between">
          <h4 className="text-xl font-semibold text-foreground">{title}</h4>
          {badge && (
            <span className="w-max h-max text-xs py-1 px-3 rounded-full font-medium bg-muted shadow-md text-foreground">
              {badge}
            </span>
          )}
        </div>
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
