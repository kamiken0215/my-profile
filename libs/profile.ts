import { ProfileContents } from "../models/profile";
import { client } from "./client";

export async function getProfile() {
  const data: ProfileContents = await client.get({ endpoint: "profiles" });
  return data;
}
