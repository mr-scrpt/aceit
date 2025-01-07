import { contactFormDefaultSchema } from "@/entity/contact";
import { positionDefaultSelectOptionSchema } from "@/entity/postition/domain/position.schema";
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
};
