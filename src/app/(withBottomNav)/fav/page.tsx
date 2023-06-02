import { type Route } from "next";
import Link from "next/link";

import { ChefSmallRoundedCard } from "@/component/ChefCard";
import { RecipeCard } from "@/component/RecipeCard";
import { ScrollArea, ScrollBar } from "@/component/Scroll";
import { Section } from "@/component/Section";
import { TopBar } from "@/component/TopBar";

export default function Fav() {
  return (
    <TopBar center="お気に入り">
      <Main />
    </TopBar>
  );
}

function Main() {
  return (
    <div className="space-y-12 py-5">
      <Section noPadding title="シェフ">
        <ScrollArea>
          <div className="flex gap-x-4 px-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => {
              return <ChefSmallRoundedCard key={v} href={`/chef/${v}` as Route} />;
            })}
          </div>
          <ScrollBar orientation="horizontal" className="h-0" />
        </ScrollArea>
      </Section>

      <Section
        title="レシピ"
        right={
          <Link
            href="/search/chef"
            className="outline-none focus:ring-2 focus:ring-mauve-7 dark:focus:ring-mauvedark-7 sm:hover:underline"
          >
            マイレシピを作成
          </Link>
        }
      >
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => {
            return <RecipeCard key={v} href={`/recipe/${v}` as Route} />;
          })}
        </div>
      </Section>
    </div>
  );
}
