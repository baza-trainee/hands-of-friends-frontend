import * as Yup from "yup";

export const validationSchema = (t) => {
  return Yup.object({
    name: Yup.string()
      .required(t("name_required"))
      .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\s'-]+$/, t("name_matches"))
      .min(2, t("name_min"))
      .max(50, t("nam_max")),
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
      .required(t("phone_number_required"))
      .matches(/^\+380\d{9}$/, t("phone_number_matches")),
    message: Yup.string()
      .required(t("message_required"))
      .max(300, t("message_max")),
  });
};
