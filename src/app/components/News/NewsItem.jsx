import React, { useState, useEffect } from "react";

import Image from "next/image";
import Close from "../../../../public/img/close.svg";

import { useTranslation } from "@/app/i18n/client";
import BaseModal from "../BaseModal/BaseModal";

const NewsItem = ({ data, lng }) => {
  const { t } = useTranslation(lng, "news");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formattedDescription, setFormattedDescription] = useState(
    data.description
  );
  useEffect(() => {
    setFormattedDescription(data.description);
  }, [data.description]);
  return (
    <div className="bg-lightBlue">
      <li
        key={data.id}
        className="flex bg-lightBlue flex-col h-[790px] sm:h-[772px] md:min-h-[832px] lg:min-h-[836px] 2xl:min-h-[821px] p-4 sm:p-6 "
      >
        <Image
          src={data.image}
          alt="Photo of the news"
          width={302}
          height={400}
          className="h-[238px] sm:h-[316px] md:h-[264px] xs:w-[256px] sm:w-[340px] md:w-[283px] lg:w-full object-cover mb-6 "
        />
        <span className="mb-2 text-xl lg:text-lg">{data.date}</span>
        <h3 className="text-xl font-bold mb-2">{data.title}</h3>

        <div className="line-clamp-[9] sm:line-clamp-[7] md:line-clamp-[8]">
          <p
            className="flex-1"
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          ></p>
        </div>

        <button
          onClick={() => setModalIsOpen(true)}
          type="button"
          style={{ marginTop: "auto" }}
          className="text-xl block min-w-[198px] min-h-[60px] mx-auto rounded-md underline underline-offset-4 px-0 mt-8 font-normal bg-transperent text-black border border-transparent hover:border hover:border-deepBlue md:mt-10 xl:mt-8 "
        >
          {t("btn")}
        </button>
        <BaseModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
          <div className="news-modal h-[906px] w-[288px] sm:w-[344px] md:w-[586px] xl:w-[740px] 2xl:w-[792px] flex flex-col">
            <button
              className="mb-2 self-end justify-end sm:mr-[-8px] md:mr-[1px] 2xl:mr-2"
              onClick={() => setModalIsOpen(false)}
            >
              <Close />
            </button>
            <div className="modal-content justify-center md:w-[533px] xl:w-[687px] xl:mr-[10px] sm:pr-[8px] xl:pr-[10px] 2xl:w-[725px] mr-auto custom-scrollbar [&::-webkit-scrollbar]:[width:6px] md:[&::-webkit-scrollbar]:[width:8px] xl:[&::-webkit-scrollbar]:[width:10px]">
              <Image
                src={data.image}
                alt="Photo of the news"
                width={696}
                height={315}
                className="mb-6 w-[256px] h-[175px] sm:h-[198px] sm:w-[288px] md:w-[506px] md:h-[336px] xl:h-[409px] xl:w-[660px] 2xl:w-[696px] 2xl:h-[386px] object-cover object-top"
              />
              <span className="text-base sm:text-lg md:text-xl lg:text-lg mb-4">
                {data.date}
              </span>
              <h2 className="text-xl font-bold mb-3 md:max-w-[506px]">
                {data.title}
              </h2>

              <p
                className="lg:max-w-[660px] md:max-w-[506px] xs:max-w-[256px] sm:max-w-[288px] "
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></p>
            </div>
          </div>
        </BaseModal>
      </li>
    </div>
  );
};

export default NewsItem;
