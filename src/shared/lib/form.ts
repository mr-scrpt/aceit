// shared/lib/form/fields.ts
import { z } from "zod";
export type FormSchemaFields<T extends z.ZodTypeAny> = keyof z.infer<T>;

export const createFormFields = <T extends z.ZodObject<any>>(schema: T) => {
  type SchemaType = z.infer<typeof schema>;

  const fields = Object.keys(schema.shape) as Array<keyof SchemaType>;

  return fields.reduce(
    (acc, field) => {
      acc[field] = field;
      return acc;
    },
    {} as { [K in keyof SchemaType]: K },
  );
};

// Тип для константы полей
export type FormFields<T extends z.ZodObject<any>> = ReturnType<
  typeof createFormFields<T>
>;
// FORM DATA
type FormDataFieldValue = string | Blob | File;

export interface FieldTransform<T> {
  field: keyof T;
  transform: (value: any) => FormDataFieldValue | null;
}

export interface CreateFormDataOptions<T> {
  // Специальные правила трансформации для конкретных полей
  transforms?: Array<FieldTransform<T>>;
  // Поля, которые нужно пропустить
  skipFields?: Array<keyof T>;
  // Дополнительные поля для FormData
  additionalFields?: Record<string, FormDataFieldValue>;
}

export function createFormDataFromSchema<T extends Record<string, any>>(
  data: T,
  options: CreateFormDataOptions<T> = {},
): FormData {
  const formData = new FormData();
  const { transforms = [], skipFields = [], additionalFields = {} } = options;

  // Обработка основных полей
  Object.entries(data).forEach(([key, value]) => {
    // Пропускаем поля из skipFields
    if (skipFields.includes(key as keyof T)) {
      return;
    }

    // Проверяем наличие специального преобразования
    const transform = transforms.find((t) => t.field === key);
    if (transform) {
      const transformedValue = transform.transform(value);
      if (transformedValue !== null) {
        formData.append(key, transformedValue);
      }
      return;
    }

    // Стандартная обработка различных типов
    if (value === null || value === undefined) {
      return;
    }

    if (value instanceof File) {
      formData.append(key, value);
    } else if (Array.isArray(value)) {
      // Для массивов можно добавить специальную логику
      // Например, для positionList берем первый элемент
      if (
        value.length > 0 &&
        typeof value[0] === "object" &&
        "label" in value[0]
      ) {
        formData.append(key, value[0].label);
      }
    } else if (value instanceof Object) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, String(value));
    }
  });

  // Добавляем дополнительные поля
  Object.entries(additionalFields).forEach(([key, value]) => {
    if (value !== null) {
      formData.append(key, value);
    }
  });

  return formData;
}

// **** FILE
// export const fileSchema = z.custom<File | null>(
//   (file) => {
//     if (!file) {
//       return false;
//     }
//
//     // Проверяем, является ли значение файлом
//     if (!(file instanceof File)) {
//       return false;
//     }
//
//     const allowedTypes = [
//       "application/pdf",
//       "application/msword",
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//     ];
//
//     return allowedTypes.includes(file.type);
//   },
//   {
//     message: "Необходимо загрузить файл в формате PDF, DOC или DOCX",
//   },
// );
// export const fileSchema = z
//   .custom<File | null>()
//   .refine(
//     (file): file is File => {
//       if (!file || !(file instanceof File)) {
//         return false;
//       }
//       const allowedTypes = [
//         "application/pdf",
//         "application/msword",
//         "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       ];
//       return allowedTypes.includes(file.type);
//     },
//     {
//       message: "Необходимо загрузить резюме в формате PDF, DOC или DOCX",
//     },
//   )
//   .nullable()
//   .transform((value, ctx) => {
//     if (value === null) {
//       ctx.addIssue({
//         code: "custom",
//         message: "Необходимо загрузить файл",
//       });
//     }
//     return value;
//   });
export const fileSchema = z
  .custom<File | null>()
  // Проверяем, что файл существует и является File
  .refine((file): file is File => file instanceof File, {
    message: "Необходимо загрузить файл",
  })
  // Проверяем размер файла
  .refine(
    (file) => {
      if (!(file instanceof File)) return false;
      const maxSize = 7 * 1024 * 1024; // 7MB
      return file.size <= maxSize;
    },
    {
      message: "Размер файла не должен превышать 7MB",
    },
  )
  // Проверяем тип файла
  .refine(
    (file) => {
      if (!(file instanceof File)) return false;
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      return allowedTypes.includes(file.type);
    },
    {
      message: "Файл должен быть в формате PDF, DOC или DOCX",
    },
  )
  .nullable()
  .transform((value, ctx) => {
    if (value === null) {
      ctx.addIssue({
        code: "custom",
        message: "Необходимо загрузить файл",
      });
    }
    return value;
  });
