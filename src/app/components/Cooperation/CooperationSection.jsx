import React from "react";
import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import CooperationList from "./CooperationList";
import Donors from "./Donors/Donors";

export default function CooperationSection() {
  return (
    <Section>
      <Container>
        <Title titleName="Співпраця" />
        <CooperationList />
        <Donors />
      </Container>
    </Section>
  );
}
