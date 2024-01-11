
import Container from "@/app/components/Container";

import Section from "@/app/components/Section";
import { dataTenders } from "@/app/components/Tenders/data";


export default function Page() {

  // const router = useRouter();
  // const { id } = router.query;
  // const tender = dataTenders.find((item) => item.id === id);
  console.log(dataTenders);

  // if (!tender) {
  //   return <p>Tender not found</p>;
  // }

  return (
    <Container>
      <Section>
       {111 && console.log(dataTenders)}
       
       
      </Section>
    </Container>
  );
}
