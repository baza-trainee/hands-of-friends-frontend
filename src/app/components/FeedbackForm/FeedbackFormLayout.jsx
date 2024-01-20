"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import img from "../../assets/hand-holds-smartphone.png";
import Action from "../Action";

const FeedbackFormLayout = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Введіть ім'я")
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\s'-]+$/, "Некоректне ім’я")
        .min(2, "Ім’я повинно мати не менше 2 знаків")
        .max(50, "Ім’я повинно бути не більше 30 знаків"),

      email: Yup.string()
        .required("Введіть email")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Введіть дійсний email"
        )
        .test(
          "valid-domain",
          "Домени .ru і .by не допускаються",
          (value) => !/(.ru|.by)$/.test(value.split("@")[1])
        ),

      phoneNumber: Yup.string()
        .required("Введіть номер телефону")
        .matches(/^\+380\d{9}$/, "Введіть дійсний номер телефону"),

      message: Yup.string()
        .required("Введіть коментар")
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄ\s'-]+$/)
        .max(300, "Просимо скоротити ваше повідомлення до 300 знаків"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
          <div className="w-[28.4rem] mb-6 mt-6">
            <label className="text-lg" htmlFor="name">
              Ім'я
            </label>

            <input
              className="w-full h-10 rounded-[0.3rem] mt-2 px-2 border-[#D1D5DB] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent border placeholder-shown: b"
              type="text"
              autoComplete="off"
              // placeholder="Ольга"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="color text-red">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="w-[28.4rem] mb-6">
            <label className="text-lg" htmlFor="email">
              Електронна пошта
            </label>

            <input
              className="w-full h-10 rounded-[0.3rem] mt-2 px-2 border-[#D1D5DB] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent border"
              type="text"
              autoComplete="off"
              // placeholder="example@gmail.com"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="w-[28.4rem] mb-6">
            <label className="text-lg" htmlFor="phoneNumber">
              Контактний телефон
            </label>

            <input
              className="w-full h-10 rounded-[0.3rem] mt-2 px-2 border-[#D1D5DB] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent border"
              type="text"
              autoComplete="off"
              // placeholder="+38 000 000 0000"
              id="phoneNumber"
              name="phoneNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div>{formik.errors.phoneNumber}</div>
            ) : null}
          </div>

          <div className="w-[28.4rem] mb-6">
            <label className="text-lg" htmlFor="message">
              Ваше повідомлення
            </label>

            <textarea
              className="w-[28.4rem] rounded-[0.3rem] h-32 mt-2 px-2 py-1 border-[#D1D5DB] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent border resize-none"
              id="message"
              name="message"
              // placeholder="Ваше повідомлення..."
              rows="4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div>{formik.errors.message}</div>
            ) : null}
          </div>
          <Action
            type="button"
            className="mb-6 min-w-[12.38rem]  bg-deepBlue  hover:text-deepBlue  hover:border-deepBlue"
          >
            Надіслати
          </Action>
        </form>
      </div>

      <div>
        <img src={img.src} />
      </div>
    </>
  );
};

export default FeedbackFormLayout;
