import { useState } from "react";
import { ContactCreateFormValues } from "../domain/form.schema";

interface ContactFormCreateProps {
  onSuccess?: () => void;
  callbackUrl?: string;
}

export const useContactCreateHandler = (props: ContactFormCreateProps) => {
  const { onSuccess } = props;
  const [isPendingCreate, setIsPendingCreate] = useState(false);
  const [isSuccessCreate, setIsSuccessCreate] = useState(false);

  const handleContactCreate = async (data: ContactCreateFormValues) => {
    setIsPendingCreate(true);

    try {
      // Создаем объект FormData для отправки данных
      const formData = new FormData();

      // Добавляем все поля формы в FormData
      // Object.entries(data).forEach(([key, value]) => {
      //   formData.append(key, value);
      // });
      formData.append("firstName", data.firstName);
      formData.append("secondName", data.secondName);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("email", data.email);

      // Берём значение из первого элемента массива
      const position = data.positionList[0].value;
      formData.append("position", position);

      const baseUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:2000"
          : window.location.origin;

      const response = await fetch(`${baseUrl}/server/handler.php`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Устанавливаем флаг успешной отправки
      setIsSuccessCreate(true);
      console.log("output_log: RESULT!!!! =>>>", result);

      // Вызываем callback если он предоставлен
      if (onSuccess) {
        onSuccess();
      }

      // Можно добавить уведомление об успешной отправке
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    } finally {
      setIsPendingCreate(false);
    }
  };

  return {
    handleContactCreate,
    isPendingCreate,
    isSuccessCreate,
  };
};
