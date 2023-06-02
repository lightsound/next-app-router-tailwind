import { IconShoppingCartPlus } from "@tabler/icons-react";

import { Section } from "@/component/Section";

export default function RecipeIngredients({ params }: { params: { id: string } }) {
  const items = [
    { main: "キャベツ", sub: "5〜6枚" },
    { main: "キャベツ", sub: "5〜6枚" },
    { main: "キャベツ", sub: "5〜6枚" },
    { main: "キャベツ", sub: "5〜6枚" },
    { main: "キャベツ", sub: "5〜6枚" },
    { main: "キャベツ", sub: "5〜6枚" },
  ] as const;

  return (
    <div className="py-5">
      <Section
        title={`2人前`}
        right={
          <button className="outline-none focus:ring-2 focus:ring-mauve-7 dark:focus:ring-mauvedark-7 sm:hover:underline">
            まとめてお買い物に追加
          </button>
        }
        noPadding
      >
        <hr className="border-mauve-dim" />
        {items.map((item) => {
          return (
            <div
              key={item.main}
              className="border-mauve-dim flex items-center justify-between gap-x-2 border-b px-4 py-2"
            >
              <div>
                <div className="text-mauve-normal leading-snug">{item.main}</div>
                <div className="text-mauve-dim text-sm">{item.sub}</div>
              </div>
              <button className="bg-mauve-ghost -mr-1 rounded-full p-2">
                <IconShoppingCartPlus className="text-mauve-dim h-5 w-5" stroke={1.5} />
              </button>
            </div>
          );
        })}
      </Section>
    </div>
  );
}
