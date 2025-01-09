import { useState } from "react";
import { ContactCreateFormValues } from "../domain/form.schema";
import { getApiUrl } from "@/shared/lib/api";
import { API_ENDPOINTS } from "../api/endpoints.api";

interface ContactFormCreateProps {
  onSuccess?: () => void;
  callbackUrl?: string;
}

export const useContactCreateHandler = (props: ContactFormCreateProps) => {
  const { onSuccess } = props;
  const [isPendingCreate, setIsPendingCreate] = useState(false);
  const [isSuccessCreate, setIsSuccessCreate] = useState(false);
  const [isErrorCreate, setIsErrorCreate] = useState(false);

  const handleContactCreate = async (data: ContactCreateFormValues) => {
    setIsPendingCreate(true);

    try {
      const formData = new FormData();

      formData.append("firstName", data.firstName);
      formData.append("secondName", data.secondName);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("email", data.email);

      const position = data.positionList[0].value;
      formData.append("position", position);

      const endpoint = getApiUrl(API_ENDPOINTS.contact.send);
      console.log("output_log: ENDPOINT =>>>", endpoint);
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setIsSuccessCreate(true);

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    } finally {
      setIsPendingCreate(false);
      setIsErrorCreate(false);
    }
  };

  return {
    handleContactCreate,
    isPendingCreate,
    isSuccessCreate,
    isErrorCreate,
  };
};
