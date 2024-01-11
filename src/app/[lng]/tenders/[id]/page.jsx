import Container from "@/app/components/Container";
import Section from "@/app/components/Section";
import { dataTenders } from "@/app/components/Tenders/data";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const tender = dataTenders.find((item) => item.id === id);

  if (!tender) {
    return <p>Tender not found</p>;
  }

  return (
    <Container>
      <Section>
        <p>{tender.performer}</p>
    
      </Section>
    </Container>
  );
}
