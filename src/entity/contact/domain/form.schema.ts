import { createFormFields, fileSchema } from "@/shared/lib/form";
import { z } from "zod";

// NOTE: FORM
// NOTE: Main information
export const contactFormDefaultSchema = z.object({
  firstName: z.string().nonempty(),
  secondName: z.string().nonempty(),
  phoneNumber: z.string().nonempty(),
  email: z.string().email(),
  cv: fileSchema,
});

export type ContactFormDefaultValues<
  T extends z.ZodTypeAny = typeof contactFormDefaultSchema,
> = z.infer<T>;

// NOTE: DefaultValues
export const contactDefaultFieldsValues: ContactFormDefaultValues = {
  firstName: "",
  secondName: "",
  phoneNumber: "",
  email: "",
  cv: null,
};

// NOTE: Form fields
export const CONTACT_FORM_FIELDS = createFormFields(contactFormDefaultSchema);
