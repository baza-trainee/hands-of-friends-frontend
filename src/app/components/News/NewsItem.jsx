import React, { useState, useEffect } from "react";

import Image from "next/image";

import NewsModal from "./NewsModal";
import { useTranslation } from "@/app/i18n/client";

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
        <NewsModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          data={data}
          description={data.description}
        />
      </li>
    </div>
  );
};

export default NewsItem;
