import Link from "next/link";

import { IconArrowLeft } from "@tabler/icons-react";

import { TopBar } from "@/component/TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TopBar
      center="新規登録"
      left={
        <Link
          href="/"
          className="block p-3 outline-none ring-inset focus-visible:ring-2 focus-visible:ring-mauve-7 dark:focus-visible:ring-mauvedark-7"
        >
          <IconArrowLeft stroke={1.5} className="h-5 w-5" />
        </Link>
      }
    >
      {children}
    </TopBar>
  );
}
