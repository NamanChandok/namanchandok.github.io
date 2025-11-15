import * as React from "react";
import ProjectComponent from "../../../components/ProjectPage";
import { projectsData } from "../../../components/projectsdata";

interface ProjProps {
  params: {
    slug: string;
  };
}

const project_slugs = projectsData.map((project) => ({
  slug: project.title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, ""),
}));

export const generateStaticParams = async () => {
  return project_slugs;
};

const Proj: React.FC<ProjProps> = async ({ params }) => {
  const { slug } = await params;

  return <ProjectComponent slug={slug} />;
};

export default Proj;
