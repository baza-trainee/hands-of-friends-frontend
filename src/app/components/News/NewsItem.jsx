import React, { useState, useEffect } from "react";

import Image from "next/image";

import NewsModal from "./NewsModal";

const NewsItem = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formattedDescription, setFormattedDescription] = useState("");

  useEffect(() => {
    if (data.description) {
      const words = data.description.split(" ");
      const truncatedDescription = words.slice(0, 30).join(" ");

      const formattedDescWithClasses = truncatedDescription
        .replace(/<ul/g, `<ul class="your-ul-class"`)
        .replace(/<ol/g, `<ol class="your-ol-class"`);

      if (words.length > 30) {
        setFormattedDescription(formattedDescWithClasses + "...");
      } else {
        setFormattedDescription(formattedDescWithClasses);
      }
    }
  }, [data.description]);

  return (
    <div className="bg-lightBlue">
      <li
        key={data.id}
        className="flex bg-lightBlue flex-col h-[824px] xs:min-h-[630px] sm:min-h-[772px] md:min-h-[832px] lg:min-h-[821px] p-6 "
      >
        <Image
          src={data.image}
          alt="Photo of the news"
          width={302}
          height={400}
          className="h-[264px] xs:w-[256px] sm:w-[340px] md:w-[283px] lg:w-full object-cover mb-6 "
        />

        <h3 className="text-xl font-bold mb-2">{data.title}</h3>
        <span className="mb-2 text-xl lg:text-lg">{data.date}</span>

        <p
          className="flex-1"
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        ></p>

        <button
          onClick={() => setModalIsOpen(true)}
          type="button"
          className=" block min-w-[198px] min-h-[60px] mx-auto rounded-md underline underline-offset-4 px-0 mt-8 font-normal bg-transperent text-black border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue md:mt-10 xl:mt-8"
        >
          Детальніше
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
