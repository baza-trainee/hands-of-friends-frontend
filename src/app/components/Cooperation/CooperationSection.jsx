import Container from "../Container";
import Section from "../Section";
import Title from "../Title";
import CooperationList from "./CooperationList";

export default function CooperationSection() {
  return (
    <Section>
      <Container>
        <Title titleName="Співпраця" />
        <CooperationList />
      </Container>
    </Section>
  );
}
