"use client";
import React, { useState } from "react";
import { clsx } from "clsx";
import Action from "../Action";
import { useTranslation } from "@/app/i18n/client";
import BaseModal from "../BaseModal/BaseModal";
import { PaymentBody } from "./PaymentBody";
import { BaseForm } from "../BaseForm/BaseForm";
import { HiPlus } from "react-icons/hi2";

export const Payment = ({ lng, className }) => {
  const { t } = useTranslation(lng, "payment");
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen((prev) => !prev);
  return (
    <>
      <Action
        onClick={() => setModalOpen(true)}
        type="button"
        className={clsx(
          " text-white  bg-violet border-violet hover:bg-transparent hover:text-violet transition border-2 rounded cursor-pointer",
          className
        )}
      >
        {t("supportBtn")}
      </Action>
      {modalOpen && (
        <BaseModal
          isOpen={modalOpen}
          onClose={() => toggleModal()}
          className="bg-stone-900 bg-opacity-30 backdrop-blur-[10px]"
        >
          <div className="relative w-288px p-8 text-sm text-black text-center bg-[#F1F5F9] rounded-[5px]">
            <button type="button" onClick={toggleModal}>
              <HiPlus
                size={24}
                className="absolute transition transform rotate-45 cursor-pointer top-[10px] right-[10px] fill-slate-900  hover:fill-violet hover:scale-110"
              />
            </button>
            <PaymentBody lng={lng} />
          </div>
        </BaseModal>
      )}
    </>
  );
};