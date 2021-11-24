import { Product } from "../models/product";
import { client } from "./client";

export async function getProductData(id: string) {
  const data: Product = await client.get({ endpoint: `profiles/${id}` });
  return {
    id,
    data,
  };
}
