import Container from "@/app/components/Container";
import Section from "@/app/components/Section";
import TendersCard from "@/app/components/TendersCard/TendersCard";

export default function Page() {
  return (
    <Container>
      <Section>
        <div className="flex wrap">
          <TendersCard />
          <TendersCard />
          <TendersCard />
          
        </div>
      </Section>
    </Container>
  );
}
