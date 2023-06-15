"use client";

import { useState } from "react";

import { IconMinus, IconPlus } from "@tabler/icons-react";

export function ServePeopleCounter() {
  const [count, setCount] = useState(2);

  function increment() {
    return setCount((v) => {
      return v + 1;
    });
  }

  function decrement() {
    return setCount((v) => {
      return v - 1;
    });
  }

  return (
    <div className="flex items-center gap-x-2">
      <div className="w-24">材料 / {count}人前</div>
      <div className="flex items-center gap-x-2">
        <button
          type="button"
          className="bg-tomato-ui text-tomato-dim disabled:bg-mauve-subtle disabled:text-mauve-dim"
          disabled={count <= 1}
          onClick={decrement}
        >
          <IconMinus stroke={1.5} className="h-5 w-5 p-px" />
        </button>
        <button
          type="button"
          className="bg-tomato-ui text-tomato-dim disabled:bg-mauve-subtle disabled:text-mauve-dim"
          disabled={count >= 6}
          onClick={increment}
        >
          <IconPlus stroke={1.5} className="h-5 w-5 p-px" />
        </button>
      </div>
    </div>
  );
}
