import Link from "next/link";

import { ScrollArea, ScrollBar } from "@/component/Scroll";
import { Section } from "@/component/Section";
import { SEARCH_QUERY_KEY } from "@/const";

type Props = { searchParams: { [SEARCH_QUERY_KEY]: string | string[] | undefined } };

export default function Discovery({ searchParams }: Props) {
  const param = searchParams[SEARCH_QUERY_KEY];
  const query = decodeURIComponent(param ? param.toString() : "");

  return <div>{query ? query : <Main />}</div>;
}

function Main() {
  return (
    <div className="space-y-12 py-5">
      <Section title="注目のシェフ">
        <ScrollArea>
          <div className="flex gap-x-4 px-4">
            {[1, 2, 3, 4, 5].map((v) => {
              return (
                <div key={v}>
                  <div className="h-60 w-40 bg-amber-4"></div>
                </div>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" className="h-0" />
        </ScrollArea>
      </Section>

      <Section
        title="話題のレシピ"
        right={
          <Link
            href="/search/recipe"
            className="outline-none focus:ring-2 focus:ring-mauve-7 dark:focus:ring-mauvedark-7 sm:hover:underline"
          >
            もっと見る
          </Link>
        }
      >
        <ScrollArea>
          <div className="flex gap-x-4 px-4">
            {[1, 2, 3, 4, 5].map((v) => {
              return (
                <div key={v}>
                  <div className="h-40 w-40 bg-amber-4"></div>
                </div>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" className="h-0" />
        </ScrollArea>
      </Section>

      <Section
        title="シェフ"
        right={
          <Link
            href="/search/chef"
            className="outline-none focus:ring-2 focus:ring-mauve-7 dark:focus:ring-mauvedark-7 sm:hover:underline"
          >
            もっと見る
          </Link>
        }
      >
        <div className="space-y-4 px-4">
          {[1, 2, 3, 4, 5].map((v) => {
            return (
              <div key={v}>
                <div className="h-36 w-24 bg-amber-4"></div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
