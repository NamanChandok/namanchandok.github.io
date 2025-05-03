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
      className="card relative flex-shrink-0 snap-center flex flex-col items-center bg-[#222] group rounded-xl"
      aria-label={title}
    >
      <div className="card-border"></div>
      <div className="h-48 p-2 w-full">
        <Image
          className="h-full w-full rounded-lg border-[3px] border-[#232323] object-cover"
          src={imgUrl}
          alt={title}
          width={400}
          height={400}
        />
      </div>
      <div className="space-y-1 px-3 pb-4 pt-1 w-full z-10">
        <h4 className="text-2xl font-black text-bruh-white">{title}</h4>
        <div className="relative h-6 overflow-hidden">
          <p className="text-gray-400 uppercase text-base absolute translate-y-0 transition duration-500 group-hover:-translate-y-10">
            {desc}
          </p>
          <p className="text-gray-400 text-base uppercase absolute translate-y-10 transition duration-500 hover:text-bruh-gray group-hover:translate-y-0">
            Show Project
          </p>
        </div>
      </div>
    </Link>
  );
}
