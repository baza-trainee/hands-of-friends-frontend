import React from "react";
import Action from "../Action";
import { useTranslation } from "@/app/i18n/client";

export const PaymentBody = ({ lng }) => {
  const { t } = useTranslation(lng, "payment");
  return (
    <div className="text-sm sm:text-base md:text-lg xl:text-xl">
      <h2
        className="m-auto mb-6 max-w-[223px] font-semibold text-center antialiased
      sm:max-w-[320px] sm:text-xl
      md:max-w-[400px] md:text-2xl md:mb-8
      xl:max-w-[493px] xl:text-3xl"
      >
        {t("title")}
      </h2>
      <ul className="mb-2 flex flex-col gap-1 md:mb-4">
        <li>
          <p> {t("EDRPOU")}</p>
        </li>
        <li>
          <p> {t("IBAN")}</p>
        </li>
        <li>
          <p> {t("BankName")}</p>
        </li>
      </ul>
      <p className="mb-1 font-bold"> {t("PurposeOfPayment")}</p>
      <p className="mb-6"> {t("text")}</p>
      <Action className="mb-6 min-w-[184px] text-lg text-white  bg-violet border-violet hover:bg-transparent hover:text-violet transition border-2 rounded cursor-pointer">
        {t("copyIBAN")}
      </Action>
      <p className="font-bold"> {t("gratitude")}</p>
    </div>
  );
};