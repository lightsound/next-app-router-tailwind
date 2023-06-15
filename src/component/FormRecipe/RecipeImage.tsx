import { IconX } from "@tabler/icons-react";

export function RecipeImage() {
  return (
    <div className="relative">
      <div className="aspect-square h-32 w-32 bg-tomato-3" />
      <button
        type="button"
        className="bg-tomato-solid absolute -right-1.5 -top-1.5 rounded-full p-1"
      >
        <IconX className="h-3 w-3" />
      </button>
    </div>
  );
}
