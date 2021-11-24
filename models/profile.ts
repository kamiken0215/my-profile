export interface Profile {
  id: string;
  title: string;
  subTitle: string;
  content: string;
  publishedAt: string;
}

export interface ProfileContents {
  contents: Profile[];
}
