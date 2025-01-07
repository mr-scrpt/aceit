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
import sContactFormSendLayout from "./layout/contactFormLayout.module.scss";
import { PositionFormElements } from "@/entity/postition";

interface ContactFormCreateProps extends HTMLAttributes<HTMLDivElement> {
  callbackUrl?: string;
  className?: string;
  onSuccess?: () => void;
}

export const ContactFormSendModule: FC<ContactFormCreateProps> = (props) => {
  const { callbackUrl, className, onSuccess } = props;

  const { handleContactCreate, isPendingCreate } = useContactCreateHandler({
    // data: { userId, settlementRef },
    onSuccess,
    callbackUrl,
  });

  // if (isPendingCreate) {
  //   return <Spinner aria-label="Loading profile..." />;
  // }

  return (
    <div className={clsx(className, sContactFormSendLayout.contactFormLayout)}>
      <ContactFormElements<ContactCreateFormValues>
        handleSubmit={handleContactCreate}
        schema={contactCreateFormSchema}
        defaultValues={contactCreateDefaultFieldsValues}
        className={sContactFormSendLayout.inner}
      >
        <div className={sContactFormSendLayout.row}>
          <ContactFormElements.FieldFirstName
            className={sContactFormSendLayout.col}
          />
          <ContactFormElements.FieldSecondName
            className={sContactFormSendLayout.col}
          />
        </div>
        <ContactFormElements.FieldPhoneNumber />
        <ContactFormElements.FieldEmail />
        <PositionFormElements.FieldPositionSelect />
        <ContactFormElements.SubmitButton
          isPending={isPendingCreate}
          submitText={"Send"}
        />
      </ContactFormElements>
    </div>
  );
};
