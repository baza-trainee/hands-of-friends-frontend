"use client";

import React, { useState } from "react";

import InputField from "./Input/InputField";
import Action from "../Action";
import SuccessModal from "../SuccessModal/SuccessModal";

import { useFormik } from "formik";
import { useTranslation } from "@/app/i18n/client";

import { HiPlus } from "react-icons/hi2";
import { ProgressBar } from "react-loader-spinner";

const BaseForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  lng,
  isLoading,
  toggleModal,
  title,
  formType,
}) => {
  const { t } = useTranslation(lng, "form_feedback");
  const [isVissible, setIsVissible] = useState(false);
  const handleClose = () => setIsVissible(false);

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema(t),
    onSubmit: (values, actions) => {
      onSubmit(values, {
        ...actions,
        setIsVissible,
      });
    },
  });

  return (
    <>
      {isVissible && (
        <SuccessModal handleClose={handleClose} formType={formType} />
      )}
      {!isVissible && (
        <form
          className={`relative flex justify-self-center flex-col items-center  bg-whiteFont shadow-md z-10 
          xs:py-6 xs:px-4 xs:w-[268px]
          sm:w-[340px] 
          md:justify-self-end md:w-[334px] 
          xl:p-6 xl:w-[503px]
          2xl:p-9 2xl:w-[527px]
          ${formType === "partners" ||
              formType === "donors" ||
              formType === "volunteers"
              ? "xs:mt-[0] sm:mt-[0] md:mt-[0] xl:mt-[0]"
              : "mt-[180px] sm:mt-[233px] md:mt-20"
            }`}
          action="/submit_form"
          method="post"
          onSubmit={formik.handleSubmit}
        >
          {title && (
            <>
              <h2 className="mb-3 xl:mb-5 text-base xl:text-2xl antialiased">
                {title}
              </h2>
              <button type="button" onClick={toggleModal}>
                <HiPlus
                  size={24}
                  className="absolute transition transform rotate-45 cursor-pointer top-[10px] right-[10px] fill-slate-900  hover:fill-violet hover:scale-110"
                />
              </button>
            </>
          )}
          {formType === "partners" || formType === "donors" ? (
            <>
              <InputField
                label={t("organization_name")}
                id="organization_name"
                name="organization_name"
                type="text"
                placeholder={t("placeholder_organization_name")}
                value={formik.values.organization_name}
                error={
                  formik.touched.organization_name &&
                  formik.errors.organization_name
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              <InputField
                label={t("representative_name")}
                id="representative_name"
                name="representative_name"
                type="text"
                placeholder={t("placeholder_name")}
                value={formik.values.representative_name}
                error={
                  formik.touched.representative_name &&
                  formik.errors.representative_name
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
            </>
          ) : null}
          {formType === "volunteers" || formType === "feedback" ? (
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
          ) : null}
          {formType === "volunteers" && (
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
          )}
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
            formType={formType}
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
            <Action
              type="submit"
              className="min-w-[12.38rem]  bg-deepBlue  hover:text-deepBlue  hover:border-deepBlue"
            >
              {t("button")}
            </Action>
          )}
        </form>
      )}
    </>
  );
}

export default BaseForm;