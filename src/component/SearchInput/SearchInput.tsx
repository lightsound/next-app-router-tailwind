"use client";

import { useCallback, useEffect, useRef, useTransition, type ChangeEvent } from "react";
import { type Route } from "next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { IconArrowLeft, IconLoader2, IconSearch, IconX } from "@tabler/icons-react";

import { SEARCH_QUERY_KEY } from "@/const";
import { sleep } from "@/lib/util";

import { useGetDecodedSearchParam } from "./useGetDecodedSearchParam";

export function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const { replace } = useRouter();
  const pathname = usePathname();
  const query = useGetDecodedSearchParam(SEARCH_QUERY_KEY);
  const [isPending, startTransition] = useTransition();

  const reset = useCallback(() => {
    startTransition(async () => {
      await sleep(200);
      ref.current?.focus();
      const params = new URLSearchParams(window.location.search);
      params.delete(SEARCH_QUERY_KEY);
      replace(pathname as Route);
    });
  }, [pathname, replace]);

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      startTransition(async () => {
        await sleep(1000);
        const params = new URLSearchParams(window.location.search);
        if (e.target.value) {
          params.set(SEARCH_QUERY_KEY, encodeURIComponent(e.target.value));
        } else {
          params.delete(SEARCH_QUERY_KEY);
        }
        const path = pathname === "/" ? "/search/recipe" : pathname;
        replace(`${path}?${params.toString()}` as Route);
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
    <div className="flex">
      {pathname !== "/" ? (
        <Link
          href="/"
          className="-ml-1 mr-1 flex shrink-0 items-center rounded-lg px-2 outline-none ring-inset focus-visible:ring-2 focus-visible:ring-mauve-7 dark:focus-visible:ring-mauvedark-7"
        >
          <IconArrowLeft className="text-mauve-dim h-5 w-5" aria-hidden="true" />
        </Link>
      ) : null}

      <div className="relative flex-1">
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
          className="text-mauve-normal w-full rounded-lg border-0 bg-mauve-3 px-10 py-1.5 text-sm font-bold leading-6 placeholder:text-mauve-dim focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-mauve-7 dark:bg-mauvedark-3 dark:focus-visible:ring-mauvedark-7"
          onChange={handleSearch}
        />

        {isPending ? (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
            <IconLoader2 className="text-mauve-dim h-5 w-5 animate-spin" aria-hidden="true" />
          </div>
        ) : query ? (
          <button
            className="absolute inset-y-0 right-0 flex items-center rounded-lg px-3 outline-none ring-inset focus-visible:ring-2 focus-visible:ring-mauve-7 dark:focus-visible:ring-mauvedark-7"
            onClick={reset}
          >
            <IconX className="text-mauve-dim h-5 w-5" aria-hidden="true" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
