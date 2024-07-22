export const getFilterUrl = (
  params: URLSearchParams,
  pathname: string,
  filters: { key: string; value: string }[]
) => {
  filters.forEach((filter) => {
    params.set(filter.key, filter.value);
  });

  // Строим строку параметров
  const paramString = params.toString();

  const param = `?${paramString}`;

  return pathname + param;
};
