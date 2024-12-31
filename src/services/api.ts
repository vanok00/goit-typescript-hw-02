import axios, { AxiosResponse } from "axios";

interface User {
  name: string;
}

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  user: User;
}

interface FetchArticlesResponse {
  results: Image[];
  total_pages: number;
}

export const fetchArticles = async (
  pageNumber: number,
  searchQuery: string
): Promise<FetchArticlesResponse> => {
  const YOUR_ACCESS_KEY = "WLG1_Cin7ua-cm4zH-zz4qkuzJxaK3v3FFYnbm7tQcg";

  const response: AxiosResponse<FetchArticlesResponse> = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query: searchQuery,
        page: pageNumber,
        per_page: 20,
      },
      headers: {
        Authorization: `Client-ID ${YOUR_ACCESS_KEY}`,
      },
    }
  );

  return response.data;
};
