import { type Route } from "next";
import Link from "next/link";

import { RecipeCard } from "@/component/RecipeCard";
import { Section } from "@/component/Section";

export default function FavAuthenticated() {
  return (
    <div className="space-y-12">
      <Section
        title="お気に入りレシピ"
        right={
          <Link
            href="/fav/my"
            replace
            className="outline-none focus-visible:ring-2 focus-visible:ring-mauve-7 dark:focus-visible:ring-mauvedark-7 sm:hover:underline"
          >
            マイレシピをみる
          </Link>
        }
      >
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => {
            return <RecipeCard key={v} href={`/recipe/1` as Route} />;
          })}
        </div>
      </Section>
    </div>
  );
}
