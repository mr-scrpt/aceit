"use client";
import { ContactFormElements } from "@/entity/contact";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import {
  contactCreateDefaultFieldsValues,
  contactCreateFormSchema,
  ContactCreateFormValues,
} from "../domain/form.schema";
import { useContactCreateHandler } from "../vm/useContactSend.handler";
import { PositionFormElements } from "@/entity/postition";
import sContactFormSendLayout from "./layout/contactFormLayout.module.scss";

interface ContactFormCreateProps extends HTMLAttributes<HTMLDivElement> {
  callbackUrl?: string;
  className?: string;
  onSuccess?: () => void;
}

export const ContactFormSendModule: FC<ContactFormCreateProps> = (props) => {
  const { callbackUrl, className, onSuccess } = props;

  const { handleContactCreate, isPendingCreate } = useContactCreateHandler({
    onSuccess,
    callbackUrl,
  });

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
        <div className={sContactFormSendLayout.footer}>
          <ContactFormElements.FieldCV
            className={sContactFormSendLayout.dropZone}
          />
          <ContactFormElements.SubmitButton
            isPending={isPendingCreate}
            submitText={"Send"}
          />
        </div>
      </ContactFormElements>
    </div>
  );
};
