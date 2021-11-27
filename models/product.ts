import { ParsedUrlQuery } from "node:querystring";

export interface ProductParams extends ParsedUrlQuery {
  id: string;
}

export interface ProductProps {
  product: Product;
}

export interface Product {
  id: string;
  title: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  abstract: string;
  content: string;
  publishedAt: string;
}

export interface ProductContents {
  contents: Product[];
}
