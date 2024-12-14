import "dotenv/config";
import { z } from "zod";
import { PORT, DATABASE_URL, CURRENT_URL, API_VERSION } from "../config";

describe("Configuration Tests", () => {
  it("should have a default PORT of 3000", () => {
    expect(PORT).toBe("3000");
  });

  it("should have a non-empty DATABASE_URL", () => {
    expect(DATABASE_URL).toBeDefined();
    expect(DATABASE_URL.length).toBeGreaterThan(0);
  });

  it("should have a non-empty CURRENT_URL", () => {
    expect(CURRENT_URL).toBeDefined();
    expect(CURRENT_URL.length).toBeGreaterThan(0);
  });

  it("should have a non-empty API_VERSION", () => {
    expect(API_VERSION).toBeDefined();
    expect(API_VERSION.length).toBeGreaterThan(0);
  });

  it("should throw an error if environment variables are invalid", () => {
    const invalidEnv = {
      PORT: "",
      DATABASE_URL: "",
      CURRENT_URL: "",
      API_VERSION: "",
    };

    const envSchema = z.object({
      PORT: z.string().default("3000"),
      DATABASE_URL: z.string().min(1, "Database URL must be not empty"),
      CURRENT_URL: z.string().min(1, "Current URL must be not empty"),
      API_VERSION: z.string().min(1, "API version must be not empty"),
    });

    const { success, error } = envSchema.safeParse(invalidEnv);

    expect(success).toBe(false);
    expect(error).toBeDefined();
  });
});
