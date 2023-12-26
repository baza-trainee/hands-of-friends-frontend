import Container from "./Container";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-lightBlue py-4">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-16	">
            <Image
              className="cursor-pointer"
              src="./logo.svg"
              alt="logo"
              width={75}
              height={75}
              priority
            />
            <nav>
              <ul className="flex gap-20 item-centre">
                <li>
                  <Link className="hover:text-purple" href="#">
                    Про нас
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-purple" href="#">
                    Проекти
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-purple" href="#">
                    Тендери
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-purple" href="#">
                    Команда
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-20 ">
            <div className="flex">
              <Image
                src="./locale.svg"
                alt="logo"
                width={24}
                height={24}
                priority
              />
              <select className="bg-transparent border-none cursor-pointer">
                <option value="en">УКР</option>
                <option className="hover:text-purple" value="ua">ENG</option>
              </select>
            </div>
            <Button>Підтримати проект</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
