import { MenuMyRecipe } from "@/component/DetailContent/Menu/MenuMyRecipe";

export function Menu({ type, ...rest }: { id: string; type: "chef" | "recipe" | "myRecipe" }) {
  switch (type) {
    case "myRecipe": {
      return <MenuMyRecipe {...rest} />;
    }
    default: {
      return null;
    }
  }
}
