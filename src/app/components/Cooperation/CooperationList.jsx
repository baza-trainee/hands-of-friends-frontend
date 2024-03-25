"use client";

import React, { useState } from "react";

import Action from "../Action";
import BaseModal from "../BaseModal/BaseModal";
import { formToggle } from "../BaseForm/helpers/formToggle";

import { useTranslation } from "@/app/i18n/client";

export default function CooperationList({ lng }) {
  const { t } = useTranslation(lng, "cooperation");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemType, setSelectedItemType] = useState("");
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const items = ["partners", "donors", "volunteers"];

  const toggleModal = (index, item) => {
    setSelectedItemIndex(index);
    setSelectedItemType(item);
    setIsOpen((prev) => !prev);
  };

  return (
    <ul
      role="list"
      className="relative flex flex-col justify-center items-center gap-5 mb-8 font-body  text-black
      sm:gap-8 sm:mb-10
      md:flex-row md:flex-wrap md:gap-5 md:mb-16 md:max-w-[768px] md:mx-auto
      xl:mb-20 xl:max-w-full "
    >
      {items.map((item, index) => (
        <li
          key={index}
          className="flex flex-col grow items-center px-3 py-6 bg-[#E0F2FE] 
          sm:max-w-[288px]
          md:px-5 md:py-8 md:max-w-[334px] 
          xl:py-12 xl:px-8 xl:max-w-[360px] 
          2xl:py-14 2xl:px-11 2xl:max-w-[384px] "
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
            onClick={() => toggleModal(index, item)}
            className="px-0 min-w-[12.38rem]  bg-deepBlue text-center border-0 border-transparent hover:text-deepBlue  hover:border-deepBlue"
          >
            {t(`cooperation.${item}.btnText`)}
          </Action>

          {isOpen && selectedItemIndex === index && (
            <BaseModal isOpen={isOpen} onClose={() => toggleModal(index)}>
              {formToggle(selectedItemType, {
                lng,
                toggleModal,
                title: t(`cooperation.${selectedItemType}.form_title`),
              })}
            </BaseModal>
          )}
        </li>
      ))}
    </ul>
  );
}