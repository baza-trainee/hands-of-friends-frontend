import React from "react";
import Container from "../Container";
import BreadCrumbs from "../BreadCrumbs";

export default function ProjectsHeader() {
  return (
    <div className="bg-image-tenders bg-center min-h-[620px]">
      <Container>
        <BreadCrumbs
          className="mb-[389px] z-10"
          href="/"
          text="Назад"
          textColor="white"
        />
        <h2 className="text-3xl text-white font-bold mb-16">Проєкти</h2>
        
      </Container>
    </div>
  );
}
