import { useSubmitForm } from "@/app/hooks/useSubmitForm";
import { BaseForm } from "../BaseForm";
import { initialValuesContributors } from "../helpers/consts";
import { validationSchema } from "../helpers/validationSchemaContributors";

const PartnerForm = ({ lng, title, toggleModal }) => {
  const { handleSubmit, isLoading } = useSubmitForm(
    "collaboration/partner-form/"
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
      formType={"partners"}
    />
  );
};

export default PartnerForm;
