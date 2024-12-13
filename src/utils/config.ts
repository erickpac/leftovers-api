import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("3000"),
  DATABASE_URL: z.string(),
  CURRENT_URL: z.string(),
  API_VERSION: z.string(),
});

const { success, error, data } = envSchema.safeParse(process.env);

if (!success) {
  console.error("Invalid environment variables:", error.format());
  process.exit(1);
}

export const { PORT, DATABASE_URL, CURRENT_URL, API_VERSION } = data;
