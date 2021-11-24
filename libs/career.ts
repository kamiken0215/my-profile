import { CareerContents } from "../models/career";
import { client } from "./client";

export async function getCareer() {
  const data: CareerContents = await client.get({ endpoint: "careers" });
  return data;
}
