import Container from "@/app/components/Container";
import Section from "@/app/components/Section";
import Link from "next/link";

export default function Page() {
  return (
    <Container>
      <Section>
        <div>21.12.2023</div>
        <h2>
          Тендер на закупівлю матеріалів та проведення ремонтних робіт в
          сільських місцевостях Харківської області
        </h2>
        <p>
          Запрошуємо до участі у тендері на закупівлю послуг з ремонтних робіт
          юридичних осіб, які мають відповідний досвід і необхідні ресурси.
        </p>
        <div>Дата початку: 21.12.2023</div>
        <div>Дата закінчення: 04.01.2024</div>
        <div>Лот №1</div>
        <p>
          Предметом закупівлі є виконання поточного ремонт класу біології у
          будівлі КЗ "Елітнянський ліцей Вільхівської Сільської Ради",
          розташованої за адресою: Харківська обл., смт. Кулиничі, селище
          Елітне, вул. Шкільна, 17.
        </p>
        <p>Детальніше про вимоги до обладнання і учасників тендеру:</p>
        <Link href="https://docs.google.com/spreadsheets/d/10EWeq2uSDcJbgZttEPtfl8MY1Qfk7ceE/edit?fbclid=IwAR0_2TshZknl8iuVO5ovRJWnUlJjWu3OxvHalmVZAuC_hvXjT-iawqlgwNo">
          https://docs.google.com/.../10EWeq2uSDcJbgZttEPtfl8MY1Qf.../
        </Link>
        <div>Лот №2</div>
        <p>
          Предметом закупівлі є виконання поточного ремонт класу біології у
          будівлі КЗ "Елітнянський ліцей Вільхівської Сільської Ради",
          розташованої за адресою: Харківська обл., смт. Кулиничі, селище
          Елітне, вул. Шкільна, 17.
        </p>
        <p>Детальніше про вимоги до обладнання і учасників тендеру:</p>
        <Link href="https://docs.google.com/spreadsheets/d/10EWeq2uSDcJbgZttEPtfl8MY1Qfk7ceE/edit?fbclid=IwAR0_2TshZknl8iuVO5ovRJWnUlJjWu3OxvHalmVZAuC_hvXjT-iawqlgwNo">
          https://docs.google.com/.../10EWeq2uSDcJbgZttEPtfl8MY1Qf.../
        </Link>
        <p>
          Ця діяльність відбувається в межах проєкту “Покращення доступу до
          освіти для дітей та підлітків на доступних територіях Харківської та
          Миколаївської областей”, що реалізується нами разом з:
        </p>
        <ol>
          <li>ГО Фонд громади Харкова "Толока" </li>
          <li>ГО Фонд громади Харкова "Толока" </li>
          <li>ГО Фонд громади Харкова "Толока" </li>
        </ol>
        <p>
          Публікація відображає позицію авторів, та не обов’язково відображає
          позицію "Plan International"
        </p>
        <p>
          Зацікавлені сторони можуть отримати додаткову інформацію та відповіді
          на питання:
        </p>
        <ul>
          <li>за адресою: tender_offers@ukr.net</li>
          <li>за контактним телефоном: (097) 704 0880</li>
        </ul>
        <div className="flex">
          <p>Відповідальним виконавець: </p>
          <p>Гетьман Альона </p>
        </div>
      </Section>
    </Container>
  );
}
