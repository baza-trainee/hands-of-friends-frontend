import Title from "../Title";
import TenderList from "./TendersList";
import Section from "../Section";
import Container from "../Container";
export default function TendersSection() {
    return (
      <Section>
        <Container>
          <Title titleName="Тендери" />
          <TenderList />
        </Container>
      </Section>
    );
  }
  