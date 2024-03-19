"use client";

import React from "react";

import ProjectsPagination from "@/app/components/Projects/ProjectsPagination";

import { useHttp } from "@/app/hooks/useHttp";

function ProjectsData() {
  const [projects, , isLoading] = useHttp("projects/?is_shown=true");
  const shownProjects = projects.filter((project) => project.is_shown);

  return (
    <ProjectsPagination data={shownProjects} isLoading={isLoading} />
  );
}
export default ProjectsData;