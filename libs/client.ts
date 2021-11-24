import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: String(process.env.NEXT_PUBLIC_SERVICE_DOMAIN),
  apiKey: String(process.env.NEXT_PUBLIC_API_KEY),
});
