"use client";

import Link, { type LinkRestProps } from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { cn } from "tailwind-variants";

type Props = {
  href: __next_route_internal_types__.RouteImpl<string>;
  segment: string;
  activeClassName: string;
} & LinkRestProps;

export function ActiveLink({ children, className, segment, activeClassName, ...linkProps }: Props) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const isActive = selectedLayoutSegment === segment;

  return (
    <Link {...linkProps} className={cn(className, isActive ? activeClassName : null)()}>
      {children}
    </Link>
  );
}
