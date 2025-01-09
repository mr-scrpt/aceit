import { z } from "zod";

// NOTE: FORM
// NOTE: Main information
export const contactFormDefaultSchema = z.object({
  firstName: z.string().nonempty(),
  secondName: z.string().nonempty(),
  phoneNumber: z.string().nonempty(),
  email: z.string().email(),
  cv: z.any().optional(),
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
  cv: null,
};
