import BaseForm from "../BaseForm";

import { useSubmitForm } from "@/app/hooks/useSubmitForm";
import { initialValuesContributors } from "../helpers/consts";
import { validationSchema } from "../helpers/validationSchemaContributors";

const DonorForm = ({ lng, title, toggleModal }) => {
  const { handleSubmit, isLoading } = useSubmitForm(
    "collaboration/donor-form/"
  );

  return (
    <BaseForm
      initialValues={initialValuesContributors}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      toggleModal={toggleModal}
      lng={lng}
      isLoading={isLoading}
      title={title}
      formType={"donors"}
    />
  );
};

export default DonorForm;