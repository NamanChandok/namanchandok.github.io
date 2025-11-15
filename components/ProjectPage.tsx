"use client";
import { useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Navbar from "@/components/Navbar";
import CursorTrailer from "@/components/CursorTrailer";
import { projectsData } from "@/components/projectsdata";
import Link from "next/link";

interface ProjectPageProps {
  slug: string;
}

interface Project {
  title: string;
  imgUrl: string;
  desc: string;
  url?: string;
  gitUrl?: string;
  badge?: string;
  content: string[];
}

const ProjectPage: React.FC<ProjectPageProps> = ({ slug }) => {
  useLenis((lenis) => {
    console.log(lenis);
  });

  const [project] = useState<Project>(() => {
    const proj = projectsData.find(
      (project) =>
        project.title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9\-]/g, "") === slug,
    );
    return (
      proj ?? {
        title: "Project Not Found",
        imgUrl: "/projects/notfound.png",
        desc: "404 Not Found",
        content: ["The project you are looking for does not exist."],
      }
    );
  });

  return (
    <>
      <ReactLenis root />
      <main className="mt-16 md:mt-24 max-w-5xl space-y-8 mx-auto p-6 font-sans">
        <div
          className="rounded-2xl ring-2 ring-muted/30 h-80 bg-cover opacity-70"
          style={{ backgroundImage: `url(${project.imgUrl})` }}
        />
        <div className="flex flex-row justify-between items-center gap-4 md:gap-10">
          <h1 className="font-semibold text-2xl md:text-4xl shrink-0">
            {project.title}
          </h1>
          <hr className="border-muted w-full hidden md:block" />
          {project.badge && (
            <span className="flex items-center gap-1 text-xs md:text-sm py-1 px-3 rounded-full font-medium bg-muted shadow-md text-foreground w-max shrink-0">
              {project.badge.includes("Award") ? (
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
              {project.badge.includes("Contract") ? (
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
              {project.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-12">
          <div className="md:w-1/3 space-y-4">
            {project.url && (
              <Link
                href={project.url}
                className="bg-foreground text-background p-2 px-5 w-full rounded-md hover:shadow-lg transition-all shadow-foreground/20 flex items-center gap-1 justify-center"
                target="_blank"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                  />
                </svg>
                View Project
              </Link>
            )}
            {project.gitUrl && (
              <Link
                href={project.gitUrl}
                className="bg-muted/40 p-2 px-5 w-full rounded-md hover:shadow-lg transition-all shadow-muted/20 flex items-center gap-1 justify-center"
                target="_blank"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clipRule="evenodd"
                  />
                </svg>
                View Source
              </Link>
            )}
            <h2 className="text-lg mb-4 font-medium flex items-center gap-2">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                />
              </svg>
              {project.desc}
            </h2>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-xl mb-4 font-medium">Overview</h2>
            {project.content.map((paragraph, index) => (
              <p key={index} className="mb-4 text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <Link
          href="/#projects"
          className="bg-muted/30 p-3 px-12 rounded-md shadow-muted/20 hover:shadow-lg transition-all block w-max mx-auto"
        >
          ← Back to Projects
        </Link>
        <hr className="border-muted" />
        <small className="leading-loose text-secondary text-right block">
          Built with <b>Next.js</b> and <b>Tailwind CSS</b>, deployed with{" "}
          <b>Github</b>.
          <br /> © {new Date().getFullYear()} <b>Naman Chandok</b>. All Rights
          Reserved.
        </small>
      </main>
      <CursorTrailer />
      <Navbar />
    </>
  );
};

export default ProjectPage;
