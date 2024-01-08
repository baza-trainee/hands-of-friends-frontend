import Link from "next/link";
import Img from "../../assets/aboutUs1.png";
import Img2 from "../../assets/aboutUs2.png";
import Title from "./Title";

export default function About() {
  return (
    <div className="">
      <blockquote>
        <p className="w-[34.875rem] italic text-2xl mb-10">
          “Щодня наша команда зливається в один оркестр. Головне – чути ритм
          кожного!”
        </p>
      </blockquote>
      <div className="flex gap-5 mb-10">
        <img src={Img.src} alt="Our-team" />
        <img src={Img2.src} alt="Our-team" />
      </div>
      <Title className="mb-15" titleName="Про нас" />
      <h2 className="text-2xl mb-8">
        Міжнародний благодійний фонд "Руки друзів"
      </h2>
      <div className="text-lg ">
        <p className="mb-4">
          Міжнародний благодійний фонд «Руки друзів» діє за посередництвом
          юридичних осіб (соціальні служби, управління освіти, медичні заклади,
          громадські організації тощо).
        </p>
        <p className="mb-4">
          Офіс МБФ розташовувався в Краматорську. До початку повномасштабного
          вторгнення фонд реалізував проєкти на території Донеччини та Луганщини
          з акцентом на мешканців населених пунктів поблизу «лінії зіткнення».
          Наразі фонд працює переважно на території Вінницької та Хмельницької
          областей.
        </p>
        <p className="mb-8">
          Бенефіціарами благодійної допомоги є переселенці, родини з дітьми,
          люди, що потребують сторонньої підтримки. Тож увагу зосереджуємо на
          колективних центрах, освітніх закладах, центрах реабілітації, медичних
          закладах та громадських організаціях, що опікуються зазначеними
          категоріями громадян.
        </p>
      </div>
      <Link href="/eng" className="text-white bg-deepBlue p-4 rounded">
        Дізнатись більше
      </Link>
    </div>
  );
}

