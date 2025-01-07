import { contactFormDefaultSchema } from "@/entity/contact";
import { z } from "zod";

export const contactCreateFormSchema = contactFormDefaultSchema;

export type ContactCreateFormValues = z.infer<typeof contactCreateFormSchema>;

// NOTE: DefaultValues
export const contactCreateDefaultFieldsValues: ContactCreateFormValues = {
  firstName: "",
};
