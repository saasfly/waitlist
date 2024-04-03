// @ts-ignore
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
    NEXT_PUBLIC_GOOGLE_FORM_URL: z.string(),
    NEXT_PUBLIC_GOOGLE_FORM_EMAIL: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_GOOGLE_FORM_URL: process.env.NEXT_PUBLIC_GOOGLE_FORM_URL,
    NEXT_PUBLIC_GOOGLE_FORM_EMAIL: process.env.NEXT_PUBLIC_GOOGLE_FORM_EMAIL,
  },
});
