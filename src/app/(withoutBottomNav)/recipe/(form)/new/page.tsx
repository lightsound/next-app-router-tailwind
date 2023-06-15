import { type ComponentProps } from "react";

import { IconPencil, IconX } from "@tabler/icons-react";
import { cn } from "tailwind-variants";

import { Section } from "@/component/Section";

export default function RecipeNew() {
  return (
    <div className="space-y-8 py-5">
      <Section title="レシピ名" noPadding shrinkTitle>
        <Input name="hoge" placeholder="例：肉じゃが" />
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
        <Input name="foo" />
        <div className="mt-1 px-4">
          <Button>＋ 材料を追加する</Button>
        </div>
      </Section>

      <Section title="作り方" noPadding shrinkTitle>
        <Input name="bar" />
        <div className="mt-1 px-4">
          <Button>＋ 工程を追加する</Button>
        </div>
      </Section>

      <Section title="画像" shrinkTitle>
        <div className="flex gap-x-4">
          <RecipeImage />
        </div>
        <Button>＋ 画像を追加する</Button>
      </Section>

      <Section title="リンク" noPadding shrinkTitle>
        <Input name="baz" />
        <div className="mt-1 px-4">
          <Button>＋ リンクを追加する</Button>
        </div>
      </Section>
    </div>
  );
}

function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      type="text"
      className={cn(
        "block w-full px-4 placeholder:text-mauve-9",
        "border border-x-0 border-y-mauve-7",
        "focus:border-x-0 focus:border-y-mauve-8 focus-visible:ring-1 focus-visible:ring-mauve-8",
        "dark:bg-mauvedark-2 dark:focus:border-y-mauvedark-7 dark:focus-visible:ring-mauvedark-8",
        className
      )()}
      {...props}
    />
  );
}

function Button({ className, ...props }: ComponentProps<"button">) {
  return <button type="button" className={cn("text-tomato-dim text-sm", className)()} {...props} />;
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
