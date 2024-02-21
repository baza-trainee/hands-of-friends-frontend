import React from "react";
import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import FeedbackFormLayout from "./FeedbackFormLayout";

export default function FeedbackFormSection() {
  return (
    <Section
      marginbottom="
      mb-16
      sm:mb-[4.5rem]
      md:mb-28 
      xl:mb-36
      2xl:mb-40
    "
    >
      <Container>
        <Title
          titleName="Форма зворотного зв'язку"
          className="w-60 xl:w-full"
        />

        <div className="container relative grid">
          <div
            className="absolute left-[-16px] rigth-0 bg-form w-[320px] h-[211px]
        sm:w-[420px] sm:h-[277px]
        md:w-[511px] md:h-[416px] md:left-0
        xl:w-[740px] xl:h-[490px] 
        2xl:w-[852px] 2xl:h-[564px]"
          />
          <FeedbackFormLayout />
        </div>
      </Container>
    </Section>
  );
}
