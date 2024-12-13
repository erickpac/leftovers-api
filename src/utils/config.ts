import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("3000"),
  DATABASE_URL: z.string().min(1, "Database URL must be not empty"),
  CURRENT_URL: z.string().min(1, "Current URL must be not empty"),
  API_VERSION: z.string().min(1, "API version must be not empty"),
});

const { success, error, data } = envSchema.safeParse(process.env);

if (!success) {
  console.error("Invalid environment variables:", error.format());
  process.exit(1);
}

export const { PORT, DATABASE_URL, CURRENT_URL, API_VERSION } = data;
