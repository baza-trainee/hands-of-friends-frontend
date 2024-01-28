// TenderList.js
import Link from "next/link";

export default function TenderList({ currentItems, activeTab }) {
  return (
    <ul className="grid lg:grid-cols-3 gap-5 min-w-[360px] not-italic leading-normal">
      {currentItems.map((tender) => (
        <Link key={tender.id} href={`/tenders/${tender.id}`}>
          <li
            className="flex flex-col flex-wrap p-6 min-w-[22.5rem] min-h-[297px] bg-[#E0F2FE]"
            style={{ cursor: "pointer" }}
          >
            {activeTab === "all" ||
              (activeTab === "active" && tender.is_active) ? (
              <>
                <p className="flex justify-between font-body text-lg">
                  <span
                    className={`font-bold ${tender.is_active ? "text-green" : "text-lightGray"}`}
                  >
                    {tender.is_active ? "Активний" : "Архівний"}
                  </span>
                  <span className="text-black">{tender.date}</span>
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
              </>
            ) : null}
          </li>
        </Link>
      ))}
    </ul>
  )
};