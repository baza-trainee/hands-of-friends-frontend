import Container from "../Container";
import FeedbackFormLayout from "./FeedbackFormLayout";
import React from 'react';
import Section from "../Section";
import Title from "../Title";

export default function FeedbackFormSection() {
  return (
    <Section marginbottom="
      mb-16
      sm:mb-[4.5rem]
      md:mb-28 
      xl:mb-36
      2xl:mb-40
    ">
      <Container>
        <Title titleName="Форма зворотного зв'язку" />
        <FeedbackFormLayout />
      </Container>
    </Section>
  );
}
