export interface Product {
  id: string;
  title: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  abstract: string;
  content: HTMLDivElement;
  publishedAt: string;
}

export interface ProductContents {
  contents: Product[];
}
