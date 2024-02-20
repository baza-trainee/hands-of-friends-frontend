"use client";

import React from 'react';
import { useRouter } from "next/navigation";

import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import TenderList from "./TendersShortList";
import Action from "../Action";
import TenderSwiperList from './TendersSwiper';
export default function TendersSection() {
  const router = useRouter();
  
  return (
    <Section>
      <Container>
        <Title titleName="Тендери" />
       <TenderSwiperList/>
        <Action
          onClick={() => router.push("/tenders")}
          type="button"
          className=" block min-w-[198px] mx-auto px-0 mt-8 font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue md:mt-12 xl:mt-[60px]"
        >
         Всі тендери
        </Action>
      </Container>
    </Section>
  );
}
