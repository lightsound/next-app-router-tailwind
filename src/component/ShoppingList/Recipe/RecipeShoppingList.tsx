import { type ComponentProps } from "react";

import { IngredientItem } from "@/component/IngredientItem/IngredientItem";
import { List } from "@/component/List";
import { Radio } from "@/component/Radio";
import { Section } from "@/component/Section";

import { Menu } from "./Menu";

type Props = {
  items: (ComponentProps<typeof IngredientItem> & { isDone: boolean })[];
};

export function RecipeShoppingList({ items }: Props) {
  return (
    <Section noPadding title="グラタン" right={<Menu id="1" />}>
      <List>
        {items.map(({ isDone, ...item }) => {
          return (
            <IngredientItem key={item.main} {...item} left={<Radio initialState={isDone} />} />
          );
        })}
      </List>
    </Section>
  );
}
