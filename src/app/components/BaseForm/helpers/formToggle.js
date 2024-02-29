import React from "react";
import PartnerForm from "../Forms/ParnterForm";
import DonorForm from "../Forms/DonorForm";
import VolunteerForm from "../Forms/VolunteerForm";

export const formToggle = (selectedItemType, props) => {
  switch (selectedItemType) {
    case "partners":
      return <PartnerForm {...props} />;
    case "donors":
      return <DonorForm {...props} />;
    case "volunteers":
      return <VolunteerForm {...props} />;
    default:
      return null;
  }
};
