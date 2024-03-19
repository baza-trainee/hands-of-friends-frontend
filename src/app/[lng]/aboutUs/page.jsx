"use client";
import Container from "@/app/components/Container";
import BreadCrumbs from "@/app/components/BreadCrumbs";
import AboutTabs from "../../components/About/AboutTabs";
import AboutContent from "../../components/About/AboutContent";
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";

function Page({ lng }) {
  const { t } = useTranslation(lng, "about-page");
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div>
      <div className="bg-image-about bg-center h-[210px] sm:h-[275px] w-[320px] md:min-h-[440px] xl:min-h-[734px] 2xl:min-h-[825px]">
        <Container>
          <BreadCrumbs
            className="mb-[106px] sm:mb-[179px] mt-[16px] md:mt-[41px] md:mb-[206px] xl:mb-[445px] 2xl:mb-[511px] z-10"
            href="/"
            text={t("breadcrumbs")}
            textColor="white"
          />
          <h2 className="text-2xl md:text-3xl text-white font-bold md:mb-[48px]">
            {t("title")}
          </h2>
          <AboutTabs
            className="hidden md:flex"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <AboutTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className="flex flex-col text-[black] md:hidden"
          />
        </Container>
      </div>
      <AboutContent activeTab={activeTab} />
    </div>
  );
}

export default Page;
