import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";
import { betterAuth } from "better-auth";
import { magicLink } from "better-auth/plugins";
import { Kysely, SqliteDialect } from "kysely";

const sqlitePath = process.env.BETTER_AUTH_SQLITE_PATH || "./data/auth.db";
const sqliteDir = path.dirname(sqlitePath);

if (!fs.existsSync(sqliteDir)) {
  fs.mkdirSync(sqliteDir, { recursive: true });
}

const sqliteDatabase = new Database(sqlitePath);

export const db = new Kysely<any>({
  dialect: new SqliteDialect({
    database: sqliteDatabase,
  }),
});

const isGoogleConfigured = Boolean(
  process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET,
);

export const auth = betterAuth({
  database: db,
  secret: process.env.BETTER_AUTH_SECRET || "dev-secret-change-me",
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: false,
  },
  socialProviders: {
    google: isGoogleConfigured
      ? {
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
          redirectURI: `${process.env.BETTER_AUTH_URL || "http://localhost:3000"}/api/auth/callback/google`,
        }
      : undefined,
  },
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, url }) => {
        console.log("Magic link for", email, url);
        // Replace this with a real SMTP/email provider integration later.
      },
    }),
  ],
});
