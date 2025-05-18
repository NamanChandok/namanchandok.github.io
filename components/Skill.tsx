import React from "react";
import Image from "next/image";

type Props = {
  imgUrl: string;
  name: string;
};

export default function Skill({ imgUrl, name }: Props) {
  return (
    <div className="group relative flex flex-col items-center">
      <Image
        src={imgUrl}
        alt={name}
        width={100}
        height={100}
        className="object-cover w-18 h-18 transition filter grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100"
      />
      <p className="text-secondary text-center transition group-hover:text-foreground group-hover:translate-y-1">
        {name}
      </p>
    </div>
  );
}
