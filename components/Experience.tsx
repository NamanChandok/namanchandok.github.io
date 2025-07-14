import Image from "next/image";
import React, { useState } from "react";
import { experienceData } from "./experiencedata";
import Link from "next/link";
export default function Experience() {
  const [active, setActive] = useState("work");
  return (
    <section id="experience" className="max-w-7xl mx-auto p-6 space-y-12">
      <div className="flex gap-8 items-center">
        <hr className="w-full border-muted" />
        <p className="shrink-0 text-lg">
          <span className="text-muted">02.</span> Experience
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-muted/30 p-1 rounded-lg grid grid-cols-2 gap-1">
          <button
            className={`py-1 rounded-md transition ${active === "work" ? "bg-background text-foreground underline underline-offset-3" : "text-secondary"}`}
            onClick={() => setActive("work")}
          >
            Work
          </button>
          <button
            className={`py-1 rounded-md transition ${active === "education" ? "bg-background text-foreground underline underline-offset-3" : "text-secondary"}`}
            onClick={() => setActive("education")}
          >
            Education
          </button>
        </div>
        <div className="border-2 border-muted/30 px-4 rounded-lg">
          {(active == "work"
            ? experienceData.work
            : experienceData.education
          ).map((d, i) => {
            return (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-0.5 h-4 bg-muted/30 shrink-0"></div>
                  <Link href={d.orgUrl}>
                    <Image
                      width={100}
                      height={100}
                      className="h-14 w-14 shrink-0 rounded-lg border-2 object-cover border-muted/30"
                      src={d.orgImg}
                      alt={d.org[0]}
                    />
                  </Link>
                  <div className="w-0.5 h-full bg-muted/30"></div>
                </div>
                <div className="py-4">
                  <p className="text-xs text-secondary">{d.date}</p>
                  <Link
                    href={d.orgUrl}
                    target="_blank"
                    className="text-lg font-medium underline underline-offset-2 decoration-2 decoration-transparent transition hover:decoration-accent"
                  >
                    {d.org}
                  </Link>
                  <p className="text-secondary">{d.profile}</p>
                  {d.desc && (
                    <ul className="pt-1 list-disc pl-4">
                      {d.desc.map((l, i) => (
                        <li key={i}>{l}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
