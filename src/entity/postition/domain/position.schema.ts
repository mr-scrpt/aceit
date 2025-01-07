import { z } from "zod";

export const positionDefaultSelectOptionSchema = z.object({
  value: z.string(),
  label: z.string(),
  street: z.string(),
  house: z.string(),
  apartment: z.string().nullable(),
  active: z.boolean().optional(),
});

export type PositionDefaultSelectOption = z.infer<
  typeof positionDefaultSelectOptionSchema
>;
