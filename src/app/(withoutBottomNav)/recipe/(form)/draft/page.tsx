import { type Route } from "next";
import Link, { type LinkProps } from "next/link";

export default function RecipeNew() {
  const items = [
    { href: `/recipe/new` as Route, name: "あつあつグラタン", date: "作成日時: 2023年6月10日" },
    { href: `/recipe/new` as Route, name: "レシピ名未記載", date: "作成日時: 2023年6月12日" },
  ] satisfies DraftItemProps[];

  return (
    <div>
      {items.map((item) => {
        return <DraftItem key={item.name} {...item} />;
      })}
    </div>
  );
}

type DraftItemProps = { name: string; date: string } & LinkProps<string>;

function DraftItem({ name, date, ...linkProps }: DraftItemProps) {
  return (
    <Link {...linkProps}>
      <div className="border-mauve-dim space-y-1 border-b bg-[#fff] px-4 py-2">
        <div className="text-mauve-normal leading-snug">{name}</div>
        <div className="text-mauve-dim text-sm">{date}</div>
      </div>
    </Link>
  );
}
