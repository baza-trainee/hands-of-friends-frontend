"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, A11y, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Team from "../../../../public/img/about-us1.png";
import Office from "../../../../public/img/about-us2.png";

import Section from "../Section";
import Container from "../Container";
import Title from "../Title";
import Action from "../Action";

export default function About() {
  return (
    <Section>
      <Container>
        <blockquote>
          <p className="text-xs italic mb-8 font-bold sm:text-sm md:text-2xl lg:text-center xl:text-left">
            “Щодня наша команда зливається в один оркестр.<br></br> Головне –
            чути ритм кожного!”
          </p>
        </blockquote>

        <div className="md:hidden">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Pagination, A11y, Mousewheel]}
            className="swiper about "
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <div className="">
                <Image
                  src={Team}
                  width={288}
                  height={167}
                  alt="Picture of the our team"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={Office}
                  width="100%"
                  height={167}
                  alt="Picture of the our team"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="hidden md:flex flex-col	gap-5 mb-10 xl:flex-row	">
          <Image
            src={Team}
            width="auto"
            height={398}
            alt="Picture of the our team"
            className="md:h-[361px] w-[688px] lg:mx-auto xl:w-[550px] 2xl:w-[690px]"
          />
          <Image
            src={Team}
            width="auto"
            height={398}
            alt="Picture of the our team"
            className="md:h-[361px] w-[688px] lg:mx-auto xl:w-[550px] 2xl:w-[690px]"
          />
        </div>

        <Title className="mb-15" titleName="Про нас" />
        <h2 className="text-xl mb-8 md:text-2xl">
          Міжнародний благодійний фонд "Руки друзів"
        </h2>
        <div className="text-base max-w-[740px] md:text-lg ">
          <p className="mb-4">
            Міжнародний благодійний фонд «Руки друзів» діє за посередництвом
            юридичних осіб (соціальні служби, управління освіти, медичні
            заклади, громадські організації тощо).
          </p>
          <p className="mb-4">
            Офіс МБФ розташовувався в Краматорську. До початку повномасштабного
            вторгнення фонд реалізував проєкти на території Донеччини та
            Луганщини з акцентом на мешканців населених пунктів поблизу «лінії
            зіткнення». Наразі фонд працює переважно на території Вінницької та
            Хмельницької областей.
          </p>
          <p className="mb-8">
            Бенефіціарами благодійної допомоги є переселенці, родини з дітьми,
            люди, що потребують сторонньої підтримки. Тож увагу зосереджуємо на
            колективних центрах, освітніх закладах, центрах реабілітації,
            медичних закладах та громадських організаціях, що опікуються
            зазначеними категоріями громадян.
          </p>
        </div>
        <Action
          type="button"
          className=" px-0 min-w-[12.38rem] font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue"
        >
          Дізнатись більше
        </Action>
      </Container>
    </Section>
  );
}
