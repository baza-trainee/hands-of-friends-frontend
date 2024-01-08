import Container from "@/app/components/Container";
import Section from "@/app/components/Section";
import TeamList from "@/app/components/Team/TeamList";
import Title from "@/app/components/Title";

export default function Page() {
  return (
    <Section>
      <Container>
        <Title titleName="Наша команда" />
        <TeamList />
      </Container>
    </Section>
  );
}
