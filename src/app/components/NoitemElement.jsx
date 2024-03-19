import { useTranslation } from "@/app/i18n/client";

export default function NoItem({ lng }) {
  const { t } = useTranslation(lng, "noitem");

  return (
    <div className=" p-4 bg-[#E0F2FE] border border-transparent border-gray-300 sm:p-6 2xl:p-8">
      <h3 className="mb-10 mt-6 text-lg font-['Open_Sans'] h-[60px] sm:mb-6 md:mt-8">
        {t("text")}
      </h3>
    </div>
  );
}