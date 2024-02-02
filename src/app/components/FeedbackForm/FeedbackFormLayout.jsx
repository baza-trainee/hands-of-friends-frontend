"use client";

import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import Action from "../Action";
import img from "../../../../public/img/hand-holds-smartphone.png";
import axios from "axios";

const FeedbackFormLayout = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
    },

    validationSchema: Yup.object({
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
    }),

    onSubmit: (values, { resetForm, setSubmitting }) => {
      let data = JSON.stringify(values, null, 2);
      axios.post('https://hands-of-friends-backend.onrender.com/api/feedback/', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          setSubmitting(false);
          resetForm();
        });
    },
  });

  return (
    <>
      <div className="relative">
        <form
          className="absolute top-20 right-0 flex w-[31.4rem] flex-col items-center bg-white shadow-md z-10"
          action="/submit_form"
          method="post"
          onSubmit={formik.handleSubmit}
        >
          <div className="relative w-[28.4rem] mb-6 mt-6">
            <label className="text-lg" htmlFor="name">
              Ім'я
            </label>

            <input
              className={`w-full h-10 rounded-[0.3rem] mt-2 px-2 outline-none focus:ring-1 focus:ring-transparent border  
          
              ${formik.touched.name
                  ? formik.errors.name
                    ? "border-[red] "
                    : formik.values.name
                      ? "border-deepBlue"
                      : "border-fontGray focus:border-vividBlue"
                  : "border-fontGray"
                }
              `}
              type="text"
              autoComplete="off"
              // placeholder="Ольга"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <div
              className={`absolute top-[100%] text-[red] transition duration-300 ${formik.touched.name && formik.errors.name
                ? "" // translate opacity-1
                : "opacity-0 translate-y-[-0.625rem]"
                }`}
            >
              {formik.errors.name}
            </div>
          </div>

          <div className="relative w-[28.4rem] mb-6">
            <label className="text-lg" htmlFor="email">
              Електронна пошта
            </label>

            <input
              className={`w-full h-10 rounded-[0.3rem] mt-2 px-2 outline-none focus:ring-1 focus:ring-transparent border
              ${formik.touched.email
                  ? formik.errors.email
                    ? "border-[red] "
                    : formik.values.email
                      ? "border-deepBlue"
                      : "border-fontGray focus:border-vividBlue"
                  : "border-fontGray"
                }`}
              type="text"
              autoComplete="off"
              // placeholder="example@gmail.com"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            <div
              className={`absolute text-[red] transition duration-300 ${formik.touched.email && formik.errors.email
                ? "" // translate opacity-1
                : "opacity-0 translate-y-[-0.625rem]"
                }`}
            >
              {formik.errors.email}
            </div>
          </div>

          <div className="relative w-[28.4rem] mb-6">
            <label className="text-lg" htmlFor="phone_number">
              Контактний телефон
            </label>

            <input
              className={`w-full h-10 rounded-[0.3rem] mt-2 px-2 outline-none focus:ring-1 focus:ring-transparent border
              ${formik.touched.phone_number
                  ? formik.errors.phone_number
                    ? "border-[red] "
                    : formik.values.phone_number
                      ? "border-deepBlue"
                      : "border-fontGray focus:border-vividBlue"
                  : "border-fontGray"
                }`}
              type="text"
              autoComplete="off"
              // placeholder="+38 000 000 0000"
              id="phone_number"
              name="phone_number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone_number}
            />
            <div
              className={`absolute text-[red] transition duration-300 ${formik.touched.phone_number && formik.errors.phone_number
                ? "" // translate opacity-1
                : "opacity-0 translate-y-[-0.625rem]"
                }`}
            >
              {formik.errors.phone_number}
            </div>
          </div>

          <div className="relative w-[28.4rem] mb-6">
            <label className="text-lg" htmlFor="message">
              Ваше повідомлення
            </label>
            {/* w-[28.4rem] rounded-[0.3rem] h-32 mt-2 px-2 py-1 */}
            <textarea
              className={`w-[28.4rem] rounded-[0.3rem] h-32 mt-2 px-2 py-1 outline-none block focus:ring-1 focus:ring-transparent border resize-none ${formik.touched.message
                ? formik.errors.message
                  ? "border-[red] "
                  : formik.values.message
                    ? "border-deepBlue"
                    : "border-fontGray focus:border-vividBlue"
                : "border-fontGray"
                }`}

              id="message"
              name="message"
              // placeholder="Ваше повідомлення..."
              rows="4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            <div
              className={`absolute text-[red] transition duration-300 ${formik.touched.message && formik.errors.message
                ? "" // translate opacity-1
                : "opacity-0 translate-y-[-0.625rem]"
                }`}
            >
              {formik.errors.message}
            </div>
          </div>
          <Action
            type="submit"
            className="mb-6 min-w-[12.38rem] mt-4 bg-deepBlue  hover:text-deepBlue  hover:border-deepBlue"
          >
            Надіслати
          </Action>
        </form>
      </div>

      <div>
        <Image src={img} width={740} height={490} alt="hand-holds-smartphone" />
      </div>
    </>
  );
};

export default FeedbackFormLayout;
