import { MyShoppingList, RecipeShoppingList } from "@/component/ShoppingList";

export default function List() {
  const items = [
    { isDone: true, main: "キャベツ", sub: "5〜6枚" },
    { isDone: false, main: "キャベツ" },
    { isDone: false, main: "キャベツ", sub: "5〜6枚" },
    { isDone: true, main: "キャベツ", sub: "5〜6枚" },
  ];

  return (
    <div className="space-y-12 py-5">
      <MyShoppingList items={items} />
      <RecipeShoppingList items={items} />
    </div>
  );
}
