import Project from "./Project";
import { projectsData } from "./projectsdata";
export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto p-6 space-y-12">
      <div className="flex gap-8 items-center">
        <hr className="w-full border-muted" />
        <p className="shrink-0 text-lg">
          <span className="text-muted">04.</span> Projects
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="font-semibold text-3xl md:text-4xl">
          Browse my Portfolio
        </h2>
        <p className="text-secondary">
          Crafting digital solutions with purpose
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        {projectsData.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
