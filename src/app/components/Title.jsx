import clsx from "clsx";
import React from "react";

export default function Title({ titleName, className }) {
  return (
    <h2
      className={clsx(
        `mb-8 font-body font-bold  text-black text-2xl pseudo
        sm:mb-10
        md:mb-14 
        xl:mb-[3.77rem] xl:text-3xl`,
        className
      )}
    >
      {titleName}
    </h2>
  );
}
