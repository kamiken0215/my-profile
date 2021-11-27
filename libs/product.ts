import { Product, ProductContents } from "../models/product";
import { client } from "./client";

export async function getAllProducts() {
  const data: ProductContents = await client.get({ endpoint: "products" });
  return data;
}

export async function getProductData(id: string) {
  const data: Product = await client.get({ endpoint: `products/${id}` });
  return data;
}

export async function getAllProductIds() {
  const data = await getAllProducts();

  return data.contents.map((product) => {
    return {
      params: {
        id: product.id,
      },
    };
  });
}
