"use client";

import { useCallback, useEffect, useRef, useTransition, type ChangeEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { IconLoader2, IconSearch, IconX } from "@tabler/icons-react";

import { SEARCH_QUERY_KEY } from "@/const";
import { sleep } from "@/lib/util";

import { useGetDecodedSearchParam } from "./useGetDecodedSearchParam";

export function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const { replace } = useRouter();
  const pathname = usePathname();
  const query = useGetDecodedSearchParam(SEARCH_QUERY_KEY);
  const [isPending, startTransition] = useTransition();

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      startTransition(async () => {
        await sleep(800);
        const params = new URLSearchParams(window.location.search);
        if (e.target.value) {
          params.set(SEARCH_QUERY_KEY, encodeURIComponent(e.target.value));
        } else {
          params.delete(SEARCH_QUERY_KEY);
        }
        const path = pathname === "/" ? "/search/recipe" : pathname;
        replace(`${path}?${params.toString()}` as Parameters<typeof replace>[0]);
      });
    },
    [pathname, replace]
  );

  useEffect(() => {
    if (ref.current && !query) {
      ref.current.value = "";
    }
  }, [query]);

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <IconSearch className="text-mauve-dim h-5 w-5" aria-hidden="true" />
      </div>

      <input
        type="text"
        name="search"
        defaultValue={query}
        placeholder="シェフやレシピを検索"
        autoComplete="off"
        ref={ref}
        className="text-mauve-normal w-full rounded-lg border-0 bg-mauve-3 px-10 py-1.5 text-sm font-bold leading-6 placeholder:text-mauve-dim focus:ring-2 focus:ring-inset focus:ring-mauve-7 dark:bg-mauvedark-3 dark:focus:ring-mauvedark-7"
        onChange={handleSearch}
      />

      {isPending ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
          <IconLoader2 className="text-mauve-dim h-5 w-5 animate-spin" aria-hidden="true" />
        </div>
      ) : pathname !== "/" ? (
        <Link href="/" className="absolute inset-y-0 right-0 flex items-center px-3">
          <IconX className="text-mauve-dim h-5 w-5" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
