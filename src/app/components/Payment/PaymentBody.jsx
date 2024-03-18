import React from "react";
import Action from "../Action";
import { useTranslation } from "@/app/i18n/client";

export const PaymentBody = ({ lng }) => {
  const { t } = useTranslation(lng, "payment");
  return (
    <div>
      <h2 className="mb-6 font-semibold"> {t("title")}</h2>
      <ul className="mb-2">
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
      <p className="font-bold"> {t("PurposeOfPayment")}</p>
      <p className="mb-6"> {t("text")}</p>
      <Action className="mb-6 min-w-[184px] text-white  bg-violet border-violet hover:bg-transparent hover:text-violet transition border-2 rounded cursor-pointer">
        {t("copyIBAN")}
      </Action>
      <p className="font-bold"> {t("gratitude")}</p>
    </div>
  );
};
