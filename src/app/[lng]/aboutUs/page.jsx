"use client";
import Container from "@/app/components/Container";
import BreadCrumbs from "@/app/components/BreadCrumbs";
import AboutTabs from "../../components/About/AboutTabs";
import AboutContent from "../../components/About/AboutContent";
import { useState } from "react";

function Page() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div>
      <div className="bg-image-tenders bg-center min-h-[620px]">
        <Container>
          <BreadCrumbs
            className="mb-[319px] z-10"
            href="/"
            text="Назад"
            textColor="white"
          />
          <h2 className="text-3xl text-white font-bold mb-16">Про нас</h2>
          <AboutTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </Container>
      </div>
      <AboutContent activeTab={activeTab} />
    </div>
  );
}

export default Page;
