"use client";

import React from "react";

import ProjectsPagination from "@/app/components/Projects/ProjectsPagination";

import { useHttp } from "@/app/hooks/useHttp";

function ProjectsData() {
  const [projects, , isLoading] = useHttp("projects/?is_shown=true");
  const shownProjects = projects && projects.length > 0 && projects.type !== 'error'
    ? projects.filter((project) => project.is_shown)
    : projects;

    return (
    <ProjectsPagination data={shownProjects} isLoading={isLoading} />
  );
}
export default ProjectsData;