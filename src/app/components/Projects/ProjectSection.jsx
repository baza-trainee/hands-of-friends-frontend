import React from 'react';
import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import ProjectList from "./ProjectList";

export default function ProjectSection() {
    return (
        <Section>
          <Container>
            <Title titleName="Проєкти" />
            <ProjectList />
          </Container>
        </Section>
      );
}