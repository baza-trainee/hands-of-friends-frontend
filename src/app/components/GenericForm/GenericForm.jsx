"use client";

import React, { useState } from "react";
import { useFormik } from "formik";

import { useSubmitForm } from "@/app/hooks/useSubmitForm";
import { useTranslation } from "@/app/i18n/client";

import { ProgressBar } from "react-loader-spinner";
import Action from "../Action";
import InputField from "../FeedbackForm/InputField";
import SuccessModal from "../SuccessModal/SuccessModal";

const GenericForm = ({
  initialValues,
  validationSchema,
  endpoint,
  children,
  lng,
}) => {
  const { handleSubmit, isLoading } = useSubmitForm(endpoint);
  const [isVissible, setIsVissible] = useState(false);
  const handleClose = () => setIsVissible(false);
  const { t } = useTranslation(lng, "form_feedback");

  const formik = useFormik({
    initialValues,
    validationSchema,
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
        <form onSubmit={formik.handleSubmit} /* Add your form classes here */>
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
            <Action className="submit-button-class">Submit</Action>
          )}
        </form>
      )}
    </>
  );
};

export default GenericForm;
