import * as React from "react";
import ProjectComponent from "../../../components/ProjectPage";

interface ProjProps {
  params: {
    slug: string;
  };
}

const Proj: React.FC<ProjProps> = async ({ params }) => {
  const { slug } = await params;

  return <ProjectComponent slug={slug} />;
};

export default Proj;
