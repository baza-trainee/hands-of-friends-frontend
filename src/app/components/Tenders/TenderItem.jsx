import React from "react";
import Link from "next/link";

export default function TenderItem({ tender, href }) {
  return (
    <Link href={href}>
      <li
        className="flex flex-col flex-wrap min-w-[18rem] min-h-[248px] p-4 bg-[#E0F2FE]
        sm:p-6 sm:min-w-[388px]
        xl:p-6 xl:min-w-[360px] xl:min-h-[297px]
        2xl:p-9 2xl:min-w-[24rem] 2xl:min-h-[321px]"
        style={{ cursor: "pointer" }}
      >
        <p className="flex justify-between font-body text-base
        xl:text-lg">
          <span
            className={`font-bold ${
              tender.is_active ? "text-green" : "text-lightGray"
            }`}
          >
            {tender.is_active ? "Активний" : "Архівний"}
          </span>
          <span className="text-black text-base
        xl:text-lg">{tender.end_date}</span>
        </p>
        <p className="font-sans mt-6 text-left text-lg text-black font-medium
        sm:text-xl
        xl:text-2xl">
          {tender.title
            .split(" ")
            .slice(0, 20)
            .map((word, index) => (
              <span key={index}>{word.trim()} </span>
            ))}
          {tender.description.split(" ").length > 20 && "..."}{" "}
        </p>
      </li>
    </Link>
  );
}
