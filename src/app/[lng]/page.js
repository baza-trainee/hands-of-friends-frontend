import Link from "next/link";
import { useTranslation } from "../i18n";
import TeamSection from "../components/Team/TeamSection";
import TendersSection from "../components/Tenders/TendersSection";
import CooperationSection from "../components/Cooperation/CooperationSection";
import About from "../components/About";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/aboutUs`}>{t("to-about-page")}</Link>
      <br />
      <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
      <About />
      <TendersSection/>
      <TeamSection />
      <CooperationSection />
    </>
  );
}