import Link from "next/link";

import { IconX } from "@tabler/icons-react";

import { TopBar } from "@/component/TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TopBar
      left={
        <Link
          href="/fav/my"
          className="block p-3 outline-none ring-inset focus-visible:ring-2 focus-visible:ring-mauve-7 dark:focus-visible:ring-mauvedark-7"
        >
          <IconX stroke={1.5} className="h-5 w-5" />
        </Link>
      }
      right={
        <Link
          href="/recipe/draft"
          className="text-mauve-dim p-3 font-bold ring-inset focus-visible:ring-2 focus-visible:ring-mauve-7 dark:focus-visible:ring-mauvedark-7"
        >
          下書き
        </Link>
      }
    >
      {children}
    </TopBar>
  );
}
