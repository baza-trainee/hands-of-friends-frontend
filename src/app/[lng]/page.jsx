import React from "react";
import About from "../components/About/About";
import ProjectSection from "../components/Projects/ProjectSection";
import TendersSection from "../components/Tenders/TendersSection";
import TeamSection from "../components/Team/TeamSection";
import CooperationSection from "../components/Cooperation/CooperationSection";
import FeedbackFormSection from "../components/FeedbackForm/FeedbackFormSection";
import HeroSlider from "../components/Hero/HeroSlider";
import NewsSection from "../components/News/NewsSection";

export default async function Page() {
  return (
    <>
      <HeroSlider />
      <About />
      <ProjectSection />
      <TendersSection />
      <TeamSection />
      <CooperationSection />
      <NewsSection />
      <FeedbackFormSection />
      <div id="modal-root"></div>
    </>
  );
}
