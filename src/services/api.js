export const getWhyWhistleData = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=4");
  if (!response.ok) {
    throw new Error("Failed to fetch Why Whistle data");
  }
  const data = await response.json();
  return data.products;
};

export const getFaqs = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  if (!response.ok) {
    throw new Error("Failed to fetch FAQs from server");
  }
  return response.json();
};
