import Container from "@/app/components/Container";
import Section from "@/app/components/Section";
import { dataTenders } from "@/app/components/Tenders/data";
import Link from "next/link";

export default function TendersPage() {
  return (
    <Container>
      <Section>
        <ul className="flex gap-5 not-italic leading-normal">
          {dataTenders.map((item) => (
            <li key={item.id} className="flex flex-col p-6 min-w-[22.5rem] bg-[#E0F2FE]">
              <Link href={`/tenders/${item.id}`}>
                <p className="flex justify-between font-body text-lg">
                  <span className="font-bold text-green-500">{item.type}</span>
                  <span className="text-black">{item.data}</span>
                </p>
                <p className="font-sans mt-6 text-left leading-6 text-2xl text-black font-medium">
                  {item.text}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  );
}
