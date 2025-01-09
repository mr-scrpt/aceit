import { createFormFields } from "@/shared/lib/form";
import { z } from "zod";

export const positionDefaultSelectOptionSchema = z.object({
  value: z.string(),
  label: z.string(),
  active: z.boolean().optional(),
});

export type PositionDefaultSelectOption = z.infer<
  typeof positionDefaultSelectOptionSchema
>;

export const positionFormDefaultSchema = z.object({
  positionList: z.array(positionDefaultSelectOptionSchema).optional(),
});

export type PositionFormDefaultValues<
  T extends z.ZodTypeAny = typeof positionFormDefaultSchema,
> = z.infer<T>;

// TODO: DefaultValues
export const positionDefaultFieldsValues: PositionFormDefaultValues = {
  positionList: [],
};

// NOTE: Form fields
export const POSITION_FORM_FIELDS = createFormFields(positionFormDefaultSchema);
