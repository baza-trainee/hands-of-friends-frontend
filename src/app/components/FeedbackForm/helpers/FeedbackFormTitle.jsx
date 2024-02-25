import { useTranslation } from "@/app/i18n/client";
import React from "react";

const FeedbackFormTitle = ({ lng, additionalData }) => {
  const { t } = useTranslation(lng, "form_feedback");

  //   if (additionalData === "partners") {
  //     title = t("title_partner");
  //     console.log("additionalData partners");
  //   } else if (additionalData === "donors") {
  //     title = t("title_donor");
  //     console.log("additionalData donors");
  //   } else if (additionalData === "volunteers") {
  //     title = t("title_volunteer");
  //     console.log("additionalData title_volunteer");
  //   }

  return <h2 className="mb-8 text-base xl:text-2xl">{t("title_partner")} </h2>;
};

export default FeedbackFormTitle;
