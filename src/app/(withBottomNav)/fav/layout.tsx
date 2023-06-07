import { type Route } from "next";
import Link from "next/link";

import { IconSettings } from "@tabler/icons-react";

import { ChefSmallRoundedCard } from "@/component/ChefCard";
import { ScrollArea, ScrollBar } from "@/component/Scroll";
import { Section } from "@/component/Section";
import { TopBar } from "@/component/TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TopBar
      center="お気に入り"
      right={
        <Link
          href="/settings"
          className="block p-3 outline-none ring-inset focus-visible:ring-2 focus-visible:ring-mauve-7 dark:focus-visible:ring-mauvedark-7"
        >
          <IconSettings stroke={1.5} className="h-5 w-5" />
        </Link>
      }
    >
      <div className="space-y-12 py-5">
        <Section noPadding title="シェフ">
          <ScrollArea>
            <div className="flex gap-x-4 px-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => {
                return <ChefSmallRoundedCard key={v} href={`/chef/${v}` as Route} />;
              })}
            </div>
            <ScrollBar orientation="horizontal" className="h-0" />
          </ScrollArea>
        </Section>

        {children}
      </div>
    </TopBar>
  );
}
