import { type Route } from "next";
import Link from "next/link";

import { Tab } from "@/component/Tab";

import { FavButton } from "./FavButton";
import { Menu } from "./Menu";

type CommonProps = {
  children: React.ReactNode;
  id: string;
  name: string;
  description: string;
  favCount: number;
};

type ChefProps = CommonProps & {
  type: "chef";
  recipeCount: number;
};

type RecipeProps = CommonProps & {
  type: "recipe";
  chef: { id: string; name: string };
};

type DetailContentProps = ChefProps | RecipeProps;

export function DetailContent({
  children,
  id,
  name,
  description,
  favCount,
  ...rest
}: DetailContentProps) {
  const isMyRecipe = id === "2";

  const items =
    rest.type === "chef"
      ? [
          { children: "レシピ", href: `/chef/${id}` as Route },
          { children: "リンク", href: `/chef/${id}/link` as Route },
        ]
      : [
          { children: "作り方", href: `/recipe/${id}` as Route },
          { children: "材料", href: `/recipe/${id}/ingredients` as Route },
        ];

  return (
    <div>
      <div className="aspect-square bg-tomato-3" />

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-x-1">
          <h1 className="line-clamp-2 text-xl font-bold">{name}</h1>
          <Menu type={isMyRecipe ? "myRecipe" : rest.type} id={id} />
        </div>

        {description ? <p>{description}</p> : null}

        <div className="flex items-center gap-x-4">
          {rest.type === "chef" ? <Count count={rest.recipeCount} suffix="レシピ" /> : null}
          {rest.type === "recipe" ? <Chef id={rest.chef.id} name={rest.chef.name} /> : null}
          <Count count={favCount} suffix={rest.type === "chef" ? "フォロワー" : "お気に入り"} />
        </div>

        {isMyRecipe ? null : <FavButton type={rest.type} />}
      </div>

      <Tab items={items} />

      {children}
    </div>
  );
}

function Count({ count, suffix }: { count: number; suffix: string }) {
  return (
    <div className="text-sm">
      <span className="mr-0.5 font-bold">{count.toLocaleString()}</span>
      <span>{suffix}</span>
    </div>
  );
}

function Chef({ id, name }: { id: string; name: string }) {
  const isMyRecipe = id === "2";

  if (isMyRecipe) {
    return (
      <Link
        href="/fav/my"
        className="border-tomato-dim rounded border bg-tomato-2 px-2 text-xs text-tomato-11 dark:bg-tomatodark-2 dark:text-tomatodark-11"
      >
        マイレシピ
      </Link>
    );
  }

  return (
    <Link href={`/chef/${id}`} className="group flex items-center gap-x-1 text-sm">
      <div className="h-5 w-5 rounded-full bg-tomato-5" />
      <div className="sm:group-hover:underline">{name}</div>
    </Link>
  );
}
