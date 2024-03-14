"use client";

import React from "react";
import { useHttp } from "@/app/hooks/useHttp";
import ProjectsPagination from "@/app/components/Projects/ProjectsPagination";

function ProjectsData() {
  const [projects] = useHttp("projects/?is_shown=true");
  const shownProjects = projects.filter((project) => project.is_shown);
  return (
    <div>
      <ProjectsPagination data={shownProjects} />
    </div>
  );
}
export default ProjectsData;
