import { type Route } from "next";

import { RecipeCard } from "@/component/RecipeCard";

export default function NewRecipes() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => {
        return <RecipeCard key={v} href={`/recipe/1` as Route} />;
      })}
    </div>
  );
}
