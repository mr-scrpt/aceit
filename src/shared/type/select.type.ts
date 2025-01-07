import { z } from "zod";

const defaultSelectOption = z.object({
  value: z.string(),
  label: z.string(),
  active: z.boolean().optional(),
});

export type DefaultSelectOption = z.infer<typeof defaultSelectOption>;
