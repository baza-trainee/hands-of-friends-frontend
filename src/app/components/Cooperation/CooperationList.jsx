import Action from "../Action";
import { dataCooperation } from "./data";

export default function CooperationList() {
  return (
    <ul className="flex gap-5 font-body  text-black">
      {dataCooperation.map((item, index) => (
        <li
          key={index}
          className="flex flex-col items-center p-12 min-w-[22.5rem] bg-[#E0F2FE]"
        >
          <h3 className="mb-6 font-body font-bold text-3xl text-deepBlue">
            {item.subtitle}
          </h3>
          <p className="grow mb-8 text-lg italic font-light text-center">
            {item.text}
          </p>
          <Action
            href={"https://docs.google.com/forms/u/0/"}
            rel="noopener noreferrer"
            target="_blank"
            className=" px-0 min-w-[12.38rem]  bg-deepBlue text-center hover:text-deepBlue  hover:border-deepBlue"
          >
            {item.btnText}
          </Action>
        </li>
      ))}
    </ul>
  );
}
