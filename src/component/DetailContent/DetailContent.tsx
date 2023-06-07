import { type Route } from "next";
import Link from "next/link";

import { IconDotsVertical } from "@tabler/icons-react";

import { Tab } from "@/component/Tab";

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
          <h1 className="line-clamp-2 text-2xl font-bold">{name}</h1>
          <button className="-mr-0.5 p-1.5">
            <IconDotsVertical className="h-5 w-5" stroke={1.5} />
          </button>
        </div>

        {description ? <p>{description}</p> : null}

        <div className="flex items-center gap-x-5">
          {rest.type === "chef" ? <Count count={rest.recipeCount} suffix="レシピ" /> : null}
          <Count count={favCount} suffix={rest.type === "chef" ? "フォロワー" : "お気に入り"} />
          {rest.type === "recipe" ? <Chef id={rest.chef.id} name={rest.chef.name} /> : null}
        </div>

        <button className="bg-tomato-solid rounded-md px-4 py-1.5 text-sm">
          {rest.type === "chef" ? "フォロー" : "お気に入りに追加"}
        </button>
      </div>

      <Tab items={items} />

      {children}
    </div>
  );
}

function Count({ count, suffix }: { count: number; suffix: string }) {
  return (
    <div>
      <span className="mr-0.5 font-bold">{count.toLocaleString()}</span>
      <span>{suffix}</span>
    </div>
  );
}

function Chef({ id, name }: { id: string; name: string }) {
  return (
    <Link href={`/chef/${id}`} className="group flex items-center gap-x-1">
      <div className="h-6 w-6 rounded-full bg-tomato-3" />
      <div className="sm:group-hover:underline">{name}</div>
    </Link>
  );
}
