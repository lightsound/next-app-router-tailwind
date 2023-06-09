import { type ComponentProps } from "react";

import { IconPlus } from "@tabler/icons-react";

import { IngredientItem } from "@/component/IngredientItem/IngredientItem";
import { List } from "@/component/List";
import { Radio } from "@/component/Radio";
import { Section } from "@/component/Section";

import { AddButton } from "./AddButton";
import { RemoveButton } from "./RemoveButton";

type Props = {
  items: (ComponentProps<typeof IngredientItem> & { isDone: boolean })[];
};

export function MyShoppingList({ items }: Props) {
  return (
    <Section
      noPadding
      title="じぶんメモ"
      right={
        <AddButton>
          <IconPlus className="h-5 w-5" />
        </AddButton>
      }
    >
      <List>
        {items.map(({ isDone, ...item }) => {
          return (
            <IngredientItem
              key={item.main}
              {...item}
              left={<Radio initialState={isDone} />}
              right={<RemoveButton>削除</RemoveButton>}
            />
          );
        })}
      </List>
    </Section>
  );
}
