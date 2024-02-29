"use client";

import React, { useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import { useFormik } from "formik";
import { useTranslation } from "@/app/i18n/client";
import { validationSchema } from "./helpers/validationSchema";
import { useSubmitForm } from "@/app/hooks/useSubmitForm";
import Action from "../Action";
import InputField from "./InputField";
import SuccessModal from "../SuccessModal/SuccessModal";

const FeedbackForm = ({ lng }) => {
  const { handleSubmit, isLoading } = useSubmitForm("feedback/");
  const [isVissible, setIsVissible] = useState(false);
  const handleClose = () => setIsVissible(false);

  const { t } = useTranslation(lng, "form_feedback");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
    },
    validationSchema: validationSchema(t),
    onSubmit: (values, actions) => {
      handleSubmit(values, {
        ...actions,
        setIsVissible,
      });
    },
  });

  return (
    <>
      {isVissible && <SuccessModal handleClose={handleClose} />}

      {!isVissible && (
        <form
          className="relative flex justify-self-center flex-col items-center mt-20 bg-white shadow-md z-10 
          xs:py-6 xs:px-4 xs:w-[268px]
          sm:w-[340px]
          md:justify-self-end md:w-[334px]
          xl:p-6 xl:w-[503px]
          2xl:p-9 2xl:w-[527px]"
          action="/submit_form"
          method="post"
          onSubmit={formik.handleSubmit}
        >
          <InputField
            label={t("name")}
            id="name"
            name="name"
            type="text"
            placeholder={t("placeholder_name")}
            value={formik.values.name}
            error={formik.touched.name && formik.errors.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          <InputField
            label={t("email")}
            id="email"
            name="email"
            type="text"
            placeholder={t("placeholder_email")}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <InputField
            label={t("phone")}
            id="phone_number"
            name="phone_number"
            type="text"
            placeholder={t("placeholder_phone")}
            value={formik.values.phone_number}
            error={formik.touched.phone_number && formik.errors.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <InputField
            label={t("message")}
            id="message"
            name="message"
            type="textarea"
            placeholder={t("placeholder_message")}
            value={formik.values.message}
            error={formik.touched.message && formik.errors.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {isLoading ? (
            <ProgressBar
              visible={true}
              height="80"
              width="80"
              barColor="#60A5FA"
              borderColor="#6F4AAA"
              ariaLabel="progress-bar-loading"
            />
          ) : (
            <Action className="min-w-[12.38rem]  bg-deepBlue  hover:text-deepBlue  hover:border-deepBlue">
              {t("button")}
            </Action>
          )}
        </form>
      )}
    </>
  );
};

export default FeedbackForm;
