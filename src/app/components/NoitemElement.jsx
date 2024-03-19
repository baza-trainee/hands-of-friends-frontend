import { useTranslation } from "@/app/i18n/client";

export default function NoItem({ lng }) {
  const { t } = useTranslation(lng, "noitem");

  return (
    <div className="w-full flex items-center justify-center bg-[#E0F2FE] border border-transparent border-gray-300 
            italic font-semibold text-base text-center p-8 
            md:p-16 md:text-lg
            xl:text-xl"
    >
      <h3>
        {t("text")}
      </h3>
    </div>
  );
}