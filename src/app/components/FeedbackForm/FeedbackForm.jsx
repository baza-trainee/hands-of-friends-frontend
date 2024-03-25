import React from "react";

import BaseForm from "../BaseForm/BaseForm";

import { useSubmitForm } from "@/app/hooks/useSubmitForm";
import { validationSchema } from "./helpers/validationSchema";
import { initialValues } from "./helpers/initialValues";

const FeedbackForm = ({ lng }) => {
  const { handleSubmit, isLoading } = useSubmitForm("feedback/");

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      lng={lng}
      isLoading={isLoading}
      formType={"feedback"}
    />
  );
};

export default FeedbackForm;