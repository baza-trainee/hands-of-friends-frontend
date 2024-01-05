import TeamItem from "./TeamItems";
import { dataTeam } from "../data/data";

export default function TeamList() {
  return (
    <ul className="mySwiper font-body font-normal leading-normal text-[#020617]">
      {dataTeam.map((item, index) => (
        <li
          key={index}
          className="flex flex-col items-center w-[15.19rem] border border-[#D1D5DB]"
        >
          <img
            alt={item.alt}
            width={265}
            height={290}
            className="bg-slate-500 mb-3"
          />
          <h3 className="text-2xl tracking-[0.008rem] mb-2">{item.name}</h3>
          <p className="text-lg tracking-[0.002rem]">{item.position}</p>
        </li>
      ))}
    </ul>
  );
}
