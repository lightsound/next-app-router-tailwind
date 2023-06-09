import { MenuMyRecipe } from "@/component/DetailContent/Menu/MenuMyRecipe";

export function Menu({ type }: { type: "chef" | "recipe" | "myRecipe" }) {
  switch (type) {
    case "myRecipe": {
      return <MenuMyRecipe />;
    }
    default: {
      return null;
    }
  }
}
