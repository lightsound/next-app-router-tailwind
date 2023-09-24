"use client";

import { IconX } from "@tabler/icons-react";

import { Section } from "@/component/Section";

import { AddButton } from "./AddButton";

export function ImageForm() {
  return (
    <Section title="画像" shrinkTitle>
      <div className="flex gap-x-4">
        <RecipeImage />
      </div>
      <AddButton
        onClick={() => {
          alert(
            "TODO: 最初は一枚だけで良いので、一枚画像があればこのボタンは不要。画像がなければ表示させる。",
          );
        }}
      >
        ＋ 画像を追加する
      </AddButton>
    </Section>
  );
}

function RecipeImage() {
  return (
    <div className="relative">
      <div className="aspect-square h-32 w-32 bg-tomato-3" />
      <button
        type="button"
        className="bg-tomato-solid absolute -right-1.5 -top-1.5 rounded-full p-1"
      >
        <IconX className="h-3 w-3" />
      </button>
    </div>
  );
}
