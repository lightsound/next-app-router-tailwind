import { AddButton } from "@/component/FormRecipe";
import { DraggableRecipeStepItem } from "@/component/RecipeStepItem";
import { Section } from "@/component/Section";

export function StepForm() {
  return (
    <Section title="作り方" noPadding shrinkTitle>
      <DraggableRecipeStepItem
        index={1}
        content="複数行ある場合のダミーテキスト。複数行ある場合のダミーテキスト。複数行ある場合のダミーテキスト。複数行ある場合のダミーテキスト。複数行ある場合のダミーテキスト。"
      />
      <DraggableRecipeStepItem index={2} content="1行しか無い場合のダミーテキスト。" />
      <div className="mt-1 px-4">
        <AddButton>＋ 工程を追加する</AddButton>
      </div>
    </Section>
  );
}
