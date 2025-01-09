import { useState } from "react";
import {
  CONTACT_CREATE_FORM_FIELDS,
  ContactCreateFormValues,
} from "../domain/form.schema";
import { getApiUrl } from "@/shared/lib/api";
import { API_ENDPOINTS } from "../api/endpoints.api";
import { createFormDataFromSchema } from "@/shared/lib/form";

interface ContactFormCreateProps {
  onSuccess?: () => void;
  callbackUrl?: string;
}

export const useContactCreateHandler = (props: ContactFormCreateProps) => {
  const { onSuccess } = props;
  const [isPendingCreate, setIsPendingCreate] = useState(false);
  const [isSuccessCreate, setIsSuccessCreate] = useState(false);
  const [isErrorCreate, setIsErrorCreate] = useState(false);

  // const handleContactCreate = async (data: ContactCreateFormValues) => {
  //   setIsPendingCreate(true);
  //
  //   try {
  //     const formData = new FormData();
  //
  //     for (const [key, value] of Object.entries(data)) {
  //       if (key === CONTACT_CREATE_FORM_FIELDS.positionList) {
  //         formData.append("position", value[0].label);
  //       }
  //       if (process.env.NODE_ENV === "development") {
  //         formData.append("MODE", "dev");
  //       }
  //       formData.append(key, value);
  //     }
  //
  //     const endpoint = getApiUrl(API_ENDPOINTS.contact.send);
  //     const response = await fetch(endpoint, {
  //       method: "POST",
  //       body: formData,
  //     });
  //
  //     console.log("output_log: RESPONSE::::::: =>>>", response);
  //
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //
  //     setIsSuccessCreate(true);
  //
  //     if (onSuccess) {
  //       onSuccess();
  //     }
  //   } catch (error) {
  //     console.error("Ошибка при отправке формы:", error);
  //   } finally {
  //     setIsPendingCreate(false);
  //     setIsErrorCreate(false);
  //   }
  // };
  const handleContactCreate = async (data: ContactCreateFormValues) => {
    setIsPendingCreate(true);
    try {
      const formData = createFormDataFromSchema(data, {
        transforms: [
          {
            field: "positionList",
            transform: (value) => value[0]?.label || null,
          },
        ],
        additionalFields:
          process.env.NODE_ENV === "development" ? { MODE: "dev" } : {},
      });

      const endpoint = getApiUrl(API_ENDPOINTS.contact.send);
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setIsSuccessCreate(true);
      onSuccess?.();
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      setIsErrorCreate(true);
    } finally {
      setIsPendingCreate(false);
    }
  };

  return {
    handleContactCreate,
    isPendingCreate,
    isSuccessCreate,
    isErrorCreate,
  };
};
