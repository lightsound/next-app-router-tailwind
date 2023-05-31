import { SEARCH_QUERY_KEY } from "@/const";

type Props = { searchParams: { [SEARCH_QUERY_KEY]: string | string[] | undefined } };

export default function SearchRecipe({ searchParams }: Props) {
  const query = decodeURIComponent((searchParams[SEARCH_QUERY_KEY] ?? "").toString());

  return <div>「{query}」でレシピを検索する</div>;
}
