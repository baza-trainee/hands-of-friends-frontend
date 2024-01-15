import Action from "../Action";
import { dataProjects } from "./data";

export default function ProjectList() {
  return (
    <>
      <ul className="flex gap-5 not-italic leading-normal">
        {dataProjects.map((item) => (
          <li key={item.id} className="flex flex-col min-w-[22.5rem]">
            {/* <div className="flex justify-between font-body text-lg"> */}
            <h3 className="font-body text-2xl mb-1">{item.name}</h3>
            <span
              className={`font-bold text-lg ${
                item.type === "Активний" ? "text-green" : "text-lightGray"
              }`}
            >
              {item.type}
            </span>
            {/* 
        </div> */}
            <p className="font-body mt-6 text-left leading-6 text-lg text-black font-medium">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
      <Action
        type="button"
        className="block px-0 mx-auto mt-8 min-w-[13.63rem] font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue"
      >
        Завантажити більше
      </Action>
    </>
  );
}
