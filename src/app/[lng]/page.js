import Link from "next/link";
import { useTranslation } from "../i18n";
import TeamSection from "../components/Team/TeamSection";
import TendersSection from "../components/Tenders/TendersSection";
import CooperationSection from "../components/Cooperation/CooperationSection";
import FeedbackFormSection from "../components/FeedbackForm/FeedbackFormSection";
import About from "../components/About";
import ProjectSection from "../components/Projects/ProjectSection";
import Hero from "../components/Hero";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/aboutUs`}>{t("to-about-page")}</Link>
      <br />
      <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
      <Hero/>
      <About />
      <ProjectSection/>
      <TendersSection/>
      <TeamSection />
      <CooperationSection />
      <FeedbackFormSection/>
    </>
  );
}