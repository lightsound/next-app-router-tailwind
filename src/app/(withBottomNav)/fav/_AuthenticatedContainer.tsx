import { type Route } from "next";
import Link from "next/link";

import { ChefSmallRoundedCard } from "@/component/ChefCard";
import { RecipeCard } from "@/component/RecipeCard";
import { ScrollArea, ScrollBar } from "@/component/Scroll";
import { Section } from "@/component/Section";

export async function AuthenticatedContainer({ children }: { children: React.ReactNode }) {
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
        noPadding
        title="新着レシピ"
        right={
          <Link
            href="/new-recipes"
            className="outline-none focus-visible:ring-2 focus-visible:ring-mauve-7 dark:focus-visible:ring-mauvedark-7 sm:hover:underline"
          >
            もっと見る
          </Link>
        }
      >
        <ScrollArea>
          <div className="flex h-32 gap-x-4 px-4">
            {[1, 2, 3, 4, 5].map((v) => {
              return <RecipeCard key={v} href={`/recipe/1` as Route} />;
            })}
          </div>
          <ScrollBar orientation="horizontal" className="h-0" />
        </ScrollArea>
      </Section>

      {children}
    </div>
  );
}
