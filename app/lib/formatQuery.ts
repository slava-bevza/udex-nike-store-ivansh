export const formatQuery = (query: string) => {
  return query.trim().replace(/[^a-zA-Z0-9\s]/g, "");
};
