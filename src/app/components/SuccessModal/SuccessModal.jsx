import Hand from "../../../../public/img/hand-heart.svg";
import { HiPlus } from "react-icons/hi2";
import { useTranslation } from "@/app/i18n/client";

export default function SuccessModal({ lng, handleClose }) {
  const { t } = useTranslation(lng, "successModal");
  return (
    <div className="md:justify-self-end justify-self-center flex md:mt-20 mt-[60%] 2xl:w-[527px] xl:w-[503px]  md:w-[334px]  sm:w-[340px] xs:w-[268px] items-center bg-lavender shadow-md z-10 justify-center relative h-[618px] text-center rounded">
      <div className="flex flex-col items-center gap-10 text-xl">
        <h3 className="font-bold">{t("title")}</h3>
        <p>{t("message")}</p>
        <p className="-mt-6">{t("waiting")}</p>
        <Hand alt="hand with heart" />
        <HiPlus
          size={28}
          className="absolute transition transform rotate-45 cursor-pointer top-5 fill-slate-900 right-5 hover:fill-violet"
          onClick={handleClose}
        />
      </div>
    </div>
  );
}
