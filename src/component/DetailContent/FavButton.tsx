"use client";

import { useMemo, useState } from "react";

import { tv } from "tailwind-variants";

const button = tv({
  base: "rounded-md px-4 py-1 text-sm border",
  variants: {
    isFav: {
      true: "text-tomato-dim border-tomato-normal",
      false: "bg-tomato-solid border-transparent",
    },
  },
  defaultVariants: {
    isFav: false,
  },
});

export function FavButton({ type }: { type: "chef" | "recipe" }) {
  const [isFav, setIsFav] = useState(false);

  const { favText, noFavText } = useMemo(() => {
    return {
      favText: type === "chef" ? "フォロー中" : "お気に入りから削除",
      noFavText: type === "chef" ? "フォローする" : "お気に入りに追加",
    };
  }, [type]);

  function handleClick() {
    return setIsFav(!isFav);
  }

  return (
    <button className={button({ isFav })} onClick={handleClick}>
      {isFav ? favText : noFavText}
    </button>
  );
}
