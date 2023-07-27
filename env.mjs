import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // This is optional because it's only used in development.
    // See https://next-auth.js.org/deployment.
    NEXTAUTH_URL: z.string().url().optional(),
    NEXTAUTH_SECRET: z.string().min(1),
    KAKAO_CLIENT_ID: z.string().min(1),
    KAKAO_CLIENT_SECRET: z.string().min(1),
    DATABASE_URL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_DEPLOY_GROUP: z.string().min(1),
    NEXT_PUBLIC_ROOT_DOMAIN: z.string().optional(),
  },
  runtimeEnv: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
    KAKAO_CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_DEPLOY_GROUP: process.env.NEXT_PUBLIC_DEPLOY_GROUP,
    NEXT_PUBLIC_ROOT_DOMAIN: process.env.NEXT_PUBLIC_ROOT_DOMAIN,
  },
});
