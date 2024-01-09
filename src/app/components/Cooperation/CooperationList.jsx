import Button from "../Button";
import { dataCooperation } from "./data";

export default function CooperationList() {
  return (
    <ul className="flex gap-5 font-body not-italic leading-normal text-black">
      {dataCooperation.map((item, index) => (
        <li
          key={index}
          className="flex flex-col items-center p-12 min-w-[22.5rem] bg-[#E0F2FE]"
        >
          <h3 className="mb-6 font-body not-italic text-3xl leading-normal font-bold text-deepBlue">
            {item.subtitle}
          </h3>
          <p className="grow mb-8 text-lg leading-6 italic font-light text-center">
            {item.text}
          </p>
          <Button
            type="button"
            className="py-4 px-0 min-w-[12.38rem] font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue"
          >
            {item.btnText}
          </Button>
        </li>
      ))}
    </ul>
  );
}
