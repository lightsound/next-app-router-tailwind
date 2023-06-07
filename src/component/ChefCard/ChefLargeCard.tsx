import Link, { type LinkProps } from "next/link";

type ChefLargeCardProps = LinkProps<string> & {
  /** some props */
};

export function ChefLargeCard({ ...linkProps }: ChefLargeCardProps) {
  return (
    <Link {...linkProps}>
      <div className="h-52 w-40 bg-tomato-3"></div>
    </Link>
  );
}
