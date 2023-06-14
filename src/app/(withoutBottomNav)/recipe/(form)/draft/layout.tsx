import Link from "next/link";

import { IconArrowLeft } from "@tabler/icons-react";

import { TopBar } from "@/component/TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TopBar
      left={
        <Link
          href="/recipe/new"
          className="block p-3 outline-none ring-inset focus-visible:ring-2 focus-visible:ring-mauve-7 dark:focus-visible:ring-mauvedark-7"
        >
          <IconArrowLeft stroke={1.5} className="h-5 w-5" />
        </Link>
      }
      center={<h1 className="text-mauve-dim p-3 font-bold">下書き</h1>}
      alignLeft
    >
      {children}
    </TopBar>
  );
}
