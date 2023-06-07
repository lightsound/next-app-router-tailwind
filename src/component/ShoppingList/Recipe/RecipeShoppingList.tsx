import { type ComponentProps } from "react";

import { IconPlus } from "@tabler/icons-react";

import { IngredientItem } from "@/component/IngredientItem/IngredientItem";
import { List } from "@/component/List";
import { Radio } from "@/component/Radio";
import { Section } from "@/component/Section";

type Props = {
  items: (ComponentProps<typeof IngredientItem> & { isDone: boolean })[];
};

export function RecipeShoppingList({ items }: Props) {
  return (
    <Section
      noPadding
      title="じぶんメモ"
      right={
        <button>
          <IconPlus className="h-5 w-5" />
        </button>
      }
    >
      <List>
        {items.map(({ isDone, ...item }) => {
          return (
            <IngredientItem
              key={item.main}
              {...item}
              left={<Radio initialState={isDone} />}
              right={
                <button className="text-tomato-dim -mr-1 px-1 py-0.5 text-sm sm:hover:underline">
                  削除
                </button>
              }
            />
          );
        })}
      </List>
    </Section>
  );
}
