export const getQueryFromSearchParams = (searchParams: URLSearchParams) => {
  const keys = ["category", "gender", "price", "min", "max"];

  const filteredParams = Array.from(searchParams.entries())
    .filter(([key]) => keys.includes(key)) // Leavy only params that are in the array
    .map(([key, value]) => `${key}="${value}"`) // Create a string key=value
    .join("&"); // Unite them using "&"

  return filteredParams;
};
