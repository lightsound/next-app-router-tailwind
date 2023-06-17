import { IconShoppingCartPlus } from "@tabler/icons-react";

import { IngredientItem } from "@/component/IngredientItem/IngredientItem";
import { List } from "@/component/List";
import { Section } from "@/component/Section";

export default function RecipeIngredients({}: { params: { id: string } }) {
  const items = [
    { main: "キャベツ" },
    { main: "キャベツ" },
    { main: "キャベツ" },
    { main: "キャベツ" },
    { main: "キャベツ" },
    { main: "キャベツ" },
  ] as const;

  return (
    <div className="py-5">
      <Section
        title={`2人前`}
        right={
          <button className="outline-none focus-visible:ring-2 focus-visible:ring-mauve-7 dark:focus-visible:ring-mauvedark-7">
            まとめてお買い物に追加
          </button>
        }
        noPadding
      >
        <List>
          {items.map((item) => {
            return (
              <IngredientItem
                key={item.main}
                {...item}
                right={
                  <button className="bg-mauve-ghost -my-0.5 -mr-2 rounded-full p-2">
                    <IconShoppingCartPlus className="text-mauve-dim h-5 w-5" stroke={1.5} />
                  </button>
                }
              />
            );
          })}
        </List>
      </Section>
    </div>
  );
}
