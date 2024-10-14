import "dotenv/config";
import type { Config } from "drizzle-kit";

/** @type {import('drizzle-kit').Config} */
export default {
  out: "./migrations",
  schema: "./src/models/*.ts",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
  verbose: true,
  strict: true,
} satisfies Config;
