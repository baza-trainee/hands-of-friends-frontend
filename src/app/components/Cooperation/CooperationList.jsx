"use client";
import React, { useState } from "react";
import Action from "../Action";
import { dataCooperation } from "./data";
import BaseModal from "../BaseModal/BaseModal";

export default function CooperationList() {
  const [showModal, setShowModal] = useState(false);
  return (
    <ul
      role="list"
      className="relative flex flex-col justify-center items-center gap-5 mb-8 font-body  text-black
      sm:gap-8 sm:mb-10
      md:flex-row md:flex-wrap md:gap-5 md:mb-16
      xl:mb-20"
    >
      {dataCooperation.map((item, index) => (
        <li
          key={index}
          className="flex flex-col grow items-center px-[1.25rem] py-[1.63rem] w-[18rem] h-min bg-[#E0F2FE] even:px-[50px]
          md:px-[2.13rem] md:py-8 md:max-w-[20.87rem] md:even:px-[60px]
          lg:py-12 lg:px-10 lg:max-w-[22.5rem] lg:even:px-[70px]
          2xl:py-14 2xl:px-14 2xl:max-w-[24rem] 2xl:even:px-[80px]"
        >
          <h3
            className="mb-6 font-body text-2xl font-medium text-deepBlue text-center
          md:text-3xl md:font-bold leading-8
          xl:leading-9"
          >
            {item.subtitle}
          </h3>
          <p
            className="mb-6 text-base italic font-light text-center 
            md:mb-5 md:text-lg
            xl:mb-8"
          >
            {item.text}
          </p>

          <Action
            type="button"
            onClick={() => setShowModal(true)}
            className="px-0 min-w-[12.38rem]  bg-deepBlue text-center border-0 border-transparent hover:text-deepBlue  hover:border-deepBlue"
          >
            {item.btnText}
          </Action>
          {showModal && <BaseModal onClose={() => setShowModal(false)} />}
        </li>
      ))}
    </ul>
  );
}
