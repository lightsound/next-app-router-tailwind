import Link, { type LinkProps } from "next/link";

type RecipeCardProps = LinkProps<string> & {
  /** some props */
};

export function RecipeCard({ ...linkProps }: RecipeCardProps) {
  return (
    <Link {...linkProps} className="contents">
      <div className="aspect-square bg-tomato-3"></div>
    </Link>
  );
}
