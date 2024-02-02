import React from 'react';
import Container from "../Container";
import FeedbackFormLayout from "./FeedbackFormLayout";
import Section from "../Section";
import Title from "../Title";

export default function FeedbackFormSection() {
  return (
    <Section marginbottom="mb-[22rem]">
      <Container>
        <Title titleName="Форма зворотного зв'язку"/>
        <FeedbackFormLayout/>
      </Container>
    </Section>
  );
}
