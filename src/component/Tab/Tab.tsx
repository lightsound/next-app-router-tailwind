"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { cn } from "tailwind-variants";

type Props = { items: LinkProps<string>[] };

export function Tab({ items }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  return (
    <div className="border-mauve-dim border-b">
      <nav className="-mb-px flex" aria-label="Tabs">
        {items.map(({ className, href, ...rest }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href.toString()}
              href={`${href}?${query}` as LinkProps<string>["href"]}
              {...rest}
              shallow
              className={cn(
                "text-mauve-normal flex-1 border-b-2 py-2 text-center",
                isActive
                  ? "border-mauve-12 font-bold dark:border-mauvedark-12"
                  : "border-transparent",
                className
              )()}
            />
          );
        })}
      </nav>
    </div>
  );
}
