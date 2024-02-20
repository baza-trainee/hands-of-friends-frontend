import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("Введіть ім'я")
    .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\s'-]+$/, "Некоректне ім’я")
    .min(2, "Ім’я повинно мати не менше 2 знаків")
    .max(50, "Ім’я повинно бути не більше 50 знаків"),
  email: Yup.string()
    .required("Введіть email")
    .matches(
      /^[a-zA-Z0-9._%+-]+.{1,}@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
      "Введіть дійсний email"
    )
    .test(
      "valid-domain",
      "Домени .ru і .by не допускаються",
      (value) => !/(.ru|.by)$/.test(value.split("@")[1])
    ),
  phone_number: Yup.string()
    .required("Введіть номер телефону")
    .matches(/^\+380\d{9}$/, "Введіть дійсний номер телефону"),
  message: Yup.string()
    .required("Введіть повідомлення")
    .max(300, "Просимо скоротити ваше повідомлення до 300 знаків"),
});
