"use client";

import { AddButton, InputDeletable, ServePeopleCounter } from "@/component/FormRecipe";
import { Section } from "@/component/Section";

export function IngredientForm() {
  return (
    <Section titleComponent={<ServePeopleCounter />} noPadding>
      {[1, 2, 3].map((v) => {
        return <InputDeletable key={v} name={`foo.${v}`} />;
      })}
      <div className="mt-1 px-4">
        <AddButton
          onClick={() => {
            alert("TODO: 上にinput欄を追加");
          }}
        >
          ＋ 材料を追加する
        </AddButton>
      </div>
    </Section>
  );
}
