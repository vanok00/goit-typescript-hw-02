export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  alt_description?: string | null;
}

export interface FetchImagesResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export type handleOpenImage = (image: Image) => void;
