import { z } from "zod";

const configPublicSchema = z.object({
  isDev: z.boolean(),
  API_URL_DEV: z.string(),
  API_URL_PROD: z.string(),
});

export const configPublic = configPublicSchema.parse({
  isDev: process.env.NEXT_PUBLIC_APP_ENV === "development",
  API_URL_DEV: process.env.NEXT_PUBLIC_API_URL_DEV,
  API_URL_PROD: process.env.NEXT_PUBLIC_API_URL_PROD,
});

export type TConfigPublic = z.infer<typeof configPublicSchema>;
