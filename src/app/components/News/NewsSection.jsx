"use client";
import React from "react";
import { useTranslation } from "@/app/i18n/client";
import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import NewsSlider from "./NewsSlider";

export default function NewsSection({ lng }) {
  const { t } = useTranslation(lng, "title");

  return (
    <Section>
      <Container>
        <Title titleName={t("news")} />
        <NewsSlider />
      </Container>
    </Section>
  );
}
