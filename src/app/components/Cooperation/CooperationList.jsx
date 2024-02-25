"use client";
import React, { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import Action from "../Action";
import BaseModal from "../BaseModal/BaseModal";
import FeedbackFormLayout from "../FeedbackForm/FeedbackFormLayout";
import { HiPlus } from "react-icons/hi2";
import FeedbackFormTitle from "../FeedbackForm/helpers/FeedbackFormTitle";

export default function CooperationList({ lng }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((prev) => !prev);
  const { t } = useTranslation(lng, "cooperation");

  const items = ["partners", "donors", "volunteers"];

  return (
    <ul
      role="list"
      className="relative flex flex-col justify-center items-center gap-5 mb-8 font-body  text-black
      sm:gap-8 sm:mb-10
      md:flex-row md:flex-wrap md:gap-5 md:mb-16
      xl:mb-20"
    >
      {items.map((item, index) => (
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
            {t(`cooperation.${item}.title`)}
          </h3>
          <p
            className="mb-6 text-base italic font-light text-center 
            md:mb-5 md:text-lg
            xl:mb-8"
          >
            {t(`cooperation.${item}.text`)}
          </p>

          <Action
            type="button"
            onClick={() => setIsOpen(true)}
            className="px-0 min-w-[12.38rem]  bg-deepBlue text-center border-0 border-transparent hover:text-deepBlue  hover:border-deepBlue"
          >
            {t(`cooperation.${item}.btnText`)}
          </Action>
          {isOpen && (
            <BaseModal isOpen={isOpen} onClose={toggleModal}>
              <FeedbackFormLayout additionalData={item}>
                <FeedbackFormTitle />
                <button type="button" onClick={toggleModal}>
                  <HiPlus
                    size={24}
                    className="absolute transition transform rotate-45 cursor-pointer top-[10px] right-[10px] fill-slate-900  hover:fill-violet hover:scale-110"
                  />
                </button>
              </FeedbackFormLayout>
            </BaseModal>
          )}
        </li>
      ))}
    </ul>
  );
}
