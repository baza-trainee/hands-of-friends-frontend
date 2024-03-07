"use client";

import React from "react";
import { useHttp } from "@/app/hooks/useHttp";
import ProjectsPagination from "@/app/components/Projects/ProjectsPagination";

function ProjectsData() {
  const [projects] = useHttp("projects/?is_shown=true");

  return (
    <div>
      <ProjectsPagination data={projects} />
    </div>
  );
}
export default ProjectsData;
