"use client";
import React from 'react';
import { useRouter } from "next/navigation";
import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import Action from '../Action';
// import ProjectList from "./ProjectList";
import ProjectSwiperList from './ProjectSwiper';

export default function ProjectSection() {
  const router = useRouter();
    return (
        <Section>
          <Container>
            <Title titleName="Проєкти" />
            <ProjectSwiperList />
            <Action
          onClick={() => router.push("/projects")}
          type="button"
          className="block min-w-[198px] mx-auto px-0 mt-8 font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue text-xl md:mt-12 xl:mt-8"
        >
         Всі проєкти
        </Action>
          </Container>
        </Section>
      );
}