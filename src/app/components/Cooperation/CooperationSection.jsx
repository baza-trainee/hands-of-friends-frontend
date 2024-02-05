import React from "react";
import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import CooperationList from "./CooperationList";
import { Partners } from "./Partners/Partners";

export default function CooperationSection() {
  return (
    <Section>
      <Container>
        <Title titleName="Співпраця" />
        <CooperationList />
        <Partners />
      </Container>
    </Section>
  );
}
