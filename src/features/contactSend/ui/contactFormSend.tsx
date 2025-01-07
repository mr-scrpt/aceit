"use client";
import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import { ContactFormElements } from "@/entity/contact";
import {
  contactCreateDefaultFieldsValues,
  contactCreateFormSchema,
  ContactCreateFormValues,
} from "../domain/form.schema";
import { useContactCreateHandler } from "../vm/useContactSend.handler";
// import { useContactCreateHandler } from "../_vm/useContactCreate.handler";

interface ContactFormCreateProps extends HTMLAttributes<HTMLDivElement> {
  userId: string;
  settlementRef: string;
  callbackUrl?: string;
  className?: string;
  onSuccess?: () => void;
}

export const ContactFormCreate: FC<ContactFormCreateProps> = (props) => {
  const { userId, settlementRef, callbackUrl, className, onSuccess } = props;

  const { handleContactCreate, isPendingCreate } = useContactCreateHandler({
    // data: { userId, settlementRef },
    onSuccess,
    callbackUrl,
  });

  // if (isPendingCreate) {
  //   return <Spinner aria-label="Loading profile..." />;
  // }

  return (
    <div className={clsx(className, "w-full")}>
      <ContactFormElements<ContactCreateFormValues>
        handleSubmit={handleContactCreate}
        schema={contactCreateFormSchema}
        defaultValues={contactCreateDefaultFieldsValues}
      >
        <ContactFormElements.FieldFirstName />
        <ContactFormElements.SubmitButton
          isPending={isPendingCreate}
          submitText={"Create Contact"}
        />
      </ContactFormElements>
    </div>
  );
};
