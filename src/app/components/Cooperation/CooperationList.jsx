import React from 'react';
import Action from "../Action";
import { dataCooperation } from "./data";

export default function CooperationList() {
  return (
    <ul
      className="flex flex-col justify-center items-center gap-5 font-body  text-black
      sm:gap-8
      md:flex-row md:flex-wrap md:gap-5"
    >
      {dataCooperation.map((item, index) => (
        <li
          key={index}
          className="flex flex-col grow items-center px-[1.13rem] py-[1.63rem] max-w-[18rem] bg-[#E0F2FE]
          md:px-6 md:py-8 md:max-w-[20.88rem]
          lg:py-12 lg:px-8 lg:max-w-[22.5rem]
          2xl:py-14 2xl:px-11 2xl:max-w-[24rem]"
        >
          <h3
            className="mb-6 font-body text-2xl font-medium text-deepBlue
          md:text-3xl md:font-bold leading-8
          xl:leading-9"
          >
            {item.subtitle}
          </h3>
          <p
            style={index === 1 ? { maxWidth: "188px" } : { maxWidth: "251px" }}
            className="mb-6 grow text-base italic font-light text-center
            md:mb-5 md:text-lg
            xl:mb-8"
          >
            {item.text}
          </p>
          <Action
            href={"https://docs.google.com/forms/u/0/"}
            rel="noopener noreferrer"
            target="_blank"
            className="px-0 min-w-[12.38rem]  bg-deepBlue text-center border-0 hover:text-deepBlue  hover:border-deepBlue"
          >
            {item.btnText}
          </Action>
        </li>
      ))}
    </ul>
  );
}
