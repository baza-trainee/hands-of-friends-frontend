import Container from "./components/Container";
import Section from "./components/Section";
import TeamList from "./components/Team/TeamList";
import Title from "./components/Title";

export default function Home() {
  return (
    <main className="">
      <div>Home</div>
      <Section>
        <Container>
          <Title titleName="Наша команда" />
          <TeamList />
        </Container>
      </Section>
    </main>
  );
}
