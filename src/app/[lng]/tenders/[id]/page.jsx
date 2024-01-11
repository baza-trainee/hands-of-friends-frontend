import BreadCrumbs from "@/app/components/BreadCrumbs";
import Container from "@/app/components/Container";
import Section from "@/app/components/Section";
import { dataTenders } from "@/app/components/Tenders/data";
import Link from "next/link";

export default function Page({ params }) {
  const { id } = params;
  const Tender = dataTenders.find((tender) => tender.id === id);

  return (
    <>
      <Section>
        <Container>
          <BreadCrumbs href="/tenders" text="Тендери"/>
          <div className="max-w-[835px] text-lg">
            <p className="mb-6 ">{Tender.data}</p>
            <h2 className="text-3xl	mb-10">{Tender.text}</h2>
            <p className="mb-6">{Tender.desc}</p>
            <div
              className="flex gap-1
        "
            >
              <p>Дата початку:</p>
              <p className="font-bold	">{Tender.start}</p>
            </div>
            <div className="flex gap-1 mb-8">
              <p>Дата закінчення: </p>
              <p className="font-bold	">{Tender.end}</p>
            </div>
            <p className="text-2xl font-bold mb-6">{Tender.lotNumberOne}</p>
            <p className="mb-4">{Tender.lotDesc}</p>
            <p className="font-bold">{Tender.titleLink}</p>
            <Link className="block mb-8" href={Tender.link}>
              ПОСИЛАННЯ
            </Link>
            <p className="text-2xl font-bold mb-6">{Tender.lotNumberTwo}</p>
            <p className="mb-4">{Tender.lotDesc}</p>
            <p className="font-bold">{Tender.titleLink}</p>
            <Link className="block mb-8" href={Tender.link}>
              ПОСИЛАННЯ
            </Link>
            <p className="mb-6">{Tender.partners}</p>
            <ol>
              <li>
                <Link className="block mb-4" href="#">
                  ГО Фонд громади Харкова "Толока"{" "}
                </Link>
              </li>
              <li>
                <Link className="block mb-4" href="#">
                  ГО Фонд громади Вознесенська у партнерстві з міжнародною
                  організацією Plan International
                </Link>
              </li>
              <li>
                <Link className="block mb-4" href="#">
                  Проєкт фінансується Міською радою міста Мадрид (Іспанія).{" "}
                </Link>
              </li>
            </ol>

            <p className="mb-8 max-w-[740px]">{Tender.partnersText}</p>
            <p className="font-bold mb-6">{Tender.contacts}</p>
            <ul>
              <li className="mb-4">{Tender.email}</li>
              <li className="mb-4">{Tender.phone}</li>
            </ul>
            <div className="flex gap-1">
              <p>Відповідальним виконавець: </p>
              <p className="font-bold	">{Tender.performer}</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
