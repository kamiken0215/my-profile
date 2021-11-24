export interface Career {
  id: string;
  year: string;
  content: string;
  publishedAt: string;
}

export interface CareerContents {
  contents: Career[];
}
