import React from "react";
import Container from "../Container";
import BreadCrumbs from "../BreadCrumbs";
import { useTranslation } from "@/app/i18n/client";

export default function ProjectsHeader({lng}) {
  const { t } = useTranslation(lng, "projects");
  return (
    <div className="bg-image-tenders bg-center min-h-[620px]">
      <Container>
        <BreadCrumbs
          className="mb-[389px] z-10"
          href="/"
          text={t("breadcrumbs")}
          textColor="white"
        />
        <h2 className="text-3xl text-white font-bold mb-16">{t("title")}</h2>
        
      </Container>
    </div>
  );
}
