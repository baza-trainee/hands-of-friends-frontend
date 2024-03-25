import { clsx } from "clsx";
import React from "react";

export default function Container({ className, children }) {
  return (
    <div
      className={clsx(
        `container mx-auto
          xs:px-4 
          md:px-[2.5rem] 
          xl:px-[5rem] 
          2xl:px-[7.5rem]`,
        className
      )}
    >
      {children}
    </div>
  );
}