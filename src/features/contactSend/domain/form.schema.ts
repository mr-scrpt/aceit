import { contactFormDefaultSchema } from "@/entity/contact";
import { positionDefaultSelectOptionSchema } from "@/entity/position/domain/position.schema";
import { createFormFields } from "@/shared/lib/form";
import { z } from "zod";

export const contactCreateFormSchema = contactFormDefaultSchema.extend({
  positionList: z.array(positionDefaultSelectOptionSchema),
});

export type ContactCreateFormValues = z.infer<typeof contactCreateFormSchema>;

// NOTE: DefaultValues
export const contactCreateDefaultFieldsValues: ContactCreateFormValues = {
  firstName: "",
  secondName: "",
  phoneNumber: "",
  email: "",
  positionList: [],
  cv: null,
};
export const CONTACT_CREATE_FORM_FIELDS = createFormFields(
  contactCreateFormSchema,
);
