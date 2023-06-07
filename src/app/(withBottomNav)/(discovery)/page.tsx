import { type Route } from "next";
import Link from "next/link";

import { ChefDetailCard, ChefLargeCard } from "@/component/ChefCard";
import { RecipeCard } from "@/component/RecipeCard";
import { ScrollArea, ScrollBar } from "@/component/Scroll";
import { Section } from "@/component/Section";
import { SEARCH_QUERY_KEY } from "@/const";

type Props = { searchParams: { [SEARCH_QUERY_KEY]: string | string[] | undefined } };

export default function Discovery({ searchParams }: Props) {
  const param = searchParams[SEARCH_QUERY_KEY];
  const query = decodeURIComponent(param ? param.toString() : "");

  return <div>{query ? query : <Main />}</div>;
}

function Main() {
  return (
    <div className="space-y-12 py-5">
      <Section noPadding title="注目のシェフ">
        <ScrollArea>
          <div className="flex gap-x-4 px-4">
            {[1, 2, 3, 4, 5].map((v) => {
              return <ChefLargeCard key={v} href={`/chef/${v}` as Route} />;
            })}
          </div>
          <ScrollBar orientation="horizontal" className="h-0" />
        </ScrollArea>
      </Section>

      <Section
        noPadding
        title="話題のレシピ"
        right={
          <Link
            href="/search/recipe"
            className="outline-none focus-visible:ring-2 focus-visible:ring-mauve-7 dark:focus-visible:ring-mauvedark-7 sm:hover:underline"
          >
            もっと見る
          </Link>
        }
      >
        <ScrollArea>
          <div className="flex h-32 gap-x-4 px-4">
            {[1, 2, 3, 4, 5].map((v) => {
              return <RecipeCard key={v} href={`/recipe/${v}` as Route} />;
            })}
          </div>
          <ScrollBar orientation="horizontal" className="h-0" />
        </ScrollArea>
      </Section>

      <Section
        title="シェフ"
        right={
          <Link
            href="/search/chef"
            className="outline-none focus-visible:ring-2 focus-visible:ring-mauve-7 dark:focus-visible:ring-mauvedark-7 sm:hover:underline"
          >
            もっと見る
          </Link>
        }
      >
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((v) => {
            return <ChefDetailCard key={v} href={`/chef/${v}` as Route} />;
          })}
        </div>
      </Section>
    </div>
  );
}
