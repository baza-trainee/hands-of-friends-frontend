import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <footer className="bg-lightBlue py-4">
      <Container>
        <div>
          <div className="flex justify-around items-center">
            <Image
              className="cursor-pointer justify-self-start"
              src="./logo.svg"
              alt="logo"
              width={75}
              height={75}
              priority
            />
            <nav className="flex flex-auto justify-center">
              <ul className="flex gap-20">
                <li>
                  <Link href="#" className="hover:text-purple">
                    Про нас
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple">
                    Проекти
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple">
                    Тендери
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple">
                    Команда
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <ul className="flex justify-center gap-16 my-4">
            <li>
              <Link href="#" className="hover:text-purple">
                Правила користування сайтом
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple">
                Політика конфіденційності
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple">
                Звітність
              </Link>
            </li>
          </ul>
          <div className="flex justify-center">
            <p>Розробка Baza Trainee Ukraine 2023 Всі права захищені </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
