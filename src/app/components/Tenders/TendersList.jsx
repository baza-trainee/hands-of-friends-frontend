import Link from "next/link";
import Button from "../Button";
import { dataTenders } from "./data";

export default function TenderList() {
    return (
        <div>
      <ul className="flex gap-5 not-italic leading-normal">
        {dataTenders.map((item, index) => (
          <li
            key={index}
            className="flex flex-col p-6 min-w-[22.5rem] bg-[#E0F2FE]"
          >
           <div className="flex justify-between font-body text-lg">
            <span classname="font-bold text-green-500">{item.type}</span>
            <span classname="text-black">{item.data}</span>
           </div>
            <p className="font-sans mt-6 text-left leading-6 text-2xl text-black font-medium">
              {item.text}
            </p>
           
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
      <Link href="/tenders">
        <Button
         type="button"
      className="px-0 mt-8 min-w-[12.38rem] font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue"
      >Дізнатись більше</Button>
      </Link>
    </div>
      </div>
    );
  }