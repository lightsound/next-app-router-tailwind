"use client";

import { InputDeletable } from "@/component/FormRecipe";
import { Section } from "@/component/Section";

import { AddButton } from "./AddButton";

export function LinkForm() {
  return (
    <Section title="リンク" noPadding shrinkTitle>
      <InputDeletable name="baz" />
      <div className="mt-1 px-4">
        <AddButton
          onClick={() => {
            alert("TODO: 上にinput欄を追加");
          }}
        >
          ＋ リンクを追加する
        </AddButton>
      </div>
    </Section>
  );
}
