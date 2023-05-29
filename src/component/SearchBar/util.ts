export const SEARCH_QUERY_KEY = "q";

export function sleep(ms: number) {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
}
