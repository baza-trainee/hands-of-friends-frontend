"use client";

import React from 'react';
import { useRouter } from "next/navigation";

import { useTranslation } from "@/app/i18n/client";
import { useCurrentLang } from "@/app/hooks/useCurrentLang";

import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import Action from "../Action";
import TenderSwiperList from './TendersSwiper';

export default function TendersSection({ lng }) {
  const { t } = useTranslation(lng, "tender-section");
  const router = useRouter();
  const lang = useCurrentLang() === 'uk' ? 'ua' : 'en';

  return (
    <Section>
      <Container>
        <Title titleName={t("title")} />
        <TenderSwiperList />
        <Action
          onClick={() => router.push(`${lang}/tenders`)}
          type="button"
          className=" block min-w-[198px] mx-auto px-0 mt-8 font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue md:mt-12 xl:mt-[60px]"
        >
          {t("button")}
        </Action>
      </Container>
    </Section>
  );
}