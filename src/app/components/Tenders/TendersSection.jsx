"use client";

import { useRouter } from "next/navigation";
import Title from "../Title";
import TenderList from "./TendersList";
import Section from "../Section";
import Container from "../Container";
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
          className="block px-0 mx-auto mt-8 min-w-[12.38rem] font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue"
        >
          Дізнатись більше
        </Action>
      </Container>
    </Section>
  );
}
