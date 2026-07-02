import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import path from "path";

// Initialize SQLite database
const dbPath = path.resolve(process.cwd(), "auth.db");
const db = new Database(dbPath);

export const auth = betterAuth({
  database: db,
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
