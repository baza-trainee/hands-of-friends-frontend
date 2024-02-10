import React from "react";
import Hero from "../components/Hero";
import About from "../components/About/About";
import ProjectSection from "../components/Projects/ProjectSection";
import TendersSection from "../components/Tenders/TendersSection";
import TeamSection from "../components/Team/TeamSection";
import CooperationSection from "../components/Cooperation/CooperationSection";
import News from "../components/News";
import FeedbackFormSection from "../components/FeedbackForm/FeedbackFormSection";

export default async function Page() {
  return (
    <>
      <Hero />
      <About />
      <ProjectSection />
      <TendersSection />
      <TeamSection />
      <CooperationSection />
      <News />
      <FeedbackFormSection />
    </>
  );
}
