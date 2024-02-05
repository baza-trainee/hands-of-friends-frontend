import React from "react";
import Link from "next/link";

export default function TenderItem({ tender, href }) {
  return (
    <Link href={href}>
      <li
        className="flex flex-col flex-wrap p-6 min-w-[22.5rem] min-h-[297px] bg-[#E0F2FE]"
        style={{ cursor: "pointer" }}
      >
        <p className="flex justify-between font-body text-lg">
          <span
            className={`font-bold ${
              tender.is_active ? "text-green" : "text-lightGray"
            }`}
          >
            {tender.is_active ? "Активний" : "Архівний"}
          </span>
          <span className="text-black text-lg">{tender.end_date}</span>
        </p>
        <p className="font-sans mt-6 text-left text-2xl text-black font-medium">
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
