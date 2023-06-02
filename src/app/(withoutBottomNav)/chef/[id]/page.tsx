import { type Route } from "next";

import { RecipeCard } from "@/component/RecipeCard";
import { Section } from "@/component/Section";

export default function Chef({ params }: { params: { id: string } }) {
  console.log(`シェフID: ${params}のレシピを出す`);

  return (
    <div className="space-y-12 py-5">
      <Section title={`123件`}>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => {
            return <RecipeCard key={v} href={`/recipe/${v}` as Route} />;
          })}
        </div>
      </Section>
    </div>
  );
}
