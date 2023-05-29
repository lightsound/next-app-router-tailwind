"use client";

import { useCallback, useMemo, useRef, useTransition, type ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { IconLoader2, IconSearch, IconX } from "@tabler/icons-react";

import { SEARCH_QUERY_KEY, sleep } from "./util";

export function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const params = useMemo(() => {
    return new URLSearchParams(window.location.search);
  }, []);

  const resetSearch = useCallback(() => {
    params.delete(SEARCH_QUERY_KEY);
    startTransition(async () => {
      if (ref.current) {
        ref.current.value = "";
      }
      await sleep(400);
      replace(pathname as Parameters<typeof replace>[0]);
    });
  }, [params, pathname, replace]);

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.value) {
        return resetSearch();
      }

      params.set(SEARCH_QUERY_KEY, e.target.value);
      startTransition(async () => {
        await sleep(800);
        replace(`${pathname}?${params.toString()}` as Parameters<typeof replace>[0]);
      });
    },
    [params, pathname, replace, resetSearch]
  );

  const result = searchParams.get(SEARCH_QUERY_KEY) ?? "";

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <IconSearch className="text-mauve-dim h-5 w-5" aria-hidden="true" />
      </div>

      <input
        type="text"
        name="search"
        defaultValue={result}
        placeholder="シェフやレシピを検索"
        autoComplete="off"
        ref={ref}
        className="text-mauve-normal w-full rounded-lg border-0 bg-mauve-3 px-10 py-1 text-sm font-bold leading-6 placeholder:text-mauve-dim focus:ring-2 focus:ring-inset focus:ring-mauve-7 dark:bg-mauvedark-3 dark:focus:ring-mauvedark-7"
        onChange={handleSearch}
      />

      {isPending ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
          <IconLoader2 className="text-mauve-dim h-4 w-4 animate-spin" aria-hidden="true" />
        </div>
      ) : result ? (
        <button className="absolute inset-y-0 right-0 flex items-center px-3" onClick={resetSearch}>
          <IconX className="text-mauve-dim h-4 w-4" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}
