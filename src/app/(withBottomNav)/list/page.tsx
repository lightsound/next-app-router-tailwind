import { MyShoppingList, RecipeShoppingList } from "@/component/ShoppingList";

export default function ListAuthenticated() {
  const items = [
    { isDone: true, main: "キャベツ" },
    { isDone: false, main: "キャベツ" },
    { isDone: false, main: "キャベツ" },
    { isDone: true, main: "キャベツ" },
  ];

  return (
    <div className="space-y-12 py-5">
      <MyShoppingList items={items} />
      <RecipeShoppingList items={items} />
    </div>
  );
}
