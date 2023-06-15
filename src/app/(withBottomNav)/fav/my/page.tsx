import { type Route } from "next";
import Link from "next/link";

import { IconPlus } from "@tabler/icons-react";

import { RecipeCard } from "@/component/RecipeCard";
import { Section } from "@/component/Section";

export default function FavMy() {
  return (
    <div className="space-y-12">
      <Section
        title="マイレシピ"
        right={
          <Link
            href="/fav"
            replace
            className="outline-none focus-visible:ring-2 focus-visible:ring-mauve-7 dark:focus-visible:ring-mauvedark-7 sm:hover:underline"
          >
            お気に入りレシピをみる
          </Link>
        }
      >
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3].map((v) => {
            return <RecipeCard key={v} href={`/recipe/2` as Route} />;
          })}
          <Link
            href="/recipe/new"
            className="border-mauve-dim text-mauve-dim grid aspect-square place-content-center gap-y-1 border"
          >
            <span>新規追加</span>
            <div className="flex justify-center">
              <IconPlus stroke={1} />
            </div>
          </Link>
        </div>
      </Section>
    </div>
  );
}
