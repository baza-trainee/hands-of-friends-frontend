"use client";

import React, { useState } from "react";
import { useFormik } from "formik";

import Action from "../Action";
import InputField from "./InputField";
import Modal from "../Modal/Modal";
import { validationSchema } from "./helpers/validationSchema";
import { handleSubmit } from "./helpers/handleSubmit";

const FeedbackFormLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, formikHelpers) =>
      handleSubmit(values, { ...formikHelpers, setShowModal }),
  });

  return (
    <>
      {showModal && <Modal handleClose={handleClose} />}
      {!showModal && (
        <form
          className="md:justify-self-end justify-self-center flex md:mt-20 mt-[60%] 2xl:p-9  xl:p-6 xs:py-6 xs:px-4  2xl:w-[527px]  xl:w-[503px]  md:w-[334px]  sm:w-[340px] xs:w-[268px]
        flex-col items-center bg-white shadow-md z-10"
          action="/submit_form"
          method="post"
          onSubmit={formik.handleSubmit}
        >
          <InputField
            label="Ім'я"
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            error={formik.touched.name && formik.errors.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <InputField
            label="Електронна пошта"
            id="email"
            name="email"
            type="text"
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <InputField
            label="Контактний телефон"
            id="phone_number"
            name="phone_number"
            type="text"
            value={formik.values.phone_number}
            error={formik.touched.phone_number && formik.errors.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <InputField
            label="Ваше повідомлення"
            id="message"
            name="message"
            type="textarea"
            value={formik.values.message}
            error={formik.touched.message && formik.errors.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <Action
            type="submit"
            className="min-w-[12.38rem]  bg-deepBlue  hover:text-deepBlue  hover:border-deepBlue"
          >
            Надіслати
          </Action>
        </form>
      )}
    </>
  );
};

export default FeedbackFormLayout;
