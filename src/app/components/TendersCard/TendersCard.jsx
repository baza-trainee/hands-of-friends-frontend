import Link from "next/link";

export default function TendersCard() {
  return (
    <div bg-blue>
      <div className="">Активний</div>
      <div className="">04.01.2024</div>
      <p>
        Тендер на закупівлю послуг зовнішнього оцінювання для оцінки рівня
        організаційного розвитку та розробки “Плану організаційного розвитку для
        БО”.
      </p>
      <Link href="/">Посилання</Link>
    </div>
  );
}
