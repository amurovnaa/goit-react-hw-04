import axios from "axios";

export const fetchData = async (query, page, signal) => {
  const Key = "fYoFt843xSWkyQgaYsm8BsAihsxk64tMrb29TK4Nr64";
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${Key}&per_page=10&query=${query}&page=${page}`,
    { signal }
  );
  return response.data;
};
