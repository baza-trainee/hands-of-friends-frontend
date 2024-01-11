"use client";
import Button from "../Button";
import { dataTenders } from "./data";
import { useRouter } from "next/navigation";

export default function TenderList() {
  const router = useRouter();
    return (
        <>
      <ul className="flex gap-5 not-italic leading-normal">
        {dataTenders.map((item, index) => (
          <li
            key={index}
            className="flex flex-col p-6 min-w-[22.5rem] bg-[#E0F2FE]"
          >
           <div className="flex justify-between font-body text-lg">
            <span className="font-bold text-green">{item.type}</span>
            <span className="text-black">{item.data}</span>
           </div>
            <p className="font-sans mt-6 text-left leading-6 text-2xl text-black font-medium">
              {item.text}
            </p>
           
          </li>
        ))}
      </ul>
          <Button onClick={() => router.push("/tenders")}
       type="button"
    className="block px-0  mx-auto mt-8 min-w-[12.38rem] font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue"
    >Дізнатись більше</Button>
      </>
    );
  }