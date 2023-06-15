import { Input } from "@/component/FormRecipe";
import { Section } from "@/component/Section";

import { ImageForm, IngredientForm, LinkForm, StepForm } from "./_component";

export default function RecipeNew() {
  return (
    <div className="space-y-8 py-5">
      <Section title="レシピ名" noPadding shrinkTitle>
        <Input name="hoge" placeholder="例：肉じゃが" />
      </Section>

      <IngredientForm />

      <StepForm />

      <ImageForm />

      <LinkForm />
    </div>
  );
}
