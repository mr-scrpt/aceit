import { useModalControl } from "@/shared/lib/modal";
import { useCallback } from "react";
import { ContactFormSendModule } from "../ui/contactFormSend.module";

export const useContactSendModal = () => {
  const { getModal, closeModal } = useModalControl();

  const openContactSendModal = useCallback(async () => {
    await getModal({
      element: <ContactFormSendModule onSuccess={closeModal} />,
    });
  }, [getModal, closeModal]);

  return { openContactSendModal };
};
