import { IconPlus } from "@tabler/icons-react";

import { IngredientItem } from "@/component/IngredientItem/IngredientItem";
import { List as ItemList } from "@/component/List";
import { Radio } from "@/component/Radio";
import { Section } from "@/component/Section";
import { TopBar } from "@/component/TopBar";

export default function List() {
  return (
    <TopBar center="買い物リスト">
      <Main />
    </TopBar>
  );
}

function Main() {
  const items = [
    { isDone: true, main: "キャベツ", sub: "5〜6枚" },
    { isDone: false, main: "キャベツ" },
    { isDone: false, main: "キャベツ", sub: "5〜6枚" },
    { isDone: true, main: "キャベツ", sub: "5〜6枚" },
    { isDone: false, main: "キャベツ", sub: "5〜6枚" },
    { isDone: true, main: "キャベツ", sub: "5〜6枚" },
  ] as const;

  return (
    <div className="space-y-12 py-5">
      <Section
        noPadding
        title="じぶんメモ"
        right={
          <button>
            <IconPlus className="h-5 w-5" />
          </button>
        }
      >
        <ItemList>
          {items.map(({ isDone, ...item }) => {
            return (
              <IngredientItem key={item.main} {...item} left={<Radio initialState={isDone} />} />
            );
          })}
        </ItemList>
      </Section>
    </div>
  );
}
