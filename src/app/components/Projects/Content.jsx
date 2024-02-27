import React, { useEffect, useState } from "react";
import Image from "next/image";
import { OLCLASS, ULCLASS } from "@/app/helpers/consts";

export default function ContentItem({ item }) {
  const [formattedDescription, setFormattedDescription] = useState();

  useEffect(() => {
    async function fetchData(item) {
      const desc = item.text
        .replace(/<ul/g, `<ul class="${ULCLASS}"`)
        .replace(/<ol/g, `<ol class="${OLCLASS}"`);

      setFormattedDescription(desc);
    }
    fetchData(item);
  }, []);

  return (
    <li key={item.id}>
      <p
        className="mb-6"
        dangerouslySetInnerHTML={{
          __html: formattedDescription,
        }}
      ></p>
      {/* <p>{item.text}</p> */}
      {item.image ? (
        <Image
          src={item.image}
          alt="Photo of the project"
          width={334}
          height={241}
          className="min-w-[288px] h-[180px] object-cover mb-6
        sm:min-w-[388px] sm:h-[241px]
        md:min-w-[334px] 
        xl:min-w-[455px] 
        2xl:min-w-[486px]"
        />
      ) : (
        " "
      )}
    </li>
  );
}
