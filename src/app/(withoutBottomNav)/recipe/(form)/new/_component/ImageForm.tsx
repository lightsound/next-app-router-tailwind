"use client";

import { AddButton, RecipeImage } from "@/component/FormRecipe";
import { Section } from "@/component/Section";

export function ImageForm() {
  return (
    <Section title="画像" shrinkTitle>
      <div className="flex gap-x-4">
        <RecipeImage />
      </div>
      <AddButton
        onClick={() => {
          alert(
            "TODO: 最初は一枚だけで良いので、一枚画像があればこのボタンは不要。画像がなければ表示させる。"
          );
        }}
      >
        ＋ 画像を追加する
      </AddButton>
    </Section>
  );
}
