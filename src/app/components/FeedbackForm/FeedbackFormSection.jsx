import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import FeedbackFormLayout from "./FeedbackFormLayout";



export default function FeedbackFormSection() {
  return (
    <Section marginBottom="mb-[22rem]">
      <Container>
        <Title titleName="Форма зворотнього зв'язку"/>
        <FeedbackFormLayout/>
      </Container>
    </Section>
  );
}
