import React from "react";
import { useSubmitForm } from "@/app/hooks/useSubmitForm";
import { BaseForm } from "../BaseForm";
import { initialValuesContributors } from "../helpers/consts";
import { validationSchema } from "../helpers/validationSchemaContributors";

const DonorForm = ({ lng, toggleModal, title }) => {
  const { handleSubmit, isLoading } = useSubmitForm(
    "collaboration/donor-form/"
  );

  return (
    <BaseForm
      initialValues={initialValuesContributors}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      lng={lng}
      isLoading={isLoading}
      toggleModal={toggleModal}
      title={title}
      formType={"donors"}
    />
  );
};

export default DonorForm;
