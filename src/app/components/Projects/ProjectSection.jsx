"use client";

import React from 'react';
import { useRouter } from "next/navigation";

import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import Action from '../Action';
import ProjectSwiperList from './ProjectSwiper';

import { useTranslation } from "@/app/i18n/client";
import { useCurrentLang } from "@/app/hooks/useCurrentLang";

export default function ProjectSection({ lng }) {
  const { t } = useTranslation(lng, "project-section");
  const lang = useCurrentLang() === 'uk' ? 'ua' : 'en';
  const router = useRouter();

  return (
    <Section>
      <Container>
        <Title titleName={t("title")} />
        <ProjectSwiperList />
        <Action
          onClick={() => router.push(`${lang}/projects`)}
          type="button"
          className="block min-w-[198px] mx-auto px-0 mt-8 font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue text-xl md:mt-12 xl:mt-8"
        >
          {t("button")}
        </Action>
      </Container>
    </Section>
  );
}