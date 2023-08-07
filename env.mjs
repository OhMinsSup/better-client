import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    API_URL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_API_URL: z.string().min(1),
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_DEPLOY_GROUP: z.string().min(1),
    NEXT_PUBLIC_ROOT_DOMAIN: z.string().optional(),
    NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY: z.string(),
  },
  runtimeEnv: {
    API_URL: process.env.API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_DEPLOY_GROUP: process.env.NEXT_PUBLIC_DEPLOY_GROUP,
    NEXT_PUBLIC_ROOT_DOMAIN: process.env.NEXT_PUBLIC_ROOT_DOMAIN,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY:
      process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY,
  },
});
