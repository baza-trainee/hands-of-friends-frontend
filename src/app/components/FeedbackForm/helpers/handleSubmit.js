import axios from "axios";

export const handleSubmit = (
  values,
  { resetForm, setSubmitting, setIsOpen }
) => {
  let data = JSON.stringify(values, null, 2);
  axios
    .post("https://hands-of-friends-backend.onrender.com/api/feedback/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setSubmitting(false);
      resetForm();
      setIsOpen(true);
    });
};
