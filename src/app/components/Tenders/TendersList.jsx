
"use client";
import Link from "next/link";
import { dataTenders } from "./data";
export default function TenderList() {
    return (
        <>
      <ul className="flex gap-5 not-italic leading-normal">
        {dataTenders.map((item) => (
       
          <li
            key={item.id}
            className="flex flex-col p-6 min-w-[22.5rem] bg-[#E0F2FE]"
          >
               <Link href={`/tenders/${item.id}`}>
           <div className="flex justify-between font-body text-lg">
           <span
												className={`font-bold ${
													item.type === 'Активний'
														? 'text-green'
														: 'text-lightGray'
												}`}
											>
												{item.type}
											</span>
            <span className="text-black">{item.data}</span>
           </div>
            <p className="font-sans mt-6 text-left leading-6 text-2xl text-black font-medium">
              {item.text}
            </p>
            </Link>
          </li>
        ))}
      </ul>
         </>
    );
  }