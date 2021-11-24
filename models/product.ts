export interface Product {
  id: string;
  title: string;
  abstract: string;
  content: string;
  publishedAt: string;
}

export interface ProductContents {
  contents: Product[];
}
