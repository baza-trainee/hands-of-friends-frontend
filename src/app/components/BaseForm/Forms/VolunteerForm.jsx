import BaseForm from "../BaseForm";

import { useSubmitForm } from "@/app/hooks/useSubmitForm";
import { initialValuesVolunteer } from "../helpers/consts";
import { validationSchema } from "../helpers/validationSchemaVolonteer";

const VolunteerForm = ({ lng, title, toggleModal }) => {
  const { handleSubmit, isLoading } = useSubmitForm(
    "collaboration/volunteer-form/"
  );

  return (
    <BaseForm
      initialValues={initialValuesVolunteer}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      toggleModal={toggleModal}
      lng={lng}
      isLoading={isLoading}
      title={title}
      formType={"volunteers"}
    />
  );
};

export default VolunteerForm;