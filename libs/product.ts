import { Product, ProductContents } from "../models/product";
import { client } from "./client";

export async function getAllProduct() {
  const data: ProductContents = await client.get({ endpoint: "products" });
  return data;
}

// export async function getProductData(id: string) {
//   const data: Product = await client.get({ endpoint: `profiles/${id}` });
//   return {
//     id,
//     data,
//   };
// }
