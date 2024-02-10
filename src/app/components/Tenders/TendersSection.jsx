"use client";

import React from 'react';
import { useRouter } from "next/navigation";

import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import TenderList from "./TendersShortList";
import Action from "../Action";

export default function TendersSection() {
  const router = useRouter();
  
  return (
    <Section>
      <Container>
        <Title titleName="Тендери" />
        <TenderList />
        <Action
          onClick={() => router.push("/tenders")}
          type="button"
          className=" block min-w-[198px] mx-auto px-0 mt-8 font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue md:mt-10 xl:mt-8"
        >
          Дізнатись більше
        </Action>
      </Container>
    </Section>
  );
}
