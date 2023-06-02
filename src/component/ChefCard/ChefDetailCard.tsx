import Link, { type LinkProps } from "next/link";

type ChefDetailCardProps = LinkProps<string> & {
  /** some props */
};

export function ChefDetailCard({ ...linkProps }: ChefDetailCardProps) {
  return (
    <Link {...linkProps} className="block">
      <div className="h-36 w-24 bg-tomato-3"></div>
    </Link>
  );
}
