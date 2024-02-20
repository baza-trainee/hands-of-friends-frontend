"use client";

import React, { useState, useEffect } from "react";
import getFetchedData from "@/app/helpers/helperAPI";
import ProjectsPagination from "@/app/components/Projects/ProjectsPagination";

function ProjectsData() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
   
    async function fetchData() {
      const projectPromise = getFetchedData('projects/', { "Accept-Language": "uk" });
      const [projectData] = await Promise.all([projectPromise]);
      setProjects(projectData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <ProjectsPagination data={projects} />
    </div>
  );
}
export default ProjectsData;
