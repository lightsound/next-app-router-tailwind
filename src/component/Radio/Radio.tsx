"use client";

import { useReducer } from "react";

export function Radio({ initialState = false }: { initialState?: boolean }) {
  const [checked, toggle] = useReducer((state) => {
    return !state;
  }, initialState);

  async function handleChange() {
    toggle();
  }

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      className="h-6 w-6 cursor-pointer rounded-full border-2 border-tomato-9 text-mauve-8 outline-none ring-inset focus:ring-0 focus-visible:ring-1 focus-visible:ring-tomato-9 checked:focus-visible:ring-mauve-9"
    />
  );
}
