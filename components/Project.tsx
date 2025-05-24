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
            <span className="flex items-center gap-1 text-xs py-1 px-3 rounded-full font-medium bg-muted shadow-md text-foreground">
              {badge.includes("Award") ? (
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                  <path
                    fillRule="evenodd"
                    d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                    clipRule="evenodd"
                  />
                  <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                </svg>
              ) : (
                ""
              )}
              {badge.includes("Contract") ? (
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.514 3.293a1 1 0 0 0-1.415 0L12.151 5.24a.93.93 0 0 1 .056.052l6.5 6.5a.97.97 0 0 1 .052.056L20.707 9.9a1 1 0 0 0 0-1.415l-5.193-5.193ZM7.004 8.27l3.892-1.46 6.293 6.293-1.46 3.893a1 1 0 0 1-.603.591l-9.494 3.355a1 1 0 0 1-.98-.18l6.452-6.453a1 1 0 0 0-1.414-1.414l-6.453 6.452a1 1 0 0 1-.18-.98l3.355-9.494a1 1 0 0 1 .591-.603Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                ""
              )}
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
