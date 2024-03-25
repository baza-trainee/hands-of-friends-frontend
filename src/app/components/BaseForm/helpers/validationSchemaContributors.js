import { phoneRegExp } from "@/app/helpers/consts";
import * as Yup from "yup";

export const validationSchema = (t) => {
  return Yup.object({
    organization_name: Yup.string()
      .required(t("company_name_required"))
      .min(2, t("company_name_min"))
      .max(50, t("company_name_max")),
    representative_name: Yup.string()
      .required(t("name_required"))
      .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\s'-]+$/, t("name_matches"))
      .min(2, t("name_min"))
      .max(50, t("name_max")),
    email: Yup.string()
      .required(t("email_required"))
      .matches(
        /^[a-zA-Z0-9._%+-]+.{1,}@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
        t("email_matches")
      )
      .test(
        "valid-domain",
        t("email_matches"),
        (value) => !/(.ru|.by)$/.test(value.split("@")[1])
      ),
    phone: Yup.string()
      .min(10, t("phone_number_min"))
      .max(19, t("phone_number_max"))
      .matches(phoneRegExp, t("phone_number_matches"))
      .required(t("phone_number_required")),
    message: Yup.string()
      .required(t("message_required"))
      .max(300, t("message_max")),
  });
};