import Link from "next/link";

import { RecipeStepItem } from "@/component/RecipeStepItem";

export default function RecipeNew() {
  return (
    <div>
      <Link href="/recipe/new">
        <RecipeStepItem main="グラタン" sub="作成日時: 2023年6月10日" />
      </Link>
      <Link href="/recipe/new">
        <RecipeStepItem main="レシピ名未記載" sub="作成日時: 2023年6月12日" />
      </Link>
    </div>
  );
}
