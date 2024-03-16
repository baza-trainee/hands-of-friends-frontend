import React from "react";
import Container from "../Container";
import BreadCrumbs from "../BreadCrumbs";
import { useTranslation } from "@/app/i18n/client";

export default function ProjectsHeader({lng}) {
  const { t } = useTranslation(lng, "projects");
  return (
    <div className="bg-image-tenders bg-center h-[210px] sm:h-[275px] md:h-[440px] xl:h-[734px] 2xl:h-[825px]">
      <Container>
        <BreadCrumbs
          className="mb-[114px] sm:mb-[171px] mt-[16px] md:mt-[41px] md:mb-[290px] xl:mb-[540px] 2xl:mb-[615px] z-10"
          href="/"
          text={t("breadcrumbs")}
          textColor="white"
        />
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-16">{t("title")}</h2>
        
      </Container>
    </div>
  );
}
