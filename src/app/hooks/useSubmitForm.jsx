"use client";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../helpers/consts";

export const useSubmitForm = (endpoint) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, actions) => {
    setIsLoading(true);
    try {
      const data = JSON.stringify(values, null, 2);
      await axios.post(`${BASE_URL}${endpoint}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (actions.setIsVissible) {
        actions.setIsVissible(true);
      }
      actions.resetForm();
    } catch (error) {
      console.log("Помилка при надсиланні запиту:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading };
};
