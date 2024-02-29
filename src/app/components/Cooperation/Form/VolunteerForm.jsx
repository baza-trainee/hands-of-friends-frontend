"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { useTranslation } from "@/app/i18n/client";
import { ProgressBar } from "react-loader-spinner";
import Action from "../../Action";
import Modal from "../../SuccessModal/SuccessModal";
import InputField from "../../FeedbackForm/InputField";
import { useSubmitForm } from "@/app/hooks/useSubmitForm";
import { validationSchema } from "../helpers/validationSchemaVolonteer";

const VolunteerForm = ({ lng, children }) => {
  const { handleSubmit, isLoading } = useSubmitForm(
    "collaboration/volunteer-form/"
  );
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  const { t } = useTranslation(lng, "form_feedback");

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      message: "",
      name: "",
      city: "",
    },
    validationSchema: validationSchema(t),
    onSubmit: (values, actions) => {
      handleSubmit(values, {
        ...actions,
        setIsOpen,
      });
    },
  });

  return (
    <>
      {isOpen && <Modal handleClose={handleClose} />}
      {!isOpen && (
        <form
          className={`relative flex justify-self-center flex-col items-center md:mt-0 bg-white shadow-md z-10 
          xs:py-6 xs:px-4 xs:w-[268px]
          sm:w-[340px]
          md:justify-self-end md:w-[334px]
          xl:p-6 xl:w-[503px]
          2xl:p-9 2xl:w-[527px]
       `}
          action="/submit_form"
          method="post"
          onSubmit={formik.handleSubmit}
        >
          {children}

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
            label={t("city")}
            id="city"
            name="city"
            type="text"
            placeholder={t("placeholder_city")}
            value={formik.values.city}
            error={formik.touched.city && formik.errors.city}
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
            id="phone"
            name="phone"
            type="tel"
            placeholder={t("placeholder_phone")}
            value={formik.values.phone}
            error={formik.touched.phone && formik.errors.phone}
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

export default VolunteerForm;
