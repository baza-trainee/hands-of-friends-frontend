import Title from "../Title";
import ProjectList from "./ProjectList";
import Section from "../Section";
import Container from "../Container";
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