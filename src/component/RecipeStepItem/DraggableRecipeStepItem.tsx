"use client";

import { IconGripVertical } from "@tabler/icons-react";

import { RecipeStepItem, type RecipeStepItemProps } from "./RecipeStepItem";

export function DraggableRecipeStepItem({ ...props }: Omit<RecipeStepItemProps, "right">) {
  return (
    <RecipeStepItem
      {...props}
      right={
        <button
          type="button"
          className="-mr-0.5 cursor-grab p-0.5"
          onClick={() => {
            alert("TODO: 並び替え");
          }}
        >
          <IconGripVertical stroke={1.5} className="text-mauve-dim h-4 w-4" />
        </button>
      }
    />
  );
}
