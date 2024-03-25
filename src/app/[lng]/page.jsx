"use client";

import React from "react";

import About from "../components/About/About";
import CooperationSection from "../components/Cooperation/CooperationSection";
import FeedbackFormSection from "../components/FeedbackForm/FeedbackFormSection";
import HeroSlider from "../components/Hero/HeroSlider";
import NewsSection from "../components/News/NewsSection";
import ProjectSection from "../components/Projects/ProjectSection";
import TeamSection from "../components/Team/TeamSection";
import TendersSection from "../components/Tenders/TendersSection";

export default function Page() {
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
    </>
  );
}