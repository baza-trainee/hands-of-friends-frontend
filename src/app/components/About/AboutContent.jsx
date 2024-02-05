import Container from "@/app/components/Container";

function AboutContent({ activeTab }) {
  return (
    <Container>
      <div className="mt-4">
        {activeTab === "mission" && (
          <div className="mt-[56px] mb-[112px] ">
            <h2 className="mb-[32px] text-2xl max-w-[792px]">
              Ми є платформою, яка об’єднує ініціативи людей для покращення
              якості життя громади, регіону, країни.
            </h2>
            <p className="mb-[24px] text-lg">
              Ми створюємо і підтримуємо нові можливості для:
            </p>
            <ul className="list-disc">
              <li className="mb-4 ml-4">розвитку людей,</li>
              <li className="mb-4 ml-4">розвитку громад,</li>
              <li className="ml-4">розвитку України.</li>
            </ul>
          </div>
        )}
        {activeTab === "principles" && (
          <div className="mt-[80px] mb-[160px]">
            <ul className="list-disc ">
              <li className="ml-4 text-2xl">Відповідальність</li>
              <p className="text-lg ml-4 mb-10">
                Ми завжди виконуємо те, що обіцяємо. Ми не боїмося брати на себе
                відповідальність і робимо це свідомо.
              </p>
              <li className="ml-4 text-2xl">Результативність</li>
              <p className="text-lg ml-4 mb-10">
                Ми завжди виконуємо те, що обіцяємо. Ми не боїмося брати на себе
                відповідальність і робимо це свідомо.
              </p>
              <li className="ml-4 text-2xl">Ефективність</li>
              <p className="text-lg ml-4 mb-10">
                Ми завжди виконуємо те, що обіцяємо. Ми не боїмося брати на себе
                відповідальність і робимо це свідомо.
              </p>
              <li className="ml-4 text-2xl">Партнерство</li>
              <p className="text-lg ml-4 mb-10">
                Ми завжди виконуємо те, що обіцяємо. Ми не боїмося брати на себе
                відповідальність і робимо це свідомо.
              </p>
              <li className="ml-4 text-2xl">Розвиток</li>
              <p className="text-lg ml-4">
                Ми завжди виконуємо те, що обіцяємо. Ми не боїмося брати на себе
                відповідальність і робимо це свідомо.
              </p>
            </ul>
          </div>
        )}
        {activeTab === "values" && (
          <div className="mt-[80px] mb-[160px]">
            <ul className="list-disc ">
              <li className="ml-4 text-2xl">Служіння суспільству</li>
              <p className="text-lg ml-4 mb-10">
                Ми здійснюємо свою діяльність в інтересах громади, суспільства в
                цілому та в інтересах окремих соціальних груп. Суспільне благо
                має пріоритет перед інтересами як самої організації, так і її
                членів.
              </p>
              <li className="ml-4 text-2xl">Людина</li>
              <p className="text-lg ml-4 mb-10">
                Розуміння, повага та увага до людей, з якими і для яких ми
                працюємо. Гендерна рівність і повага до інтересів національних
                та інших меншин.
              </p>
              <li className="ml-4 text-2xl">Відкритість</li>
              <p className="text-lg ml-4 mb-10">
                Ми відкрито інформуємо наших співробітників, партнерів,
                бенефіціарів та інші зацікавлені сторони про важливі питання
                діяльності нашої організації, створюючи основу для довірчого
                співробітництва.
              </p>
              <li className="ml-4 text-2xl">Довіра</li>
              <p className="text-lg ml-4 mb-10">
                Основа суспільної дії, яка складається між людьми в результаті
                доброчесного співробітництва. Чесність, відповідальність,
                доброзичливість, щирість, компетентність – це наші принципи, як
                моделі поведінки, що формують довіру.
              </p>
              <li className="ml-4 text-2xl">Свобода</li>
              <p className="text-lg ml-4">
                Свобода від впливу політичних партій та влади. Свобода у
                прийнятті рішень.
              </p>
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
}

export default AboutContent;
