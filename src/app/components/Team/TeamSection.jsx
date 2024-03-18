"use client";

import React from "react";

import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import TeamList from "./TeamList";

import { useTranslation } from "@/app/i18n/client";

export default function TeamSection({ lng }) {
  const { t } = useTranslation(lng, "title");

  return (
    <Section>
      <Container>
        <Title titleName={t("team")} />
        <TeamList />
      </Container>
    </Section>
  );
}