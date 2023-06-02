import Link, { type LinkProps } from "next/link";

type ChefSmallRoundedCardProps = LinkProps<string> & {
  /** some props */
};

export function ChefSmallRoundedCard({ ...linkProps }: ChefSmallRoundedCardProps) {
  return (
    <Link {...linkProps} className="h-20 w-20 overflow-hidden rounded-full">
      <div className="h-full w-full bg-tomato-3"></div>
    </Link>
  );
}
