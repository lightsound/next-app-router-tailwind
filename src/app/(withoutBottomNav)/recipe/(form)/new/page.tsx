import { type ComponentProps } from "react";

import { IconPencil } from "@tabler/icons-react";
import { cn } from "tailwind-variants";

import { Section } from "@/component/Section";

export default function RecipeNew() {
  return (
    <div className="space-y-8 py-5">
      <Section title="レシピ名" noPadding shrinkTitle>
        <input
          type="text"
          name="name"
          placeholder="例：肉じゃが"
          className="block w-full border border-x-0 border-y-mauve-6 px-4 placeholder:text-mauve-9"
        />
      </Section>

      <Section
        titleComponent={
          <div className="flex items-center gap-x-1">
            <div>材料 / 2人前</div>
            <button type="button">
              <IconPencil className="text-tomato-dim h-5 w-5 p-px" />
            </button>
          </div>
        }
        noPadding
      >
        <input
          type="text"
          name="foo"
          className="block w-full border border-x-0 border-y-mauve-6 px-4"
        />
        <div className="mt-1 px-4">
          <Button>＋ 材料を追加する</Button>
        </div>
      </Section>

      <Section title="作り方" noPadding shrinkTitle>
        <input
          type="text"
          name="bar"
          className="block w-full border border-x-0 border-y-mauve-6 px-4"
        />
        <div className="mt-1 px-4">
          <Button>＋ 工程を追加する</Button>
        </div>
      </Section>

      <Section title="画像" shrinkTitle>
        <div className="flex gap-x-4">
          <div className="aspect-square h-32 w-32 bg-tomato-3" />
          <div className="aspect-square h-32 w-32 bg-tomato-3" />
        </div>
        <Button>＋ 画像を追加する</Button>
      </Section>

      <Section title="リンク" noPadding shrinkTitle>
        <input
          type="text"
          name="baz"
          className="block w-full border border-x-0 border-y-mauve-6 px-4"
        />
        <div className="mt-1 px-4">
          <Button>＋ リンクを追加する</Button>
        </div>
      </Section>
    </div>
  );
}

function Button({ className, ...props }: ComponentProps<"button">) {
  return <button type="button" className={cn("text-tomato-dim text-sm", className)()} {...props} />;
}
