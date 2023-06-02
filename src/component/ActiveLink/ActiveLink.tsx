"use client";

import Link, { type LinkProps } from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { cn } from "tailwind-variants";

type Props = LinkProps<string> & {
  segment: string;
  activeClassName: string;
};

export function ActiveLink({ children, className, segment, activeClassName, ...linkProps }: Props) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const isActive = selectedLayoutSegment === segment;

  return (
    <Link {...linkProps} className={cn(className, isActive ? activeClassName : null)()}>
      {children}
    </Link>
  );
}
