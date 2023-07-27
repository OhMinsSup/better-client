import { headers } from "next/headers";

export default async function Sitemap() {
  const headersList = headers();
  const host = headersList.get("X-Forwarded-Host") ?? headersList.get("host");
  const protocol =
    headersList.get("X-Forwarded-Proto") ?? host?.includes("localhost")
      ? "http"
      : "https";
  return [
    {
      url: `${protocol}://${host}`,
      lastModified: new Date(),
    },
  ];
}
