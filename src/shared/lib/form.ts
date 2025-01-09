// shared/lib/form/fields.ts
import { z } from "zod";

export type FormSchemaFields<T extends z.ZodTypeAny> = keyof z.infer<T>;

// Добавляем ограничение типа z.ZodObject
export const createFormFields = <T extends z.ZodObject<any>>(schema: T) => {
  type SchemaType = z.infer<typeof schema>;
  const fields = Object.keys(schema.shape) as Array<keyof SchemaType>;

  return fields.reduce(
    (acc, field) => {
      acc[field] = field;
      return acc;
    },
    {} as Record<keyof SchemaType, keyof SchemaType>,
  );
};
