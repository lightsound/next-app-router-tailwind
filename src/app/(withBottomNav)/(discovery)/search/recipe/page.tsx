import { type Route } from "next";

import { RecipeCard } from "@/component/RecipeCard";
import { Section } from "@/component/Section";
import { SEARCH_QUERY_KEY } from "@/const";

type Props = { searchParams: { [SEARCH_QUERY_KEY]: string | string[] | undefined } };

export default function SearchRecipe({ searchParams }: Props) {
  const param = searchParams[SEARCH_QUERY_KEY];

  if (!param) {
    return (
      <div className="space-y-12 py-5">
        <Section title="話題のレシピ">
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => {
              return <RecipeCard key={v} href={`/recipe/1` as Route} />;
            })}
          </div>
        </Section>
      </div>
    );
  }

  const query = decodeURIComponent(param.toString());

  return (
    <div className="space-y-12 py-5">
      <Section title={`「${query}」で検索`}>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => {
            return <RecipeCard key={v} href={`/recipe/1` as Route} />;
          })}
        </div>
      </Section>
    </div>
  );
}
