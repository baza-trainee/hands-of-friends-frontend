import Hand from "../../../../public/img/hand-heart.svg";
import { HiPlus } from "react-icons/hi2";
import { useTranslation } from "@/app/i18n/client";

export default function SuccessModal({ lng, handleClose, formType }) {
  const { t } = useTranslation(lng, "successModal");
  return (
    <div
      className={`relative flex justify-center justify-self-center flex-col items-center  mt-[180px] py-[163px] px-[22px] xs:w-[268px]  text-center  bg-lavender shadow-md z-10
      sm:w-[340px]  sm:mt-[233px] sm:px-8 sm:py-[184px]
      md:justify-self-end md:w-[334px] md:mt-20 md:py-[132px]
      xl:w-[503px]  xl:px-[55px] xl:py-[184px]
      2xl:w-[527px] 
          ${
            formType === "partners" ||
            formType === "donors" ||
            formType === "volunteers"
              ? "xs:mt-0 sm:mt-0 md:mt-0 xl:mt-0"
              : ""
          }`}
    >
      <h3 className="mb-6 text-sm font-bold md:text-lg xl:text-xl xl:mb-8">
        {t("title")}
      </h3>
      <p className="mb-2 text-sm md:text-lg md:mb-4 xl:text-xl">
        {t("message")}
      </p>
      <p className="mb-8 text-sm md:text-lg xl:text-xl xl:mb-11">
        {t("waiting")}
      </p>
      <Hand alt="hand with heart" />
      <HiPlus
        size={24}
        className="absolute top-[10px] right-[10px] transition transform rotate-45 cursor-pointer  fill-slate-900  hover:fill-violet"
        onClick={handleClose}
      />
    </div>
  );
}
