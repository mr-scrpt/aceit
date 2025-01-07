import { z } from "zod";

// NOTE: FORM
// NOTE: Main information
export const contactFormDefaultSchema = z.object({
  firstName: z.string(),
  secondName: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(),
  position: z.string(),
});

export type ContactFormDefaultValues<
  T extends z.ZodTypeAny = typeof contactFormDefaultSchema,
> = z.infer<T>;

// TODO: DefaultValues
export const contactDefaultFieldsValues: ContactFormDefaultValues = {
  firstName: "",
  secondName: "",
  phoneNumber: "",
  email: "",
  position: "",
};
