import Link from "next/link";

import { IconSettings } from "@tabler/icons-react";

import { getUser, RequiredSignInScreen } from "@/component/Auth";
import { TopBar } from "@/component/TopBar";

import { AuthenticatedContainer } from "./_AuthenticatedContainer";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const user = await getUser();

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
      {user ? (
        <AuthenticatedContainer>{children}</AuthenticatedContainer>
      ) : (
        <RequiredSignInScreen revalidatePath="/fav" />
      )}
    </TopBar>
  );
}
