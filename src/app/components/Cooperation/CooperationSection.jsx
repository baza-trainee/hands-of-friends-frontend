"use client";
import React from "react";
import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import CooperationList from "./CooperationList";
import { Partners } from "./Partners/Partners";
import { useTranslation } from "@/app/i18n/client";

export default function CooperationSection({ lng }) {
  const { t } = useTranslation(lng, "title");
  return (
    <Section>
      <Container>
        <Title titleName={t("collaboration")} />
        <CooperationList />
        <Partners lng={lng} />
      </Container>
    </Section>
  );
}
