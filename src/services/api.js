import axios from "axios";

export const fetchArticles = async (pageNumber, searchQuery) => {
  const YOUR_ACCESS_KEY = "WLG1_Cin7ua-cm4zH-zz4qkuzJxaK3v3FFYnbm7tQcg";
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: searchQuery,
      page: pageNumber,
      per_page: 20,
    },
    headers: {
      Authorization: `Client-ID ${YOUR_ACCESS_KEY}`,
    },
  });

  return response.data;
};
