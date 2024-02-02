import React from 'react';
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mb-16 mt-[2rem] md:mb-[9.5rem] md:mt-[9.5rem] xl:mb-[8.25rem] 2xl:mb-40 xl:mt-[3.75rem] font-body text-center ">
      <h2 className="text-[6.25rem] md:text-[10.63rem] xl:text-[16rem] font-bold leading-[1.2] tracking-[0.13rem] md:tracking-[0.21rem] xl:tracking-[0.32rem] text-deepBlue">
        404
      </h2>
      <p className="mb-[3.75rem] text-lg md:text-3xl xl:text-[2rem] leading-7  xl:leading-normal">
        Вибачте, сторінка, яку ви шукаєте, переміщена або видалена.
      </p>
      <p className="inline-block p-4 text-xl text-white duration-300 border-2 rounded cursor-pointer lg:self-center bg-violet border-violet hover:bg-white hover:text-violet">
        <Link href="/">Повернутися на головну</Link>
      </p>
    </div>
  );
}
