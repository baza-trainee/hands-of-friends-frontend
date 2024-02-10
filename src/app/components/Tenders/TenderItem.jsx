import React from "react";
import Link from "next/link";

export default function TenderItem({ data, href}) {
  return (
    <Link href={`tenders/${data.id}`}>
      <li
        className="flex flex-col flex-wrap min-w-[18rem] min-h-[248px] p-4 bg-[#E0F2FE]
        sm:p-6 sm:min-w-[388px]
        md:min-w-[334px] md:min-h-[279px]
        xl:min-w-[330px] xl:min-h-[279px]
        2xl:p-9 2xl:min-w-[24rem] 2xl:min-h-[321px]"
        style={{ cursor: "pointer" }}
      >
        <p className="flex justify-between font-body text-base
        md:text-lg
        xl:text-base">
          <span
            className={`font-bold ${
              data.is_active ? "text-green" : "text-lightGray"
            }`}
          >
            {data.is_active ? "Активний" : "Архівний"}
          </span>
          <span className="text-black text-base
        md:text-lg
        xl:text-base">{data.start_date} - {data.end_date}</span>
        </p>
        <p className="font-sans mt-6 text-left text-lg text-black font-medium
        sm:text-xl
        xl:text-lg">
          {data.title
            .split(" ")
            .slice(0, 20)
            .map((word, index) => (
              <span key={index}>{word.trim()} </span>
            ))}
          {data.description.split(" ").length > 20 && "..."}{" "}
        </p>
      </li>
    </Link>
  );
}
