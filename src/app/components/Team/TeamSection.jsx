import React from "react";
import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import TeamList from "./TeamList";

export default function TeamSection() {
  return (
    <Section>
      <Container>
        <Title titleName="Наша команда" />
        <TeamList />
      </Container>
    </Section>
  );
}
